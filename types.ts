
export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description?: string;
  tasks: string[];
}

export interface Skill {
  name: string;
  iconClass: string; 
  color?: string;
}

export interface Education {
  degree: string;
  university: string;
  year: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  birthYear: string;
  aboutTitle: string;
  about: string;
  sloganPart1: string;
  sloganPart2: string;
  sloganHighlight: string;
  roles: string[];
  contactTitle: string;
  contactSubtitle: string;
  rights: string;
}

export interface Content {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education;
  highSchool: Education;
  skills: Skill[]; // Added skills to the main content structure
  skillsTitle: string;
  experienceTitle: string;
  workTitle: string;
  educationTitle: string;
}
