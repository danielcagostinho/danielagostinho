import type { Tech } from './Tech';

export type Project = {
  name: string;
  description: string;
  imgSrc: string;
  tech: Tech[];
  github: string;
  url?: string;
};
