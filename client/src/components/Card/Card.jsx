import React from 'react';

export default function Card({ key, title, content }) {
  return (
    <>
      <div className="card">
        <h3 className="card-title">{title}</h3>
        <h5 className="card-content">{content}</h5>
      </div>
    </>
  );
}
