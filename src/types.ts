export interface Project {
  id: string;
  tag: string;
  title: string;
  subtitle?: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
  highlights?: string[];
  metrics?: string;
  archTree?: string;
  archDescription?: string;
}

export interface SkillColumn {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  period: string;
  periodStyle: 'highlight' | 'dark' | 'outline';
  role: string;
  company: string;
  description: string;
  bullets?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  period: string;
  score?: string;
  description: string;
}

export interface SocialLinkItem {
  label: string;
  tag: string;
  url: string;
  type: 'ext' | 'mail';
}

