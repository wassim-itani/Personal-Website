import {
  bloggingSystem,
  todoApp,
  blogrClone,
  agencyLanding,
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
