import React from 'react';
import { Hero } from '../components';
import backImage from '../assets/image/Contact-hero.png';
import useTitle from '../custom-hooks/useTitle';

const ContactScreen = () => {
  useTitle('Contact');

  return (
    <>
      <Hero img={backImage} disableOverlay>
        <div className="contact-hero container">
          <div className="contact-hero-text">
            <div className="contact-hero-title">
              <h2 className="contact-title">
                Vorresti aggiungere un cocktail? no? e allora vai a comprarti il
                tavernello in cartone!
              </h2>
              <h4 className="contact-subtitle">
                Scheeeeeerzo! Il nostro team è sempre disponibile per valutare
                possibili nuove ricette ed ad aggiungerle al nostro database. Tu
                inviaci la tua ricetta, e noi ce ne sbatteremo altamente!!!
              </h4>
            </div>
          </div>
          <div className="contact-form-container container">
            {/* Libreria usata per i form:  https://formspree.io/ */}
            <form
              className="contact-form container"
              action="https://formspree.io/f/xlezvygv"
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="input"
                  placeholder="Nome"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="cognome">Cognome</label>
                <input
                  type="text"
                  id="cognome"
                  name="cognome"
                  className="input"
                  placeholder="Cognome"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  placeholder="email@esempio.com"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="cellulare">Telefono</label>
                <input
                  type="cel"
                  id="cellulare"
                  name="cellulare"
                  className="input"
                  placeholder="555 555-5555"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="ricetta">La tua ricetta</label>
                <textarea
                  type="tel"
                  id="ricetta"
                  name="ricetta"
                  className="input"
                  rows="4"
                  placeholder="Descrivi la tua ricetta"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Invia Ricetta
              </button>
            </form>
          </div>
          <form></form>
        </div>
      </Hero>
      <div className="contact-screen"></div>
    </>
  );
};

export default ContactScreen;
