export function ActionButton({ icon: Icon, label, theme }) {
  const isScheduleCall = label === "Schedule a Call";
  const isSendEmail = label === "Send Email";
  const isDownloadResume = label === "Download Resume";

  let href = "";
  let target = "";
  let download = "";

  if (isScheduleCall) {
    href = "https://calendly.com/natadterencedave";
    target = "_blank";
  } else if (isSendEmail) {
    href = "mailto:natadterencedave@gmail.com";
  } else if (isDownloadResume) {
    href = "/Terence_Dave_R._Natad_Resume.pdf";
    download = "Terence_Dave_Natad_Resume.pdf";
  }

  return (
    <a
      href={href}
      target={target}
      download={download}
      aria-label={label}
      className={`inline-flex items-center gap-2 rounded-lg px-2.5 py-2
        text-[8px] md:text-xs font-medium transition-all duration-200
        text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 hover:-translate-y-1 hover:shadow-lg hover:bg-foreground/5
        ${
          isScheduleCall
            ? theme === "dark"
              ? "bg-white text-black border-white"
              : "bg-black text-white border-black"
            : theme === "dark"
            ? "border border-[#111111]"
            : "border border-[#EAEAEA]"
        }
      `}
    >
      <Icon className="w-4 h-4 hidden sm:flex" />
      {label}
    </a>
  );
}
