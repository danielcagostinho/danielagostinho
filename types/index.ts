export interface Tech {
  name: string;
  color: string;
}

export interface Project {
  name: string;
  description: string;
  imgSrc: string;
  tech: Tech[];
  github: string;
  url?: string;
}

export interface Employer {
  name: string;
  img: {
    src: string;
    altText: string;
  };
  position: string;
  description: string;
  timeLength: string;
}
