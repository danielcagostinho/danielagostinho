import React, { Component } from "react";
import { isMobile } from "react-device-detect";

import NavBar from "./components/NavBar/NavBar";
import MobileNavBar from "./components/MobileNavBar/MobileNavBar";
import AboutSection from "./components/AboutSection/AboutSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import Projects from "./components/Projects/Projects";
import ContactSection from "./components/ContactSection/ContactSection";

import avatar from "./assets/avatar.jpg";
import headerImage from "./assets/header-image.svg";
import weather from "./assets/projects/weather.jpg";
import dankimfilms from "./assets/projects/dankimfilms.png";
import todo from "./assets/projects/todo.png";
import trigo from "./assets/projects/trigo.jpg";
import intact from "./assets/employers/intact.png";
import mcmaster from "./assets/employers/mcmaster.jpg";

import "./App.scss";

class App extends Component {
  state = {
    fixed: true,
    blur: true,
    isNameDisplayed: false,
    isTitleDisplayed: true,
    scrollPosition: 0,
    projects: [
      {
        name: "Trigo Bakery",
        description:
          "A fresh new take on a traditional Portuguese bakery website.",
        imgSrc: trigo,
        tech: ["React.js", "SASS", "Node.js"],
        github: "https://github.com/danielcagostinho/TrigoBakery",
        url: "https://immense-tundra-33861.herokuapp.com/",
      },
      {
        name: "Dan Kim Films",
        description: "A website to showcase the work of a videographer.",
        imgSrc: dankimfilms,
        tech: ["React.js", "SASS", "Node.js"],
        github: "https://github.com/danielcagostinho/DKFilms",
        url: "",
      },
      {
        name: "React Weather",
        description:
          "A minimalistic weather app using custom icons, designed in Figma.",
        imgSrc: weather,
        tech: ["React.js", "Figma", "Node.js"],
        github: "https://github.com/danielcagostinho/ReactWeather",
        url: "https://pacific-cliffs-73088.herokuapp.com/",
      },
      {
        name: "React ToDo List",
        description:
          "A clean, simple todo list designed in Figma and built in React.js.",
        imgSrc: todo,
        tech: ["React.js", "Figma", "Node.js"],
        github: "https://github.com/danielcagostinho/ReactTodo",
        url: "https://damp-shore-14787.herokuapp.com/",
      },
    ],
    employers: [
      {
        name: "Intact",
        img: {
          src: intact,
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
          src: mcmaster,
          altText: "McMaster University Logo",
        },
        position: "Data Warehouse Developer",
        description:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        timeLength: "May 2017 - May 2018",
      },
    ],
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 0.3 * window.innerHeight) {
      this.setState({ isNameDisplayed: true });
    } else {
      this.setState({ isNameDisplayed: false });
    }
  };

  render() {
    return (
      <div className="App">
        {isMobile ? (
          <MobileNavBar />
        ) : (
          <NavBar showName={this.state.isNameDisplayed} />
        )}
        <AboutSection
          avatar={avatar}
          headerImage={headerImage}
          fixed={this.state.fixed}
          blur={this.state.blur}
          showTitle={this.state.isTitleDisplayed}
        />
        <Projects projects={this.state.projects} />
        <ExperienceSection />
        <ContactSection />
      </div>
    );
  }
}

export default App;
