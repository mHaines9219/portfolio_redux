import React from 'react';
import './Home.css';
import Icons from '../Icons/Icons';

import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import ProfileButtons from '../ProfileButtons/ProfileButtons';
import Typewriter from '../Typewriter/Typewriter';
export default function Home() {
  const projects = [
    {
      id: 1,
      techStack: 'MERN Stack',
      title: 'SpaceBook',
      description:
        'A dummy social media platform for space enthusiasts to demonstrate MERN Stack proficiency, utilized NASA APOD API as well as image upload. Use guest@guest password: guest to login.',
      link: 'https://space-book-5ba0b58adc3c.herokuapp.com/',
      repoLink: 'https://github.com/mHaines9219/spaceBook-P3',
    },
    {
      id: 2,
      techStack: 'Next.JS, React, Typescript',
      title: 'AtlasAgent AI Website',
      description:
        'Built several frontend and backend components for a website that uses AI to help real estate agents generate leads and manage their business.',
      link: 'https://atlasagent.ai/',
    },

    {
      id: 3,
      techStack: 'Next.JS, React, Typescript',
      title: 'Sparkling Pools of Texas Website',
      description:
        'Lead the effort to build a website for a local pool cleaning business, utilized Next.JS for SEO and performance benefits.',
      link: 'https://www.sparklingpoolstx.com/',
    },

    {
      id: 4,
      techStack:
        'Python, Selenium, BeautifulSoup4, Streamlit, langChain, Bright Data, Chromium Remote Connection',
      title: 'AI Web Scraper',
      description:
        'The AI Web Scraper is a tool that automates data extraction from web pages, including those with CAPTCHAs, using Python, Selenium, and Bright Data. With a Streamlit interface for customizable scraping and llama3 for precise data parsing, it efficiently handles large volumes of content, showcasing my expertise in web automation and dynamic application development.',
      link: '',
      repoLink: 'https://github.com/mHaines9219/ai-webscraper',
    },
    {
      id: 5,
      techStack: 'Python, Flask, BeautifulSoup4, React',
      title: 'The Word Counter',
      description:
        'A web scraper that produces the count of a user-inputted word on a given webpage, built with Python and BeautifulSoup4, React frontend.',
      link: 'https://polar-sea-72538-31ead2a103d4.herokuapp.com/',
      repoLink: 'https://github.com/mHaines9219/the_counter',
    },
    {
      id: 6,
      techStack: 'ChatGPT',
      title: 'Custom ChatGPT Models',
      description:
        'Created and Prompted multiple GPTs for public and personal use: CodeMonkey, BetBetter, StudioBuddy, and ResumeBuilder',
      link: '',
      repoLink: '',
    },
  ];

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="greeting">
              <h1 className="hello-world-header">Hello World!</h1>
              <h2 className="name-header">USER: Matt Haines</h2>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <Typewriter />
              <span className="profile-bio"></span>
            </span>
          </div>

          <h3 className="projects-header">CURRENT PROJECTS</h3>
          <div className="project-cards">
            <Carousel>
              {projects.map((project) => (
                <Card
                  key={project.id}
                  title={project.title}
                  techStack={project.techStack}
                  description={project.description}
                  link={project.link}
                  repoLink={project.repoLink}
                />
              ))}
            </Carousel>
          </div>
          <ProfileButtons />
          <Icons />
        </div>
      </div>
    </div>
  );
}
