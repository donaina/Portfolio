export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number; // 0-100
  category: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio?: string;
  profileImage: string;
  resumeUrl: string;
  socialLinks: {
    linkedin: string;
    twitter?: string;
    github?: string;
    facebook?: string;
    instagram?: string;
  };
}