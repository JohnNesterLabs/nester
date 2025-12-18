export type Project = {
  slug: string;
  title: string;
  tag: string;
  thumbnail: string;
  industry: string;
  year: string;
  client: string;
};

export const projects: Project[] = [
  {
    slug: "kahuna-labs",
    title: "Visualising Intelligence",
    tag: "Strategy, Identity & Web",
    thumbnail:
      "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1200",
    industry: "Frontline Productivity",
    year: "2025",
    client: "Kahuna Labs"
  },
  {
    slug: "conversations-data",
    title: "Natural conversations with data",
    tag: "Natural Language, Data",
    thumbnail:
      "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=1200",
    industry: "AEnterprise, AI & Multi-Agent Systems",
    year: "2025",
    client: "Confidential"
  },
  {
    slug: "agentic-intake-coordinator",
    title: "Agentic Intake Coordinator",
    tag: "Natural Language, Conversational AI",
    thumbnail:
      "https://images.pexels.com/photos/8101528/pexels-photo-8101528.jpeg?auto=compress&cs=tinysrgb&w=1200",
    industry: "Healthcare",
    year: "2025",
    client: "Confidential"
  },
  {
    slug: "ai-first-bank",
    title: "AI First Bank",
    tag: "Product - Coming Soon",
    thumbnail:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
    industry: "Banking",
    year: "2025",
    client: "Banky"
  },
  {
    slug: "ai-enabled-browser-security-management-portal",
    title: "AI-enabled Browser Security Management Portal",
    tag: "Enterprise Technology",
    thumbnail:
      "https://images.pexels.com/photos/532561/pexels-photo-532561.jpeg?auto=compress&cs=tinysrgb&w=1200",
    industry: "Enterprise Security",
    year: "2025",
    client: "SquareX"
  },
  {
    slug: "agentic-identity-management-platform",
    title: "Agentic Identity Management Platform",
    tag: "Identity and Access Management, Enterprise Security",
    thumbnail:
      "https://images.pexels.com/photos/5951980/pexels-photo-5951980.jpeg?auto=compress&cs=tinysrgb&w=1200",
    industry: "Enterprise Security",
    year: "2025",
    client: "Astha.ai"
  },
  {
    slug: "insight-assist-performance",
    title: "Insight Assist & Performance",
    tag: "SalesTech, AI Powered Enterprise Software",
    thumbnail:
      "https://images.pexels.com/photos/2837009/pexels-photo-2837009.jpeg?auto=compress&cs=tinysrgb&w=1200",
    industry: "Lifestyle",
    year: "2023",
    client: "RevOps"
  },
 
  {
    slug: "genomic-workflow-discovery",
    title: "Genomic Workflow Discovery",
    tag: "AI Driven Genomics",
    thumbnail:
      "https://images.pexels.com/photos/2882506/pexels-photo-2882506.jpeg?auto=compress&cs=tinysrgb&w=1200",
    industry: "Life Sciences Technology",
    year: "2024",
    client: "Basepair"
  }
];


