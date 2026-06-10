export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location?: string;
  responsibilities: string[];
  outcomes: string[];
  link?: string;
}

export interface Certification {
  name: string;
  provider: string;
  date: string;
  verifyUrl?: string;
  imageUrl?: string;
}

export interface Skill {
  name: string;
  category: string;
  icon: string;
}

export interface Achievement {
  title: string;
  description: string;
  type: string;
  date: string;
}
