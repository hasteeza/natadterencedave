export function BentoCard({ theme, children, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border p-4
        ${
          theme === "dark"
            ? "border-[#222222] bg-[#111111]"
            : "border-[#EAEAEA] bg-neutral-50"
        }
        ${className}`}
    >
      {/* Slot */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
