// Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2 className="hero-title">Taste the Best Dishes in Town</h2>
        <p className="hero-subtitle">Experience culinary excellence at its finest</p>
        <img 
          src="https://i.pinimg.com/originals/e7/72/c6/e772c601792dcec68a584626704d76b3.jpg" 
          alt="Restaurant ambiance" 
          className="hero-image"
        />
        <button className="cta-button">Explore Menu</button>
      </div>
    </section>
  );
};

export default Hero;