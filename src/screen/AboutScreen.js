import React from 'react';
import { Hero, Card } from '../components';
import { valueCards, teamCards } from '../utils/info';
import image from '../assets/image/about.webp';
import teamImg from '../assets/image/team-img.webp';
import useTitle from '../custom-hooks/useTitle';

const AboutScreen = () => {
  useTitle('About');

  return (
    <>
      <Hero img={image}>
        <section className="about-hero">
          <div className="about-text">
            <div className="topline"></div>
            <h3>
              <q>Citazione famosa di un tizio famoso.</q>
            </h3>
            <div className="underline"></div>
          </div>
        </section>
      </Hero>
      <section className="about-value">
        <div className="container about-value-content">
          <h3 className="brand-secondary-color">IL NOSTRO PROGETTO</h3>
          <div className="card-section">
            {valueCards.map((card) => (
              <Card key={card.title} {...card} className={'value-card'} />
            ))}
          </div>
        </div>
      </section>
      <section className="about-team">
        <div
          className="team-img"
          style={{
            background: `url(${teamImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="about-team-content container">
          <h3 className="brand-secondary-color">IL NOSTRO TEAM</h3>
          <div className="card-section">
            {teamCards.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutScreen;
