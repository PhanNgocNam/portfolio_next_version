import corpcommentImg from "@/public/music.jpg";
import rmtdevImg from "@/public/pofo.jpg";
import wordanalyticsImg from "@/public/shipper.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Music website",
    description:
      "A music-listening website helps people alleviate stress. I worked as a front-end developer",
    tags: ["React", "Redux", "Antd", "Tailwind", "Typescript", "Firebase"],
    imageUrl: corpcommentImg,
    demo_link: "https://p2n-music.vercel.app/",
  },
  {
    title: "Personal protfolio",
    description:
      "My online CV which is designed to help people quickly understand me and gain an overall view of my skills and personality.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer-motion"],
    imageUrl: rmtdevImg,
    demo_link: "#",
  },
  {
    title: "Shipper management website",
    description:
      "A school project for management shipper of an warehouse. I worked as a fullstack deverloper in a team of 2 member",
    tags: [
      "React",
      "Antd",
      "mongodb",
      "Redux toolkit",
      "socket.io",
      "node.js",
      "express.js",
    ],
    imageUrl: wordanalyticsImg,
    demo_link: "https://client-shipper-project.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Express.js",
  "Node.js",
  "Redux",
  "MySQL",
  "Framer Motion",
  "MongoDB",
] as const;
