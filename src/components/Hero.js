import React from 'react';
import backImage from '../assets/image/home-hero.webp';

const Hero = ({ children, img, disableOverlay }) => {
  const defaultImage = img ? img : backImage;

  return (
    <div
      className="hero-img-container"
      style={{
        background: `url(${defaultImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className={!disableOverlay ? 'hero-overlay' : ''}>
        <div className="container hero-container">{children}</div>
      </div>
    </div>
  );
};

export default Hero;
