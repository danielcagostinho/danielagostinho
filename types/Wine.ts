export interface WineExperience {
  employer: string;
  position: string;
  period: string;
  description: string;
}

export interface WineCertification {
  name: string;
  level: string;
  organization: string;
  year: string;
}

export interface WineData {
  experience: WineExperience;
  certifications: WineCertification[];
}
