export default function VerticalStepper({
  steps = [],
  activeIndex = 0,
  theme,
}) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div
        className={`absolute left-[11px] top-0 h-full w-px ${
          theme === "light" ? "bg-[#EAEAEA]" : "bg-[#222222]"
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
                    ? theme === "light"
                      ? "bg-black border-black"
                      : "bg-white border-white"
                    : theme === "light"
                    ? "bg-white border-gray-400 hover:bg-black hover:border-black"
                    : "bg-black border-[#222222] hover:bg-white"
                }`}
              />

              {/* Step Content */}
              <div className="ml-8">
                <h3
                  className={`font-semibold text-sm leading-none ${
                    theme === "light" ? "text-black" : "text-white"
                  }`}
                >
                  {step.title}
                </h3>

                <div className="mt-1 flex items-center justify-between">
                  {step.subtitle && (
                    <p
                      className={`text-xs ${
                        theme === "light" ? "text-black" : "text-[#FFFFFF]"
                      }`}
                    >
                      {step.subtitle}
                    </p>
                  )}

                  {step.year && (
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${
                        theme === "light"
                          ? "border-[#EAEAEA]  text-black"
                          : "border-[#222222]  text-white"
                      }`}
                    >
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
