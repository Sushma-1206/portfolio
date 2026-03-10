// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  python,
  java,
  c,
  flask,
  opencv,
  mysql,
  vscode,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "AI & ML Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git/GitHub",
    icon: git,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "PulseGuard AI",
    company_name: "Personal Project",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2026 - Present",
    points: [
      "Built an AI-powered heart health monitoring app that detects blood pressure patterns",
      "Warns users proactively before health issues become serious",
      "Integrated AI chatbot for plain-language health explanations",
      "Stack: Python, ML, React",
    ],
  },
  {
    title: "COAverse",
    company_name: "Personal Project",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2026",
    points: [
      "Built an AI-powered interactive learning platform for Computer Organization and Architecture",
      "Features personalized learning paths and adaptive assessments for engineering students",
      "Integrated AI-assisted visualizations and progress tracking",
      "Stack: React, Node.js, AI/ML",
    ],
  },
  {
    title: "KrishiAI",
    company_name: "Personal Project",
    icon: shopify,
    iconBg: "#383E56",
    date: "2026",
    points: [
      "Built an AI-powered crop disease detection app for Indian farmers",
      "Provides instant diagnosis, treatment recommendations and cost estimates",
      "Supports Telugu, Hindi and English with offline capability",
      "Stack: Python, Computer Vision, Flask",
    ],
  },
  {
    title: "Akadify",
    company_name: "Buildverse.AI Hackathon — 🏆 3rd Place",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Built a digital platform to streamline student activity management and achievements",
      "Features AI chatbot for platform navigation and AI resume generator",
      "Won 3rd place at Buildverse.AI Hackathon organized by AI & ML Department",
      "Stack: React, Node.js, AI/ML",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "PulseGuard AI",
    description:
      "AI-powered heart health monitoring app that detects blood pressure patterns and warns users before problems become serious",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ml",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Sushma-1206",
    live_site_link: "https://github.com/Sushma-1206",
  },
  {
    name: "COAverse",
    description:
      "AI-powered interactive learning platform for Computer Organization and Architecture with personalized and adaptive assessments",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "ai/ml",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Sushma-1206",
    live_site_link: "https://github.com/Sushma-1206",
  },
  {
    name: "KrishiAI",
    description:
      "AI-powered crop disease detection with instant diagnosis and treatment recommendations in Telugu, Hindi and English",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "computer-vision",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Sushma-1206",
    live_site_link: "https://github.com/Sushma-1206",
  },
  {
    name: "Akadify",
    description:
      "A digital platform that streamlines student activity management and achievements with AI-powered chatbot assistance and automated resume generation. Won 3rd place at Buildverse.AI Hackathon",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "ai/ml",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/Sushma-1206",
    live_site_link: "https://github.com/Sushma-1206",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sushmakumari12/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Sushma-1206",
  },
] as const;
