import React from 'react';
import './Card.css';

export default function Card({
  title,
  techStack,
  description,
  link,
  repoLink,
}) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <h6 className="card-content">{techStack}</h6>
      <p className="card-desc">{description}</p>
      <div className="card-link-container">
        {link && (
          <a href={link} className="card-link" target="_blank" rel="noreferrer">
            DEPLOYMENT
          </a>
        )}

        {repoLink && (
          <a
            href={repoLink}
            className="card-link"
            target="_blank"
            rel="noreferrer"
          >
            REPO
          </a>
        )}
      </div>
    </div>
  );
}
