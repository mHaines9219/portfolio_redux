import React, { useState } from 'react';
import {
  TiChevronLeftOutline,
  TiChevronRightOutline,
} from 'https://cdn.skypack.dev/react-icons/ti';
import './Carousel.css';

export default function Carousel({ children }) {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  const CARDS = 10;
  const MAX_VISIBILITY = 3;

  return (
    <div>
      <div className="carousel">
        {active > 0 && (
          <button className="nav left" onClick={() => setActive((i) => i - 1)}>
            &lt;
          </button>
        )}
        {React.Children.map(children, (child, i) => (
          <div
            className="card-container"
            style={{
              '--active': i === active ? 1 : 0,
              '--offset': (active - i) / 3,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 3,
              'pointer-events': active === i ? 'auto' : 'none',
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
            }}
          >
            {child}
          </div>
        ))}
        {active < count - 1 && (
          <button className="nav right" onClick={() => setActive((i) => i + 1)}>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
}
