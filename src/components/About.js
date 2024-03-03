import React from 'react';
import video from "../assets/about.mp4"

const About = () => {
  return (
    <div>
      <div className='our-story background'>
        <video src={video} autoPlay loop muted/>
        <div className="our-service">About Us</div>
      </div>
      <section className="hero">
        <div className="heading">
          <h1><span>A</span>bout Us</h1>
        </div>

        <div className="container">
          <div className="content">
          <div className="hero-content">
            <h2>Glam Community Engagement</h2>
            <p>
              Glam Aura is not just a website; it's a community of individuals who appreciate the art of living beautifully. Connect with us on social media, share your glamorous moments, and be part of the conversation. Together, let's inspire and uplift each other to embrace the glamour within.
              Discuss celebrity fashion and style. Recap red carpet events with a focus on glamorous looks. Provide tips on achieving celebrity-inspired looks.
            </p>
          </div>

          <div className="columns-container">
            <div className="column" style={{ backgroundColor: 'rgb(222, 161, 189)' }}>
              <i className="fa-solid fa-scissors"></i>
              <p>Fashion</p>
            </div>
            <div className="column" style={{ backgroundColor: 'rgb(222, 161, 189)' }}>
              <i className="fa-solid fa-bottle-water"></i>
              <p>Quality</p>
            </div>
            <div className="column" style={{ backgroundColor: 'rgb(222, 161, 189)' }}>
              <i className="fa-solid fa-border-top-left"></i>
              <p>Stylish</p>
            </div>
          </div>
        </div>

          <div className="hero-image">
            <img src="images/frontimage.jpg" alt="Front Image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
