export interface Project {
  id: string;
  tag: string;
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
  highlights?: string[];
  metrics?: string;
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
}

export interface SocialLinkItem {
  label: string;
  tag: string;
  url: string;
  type: 'ext' | 'mail';
}
