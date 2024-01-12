import React from 'react';

export default function ProfileButtons() {
  function ContactButton() {
    window.location = 'mailto:mhaines9219@gmail.com?subject=Website%20Inquiry';
  }

  return (
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
  );
}
