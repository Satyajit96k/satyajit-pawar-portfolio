export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}
