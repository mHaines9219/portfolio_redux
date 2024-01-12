import React from 'react';
import Typical from 'react-typical';

export default function Typewriter() {
  return (
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
  );
}
