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
    { id: 1, subtitle: 'Subtitle 1', title: 'Tommy The Turtle' },
    { id: 2, subtitle: 'Subtitle 2', title: 'SpaceBook' },
    { id: 3, subtitle: 'Subtitle 3', title: 'Shelter Helper' },
    { id: 4, subtitle: 'Subtitle 4', title: 'The The Counter' },
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

          <div className="profile-buttons">
            <a
              href="resume_MatthewHaines.pdf"
              download="resume_MatthewHaines.pdf"
            >
              <button>Get My Resume</button>
            </a>
            <button>Contact Me</button>
          </div>
        </div>
        <h3 className="projects-header">CURRENT PROJECTS</h3>
        <div className="project-cards">
          <Carousel>
            {projects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                content={project.subtitle}
              />
            ))}
          </Carousel>
        </div>
        <div className="colz">
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
