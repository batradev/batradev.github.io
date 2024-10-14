import React from "react";
import { Link } from "react-router-dom";
import mnemaImg from "../../assets/mnema.png";
import brainflixImg from "../../assets/brainflix.png";
import bandsiteImg from "../../assets/bandsite.png";
import nytImg from "../../assets/nyt.png";
import instockImg from "../../assets/instock.png";
import emailIcon from "../../assets/gmail.webp";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="homepage__intro">
        <h1 className="homepage__title">Hi, I'm Yulia</h1>
        <p className="homepage__description">
          I'm a software developer with a passion for solving complex problems
          through technology. Explore my projects below.
        </p>
      </section>

      <section className="homepage__projects">
        <div className="homepage__project-list">
          <Link to="/project/mnema" className="homepage__project-card">
            <img
              src={mnemaImg}
              alt="Mnema"
              className="homepage__project-image"
            />
            <h3 className="homepage__project-title">
              Mnema: Mnemonic Language Learning App
            </h3>
            <p className="homepage__project-summary">
              A Capstone project: A full-stack language learning application
              leveraging mnemonics to help users memorize new vocabulary
              more effectively.
            </p>
          </Link>
          <Link to="/project/brainflix" className="homepage__project-card">
            <img
              src={brainflixImg}
              alt="Brainflix"
              className="homepage__project-image"
            />
            <h3 className="homepage__project-title">
              BrainFlix: Video Streaming Platform Prototype
            </h3>
            <p className="homepage__project-summary">
              A full-stack application simulating a video streaming service,
              featuring video playback, upload functionality, and dynamic
              content rendering.
            </p>
          </Link>
          <Link to="/project/bandsite" className="homepage__project-card">
            <img
              src={bandsiteImg}
              alt="Bandsite"
              className="homepage__project-image"
            />
            <h3 className="homepage__project-title">
              BandSite: Responsive Website for a Music Band
            </h3>
            <p className="homepage__project-summary">
              A fully responsive website showcasing a band's music, events, and
              interactive features like a comments section and shows page.
            </p>
          </Link>

          <Link to="/project/instock" className="homepage__project-card">
            <img
              src={instockImg}
              alt="Instock"
              className="homepage__project-image"
            />
            <h3 className="homepage__project-title">
              InStock: Team Development Project
            </h3>
            <p className="homepage__project-summary">
              A collaborative full-stack inventory management system with
              features for managing warehouses and inventory items efficiently.
            </p>
          </Link>
          <Link to="/project/nyt" className="homepage__project-card">
            <img
              src={nytImg}
              alt="New York Times Daily Bites"
              className="homepage__project-image"
            />
            <h3 className="homepage__project-title">
              Daily Bites: Cross-Team Development Project
            </h3>
            <p className="homepage__project-summary">
              An interactive feature developed as an Industry Project for The
              New York Times to boost subscriber engagement through quick,
              bite-sized content.
            </p>
          </Link>
        </div>
      </section>

      <footer className="homepage__footer">
        <a
          href="https://github.com/batradev"
          target="_blank"
          rel="noopener noreferrer"
          className="homepage__icon"
        >
          <img
            src={githubIcon}
            alt="GitHub"
            className="homepage__footer-icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ybatrakova"
          target="_blank"
          rel="noopener noreferrer"
          className="homepage__icon"
        >
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="homepage__footer-icon"
          />
        </a>
        <a href="batrakova.yulia@gmail.com" className="homepage__icon">
          <img src={emailIcon} alt="Email" className="homepage__footer-icon" />
        </a>
      </footer>
    </div>
  );
};

export default HomePage;
