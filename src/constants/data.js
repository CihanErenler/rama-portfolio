import img from "../assets/p-img.jpg";
import { RiCodeSSlashLine, RiComputerLine } from "react-icons/ri";
import { BsHddStack, BsCpu } from "react-icons/bs";
import { FiDatabase } from "react-icons/fi";
import { SiProbot } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Vaalikone App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, quisque bibendum quisque . Sit nunc nulla congue pellentesque aliquam mauris. ",
    git: "https://github.com/CihanErenler/vaalikone",
    image: img,
    preview: "https://www.cihanerenler.com/",
    bg: "normal",
  },
  {
    id: 2,
    title: "Vaalikone App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, quisque bibendum quisque . Sit nunc nulla congue pellentesque aliquam mauris. ",
    git: "https://github.com/CihanErenler/vaalikone",
    image: img,
    preview: "https://www.cihanerenler.com/",
    bg: "normal",
  },
  {
    id: 3,
    title: "Vaalikone App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, quisque bibendum quisque . Sit nunc nulla congue pellentesque aliquam mauris. ",
    git: "https://github.com/CihanErenler/vaalikone",
    image: img,
    // preview: "https://www.cihanerenler.com/",
    bg: "light",
  },
  {
    id: 4,
    title: "Vaalikone App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, quisque bibendum quisque . Sit nunc nulla congue pellentesque aliquam mauris. ",
    git: "https://github.com/CihanErenler/vaalikone",
    image: img,
    preview: "https://www.cihanerenler.com/",
    bg: "light",
  },
];

const skills = [
  {
    id: 1,
    title: "Coding with...",
    tags: ["Javascript", "Python", "Bash", "HTML", "CSS"],
    icon: <RiCodeSSlashLine />,
  },
  {
    id: 2,
    title: "Coding with...",
    tags: ["Javascript", "Python", "Bash", "HTML", "CSS"],
    icon: <RiComputerLine />,
  },
  {
    id: 3,
    title: "Coding with...",
    tags: ["Javascript", "Python", "Bash", "HTML", "CSS"],
    icon: <BsHddStack />,
  },
  {
    id: 4,
    title: "Coding with...",
    tags: ["Javascript", "Python", "Bash", "HTML", "CSS"],
    icon: <BsCpu />,
  },
  {
    id: 5,
    title: "Coding with...",
    tags: ["Javascript", "Python", "Bash", "HTML", "CSS"],
    icon: <FiDatabase />,
  },
  {
    id: 6,
    title: "Coding with...",
    tags: ["Javascript", "Python", "Bash", "HTML", "CSS"],
    icon: <SiProbot />,
  },
];

const links = [
  { id: 1, text: "Home", href: "#" },
  { id: 2, text: "My Projects", href: "#projects" },
  { id: 3, text: "About Me", href: "#about" },
  { id: 4, text: "Contact", href: "#contact" },
];

export { projects, skills, links };
