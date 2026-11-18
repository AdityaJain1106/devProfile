
export interface Interest {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  visual: "technology" | "startups" | "sports" | "photography";
  accent: string;
}

export const interests: Interest[] = [
  {
    id: "technology",
    number: "01",
    title: "Technology",
    subtitle: "Curious about what's next.",
    description:
      "Exploring emerging technologies, new tools, and innovations that are changing how we interact with the world.",
    visual: "technology",
    accent: "#8B9DFF",
  },
  {
    id: "entrepreneurship",
    number: "02",
    title: "Startups & Entrepreneurship",
    subtitle: "Ideas into possibilities.",
    description:
      "Interested in startup ecosystems, discovering problems worth solving, and understanding how ideas become products.",
    visual: "startups",
    accent: "#E9A66B",
  },
  {
    id: "sports",
    number: "03",
    title: "Sports & Running",
    subtitle: "Consistency over everything.",
    description:
      "Enjoying sports and running as ways to stay active, challenge myself, and build discipline.",
    visual: "sports",
    accent: "#8FC6A2",
  },
  {
    id: "photography",
    number: "04",
    title: "Photography",
    subtitle: "Finding stories in details.",
    description:
      "Appreciating visual storytelling, interesting perspectives, and capturing moments through photography.",
    visual: "photography",
    accent: "#C49BE8",
  },
];
