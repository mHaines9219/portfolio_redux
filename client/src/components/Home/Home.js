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
      techStack: 'Rust, Solidity Blockchain, Typescript, React, Postgresql',
      title: 'Stealth Project',
      description:
        'Contributed to  a full-stack Solidity-based coin creation and trading platform, integrating React hooks for smart contract interactions, a Rust backend with Axum and PostgreSQL, and an optimized user experience with AWS S3 for asset uploads.',
    },
    {
      id: 2,
      techStack: 'Next.JS, React, Typescript',
      title: 'Drip Dome Productions Website',
      description:
        'Designed and developed website for production company using Next.js and TypeScript integrating Framer Motion for animations and Swiper carousels for engaging content. Implemented a custom email solution with Twilio SendGrid.',
      link: 'https://www.dripdome.com',
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
        'The AI Web Scraper automates data extraction from web pages using Python, Selenium, and Bright Data, handling CAPTCHAs and providing an interface for data parsing.',
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
