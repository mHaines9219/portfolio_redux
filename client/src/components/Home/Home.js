import React, { useState } from 'react';
import Typical from 'react-typical';
import './Home.css';
import Icons from '../Icons/Icons';

import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import ProfileButtons from '../ProfileButtons/ProfileButtons';
import Typewriter from '../Typewriter/Typewriter';
export default function Home() {
  const [selectedId, setSelectedId] = useState(null);
  const CARDS = 10;
  const MAX_VISIBILITY = 3;

  const projects = [
    {
      id: 1,
      techStack: 'HTML Canvas, CSS, JS',
      title: 'Tommy The Turtle',
      description:
        'A simple browser game built with HTML Canvas, CSS, and JS, custom SFX and music.',
      link: 'https://mhaines9219.github.io/TommyTheTurtle/',
      repoLink: 'https://github.com/mHaines9219/TommyTheTurtle',
    },
    {
      id: 2,
      techStack: 'MERN Stack',
      title: 'SpaceBook',
      description:
        'A dummy social media platform for space enthusiasts to demonstrate MERN Stack proficiency, utilized NASA APOD API as well as image upload. Use guest@guest password: guest to login.',
      link: 'https://space-book-5ba0b58adc3c.herokuapp.com/',
      repoLink: 'https://github.com/mHaines9219/spaceBook-P3',
    },
    {
      id: 3,
      techStack: 'Express, MongoDB, Passport.js',
      title: 'Shelter Helper',
      description:
        'A full stack app to help animal shelters manage their pets, used Google oAuth technology',
      link: 'https://shelter-helper-e804b88bbe4a.herokuapp.com/',
      repoLink: 'https://github.com/mHaines9219/ShelterHelper',
    },
    {
      id: 4,
      techStack: 'Python, Flask, BeautifulSoup4, React',
      title: 'The The Counter',
      description:
        'A web scraper that produces the count of the word "the" on a given webpage, built with Python and BeautifulSoup4, React frontend.',
      link: '',
      repoLink: 'https://github.com/mHaines9219/the_counter',
    },
    {
      id: 5,
      techStack: 'Django, Python, React',
      title: 'Kingbird Audio Storefront',
      description:
        'A storefront to sell digital goods (presets and templates) for use in home recording. Products available for all major DAWs, dummy site.',
      link: '',
      repoLink: 'https://github.com/mHaines9219/kingbirdaudio-store',
    },
    {
      id: 6,
      techStack: 'ChatGPT',
      title: 'Custom ChatGPT Models',
      description:
        'Created and Prompted multiple GPTs for public and personal use: CodeMonkey, StudioBuddy, and ResumeBuilder',
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
