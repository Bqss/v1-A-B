import {  project, socmed, work } from "@/types/type";
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
  "Adonis"
];

export const myRecentWork: Array<work> = [
  {
    title: "Macroma Studio",
    instanceName : "Macroma ",
    
    date: {
      start: "2021-01-01",
      end: "Current",
    },
    description: [
      "As a part of macroma buddies , as a frontend developer and frontend designer",
      "Create macroma studio website using codeigniter 4",
      "Create AIGO website that got 3rd place on ideaFest bali",
      "Create  fishcontent.id website  that got  3rd place on  playbox Surabaya",
    ],
    website: "",
  },
  {
    title: "Freelance on PSHTerate",
    instanceName : "PSHTerate",
    date: {
      start: "2023-01-20",
      end: "Current",
    },
    description: [
      "Frelance at PSHTerate as fullstack developer CI3",
      "Improve the absenku website performance",
      "Added some fiture of the absenku web",
      "Improve the database performance of the absenku web",
    ],
    website: "",
  },

  
];

export const socmeds : Array<socmed> =  [
  {
    name: "Github",
    icon : FiGithub,
    url : 'https://github.com/Bqss'
  },
  {
    name: "Instagram",
    icon : FiInstagram,
    url : 'https://www.instagram.com/basofi_5abr/'
  },
  {
    name: "Linkedin",
    icon : FiLinkedin,
    url : 'https://www.linkedin.com/in/basofi-rswt-245487226/'
  },
  {
    name: "Twitter",
    icon : FiTwitter,
    url : ''
  },
  {
    name: "Facebook",
    icon : FiFacebook,
    url : 'https://www.facebook.com/profile.php?id=100007988775478'
  },
]

export const projects : Array<project> = [
  {
    title : "AirBNB Clone",
    isHighlight : true,
    imagePreview : {
      alt : "airBnb Clone",
      src : "/images/projects/airbnb.png",
      desc : "project iseng"
    },
    description : "The clone of airbnb.co.id website using reactjs, express, mongodb, tailwindcss, headlessUI ",
    images : [
      {
        alt : "airBnb Clone",
        src : "/images/projects/airbnb.png",
        desc : "project iseng"
      },
      {
        alt : "haha",
        src : "/images/projects/airbnb2.png",
        desc : "project iseng"
      }
    ],
    links : {
      demo : "",
      github : "https://github.com/Bqss/airbnb-clone"
    },
    tags  : ["nodejs" ," express", "mongodb", "reactjs", "headlessUI" , "tailwind"] 
  },
  {
    title : "Socmed Mern STACK",
    isHighlight : true,
    imagePreview : {
      alt : "socmed Mern",
      src : "/images/projects/socmedMern2.png",
      desc : "project iseng"
    },
    description : "Clone of the twitter and instagram website using reactjs, express, mongodb, tailwindcss, headlessUI",
    images : [
      {
        alt : "socmed Mern",
        src : "/images/projects/socmedMern.png",
        desc : "project iseng"
      }
      ,{
        alt : "socmed Mern",
        src : "/images/projects/socmedMern2.png",
        desc : "project iseng"
      }
    ],
    links : {
      demo : "",
      github : "https://github.com/Bqss/socmed_Mern"
    },
    tags  : ["node js" , "express"," mongodb" , "reactjs", "tailwind", "headlessUI" ," typescript"] 
  },
  {
    title : "SIMPLE E-COMERCE",
    isHighlight : true,
    imagePreview : {
      alt : "preview",
      src : "/images/projects/ecomerce.png",
      desc : "project iseng"
    },
    description : "Simple E-comerce that created when im learning about sanity cms",
    images : [
      {
        alt : "preview",
        src : "/images/projects/ecomerce.png",
        desc : "project iseng"
      },
      {
        alt : "preview",
        src : "/images/projects/ecomerce2.png",
        desc : "project iseng"
      }
    ],
    links : {
      demo : "",
      github : "https://github.com/Bqss/SimpleEcomerce-X-sanity-CMS"
    },
    tags  : ["sanity cms", "reactjs", "tailwindcss", "typescript"] 
  },
  {
    title : "Macroma Studio",
    isHighlight : true,
    imagePreview : {
      alt : "preview",
      src : "/images/projects/macroma.png",
      desc : "project iseng"
    },
    description : "Website of macroma studio , that improved by me",
    images : [
      {
        alt : "preview",
        src : "/images/projects/macroma.png",
        desc : "project iseng"
      },
      {
        alt : "preview",
        src : "/images/projects/macroma2.png",
        desc : "project iseng"
      }
    ],
    links : {
      demo : "https://macroma.site",
      github : "https://github.com/Bqss/macroma"
    },
    tags  : ["ci4", "tailwindcss", "php", "alpinejs", "webpack"] 
  },
  {
    title : "Glimpse Note",
    isHighlight : true,
    imagePreview : {
      alt : "preview",
      src : "/images/projects/glimpseNote2.png",
      desc : "project iseng"
    },
    description : "Is the note app that created when im learning about tailwindcss and headlessUI ",
    images : [
      {
        alt : "preview",
        src : "/images/projects/glimpseNote.png",
        desc : "project iseng"
      },
      {
        alt : "preview",
        src : "/images/projects/glimpseNote2.png",
        desc : "project iseng"
      }
    ],
    links : {
      demo : "",
      github : "https://github.com/Bqss/Glimpse-Notes-TS"
    },
    tags  : ["reactjs", "tailwindcss" , "headless UI" , "typescript" ,"jsonserver"] 
  },
  {
    title : "Shareme",
    isHighlight : true,
    imagePreview : {
      alt : "preview",
      src : "/images/projects/shareme.png",
      desc : "project iseng"
    },
    description : "The clone of shareme website using reactjs, when im learning about sanity cms CRUD",
    images : [
      {
        alt : "preview",
        src : "/images/projects/shareme.png",
        desc : "project iseng"
      },
      {
        alt : "preview",
        src : "/images/projects/shareme2.png",
        desc : "project iseng"
      },
    ],
    links : {
      demo : "https://shareme-x-sanity-x-bass.netlify.app",
      github : "https://github.com/Bqss/ShareMe-X-sanity-CMS"
    },
    tags  : ["sanityCMS", "reactjs" , "tailwindcss", "headlessUI", "goggle auth", "typescript"  ] 
  },
  {
    title : "Absenku",
    isHighlight : true,
    imagePreview : {
      alt : "preview ",
      src : "/images/projects/absenku.png",
      desc : "project iseng"
    },
    description : "Website that created when i'm doing some Frelance on PSHTerate as fullstack developer CI3",
    images : [
      {
        alt : "preview ",
        src : "/images/projects/absenku.png",
        desc : "project iseng"
      },
      {
        alt : "preview ",
        src : "/images/projects/absenku2.png",
        desc : "project iseng"
      },
      {
        alt : "preview ",
        src : "/images/projects/absenku3.png",
        desc : "project iseng"
      },
      {
        alt : "preview ",
        src : "/images/projects/absenku4.png",
        desc : "project iseng"
      },
    ],
    links : {
      demo : "",
      github : "https://github.com/Bqss/absenku"
    },
    tags  : ["ci3" ,"tailwindcss", "bootstrap" , "datatables" , "html" , "mysql", "php" ] 
  },
  {
    title : "AIGO",
    isHighlight : false,
    imagePreview : {
      alt : "preview ",
      src : "/images/projects/aigo.png",
      desc : "project iseng"
    },
    description : "Macroma studio's startup that created for tourism convenience ",
    images : [
      {
        alt : "preview ",
        src : "/images/projects/aigo.png",
        desc : "project iseng"
      },
      {
        alt : "preview ",
        src : "/images/projects/aigo2.png",
        desc : "project iseng"
      },
    ],
    links : {
      demo : "",
      github : "https://github.com/Bqss/aigo"
    },
    tags  : ["adonisjs", "tailwindcss", "alpinejs" , "html" , "goggle api" , "typescript"] 
  },
  {
    title : "Fishcontent ID ",
    isHighlight : true,
    imagePreview : {
      alt : "preview ",
      src : "/images/projects/fishcontent.png",
      desc : "project iseng"
    },
    description : "Macroma studio's startup that engaged on ornamental fish ",
    images : [
      {
        alt : "preview ",
        src : "/images/projects/fishcontent.png",
        desc : "project iseng"
      },
      {
        alt : "preview ",
        src : "/images/projects/fishcontent2.png",
        desc : "project iseng"
      }
    ],
    links : {
      demo : "https://fishcontent.my.id",
      github : "https://github.com/Bqss/fishcontent"
    },
    tags  : ["adonis js" , "tailwindcss", "alpinejs", "html", "swiperjs", "typescript" ] 
  },
  {
    title : "NOTE APP 1",
    isHighlight : false,
    imagePreview : {
      alt : "preview ",
      src : "/images/projects/noteapp.png",
      desc : "project iseng"
    },
    description : "Simple project for my final exam of web programming  on my college ",
    images : [
      {
        alt : "preview ",
        src : "/images/projects/noteapp.png",
        desc : "project iseng"
      },
      {
        alt : "preview ",
        src : "/images/projects/noteapp2.png",
        desc : "project iseng"
      },
      {
        alt : "preview ",
        src : "/images/projects/noteapp3.png",
        desc : "project iseng"
      }
    ],
    links : {
      demo : "",
      github : "https://github.com/Bqss/notesApp"
    },
    tags  : ["ci3", "tailwindcss", "alpinejs", "php" , "mysql" ] 
  },
  {
    title : "NOTE APP 2",
    isHighlight : true,
    imagePreview : {
      alt : "preview ",
      src : "/images/projects/noteapp.png",
      desc : "project iseng"
    },
    description : "Simple project that created when im learning about laravel CRUD",
    images : [
      {
        alt : "preview ",
        src : "/images/projects/noteapp.png",
        desc : "project iseng"
      },
      {
        alt : "preview ",
        src : "/images/projects/noteapp2.png",
        desc : "project iseng"
      },
      {
        alt : "preview ",
        src : "/images/projects/noteapp3.png",
        desc : "project iseng"
      }
    ],
    links : {
      demo : "",
      github : " https://github.com/Bqss/noteAppLaravelSSR"
    },
    tags  : ["laravel", "tailwindcss", "alpinejs" , "php", "mysql" , "blade" ] 
  },
  {
    title : "NOTEAPP 3",
    isHighlight : false,
    imagePreview : {
      alt : "preview ",
      src : "/images/projects/noteapp.png",
      desc : "project iseng"
    },
    description : "The third of noteapp that created when im learning about laravel integration with react using inertia",
    images : [
      {
        alt : "preview ",
        src : "/images/projects/noteapp.png",
        desc : "project iseng"
      },
      {
        alt : "preview ",
        src : "/images/projects/noteapp2.png",
        desc : "project iseng"
      },
      {
        alt : "preview ",
        src : "/images/projects/noteapp3.png",
        desc : "project iseng"
      }
    ],
    links : {
      demo : "",
      github : "https://github.com/Bqss/noteAppSPA"
    },
    tags  : ["laravel" , "tailwindcss", "reactjs" , "inertia" , "mysql", "php"] 
  },

]


