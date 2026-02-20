// src/data/index.js
import React from 'react';
import { Code2, Terminal, Layers, Bookmark, Cpu, Linkedin, Github, Instagram, Youtube } from 'lucide-react';

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Management System",
    category: "Freelance Web Development",
    image: "../projext1.webp",
    tags: ["React.js", "Express.js", "Mysql","Figma","VPS Server"],
    description: "Built a full-stack web application to manage customers, items, item barcodes, and customer discounts",
    date: "2024",
    client: "Sumber Sari"
  },
  {
    id: 2,
    title: "Management System",
    category: "Freelance Web Development",
    image: "../project2.webp",
    tags: ["React.js", "Express.js", "Mysql","Figma","VPS Server"],
    description: "Built a full-stack web application to manage customers, items, and customer discounts",
    date: "2025",
    client: "Sumber Lancar"
  },
  {
    id: 3,
    title: "Export Website",
    category: "Freelance Web Development",
    image: "../project3.webp",
    tags: ["Next.js","Tailwind cSS", "VPS Server", "Figma","Profesional Mail" ],
    description: "A financial management application featuring automatic tracking and AI-driven insights to help users manage their budgets effectively.",
    date: "2026",
    client: "Nusa Terra Foods"
  },
  {
    id: 4,
    title: "Web-Based POS System",
    category: "Personal Project Website",
    image: "../project5.webp",
    tags: ["React", "Express", "MySQL","Prisma","CSS", "Figma", "VPS Server","Postman"],
    description: "A financial management application featuring automatic tracking and AI-driven insights to help users manage their budgets effectively.",
    date: "2026",
    client: "Nexus Financial"
  },
  {
    id: 5,
    title: "Built A full-stack web application to manage product, payment logs, profit summary",
    category: "Final Project",
    image: "../project4.webp",
    tags: ["React Native", "Firebase"],
    description: "-",
    date: "2024",
    client: "Nexus Financial"
  },
  {
    id: 6,
    title: "-",
    category: "Upcoming Project",
    image: "https://placehold.co/800x450/f1f5f9/64748b?text=Upcoming+Project",
    tags: ["-"],
    description: "-",
    date: "May 2023",
    client: "Nexus Financial"
  }
];

export const TECH_STACK = [
  { name: "React", icon: <Code2 size={24} />, level: "Expert" },
  { name: "Node.js & Express", icon: <Terminal size={24} />, level: "Advanced" },
  { name: "Tailwind CSS", icon: <Layers size={24} />, level: "Expert" },
  { name: "MySQL & Prisma", icon: <Bookmark size={24} />, level: "Advanced" },
  { name: "Postman", icon: <Bookmark size={24} />, level: "Advanced" },
  { name: "Git", icon: <Bookmark size={24} />, level: "Advanced" },
  { name: "VPS Server", icon: <Cpu size={24} />, level: "Intermediate" },
];

export const EXPERIENCE = [
  { year: "2023 - Present", role: "Freelance Web Programmer", company: "Remote", desc: "Building custom digital solutions for clients, including the development of Point of Sale (POS) systems and e-commerce websites with shipping integrations." },
  { year: "2023", role: "Front End Developer Intern", company: "Gamelab Salatiga", desc: "Responsible to Create a small business website company" },
];

export const SOCIAL_CONNECT = [
  { name: 'LinkedIn', handle: 'Ferdynand Silalahi', icon: <Linkedin size={22}/>, url: "https://www.linkedin.com/in/ferdynandsilalahi/" },
  { name: 'GitHub', handle: 'fdynnds', icon: <Github size={22}/>, url: "https://github.com/ferdynandpro" },
  { name: 'Instagram', handle: '@fdynnds_', icon: <Instagram size={22}/>, url: "https://www.instagram.com/fdynnds_" },
  { name: 'YouTube', handle: 'Ferdynand Silalahi', icon: <Youtube size={22}/>, url: "https://www.youtube.com/@fdynnds" },
];