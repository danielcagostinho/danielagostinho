import { Project, Employer } from '@/types';

export const projects: Project[] = [
  {
    name: "Maison",
    description: "Housemate payment splitting made simple.",
    imgSrc: "/assets/projects/maison.webp",
    tech: [
      { name: "React Native", color: "#6380CD" },
      { name: "MongoDB", color: "#00684A" },
      { name: "Node.js", color: "#8CC84B" },
    ],
    github: "https://github.com/danielcagostinho/Maison",
  },
  {
    name: "Jiphy",
    description: "My take on a infinite scroll gif gallery.",
    imgSrc: "/assets/projects/jiphy.png",
    tech: [
      { name: "React", color: "#6380CD" },
      { name: "SASS", color: "#CD679A" },
      { name: "Node.js", color: "#8CC84B" },
    ],
    github: "https://github.com/danielcagostinho/jiphy/",
    url: "https://danielcagostinho.github.io/jiphy/"
  },
  {
    name: "Trigo Bakery",
    description: "A fresh new take on a traditional Portuguese bakery website.",
    imgSrc: "/assets/projects/trigo.jpg",
    tech: [
      { name: "React.js", color: "#6380CD" },
      { name: "SASS", color: "#CD679A" },
      { name: "Node.js", color: "#8CC84B" },
    ],
    github: "https://github.com/danielcagostinho/TrigoBakery",
    url: "https://danielcagostinho.github.io/TrigoBakery/#/",
  },
  {
    name: "Dan Kim Films",
    description: "A website to showcase the work of a videographer.",
    imgSrc: "/assets/projects/dankimfilms.png",
    tech: [
      { name: "React.js", color: "#6380CD" },
      { name: "SASS", color: "#CD679A" },
      { name: "Node.js", color: "#8CC84B" },
    ],
    github: "https://github.com/danielcagostinho/DKFilms",
    url: "https://danielcagostinho.github.io/DKFilms/#/",
  },
  {
    name: "React Weather",
    description: "A minimalistic weather app using custom icons, designed in Figma.",
    imgSrc: "/assets/projects/weather.jpg",
    tech: [
      { name: "React.js", color: "#6380CD" },
      { name: "Figma", color: "#F24E1E" },
      { name: "Node.js", color: "#8CC84B" },
    ],
    github: "https://github.com/danielcagostinho/ReactWeather",
    url: "https://danielcagostinho.github.io/ReactWeather/",
  },
  {
    name: "React ToDo List",
    description: "A clean, simple todo list designed in Figma and built in React.js.",
    imgSrc: "/assets/projects/todo.png",
    tech: [
      { name: "React.js", color: "#6380CD" },
      { name: "Figma", color: "#F24E1E" },
      { name: "Node.js", color: "#8CC84B" },
    ],
    github: "https://github.com/danielcagostinho/ReactTodo",
    url: "https://danielcagostinho.github.io/ReactTodo/",
  },
];

export const employers: Employer[] = [
  {
    name: "Intact",
    img: {
      src: "/assets/employers/intact.png",
      altText: "Intact Insurance Logo",
    },
    position: "Automation Test Developer I",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    timeLength: "Oct 2019 - Present",
  },
  {
    name: "McMaster",
    img: {
      src: "/assets/employers/mcmaster.jpg",
      altText: "McMaster University Logo",
    },
    position: "Data Warehouse Developer",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    timeLength: "May 2017 - May 2018",
  },
];
