import React from 'react';
import './Card.css';
export default function Card({
  key,
  title,
  techStack,
  description,
  link,
  repoLink,
}) {
  return (
    <>
      <div className="card" key={key}>
        <h3 className="card-title">{title}</h3>
        <h6 className="card-content">{techStack}</h6>
        <p className="card-desc">{description}</p>
        <div className="card-link-container">
          <a href={link} className="card-link">
            DEPLOYMENT
          </a>

          <a href={repoLink} className="card-link">
            REPO
          </a>
        </div>
      </div>
    </>
  );
}
