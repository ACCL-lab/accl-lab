import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import '../styles/style.css';
import labVideo from "../assets/videos/lab-bg3.mp4";

// Section Components
import About from './About';
import News from './News';
import Projects from './Projects';
import Research from './Research';
import Publications from './Publications';
import Team from './Team';
import Contact from './Contact';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

// AutoScroll Component
//import AutoScroll from "../components/Autoscroll1";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      {/* 🔁 Auto Scroll Handler 
      <AutoScroll />*/}


      {/* Hero Section */}
      <section id="hero" className="hero-section py-5">
        <video autoPlay loop muted playsInline className="video-background">
          <source src={labVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="interactive-lines"></div>
        <div className="hero-content">
          <h1 className="display-4 fw-bold">Welcome to Accelerated Computing Lab</h1>
          <p className="lead">Department of CSE, IIT BHILAI</p>
          <HashLink smooth to="#about-section" className="btn btn-primary mt-3">Explore More</HashLink>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-5 section-offset">
        <div className="container">
          <About />
        </div>
      </section>

      {/* News Section */}
      <section id="news-section" className="py-5 section-offset">
        <div className="container">
          <News />
        </div>
      </section>

      {/* Research Section */}
      <section id="research-section" className="py-5 section-offset">
        <div className="container">
          <Research />
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-5 section-offset">
        <div className="container">
          <Publications />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-1 pb-4 section-offset">
        <div className="container">
          <Projects />
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="pt-1 pb-4 section-offset">
        <div className="container">
          <Team />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-4 section-offset">
        <div className="container">
          <Contact handleOpen={handleOpen} />
        </div>
      </section>

      {/* Footer */}
      <Footer handleOpen={handleOpen} />

      {/* Contact Modal */}
      <ContactModal show={showModal} handleClose={handleClose} />
    </>
  );
};

export default Home;
