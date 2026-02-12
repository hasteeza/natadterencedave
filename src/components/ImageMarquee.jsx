const ImageMarquee = ({
  images = [],
  speed = 35,
  imageClassName = "",
  containerClassName = "",
}) => {
  return (
    <div
      className={`relative overflow-hidden w-full group ${containerClassName}`}
    >
      {/* Gradient fades */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

      {/* Marquee */}
      <div
        className="flex w-max gap-4 animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt="gallery"
            className={`h-40 w-auto rounded-xl object-cover transition-transform duration-300 ${imageClassName}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;
