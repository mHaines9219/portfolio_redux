import React, { useState } from 'react';
import Typical from 'react-typical';
import './Home.css';

import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
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
        'A full stack app to help animal shelters manage their pets, used Google oAuth technology and Multer for image uploads.',
      link: '',
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
      techStack: 'ChatGPT',
      title: 'Custom ChatGPT Models',
      description:
        'Created and Prompted multiple GPTs for public and personal use: CodeMonkey, StudioBuddy, and ResumeBuilder',
      link: '',
      repoLink: '',
    },
  ];

  function ContactButton() {
    window.location = 'mailto:mhaines9219@gmail.com?subject=Website%20Inquiry';
  }

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
              <h2 className="typewriter">
                {''}
                <Typical
                  loop={1}
                  steps={[
                    'Creative Professional',
                    800,
                    'React Developer',
                    800,
                    'Python Developer',
                    800,
                    'Bird Enthusiast',
                    800,
                    'Full Stack Web Developer',
                    800,
                  ]}
                />
              </h2>
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
          <div className="colz">
            <div className="profile-buttons">
              <a href="MH_Resume.pdf" download="MH_Resume.pdf">
                <button className="bot-btn">Get My Resume</button>
              </a>
              <button className="bot-btn" onClick={ContactButton}>
                Contact Me
              </button>
            </div>
          </div>
          <div className="colz-icon">
            <a href="https://www.instagram.com/hattymaines/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://github.com/mHaines9219">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/mhaines9219/">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
