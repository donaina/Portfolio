export interface Stat {
  value: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  bio: string[];
  profileImage: string;
  resumeUrl: string;
  socialLinks: {
    linkedin: string;
    twitter?: string;
    github?: string;
  };
  stats: Stat[];
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectStack {
  area: string;
  items: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface BuildStory {
  overview: string[];
  challenge: string[];
  architecture: string[];
  implementation: string[];
  testing: string[];
  outcomes: string[];
  links: ProjectLink[];
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  status: 'live' | 'production' | 'staging' | 'internal';
  summary: string;
  highlights: string[];
  metrics: ProjectMetric[];
  stack: ProjectStack[];
  demoUrl?: string;
  sourceUrl?: string;
  featured: boolean;
  buildStory?: BuildStory;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location?: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export interface EducationEntry {
  id: number;
  degree: string;
  institution: string;
  period: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
}
