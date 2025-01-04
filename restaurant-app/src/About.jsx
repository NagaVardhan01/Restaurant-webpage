// About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">Our Story</h2>
        <div className="about-content">
          <div className="about-image-container">
            <img 
              src="https://i0.wp.com/www.designlike.com/wp-content/uploads/2018/03/restaurant-1948732_1920.jpg" 
              alt="Restaurant interior" 
              className="about-image"
            />
          </div>
          <div className="about-text">
            <p>
              Since 2010, Savory Delights has been serving exceptional cuisine that 
              combines traditional recipes with modern innovation. Our passion for 
              quality ingredients and authentic flavors has made us a beloved 
              destination for food enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;