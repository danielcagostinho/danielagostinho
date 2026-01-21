import {
  Project,
  Employer,
  Experience,
  Education,
  Hackathon,
  SkillCategory,
  WineData,
} from '@/types';

export const experience: Experience[] = [
  {
    company: 'Wayfinder AI',
    position: 'Senior Software Engineer',
    location: 'Toronto, Canada',
    startDate: 'Jan 2024',
    endDate: 'Present',
    bullets: [
      'Led UI development of ChatGPT-like interface for AI agents that handle smart contract deployment, Hyperliquid trading, Polymarket trading, and automated trading strategies',
      'Implemented real-time chat using custom LLMs and WebSocket for agent interactions',
      'Defined frontend architecture including state management patterns, component organization, API design, and routing structure adopted across the engineering team',
      'Mentored junior developers through code reviews and pair programming on best practices and problem-solving approaches',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'React.js',
      'Tailwind CSS',
      'Radix UI',
      'Framer Motion',
      'WebSocket',
      'Context API',
      'LLMs',
    ],
  },
  {
    company: 'Parallel Studios',
    position: 'Senior Software Engineer',
    location: 'Toronto, Canada',
    startDate: 'Apr 2022',
    endDate: 'Dec 2024',
    bullets: [
      'Built NFT pack drop platform with purchase and redemption features, handling smart contract interactions for users to redeem pack NFTs',
      'Integrated Web3 wallet connections (ethers.js, wagmi, RainbowKit, WalletConnect) for blockchain transactions',
      'Built e-commerce store with Stripe payment integration handling checkout and payment processing',
      'Developed Spotify Wrapped-style analytics feature showing users their NFT collection stats, trading activity, and financial metrics',
    ],
    technologies: [
      'TypeScript',
      'Next.js',
      'React.js',
      'ethers.js',
      'wagmi',
      'RainbowKit',
      'WalletConnect',
      'Stripe',
      'Web3',
    ],
  },
  {
    company: 'GEOTAB',
    position: 'Software Developer',
    location: 'Oakville, Canada',
    startDate: 'Apr 2021',
    endDate: 'Jan 2022',
    bullets: [
      'Built internal admin platform features in Angular including transaction processing, ordering workflows, and shipping management for thousands of employees',
      'Created component schematic CLI tool that reduced setup time for new components',
      'Optimized SQL queries, cutting execution time from minutes to seconds',
      'Mentored new developers and ran technical discussions on architecture and coding practices',
    ],
    technologies: [
      'C#',
      '.NET Core',
      'Angular',
      'RxJS',
      'TypeScript',
      'PowerShell',
      'Bash',
      'Docker',
    ],
  },
  {
    company: 'Intact Financial Corporation',
    position: 'Test Automation Developer',
    location: 'Toronto, Canada',
    startDate: 'Oct 2019',
    endDate: 'Mar 2021',
    bullets: [
      'Built automated test framework and suites for large-scale insurance application',
      'Developed React.js dashboard showing performance and regression test results',
      'Owned execution and maintenance of regression suite for legacy application',
    ],
    technologies: ['React.js', 'Selenium', 'Jest'],
  },
  {
    company: 'McMaster University Technology Services',
    position: 'Data Warehouse Developer / Analyst',
    location: 'Toronto, Canada',
    startDate: 'May 2017',
    endDate: 'May 2018',
    bullets: [
      'Built data extraction and transformation processes for university application',
      'Developed web tools used by 30,000+ students for course planning and registration',
    ],
    technologies: [
      'React.js',
      'Google Cloud Platform API',
      'SQL',
      'Java',
      'PeopleCode',
      'HTML5',
      'CSS3',
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Engineering (Co-op) | Software',
    institution: 'McMaster University',
    startYear: 2014,
    endYear: 2019,
  },
];

export const hackathons: Hackathon[] = [
  {
    name: 'YHacks',
    institution: 'Yale University',
    date: 'Nov 2018',
  },
  {
    name: 'Hack the 6ix',
    institution: 'University of Toronto',
    date: 'Aug 2019',
  },
  {
    name: 'DeltaHacks',
    institution: 'McMaster University',
    date: 'Jan 2018',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      'TypeScript',
      'React.js',
      'Next.js',
      'Angular',
      'React Native',
      'Tailwind CSS',
      'Radix UI',
      'Framer Motion',
    ],
  },
  {
    category: 'Backend',
    skills: ['Python (Django)', 'C#', 'Java', 'Node.js'],
  },
  {
    category: 'Web3',
    skills: ['ethers.js', 'wagmi', 'RainbowKit', 'WalletConnect', 'Smart Contracts'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Docker', 'WebSocket', 'Jest', 'Cypress', 'Selenium', 'PostgreSQL'],
  },
];

export const projects: Project[] = [
  {
    name: 'Maison',
    description: 'Housemate payment splitting made simple.',
    imgSrc: '/assets/projects/maison.webp',
    tech: [
      { name: 'React Native', color: '#6380CD' },
      { name: 'MongoDB', color: '#00684A' },
      { name: 'Node.js', color: '#8CC84B' },
    ],
    github: 'https://github.com/danielcagostinho/Maison',
  },
  {
    name: 'Jiphy',
    description: 'My take on a infinite scroll gif gallery.',
    imgSrc: '/assets/projects/jiphy.png',
    tech: [
      { name: 'React', color: '#6380CD' },
      { name: 'SASS', color: '#CD679A' },
      { name: 'Node.js', color: '#8CC84B' },
    ],
    github: 'https://github.com/danielcagostinho/jiphy/',
    url: 'https://danielcagostinho.github.io/jiphy/',
  },
  {
    name: 'Trigo Bakery',
    description: 'A fresh new take on a traditional Portuguese bakery website.',
    imgSrc: '/assets/projects/trigo.jpg',
    tech: [
      { name: 'React.js', color: '#6380CD' },
      { name: 'SASS', color: '#CD679A' },
      { name: 'Node.js', color: '#8CC84B' },
    ],
    github: 'https://github.com/danielcagostinho/TrigoBakery',
    url: 'https://danielcagostinho.github.io/TrigoBakery/#/',
  },
  {
    name: 'Dan Kim Films',
    description: 'A website to showcase the work of a videographer.',
    imgSrc: '/assets/projects/dankimfilms.png',
    tech: [
      { name: 'React.js', color: '#6380CD' },
      { name: 'SASS', color: '#CD679A' },
      { name: 'Node.js', color: '#8CC84B' },
    ],
    github: 'https://github.com/danielcagostinho/DKFilms',
    url: 'https://danielcagostinho.github.io/DKFilms/#/',
  },
  {
    name: 'React Weather',
    description: 'A minimalistic weather app using custom icons, designed in Figma.',
    imgSrc: '/assets/projects/weather.jpg',
    tech: [
      { name: 'React.js', color: '#6380CD' },
      { name: 'Figma', color: '#F24E1E' },
      { name: 'Node.js', color: '#8CC84B' },
    ],
    github: 'https://github.com/danielcagostinho/ReactWeather',
    url: 'https://danielcagostinho.github.io/ReactWeather/',
  },
  {
    name: 'React ToDo List',
    description: 'A clean, simple todo list designed in Figma and built in React.js.',
    imgSrc: '/assets/projects/todo.png',
    tech: [
      { name: 'React.js', color: '#6380CD' },
      { name: 'Figma', color: '#F24E1E' },
      { name: 'Node.js', color: '#8CC84B' },
    ],
    github: 'https://github.com/danielcagostinho/ReactTodo',
    url: 'https://danielcagostinho.github.io/ReactTodo/',
  },
];

export const employers: Employer[] = [
  {
    name: 'GEOTAB',
    img: {
      src: '/assets/employers/geotab.jpg',
      altText: 'GEOTAB Logo',
    },
    position: 'Software Developer',
    description:
      'Built internal admin platform features in Angular including transaction processing, ordering workflows, and shipping management for thousands of employees. Created component schematic CLI tool that reduced setup time for new components. Optimized SQL queries, cutting execution time from minutes to seconds.',
    timeLength: 'Apr 2021 - Jan 2022',
  },
  {
    name: 'Parallel Studios',
    img: {
      src: '/assets/employers/parallel.jpg',
      altText: 'Parallel Studios Logo',
    },
    position: 'Senior Software Engineer',
    description:
      'Built NFT pack drop platform with purchase and redemption features, handling smart contract interactions for users to redeem pack NFTs. Integrated Web3 wallet connections for blockchain transactions. Built e-commerce store with Stripe payment integration. Developed Spotify Wrapped-style analytics feature showing users their NFT collection stats, trading activity, and financial metrics.',
    timeLength: 'Apr 2022 - Dec 2024',
  },
  {
    name: 'Wayfinder AI',
    img: {
      src: '/assets/employers/wayfinder.jpg',
      altText: 'Wayfinder AI Logo',
    },
    position: 'Senior Software Engineer',
    description:
      'Led UI development of ChatGPT-like interface for AI agents that handle smart contract deployment, Hyperliquid trading, Polymarket trading, and automated trading strategies. Implemented real-time chat using custom LLMs and WebSocket. Defined frontend architecture including state management patterns, component organization, API design, and routing structure adopted across the engineering team.',
    timeLength: 'Jan 2024 - Present',
  },
];

export const wineData: WineData = {
  experience: {
    employer: 'Terroni',
    position: 'Sommelier',
    period: 'Aug 2025 - Present',
    description:
      'Curated wine selections and provided expert recommendations to enhance dining experiences. Developed deep knowledge of Italian wines and wine regions. Trained staff on wine service and pairing principles.',
  },
  certifications: [
    {
      name: 'WSET Level 1',
      level: 'Level 1',
      organization: 'Wine & Spirit Education Trust',
      year: '2016',
    },
    {
      name: 'WSET Level 2',
      level: 'Level 2',
      organization: 'Wine & Spirit Education Trust',
      year: '2017',
    },
    {
      name: 'WSET Level 3',
      level: 'Level 3',
      organization: 'Wine & Spirit Education Trust',
      year: '2018',
    },
  ],
};
