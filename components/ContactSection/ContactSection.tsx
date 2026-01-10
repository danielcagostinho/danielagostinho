'use client';

import Image from 'next/image';

const contactLinks = [
  {
    name: 'email',
    url: 'mailto:danielagostinho.dev@gmail.com',
    icon: '/assets/icons/MailIcon.svg',
  },
  {
    name: 'github',
    url: 'https://github.com/danielcagostinho',
    icon: '/assets/icons/GithubIconWhite.png',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/agostinhodev',
    icon: '/assets/icons/TwitterIcon.svg',
  },
];

const ContactSection = () => {
  return (
    <div className="bg-tertiary flex justify-center items-center w-full h-[100px]" id="contact">
      <div className="max-w-6xl w-full px-4 flex flex-row justify-between items-center">
        <h4 className="text-white font-bold text-lg md:text-xl lg:text-2xl tracking-tight leading-[150%]">
          Get in touch!
        </h4>
        <div className="flex flex-row justify-between gap-5 mx-5 w-full max-w-[40%] md:max-w-[30%] lg:max-w-[25%]">
          {contactLinks.map(contactLink => (
            <a
              key={contactLink.name}
              href={contactLink.url}
              className="hover:scale-110 transition-transform duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={contactLink.icon}
                alt={contactLink.name}
                width={24}
                height={24}
                className="w-6 h-6 md:w-7 md:h-7 lg:w-[30px] lg:h-[30px]"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
