export function BentoCard({ theme, children, className = "" }) {
  return (
    <div

      className={`relative overflow-hidden${
        theme === "dark"
          ? "border-[#222222] bg-[#111111]"
          : "border-[#EAEAEA] bg-[#FAFAFA] shadow-sm md:shadow-md"

      } p-3 md:p-4 ${className}`}
    >
      {/* Slot */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
