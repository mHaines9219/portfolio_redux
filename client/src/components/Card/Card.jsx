import React from 'react';
import './Card.css';
export default function Card({ key, title, techStack, description, link }) {
  return (
    <>
      <div className="card">
        <h3 className="card-title">{title}</h3>
        <h6 className="card-content">{techStack}</h6>
        <p className="card-desc">{description}</p>
        <a href={link} className="card-link">
          DEPLOYMENT
        </a>
      </div>
    </>
  );
}
