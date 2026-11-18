
export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    number: "01",
    title: "Programming Languages",
    description: "Languages I use to solve problems and build software.",
    skills: [
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css" },
    ],
  },
  {
    id: "development",
    number: "02",
    title: "Frontend & Backend",
    description: "Building responsive interfaces and full-stack applications.",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express.js", icon: "express" },
      { name: "Spring Boot", icon: "springboot" },
      { name: "Vite", icon: "vite" },
      { name: "Framer Motion" },
      { name: "Three.js", icon: "threedotjs" },
      { name: "React Three Fiber" },
      { name: "Drei" },
    ],
  },
  {
    id: "databases",
    number: "03",
    title: "Databases",
    description: "Working with relational and NoSQL data systems.",
    skills: [
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Firebase Firestore", icon: "firebase" },
      { name: "JDBC" },
      { name: "Mongoose", icon: "mongoose" },
    ],
  },
  {
    id: "cloud",
    number: "04",
    title: "Cloud & Distributed Systems",
    description: "Understanding APIs, cloud-native systems and distributed architecture.",
    skills: [
      { name: "Cloud-Native Concepts" },
      { name: "REST APIs" },
      { name: "Distributed Systems Fundamentals" },
    ],
  },
  {
    id: "ai",
    number: "05",
    title: "AI-Powered Engineering",
    description: "Building intelligent applications with modern AI tools and techniques.",
    skills: [
      { name: "GitHub Copilot", icon: "githubcopilot" },
      { name: "Claude / Claude Code", icon: "claude" },
      { name: "Prompt Engineering" },
      { name: "RAG" },
      { name: "Agentic AI" },
      { name: "Google Gemini", icon: "googlegemini" },
      { name: "Vertex AI", icon: "googlecloud" },
      { name: "Tesseract.js" },
      { name: "Tavily" },
      { name: "ElevenLabs", icon: "elevenlabs" },
    ],
  },
  {
    id: "fundamentals",
    number: "06",
    title: "Core Computer Science",
    description: "Fundamentals that support strong software engineering.",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Object-Oriented Programming" },
      { name: "DBMS" },
      { name: "Java Collections" },
      { name: "System Design Basics" },
      { name: "Agile / Scrum" },
    ],
  },
  {
    id: "tools",
    number: "07",
    title: "Tools & Engineering",
    description: "Tools for development, collaboration, design and data analysis.",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "visualstudiocode" },
      { name: "Firebase", icon: "firebase" },
      { name: "Firebase Authentication", icon: "firebase" },
      { name: "Figma", icon: "figma" },
      { name: "Postman", icon: "postman" },
      { name: "n8n", icon: "n8n" },
      { name: "Pandas", icon: "pandas" },
      { name: "scikit-learn", icon: "scikitlearn" },
    ],
  },
];
