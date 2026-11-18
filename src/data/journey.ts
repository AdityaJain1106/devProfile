
export interface Education {
  id: string;
  institution: string;
  qualification: string;
  specialization?: string;
  period: string;
  location: string;
  score: string;
  scoreLabel: string;
}

export interface AcademicRecord {
  id: string;
  qualification: string;
  institution: string;
  location: string;
  score: string;
}

export interface Contribution {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: "Leadership" | "Open Source";
  description: string;
}

export const education: Education = {
  id: "vit-bhopal",
  institution: "Vellore Institute of Technology, Bhopal",
  qualification: "Bachelor of Technology",
  specialization: "Computer Science Engineering (Core)",
  period: "2024 — 2028",
  location: "Madhya Pradesh, India",
  score: "8.55",
  scoreLabel: "CGPA / 10",
};

export const academicRecords: AcademicRecord[] = [
  {
    id: "class-xii",
    qualification: "Class XII",
    institution: "Jim Corbett Public School",
    location: "Agra",
    score: "78%",
  },
  {
    id: "class-x",
    qualification: "Class X",
    institution: "St. George's College",
    location: "Agra",
    score: "84.6%",
  },
];

export const contributions: Contribution[] = [
  {
    id: "gssoc-jec-ambassador",
    role: "Campus Ambassador",
    organization: "GSSoC JEC Jabalpur",
    period: "May 2026 — July 2026",
    type: "Leadership",
    description:
      "Spearheaded campus engagement campaigns to increase awareness and participation in GSSoC among students.",
  },
  {
    id: "girlscript-ambassador",
    role: "Campus Ambassador",
    organization: "GirlScript Summer of Code",
    period: "June 2025 — October 2025",
    type: "Leadership",
    description:
      "Led campus outreach initiatives, promoting GSSoC to students and increasing participation through targeted communication and peer engagement.",
  },
  {
    id: "girlscript-developer",
    role: "Open Source Developer",
    organization: "GirlScript Summer of Code",
    period: "October 2024 — November 2024",
    type: "Open Source",
    description:
      "Contributed to open-source projects by fixing bugs, improving UI components, and adding features, collaborating with distributed teams across GitHub.",
  },
  {
    id: "hacktoberfest",
    role: "Open Source Developer",
    organization: "Hacktoberfest",
    period: "October 2024 — November 2024",
    type: "Open Source",
    description:
      "Contributed to open-source projects by fixing bugs, improving UI components, and adding features, collaborating with distributed teams across GitHub.",
  },
];

