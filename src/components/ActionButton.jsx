export function ActionButton({ icon: Icon, label, theme }) {
  const isScheduleCall = label === "Schedule a Call";
  return (
    <a
      href="#"
      aria-label={label}
      className={`inline-flex items-center gap-2 rounded-lg px-2.5 py-2
        text-[8px] md:text-xs font-medium transition-all duration-200
        border focus:outline-none focus:ring-2 focus:ring-blue-500 hover:-translate-y-1 hover:shadow-lg
        ${
          isScheduleCall
            ? theme === "dark"
              ? "bg-white text-black border-white"
              : "bg-black text-white border-black"
            : theme === "dark"
            ? "border-neutral-700 text-white hover:bg-neutral-800"
            : "border-neutral-300 text-black hover:bg-neutral-100"
        }`}
    >
      <Icon className="w-4 h-4 hidden sm:flex" />
      {label}
    </a>
  );
}
