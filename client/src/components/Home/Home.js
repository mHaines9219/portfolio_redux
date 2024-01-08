import React from 'react';
import Typical from 'react-typical';
import './Home.css';

export default function Home() {
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
            <button>Projects</button>
            <button>Contact Me</button>
          </div>
        </div>
        <div className="profile-picture">img</div>
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
