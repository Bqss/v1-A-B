import { socmed, work } from "@/types/type";
import {FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiFacebook} from "react-icons/fi"

export const mySkils = [
  "HTML",
  "CSS",
  "JavaScript (ES6+)",
  "TypeScript",
  "PHP",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Laravel",
  "Codeigniter",
];

export const myRecentWork: Array<work> = [
  {
    title: "Macroma Studio",
    instanceName : "Macroma ",
    
    date: {
      start: "2021-01-01",
      end: "2021-01-01",
    },
    description: [
      "lorem ipsum dolor sit amet ndasku mumet ratau turu karo kowe mung ngomong ngene ae ",
      "lorem ipsum dolor sit amet ndasku mumet ratau turu karo kowe mung ngomong ngene ae ",
      "lorem ipsum dolor sit amet ndasku mumet ratau turu karo kowe mung ngomong ngene ae ",
      "lorem ipsum dolor sit amet ndasku mumet ratau turu karo kowe mung ngomong ngene ae ",
      "lorem ipsum dolor sit amet ndasku mumet ratau turu karo kowe mung ngomong ngene ae ",
      "lorem ipsum dolor sit amet ndasku mumet ratau turu karo kowe mung ngomong ngene ae ",
    ],
    website: "https://www.xnxx.com",
  },
  {
    title: "Freelance on PSHTerate",
    instanceName : "PSHTerate",
    date: {
      start: "2021-01-01",
      end: "2021-01-01",
    },
    description: [
      "lorem ipsum dolor sit amet ndasku mumet ratau turu karo kowe mung ngomong ngene ae ",
      "lorem ipsum dolor sit amet ndasku mumet ratau turu karo kowe mung ngomong ngene ae ",
      "lorem ipsum dolor sit amet ndasku mumet ratau turu karo kowe mung ngomong ngene ae ",
      "lorem ipsum dolor sit amet ndasku mumet ratau turu karo kowe mung ngomong ngene ae ",
      "lorem ipsum dolor sit amet ndasku mumet ratau turu karo kowe mung ngomong ngene ae ",
      "lorem ipsum dolor sit amet ndasku mumet ratau turu karo kowe mung ngomong ngene ae ",
    ],
    website: "",
  },
];

export const socmeds : Array<socmed> =  [
  {
    name: "Github",
    icon : FiGithub,
    url : ''
  },
  {
    name: "Instagram",
    icon : FiInstagram,
    url : ''
  },
  {
    name: "Linkedin",
    icon : FiLinkedin,
    url : ''
  },
  {
    name: "Twitter",
    icon : FiTwitter,
    url : ''
  },
  {
    name: "Facebook",
    icon : FiFacebook,
    url : ''
  },
]
