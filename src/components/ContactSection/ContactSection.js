import React from "react";

import "./ContactSection.scss";

import mailIcon from "../../assets/icons/MailIcon.svg";
import githubIcon from "../../assets/icons/GithubIconWhite.png";
import twitterIcon from '../../assets/icons/TwitterIcon.svg';

const contactLinks = [
  {
    name: "email",
    url: "mailto:danielagostinho.dev@gmail.com",
    icon: mailIcon,
  },
  {
    name: "github",
    url: "https://github.com/danielcagostinho",
    icon: githubIcon,
  },
  { name: "twitter", url: "https://twitter.com/agostinhodev", icon: twitterIcon },
];

const ContactSection = () => {
  return (
    <div className="ContactSection">
      <div className="ContactContent">
        <h3>How to get in touch:</h3>
        <div className="ContactLinks">
          {contactLinks.map((contactLink) => {
            return (
              <a
                className="ContactLink"
                href={contactLink.url}
                key={contactLink.name}
              >
                <img src={contactLink.icon} alt={contactLink.name} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
