
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  certificateUrl: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: "Problem Solving" | "Project Building" | "Hackathon";
  highlight?: string;
}

export const certifications: Certification[] = [
  {
    id: "oracle-java",
    name: "Java Certified Foundations Associate",
    issuer: "Oracle",
    certificateUrl:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=978C5591241314453DF894242E52A45193DDF5349FF4A66FDB75319EA98B7DC4",
  },
  {
    id: "ibm-genai",
    name: "Advanced Gen AI",
    issuer: "IBM",
    certificateUrl:
      "https://courses.ibmcep.cognitiveclass.ai/certificates/59c4ecabcca9409593f3886a5e781d0a",
  },
  {
    id: "coursera-computerNetworking",
    name: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera & Google",
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/verify/LALHILWYDJXZ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
  },
  {
    id: "infosys-java",
    name: "Java Programming",
    issuer: "Infosys Springboard",
    certificateUrl:
      "https://www.linkedin.com/in/adddijain/overlay/Certifications/417781647/treasury/?profileId=ACoAAD1f_c0ByCXUX6gB5vn8WzklxL8J3lxxx2w",
  },
  {
    id: "nptel-cloud",
    name: "NPTEL Cloud Computing",
    issuer: "IIT Kharagpur",
    certificateUrl: "https://beta.nptel.ac.in/enrollments/16205614/",
  },
  {
    id: "microsoft-career",
    name: "Career Essentials in Software Development",
    issuer: "Microsoft & LinkedIn",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/793753fc6cdfbe0e041255304db1e38af90b6760e01cb05630e8ff600fa36b92?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BVnw9YNyETOi1g7cUIS7VDQ%3D%3D",
  },
];

export const achievements: Achievement[] = [
  {
    id: "dsa",
    title: "200+ DSA Problems Solved",
    description:
      "Solved more than 200 Data Structures and Algorithms problems across Codeforces and LeetCode.",
    category: "Problem Solving",
    highlight: "200+",
  },
  {
    id: "project-building",
    title: "Full-Stack & AI Project Building",
    description:
      "Built multiple full-stack and AI-powered projects across finance, automation, productivity, and analytics platforms.",
    category: "Project Building",
  },
  {
    id: "hackathon-leadership",
    title: "Hackathon Team Leadership",
    description:
      "Led cross-functional teams through competitive hackathons, collaborating on ideas and building solutions.",
    category: "Hackathon",
  },
];

export const hackathons = [
  "Smart India Hackathon (SIH)",
  "CodeVerse",
  "Innovate’26",
  "Health Hackathon",
  "State-Level Buildathon",
  "Hackingly",
];
