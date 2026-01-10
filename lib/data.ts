import { Project, Employer, Experience, Education, Hackathon, SkillCategory } from '@/types';

export const experience: Experience[] = [
  {
    company: 'Wayfinder AI',
    position: 'Senior Software Engineer',
    location: 'Toronto, Canada',
    startDate: 'Jan 2024',
    endDate: 'Present',
    bullets: [
      'Lead UI engineer for AI-powered crypto transaction platform, working with team of 2-3 frontend engineers',
      'Architected and built ChatGPT-like interface enabling users to interact with AI agents for complex crypto operations including smart contract deployment, Hyperliquid trading, Polymarket trading, and automated trading strategies',
      'Engineered real-time chat experience using custom LLMs and WebSocket implementation for seamless agent interactions',
      'Implemented modern frontend architecture with Next.js, TypeScript, Tailwind CSS, Radix UI, and Framer Motion using Context API for state management',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'React',
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
    startDate: 'Jan 2022',
    endDate: 'Dec 2024',
    bullets: [
      'Developed UI for NFT pack drop platform using TypeScript and Next.js, facilitating seamless user experience for digital collectible purchases',
      'Integrated Web3 technologies including ethers.js, wagmi, RainbowKit, and WalletConnect to enable secure blockchain transaction submissions',
      'Built and launched e-commerce web store with Stripe payment integration, handling end-to-end payment processing and inventory management',
      'Spearheaded full-stack development of Spotify Wrapped-style analytics feature, aggregating NFT collection stats, trading activity, and financial metrics across entire user base to deliver personalized user summaries',
    ],
    technologies: [
      'TypeScript',
      'Next.js',
      'React',
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
      'Worked closely with UX designers and product owners to implement large public-facing features in Angular while following Figma mockups',
      'Implemented a component schematic CLI tool to reduce time to bootstrap new components by pre configuring templated HTML, and setting up required routes and services',
      'Fixed massive performance problems reducing minutes down to seconds by optimizing SQL queries',
      'Experience with on-call, manual deployments, triaging server performance issues, and investigating server downtimes using memory dumps and PerfViews',
      'Hosted design discussions regarding new technologies, bad code practices within the application and used the opportunity to improve overall knowledge of the department',
      'Mentored and spent time teaching and helping new developers',
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
    position: 'Test Automation Developer I',
    location: 'Toronto, Canada',
    startDate: 'Oct 2019',
    endDate: 'Mar 2021',
    bullets: [
      'Worked with development team and QA analysts to create automated test scripts and suites to identify, diagnose and report potentially disastrous system errors for a large-scale insurance application',
      'Used React.js to develop a reporting dashboard to provide management with a consolidated view of performance and regression results, increasing the visibility of defects, reducing the time required to fix them, resulting in faster feature development',
      "Was solely responsible for the execution and maintenance of the regression suite for Intact's legacy application",
      'Mentored newly-hired automation developer, identifying opportunities for growth and actively taught skills that would enable them to effectively contribute to rapidly growing test automation framework',
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
      'Designed and implemented data extraction and transformation processes to support a large-scale university application',
      'Developed web-tools to enhance the student experience (currently used by over 30,000 users)',
      'Generated reports and queries in response to business requirements',
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
    category: 'Front End',
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Angular 12',
      'React Native',
      'Radix UI',
      'Framer Motion',
      'Javascript (ES6)',
      'Sass (CSS3)',
      'HTML5',
    ],
  },
  {
    category: 'Back End',
    skills: ['Node.js', 'Python', 'Django', 'PostgreSQL', 'C#', 'Java'],
  },
  {
    category: 'Web3 & Blockchain',
    skills: ['ethers.js', 'wagmi', 'RainbowKit', 'WalletConnect', 'Smart Contracts'],
  },
  {
    category: 'Testing',
    skills: ['Jest', 'Selenium', 'Cypress'],
  },
  {
    category: 'Other',
    skills: ['Git', 'WebSocket', 'Stripe', 'Docker', 'Jenkins', 'Bash', 'PowerShell'],
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
    name: 'Intact',
    img: {
      src: '/assets/employers/intact.png',
      altText: 'Intact Insurance Logo',
    },
    position: 'Automation Test Developer I',
    description:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    timeLength: 'Oct 2019 - Present',
  },
  {
    name: 'McMaster',
    img: {
      src: '/assets/employers/mcmaster.jpg',
      altText: 'McMaster University Logo',
    },
    position: 'Data Warehouse Developer',
    description:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    timeLength: 'May 2017 - May 2018',
  },
];
