import { useCallback, useEffect, useMemo, useRef, useState, memo } from "react";

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.15, // Reduced for snappier response
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
};

const toCssLength = (value) =>
  typeof value === "number" ? `${value}px` : value ?? undefined;

const cx = (...parts) => parts.filter(Boolean).join(" ");

const useResizeObserver = (callback, elements, dependencies) => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callbackRef.current();
      window.addEventListener("resize", handleResize);
      callbackRef.current();
      return () => window.removeEventListener("resize", handleResize);
    }

    const observers = elements.map((ref) => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(() => callbackRef.current());
      observer.observe(ref.current);
      return observer;
    });

    callbackRef.current();
    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [elements, ...dependencies]);
};

const useImageLoader = (seqRef, onLoad, dependencies) => {
  const onLoadRef = useRef(onLoad);
  onLoadRef.current = onLoad;

  useEffect(() => {
    const images = seqRef.current?.querySelectorAll("img") ?? [];

    if (images.length === 0) {
      onLoadRef.current();
      return;
    }

    let remainingImages = images.length;
    const handleImageLoad = () => {
      remainingImages -= 1;
      if (remainingImages === 0) {
        onLoadRef.current();
      }
    };

    images.forEach((img) => {
      const htmlImg = img;
      if (htmlImg.complete) {
        handleImageLoad();
      } else {
        htmlImg.addEventListener("load", handleImageLoad, { once: true });
        htmlImg.addEventListener("error", handleImageLoad, { once: true });
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
        img.removeEventListener("error", handleImageLoad);
      });
    };
  }, [seqRef, ...dependencies]);
};

const useAnimationLoop = (
  trackRef,
  targetVelocity,
  seqWidth,
  seqHeight,
  isVertical
) => {
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(targetVelocity); // Start at target velocity
  const targetVelocityRef = useRef(targetVelocity);

  targetVelocityRef.current = targetVelocity;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const seqSize = isVertical ? seqHeight : seqWidth;

    if (prefersReduced) {
      track.style.transform = isVertical
        ? "translate3d(0, 0, 0)"
        : "translate3d(0, 0, 0)";
      return () => {
        lastTimestampRef.current = null;
      };
    }

    // Reset velocity to target when size changes to avoid jumps
    if (seqSize > 0) {
      offsetRef.current = ((offsetRef.current % seqSize) + seqSize) % seqSize;
      velocityRef.current = targetVelocityRef.current;
    }

    const animate = (timestamp) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime = Math.min(
        (timestamp - lastTimestampRef.current) / 1000,
        0.05 // Reduced cap for smoother animation
      );
      lastTimestampRef.current = timestamp;

      // Smoother easing
      const easingFactor =
        1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current +=
        (targetVelocityRef.current - velocityRef.current) * easingFactor;

      if (seqSize > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqSize) + seqSize) % seqSize;
        offsetRef.current = nextOffset;

        // Use transform with rounding to avoid sub-pixel rendering issues
        const roundedOffset = Math.round(offsetRef.current * 100) / 100;
        const transformValue = isVertical
          ? `translate3d(0, ${-roundedOffset}px, 0)`
          : `translate3d(${-roundedOffset}px, 0, 0)`;
        track.style.transform = transformValue;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = null;
    };
  }, [seqWidth, seqHeight, isVertical, trackRef]);
};

const LogoItem = memo(({ item, itemKey, isVertical, renderItem, color }) => {
  if (renderItem) {
    return (
      <li
        className={cx(
          "flex-none",
          isVertical ? "mb-[var(--logoloop-gap)]" : "mr-[var(--logoloop-gap)]"
        )}
        style={{ fontSize: "var(--logoloop-logoHeight)", lineHeight: 1 }}
        role="listitem"
      >
        {renderItem(item, itemKey)}
      </li>
    );
  }

  const isNodeItem = "node" in item;
  const itemColor = item.color || color;

  const content = isNodeItem ? (
    <span
      className="inline-flex items-center"
      aria-hidden={!!item.href && !item.ariaLabel}
      style={{ color: itemColor }}
    >
      {item.node}
    </span>
  ) : (
    <img
      style={{
        height: "var(--logoloop-logoHeight)",
        width: "auto",
        display: "block",
        objectFit: "contain",
        WebkitUserDrag: "none",
        pointerEvents: "none",
        imageRendering: "-webkit-optimize-contrast",
      }}
      src={item.src || "/placeholder.svg"}
      srcSet={item.srcSet}
      sizes={item.sizes}
      width={item.width}
      height={item.height}
      alt={item.alt ?? ""}
      title={item.title}
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  );

  const itemAriaLabel = isNodeItem
    ? item.ariaLabel ?? item.title
    : item.alt ?? item.title;

  const inner = item.href ? (
    <a
      className="inline-flex items-center"
      style={{
        textDecoration: "none",
        transition: "opacity 200ms linear",
      }}
      href={item.href}
      aria-label={itemAriaLabel || "logo link"}
      target="_blank"
      rel="noreferrer noopener"
    >
      {content}
    </a>
  ) : (
    content
  );

  return (
    <li
      className={cx(
        "flex-none",
        isVertical ? "mb-[var(--logoloop-gap)]" : "mr-[var(--logoloop-gap)]"
      )}
      style={{ fontSize: "var(--logoloop-logoHeight)", lineHeight: 1 }}
      role="listitem"
    >
      {inner}
    </li>
  );
});

LogoItem.displayName = "LogoItem";

export const LogoLoop = memo(
  ({
    logos,
    speed = 40,
    direction = "left",
    width = "100%",
    logoHeight = 28,
    gap = 32,
    fadeOut = false,
    fadeOutColor,
    renderItem,
    ariaLabel = "Partner logos",
    className,
    style,
    color,
  }) => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const seqRef = useRef(null);

    const [seqWidth, setSeqWidth] = useState(0);
    const [seqHeight, setSeqHeight] = useState(0);
    const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);

    const isVertical = direction === "up" || direction === "down";

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      let directionMultiplier;
      if (isVertical) {
        directionMultiplier = direction === "up" ? 1 : -1;
      } else {
        directionMultiplier = direction === "left" ? 1 : -1;
      }
      const speedMultiplier = speed < 0 ? -1 : 1;
      return magnitude * directionMultiplier * speedMultiplier;
    }, [speed, direction, isVertical]);

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const sequenceRect = seqRef.current?.getBoundingClientRect?.();
      const sequenceWidth = sequenceRect?.width ?? 0;
      const sequenceHeight = sequenceRect?.height ?? 0;

      if (isVertical) {
        const parentHeight =
          containerRef.current?.parentElement?.clientHeight ?? 0;
        if (containerRef.current && parentHeight > 0) {
          const targetHeight = Math.ceil(parentHeight);
          if (containerRef.current.style.height !== `${targetHeight}px`)
            containerRef.current.style.height = `${targetHeight}px`;
        }
        if (sequenceHeight > 0) {
          const newSeqHeight = Math.ceil(sequenceHeight);
          if (seqHeight !== newSeqHeight) {
            setSeqHeight(newSeqHeight);
          }
          const viewport =
            containerRef.current?.clientHeight ??
            parentHeight ??
            sequenceHeight;
          const copiesNeeded =
            Math.ceil(viewport / sequenceHeight) +
            ANIMATION_CONFIG.COPY_HEADROOM;
          const newCopyCount = Math.max(
            ANIMATION_CONFIG.MIN_COPIES,
            copiesNeeded
          );
          if (copyCount !== newCopyCount) {
            setCopyCount(newCopyCount);
          }
        }
      } else if (sequenceWidth > 0) {
        const newSeqWidth = Math.ceil(sequenceWidth);
        if (seqWidth !== newSeqWidth) {
          setSeqWidth(newSeqWidth);
        }
        const copiesNeeded =
          Math.ceil(containerWidth / sequenceWidth) +
          ANIMATION_CONFIG.COPY_HEADROOM;
        const newCopyCount = Math.max(
          ANIMATION_CONFIG.MIN_COPIES,
          copiesNeeded
        );
        if (copyCount !== newCopyCount) {
          setCopyCount(newCopyCount);
        }
      }
    }, [isVertical, seqWidth, seqHeight, copyCount]);

    const resizeObserverElements = useMemo(() => [containerRef, seqRef], []);

    useResizeObserver(updateDimensions, resizeObserverElements, [
      logos.length,
      gap,
      logoHeight,
      isVertical,
    ]);

    useImageLoader(seqRef, updateDimensions, [
      logos.length,
      gap,
      logoHeight,
      isVertical,
    ]);

    useAnimationLoop(trackRef, targetVelocity, seqWidth, seqHeight, isVertical);

    const cssVariables = useMemo(
      () => ({
        "--logoloop-gap": `${gap}px`,
        ...(logoHeight !== 28 && {
          "--logoloop-logoHeight": `${logoHeight}px`,
        }),
        ...(fadeOutColor && { "--logoloop-fadeColor": fadeOutColor }),
      }),
      [gap, logoHeight, fadeOutColor]
    );

    const rootClasses = useMemo(
      () =>
        cx(
          "relative",
          isVertical
            ? "overflow-hidden h-full inline-block"
            : "overflow-x-hidden",
          className
        ),
      [isVertical, className]
    );

    const logoLists = useMemo(
      () =>
        Array.from({ length: copyCount }, (_, copyIndex) => (
          <ul
            className={cx("flex items-center", isVertical && "flex-col")}
            style={{ margin: 0, padding: 0, listStyle: "none" }}
            key={`copy-${copyIndex}`}
            role="list"
            aria-hidden={copyIndex > 0}
            ref={copyIndex === 0 ? seqRef : undefined}
          >
            {logos.map((item, itemIndex) => (
              <LogoItem
                key={`${copyIndex}-${itemIndex}`}
                item={item}
                itemKey={`${copyIndex}-${itemIndex}`}
                isVertical={isVertical}
                renderItem={renderItem}
                color={color}
              />
            ))}
          </ul>
        )),
      [copyCount, logos, isVertical, renderItem, color]
    );

    const containerStyle = useMemo(
      () => ({
        width: isVertical
          ? toCssLength(width) === "100%"
            ? undefined
            : toCssLength(width)
          : toCssLength(width) ?? "100%",
        ...cssVariables,
        ...style,
      }),
      [width, cssVariables, style, isVertical]
    );

    const fadeGradientStyle = {
      pointerEvents: "none",
      position: "absolute",
      zIndex: 10,
    };

    return (
      <div
        ref={containerRef}
        className={rootClasses}
        style={containerStyle}
        role="region"
        aria-label={ariaLabel}
      >
        {fadeOut && (
          <>
            {isVertical ? (
              <>
                <div
                  aria-hidden
                  style={{
                    ...fadeGradientStyle,
                    inset: "0 0 auto 0",
                    height: "clamp(24px, 8%, 120px)",
                    background:
                      "linear-gradient(to bottom, var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%, rgba(0,0,0,0) 100%)",
                  }}
                />
                <div
                  aria-hidden
                  style={{
                    ...fadeGradientStyle,
                    inset: "auto 0 0 0",
                    height: "clamp(24px, 8%, 120px)",
                    background:
                      "linear-gradient(to top, var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%, rgba(0,0,0,0) 100%)",
                  }}
                />
              </>
            ) : (
              <>
                <div
                  aria-hidden
                  style={{
                    ...fadeGradientStyle,
                    inset: "0 auto 0 0",
                    width: "clamp(24px, 8%, 120px)",
                    background:
                      "linear-gradient(to right, var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%, rgba(0,0,0,0) 100%)",
                  }}
                />
                <div
                  aria-hidden
                  style={{
                    ...fadeGradientStyle,
                    inset: "0 0 0 auto",
                    width: "clamp(24px, 8%, 120px)",
                    background:
                      "linear-gradient(to left, var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%, rgba(0,0,0,0) 100%)",
                  }}
                />
              </>
            )}
          </>
        )}

        <div
          className={cx("flex select-none relative")}
          style={{
            willChange: "transform",
            zIndex: 0,
            flexDirection: isVertical ? "column" : "row",
            height: isVertical ? "max-content" : undefined,
            width: isVertical ? "100%" : "max-content",
          }}
          ref={trackRef}
        >
          {logoLists}
        </div>
      </div>
    );
  }
);

LogoLoop.displayName = "LogoLoop";

export default LogoLoop;
