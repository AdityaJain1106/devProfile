
import type { Project } from "../types/project";

export const featuredProjects: Project[] = [
  {
    id: "help",
    number: "01",
    name: "HealP",
    category: "AI Healthcare Platform",
    year: "2026",
    description:
      "An AI-powered healthcare platform connecting patients and doctors through digital medical records, secure collaboration, and intelligent medical assistance.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Firebase",
      "Gemini API",
      "Tesseract.js",
      "Leaflet",
    ],
    githubUrl: "https://github.com/AdityaJain1106/HealP",
    featured: true,
    visualTheme: "healthcare",
  },
  {
    id: "merchandise-store",
    number: "02",
    name: "MerchandiseStore",
    category: "Full-Stack E-commerce",
    year: "2026",
    description:
      "A responsive full-stack merchandise platform combining interactive 3D UI, authentication, persistent shopping experiences, and optimized product rendering.",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "Firebase",
      "Zustand",
    ],
    githubUrl: "https://github.com/AdityaJain1106/MerchandiseStore",
    featured: true,
    visualTheme: "commerce",
  },
  {
    id: "neuroread",
    number: "03",
    name: "NeuroRead",
    category: "AI Browser Extension",
    year: "2026",
    description:
      "An intelligent browser reading companion combining OCR, Gemini-powered summarization, and retrieval-augmented research to make web content easier to understand.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Gemini API",
      "Tesseract.js",
      "Tavily",
    ],
    githubUrl: "https://github.com/AdityaJain1106/NeuroRead",
    featured: true,
    visualTheme: "accessibility",
  },
  {
    id: "parking-iq",
    number: "04",
    name: "ParkingIQ",
    category: "Machine Learning & Analytics",
    year: "2026",
    description:
      "An intelligent parking analytics platform that processes violation records, calculates risk and priority scores, and visualizes congestion through interactive heatmaps.",
    technologies: [
      "Python",
      "Pandas",
      "scikit-learn",
    ],
    githubUrl: "https://github.com/AdityaJain1106/ParkingIQ",
    featured: true,
    visualTheme: "analytics",
  },
  {
    id: "trail-ai",
    number: "05",
    name: "Trail.AI",
    category: "Voice AI Assistant",
    year: "2026",
    description:
      "A multi-chat, voice-driven AI assistant powered by Google Gemini and ElevenLabs, designed for natural conversations and interactive voice experiences.",
    technologies: [
      "React",
      "Node.js",
      "Google Vertex AI",
      "Gemini",
      "ElevenLabs",
      "Firebase",
    ],
    githubUrl: "https://github.com/AdityaJain1106/Trail.Ai",
    featured: true,
    visualTheme: "voice",
  },
];
