export function BentoCard({ theme, children, className = "" }) {
  return (
    <div
<<<<<<< HEAD
      className={`relative overflow-hidden ${
        theme === "dark"
          ? "border-[#222222] bg-[#111111]"
          : "border-[#EAEAEA] bg-[#FAFAFA] shadow-md"
=======
      className={`relative overflow-hidden rounded-xl border ${
        theme === "dark"
          ? "border-[#222222] bg-[#111111]"
          : "border-[#EAEAEA] bg-[#FAFAFA]"
>>>>>>> 5e12ddbbce4cc12a524e274adbfa51c300735d1a
      } p-4 ${className}`}
    >
      {/* Slot */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
