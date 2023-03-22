import {
  bloggingSystem,
  todoApp,
  blogrClone,
  agencyLanding,
  shoppingCart,
} from "../assets/images";

export const navMenuData = [
  {
    href: "#about",
    text: "About",
  },
  {
    href: "#skills",
    text: "Skills",
  },
  {
    href: "#experience",
    text: "Experience",
  },
  {
    href: "#portfolio",
    text: "Portfolio",
  },
  {
    href: "#contact",
    text: "Contact",
  },
];

export const projects = [
  {
    title: "Shopping Cart",
    img: shoppingCart,
    text: "An e-commerce shopping cart.",
    code: "https://github.com/wassim-itani/Shopping-Cart",
    demo: "https://market-shopping-cart.netlify.app",
    tools: ["React", "Redux", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Blogging System - Senior Project",
    img: bloggingSystem,
    text: "A web app where users can publish posts and interact with others. Featuring a rich text editor, interactive liking/commenting system, and much more!",
    code: "https://github.com/wassim-itani/Blogging-System",
    demo: "https://blogr99.netlify.app",
    tools: ["React", "Sass", "PHP", "MYSQL"],
  },
  {
    title: "Todo App",
    img: todoApp,
    text: "A todo app with CRUD operations, filtering, and light/dark theme.",
    code: "https://github.com/wassim-itani/React-todo-app",
    demo: "https://react-todo-app97.netlify.app",
    tools: ["React", "Css"],
  },
  {
    title: "Blogr Landing Page Clone",
    img: blogrClone,
    text: "A pixel perfect clone of blogr's landing page, a challenge posted by Frontend Mentor.",
    code: "https://github.com/wassim-itani/Blogr-Landing-Page-Clone",
    demo: "https://blogr-landing-page-clone.netlify.app",
    tools: ["HTML", "CSS", "JS"],
  },
  {
    title: "Agency Landing Page",
    img: agencyLanding,
    text: "A modern designed agency landing page with subtle animations using framer-motion.",
    code: "https://github.com/wassim-itani/react-multipurpose",
    demo: "https://react-multipurpose.netlify.app",
    tools: ["React", "Sass", "Framer Motion"],
  },
];

export const companies = ["ZAQ"];
export const jobInfo = [
  {
    position: "Front-End Developer Intern",
    from: "September",
    to: "December 2022",
    company: "ZAQ",
    tasks: [
      "Collaborated closely in a team of 2 on the front-end side of a custom chatbot.",
      "Developed the basis of an interactive diagramming application using Vue.js.",
      "Maintained 3+ web applications and fixed front-end bugs related to UI and API integration.",
      "Created reusable web components using Vue.js and SCSS.",
      "Used Git and GitLab for managing code changes.",
      "Upgraded projects’ dependencies using npm.",
    ],
  },
];
