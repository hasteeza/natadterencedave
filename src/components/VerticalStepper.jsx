export default function VerticalStepper({
  steps = [],
  activeIndex = 0,
  theme,
}) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div
        className={`absolute left-[10px] top-0 h-full w-px ${
          theme === "dark" ? "bg-white/20" : "bg-black/20"
        }`}
      />

      <div className="space-y-8">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;

          return (
            <div key={index} className="relative">
              {/* Step Dot */}
              <div
                className={`absolute left-[11px] top-0 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 transition-colors ${
                  isActive
                    ? theme === "dark"
                      ? "bg-white border-white"
                      : "bg-black border-black"
                    : theme === "dark"
                    ? "bg-[#111111] border-[#222222] hover:bg-white hover:border-white"
                    : "bg-white border-[#EAEAEA] hover:bg-black hover:border-black"
                }`}
              />

              {/* Step Content */}
              <div className="ml-8">
                <h3 className="font-semibold text-sm leading-none text-foreground">
                  {step.title}
                </h3>

                <div className="mt-1 flex items-center justify-between">
                  {step.subtitle && (
                    <p className="text-xs text-foreground/70">
                      {step.subtitle}
                    </p>
                  )}

                  {step.year && (
                    <span className="rounded-full border border-foreground/20 px-2 py-0.5 text-[10px] font-medium font-mono text-foreground">
                      {step.year}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
