
export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  featured: boolean;
  visualTheme: "healthcare" | "commerce" | "accessibility" | "analytics" | "voice";
}
