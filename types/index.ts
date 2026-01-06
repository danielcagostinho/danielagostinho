export type Tech = {
  name: string;
  color: string;
}

export type Project = {
  name: string;
  description: string;
  imgSrc: string;
  tech: Tech[];
  github: string;
  url?: string;
}

export type Employer = {
  name: string;
  img: {
    src: string;
    altText: string;
  };
  position: string;
  description: string;
  timeLength: string;
}

export type Experience = {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  technologies: string[];
}

export type Education = {
  degree: string;
  institution: string;
  startYear: number;
  endYear: number;
}

export type Hackathon = {
  name: string;
  institution: string;
  date: string;
}

export type SkillCategory = {
  category: string;
  skills: string[];
}
