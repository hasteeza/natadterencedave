import { LuGoal, LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi"; // for Email
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub, IoLogoInstagram } from "react-icons/io";
import { RiContactsBook3Line, RiMessengerLine } from "react-icons/ri";
import { MdArrowRightAlt, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiOutlineLink } from "react-icons/hi"; // <-- replace non-existent HiOutlineLinkSlash

export const personalSections = [
  {
    title: "Goals",
    icon: LuGoal,
    items: [
      "I aim to grow in the IT industry by building a strong foundation in modern technologies and gaining real-world experience through meaningful projects.",
      "I am focused on improving my technical and problem-solving skills through consistent practice, learning, and hands-on development.",
    ],
  },
  {
    title: "Social Links",
    icon: HiOutlineLink, // <-- fixed here
    links: [
      {
        icon: CiLinkedin,
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/terence-dave-natad-952b3b359/",
      },
      {
        icon: IoLogoGithub,
        label: "GitHub",
        url: "https://github.com/hasteeza",
      },
      {
        icon: IoLogoInstagram,
        label: "Instagram",
        url: "https://www.instagram.com/daevious404/",
      },
    ],
  },
  {
    title: "Contact",
    icon: RiContactsBook3Line,
    text: "Actively seeking opportunities in the IT industry to apply my technical skills, learn from real-world projects, and build a strong professional career.",
    buttonText: "Get in Touch",
    buttonIcon: MdArrowRightAlt,
  },
  {
    title: "Misc",
    gridLinks: [
      {
        icon: HiOutlineMail,
        label: "Email",
        info: "natadterencedave@gmail.com",
        url: "mailto:natadterencedave@gmail.com",
      },
      {
        icon: LuPhone,
        label: "Let's Talk",
        info: "9657-365-643",
        url: "",
      },
    ],
  },
];
