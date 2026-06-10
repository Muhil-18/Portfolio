import { Project, Experience, Certification, Skill, Achievement } from "../types";

export const PROJECTS: Project[] = [
  {
    id: "cloudster",
    title: "Cloudster: Autonomous Edge-Education Node",
    description: "Built a self-contained offline edge computing platform for AI-powered classroom services.",
    longDescription: [
      "Self-contained offline edge AI platform for classroom environments",
      "Real-time bidirectional WebSocket communication across multiple devices",
      "Local LLM inference using Ollama — no cloud dependency",
      "Golang microservices + Node.js API orchestration + Python AI pipelines"
    ],
    techStack: ["Golang", "Node.js", "Python", "Raspberry Pi", "Ollama", "WebSockets"],
    githubUrl: "https://github.com/Muhil-18",
    imageUrl: "/images/cloudster.svg",
    featured: true
  },
  {
    id: "stock-vision-ai",
    title: "Stock Vision AI with Apache Spark",
    description: "Distributed data pipelines for large-scale stock market datasets with ML forecasting.",
    longDescription: [
      "Distributed stock market prediction pipeline",
      "Real-time Structured Streaming",
      "Buy/sell signal ML models",
      "Rolling indicators dashboard"
    ],
    techStack: ["Apache Spark", "PySpark MLlib", "Python", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/Muhil-18",
    imageUrl: "/images/stock-vision.svg"
  },
  {
    id: "ml-stock-analysis",
    title: "ML Stock Analysis Tool",
    description: "Full-featured stock analysis application fetching real-time data with feature engineering.",
    longDescription: [
      "Real-time stock data fetching",
      "OHLCV feature engineering",
      "Comparative equity performance dashboards",
      "Internship deliverable"
    ],
    techStack: ["Python", "Yahoo Finance API", "Linear Regression", "Decision Tree", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/Muhil-18",
    imageUrl: "/images/ml-stock.svg"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Institution of Engineers (India), Qatar Chapter",
    role: "Project Intern",
    duration: "Oct 2025",
    responsibilities: [
      "Developed ML stock analysis tool using Python and Yahoo Finance API",
      "Applied Linear Regression and Decision Tree algorithms for price forecasting",
      "Created visualisation dashboards using Matplotlib and Seaborn"
    ],
    outcomes: [
      "Delivered a functional forecasting system; gained hands-on ML project experience"
    ]
  },
  {
    company: "CDAC Chennai & SRM IST",
    role: "Training Program",
    duration: "Feb 2026",
    responsibilities: [
      "Cloud Computing Bootcamp covering foundational and advanced cloud skills",
      "Hands-on practice with AWS and cloud architecture principles"
    ],
    outcomes: []
  },
  {
    company: "NIT Tiruchirappalli",
    role: "Workshop",
    duration: "Jul 2025",
    responsibilities: [
      "AI in Legal Domain Workshop exploring NLP applications in legal tech"
    ],
    outcomes: []
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Cloud Computing Bootcamp",
    provider: "CDAC Chennai & SRM IST",
    date: "Feb 2026"
  },
  {
    name: "Introduction to Database Systems",
    provider: "NPTEL",
    date: "Jan 2025"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "DevsHouse '26 National Level Hackathon",
    description: "Participant and builder.",
    type: "Hackathon",
    date: "Mar 2026"
  },
  {
    title: "AI in Legal Domain Workshop",
    description: "NIT Tiruchirappalli.",
    type: "Workshop",
    date: "Jul 2025"
  },
  {
    title: "District-level Badminton Player",
    description: "Precision and strategy on the court.",
    type: "Sports",
    date: "Ongoing"
  }
];

export const SKILLS: Skill[] = [
  { name: "AWS", category: "Cloud & DevOps", icon: "FaAws" },
  { name: "Docker", category: "Cloud & DevOps", icon: "SiDocker" },
  { name: "Kubernetes", category: "Cloud & DevOps", icon: "SiKubernetes" },
  { name: "Terraform", category: "Cloud & DevOps", icon: "SiTerraform" },
  { name: "Python", category: "Programming", icon: "SiPython" },
  { name: "SQL", category: "Programming", icon: "SiPostgresql" },
  { name: "Java", category: "Programming", icon: "SiJava" },
  { name: "Machine Learning", category: "Data & AI", icon: "SiTensorflow" }, // Or something equivalent
  { name: "Apache Spark", category: "Data & AI", icon: "SiApachespark" },
  { name: "Data Analytics", category: "Data & AI", icon: "SiGoogleanalytics" },
  { name: "NLP", category: "Data & AI", icon: "SiSpacy" },
  { name: "Git", category: "Tools", icon: "SiGit" },
  { name: "GitHub", category: "Tools", icon: "SiGithub" },
  { name: "Linux", category: "Tools", icon: "SiLinux" },
  { name: "VS Code", category: "Tools", icon: "SiVisualstudiocode" },
];
