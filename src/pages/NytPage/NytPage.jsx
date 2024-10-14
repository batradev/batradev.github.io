import React, { useState } from "react";
import nytImage1 from "../../assets/nyt1.png";
import nytImage2 from "../../assets/nyt2.png";
import nytImage3 from "../../assets/nyt3.png";
import nytHeaderImg from "../../assets/nyt.png";
import "./NytPage.scss";
import pitchPDF from "../../assets/documents/daily-bites-pitch.pdf";

const NytPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const images = [nytImage1, nytImage2, nytImage3];

  const openModal = (image) => {
    setActiveImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveImage(null);
  };

  return (
    <div className="nyt-page">
      <img
        src={nytHeaderImg}
        alt="Daily Bites Logo"
        className="nyt-page__header-image"
      />
      <h1 className="nyt-page__title">
        Daily Bites for The New York Times: Cross-Team Development Project
      </h1>

      <section className="nyt-page__section">
        <p className="nyt-page__text">
          During a week-long industry project at BrainStation, I collaborated
          with a team of UX designers and data scientists to develop a feature
          called Daily Bites.
        </p>
        <p className="nyt-page__text">
          The project's objective was to address the challenge: "How might we
          increase subscribers' awareness of and deepen engagement with The New
          York Times' products — Cooking, Games, Audio, Wirecutter, and The
          Athletic?".
        </p>
        <p className="nyt-page__text">
          Our solution was recognized for its strong alignment with the brand
          and significant potential to deepen user involvement.
        </p>
      </section>

      <section className="nyt-page__section">
        <h2 className="nyt-page__subtitle">My Contributions</h2>
        <p className="nyt-page__text">
          <strong>Frontend Development:</strong> Focused on creating a visual
          experience that fully replicated our proposed feature as demonstrated
          in mockups.
          <br />
          <strong>Backend Integration Ideas:</strong> Proposed concepts for
          backend implementation, highlighting possibilities for
          personalization, data collection, and real-time analytics to enhance
          user engagement.
          <br />
          <strong>Collaboration:</strong> Worked closely with UX designers and
          data scientists to ensure technical feasibility and alignment with
          user research findings.
          <br />
          <strong>Marketing Campaign Pitch:</strong> Creation of a marketing
          pitch to effectively communicate the value proposition of Daily Bites
          to stakeholders.
        </p>
      </section>

      <section className="nyt-page__section">
        <h2 className="nyt-page__subtitle">Project Features</h2>
        <ul className="nyt-page__list">
          <li>
            Daily Bites Feature: Introduced a dynamic new section offering
            bite-sized content tailored for subscribers on the go, modeled after
            the popular 'stories' format but uniquely crafted to reflect The New
            York Times' editorial excellence and audience expectations.
          </li>
          <li>
            Interactive Content Formats: Developed interactive formats such as
            daily word challenges, cook-along sessions, audio clip matching,
            tips and hacks cards, and interactive polls to engage users with
            various NYT products.
          </li>
          <li>
            Personalization and Data Collection: Proposed methods for collecting
            user interaction data (views, clicks, likes, time spent) to refine
            and personalize content offerings, and suggested using real-time
            analytics to adapt content based on user preferences.
          </li>
          <li>
            User Engagement Strategies: Designed content to be available for a
            limited time to create a sense of urgency, encouraging timely
            engagement and deeper interaction with The New York Times' products.
          </li>
        </ul>
      </section>

      <section className="nyt-page__section">
        <h2 className="nyt-page__subtitle">What I Learned</h2>
        <ul className="nyt-page__list">
          <li>
            Interdisciplinary Collaboration: Gained experience working in a
            cross-functional team, enhancing communication and teamwork skills
            across different disciplines.
          </li>
          <li>
            Rapid Prototyping: Learned to develop and deliver a functional
            prototype within tight deadlines, focusing on essential features and
            user experience.
          </li>
          <li>
            User-Centered Design: Understood the importance of aligning
            technical development with user needs, informed by data and user
            research.
          </li>
          <li>
            Presentation and Pitching: Improved ability to effectively pitch
            ideas to stakeholders, highlighting the project's value and
            potential impact.
          </li>
        </ul>
      </section>

      <section className="nyt-page__section">
        <p className="nyt-page__text">
          <a
            href="https://www.figma.com/proto/A0ENO14qrTyVig1T3gV8ui/hackathon%3A-NYT?node-id=26-3906&t=kd4rsDZ6oAfHR8A0-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2"
            target="_blank"
            rel="noopener noreferrer"
            className="nyt-page__link"
          >
            View Prototype
          </a>
          <br />
          <a
            href={pitchPDF}
            download="NYT_Marketing_Pitch.pdf"
            className="nyt-page__link"
          >
            Download Marketing Pitch (PDF)
          </a>
        </p>
      </section>

      <div className="nyt-page__images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Daily Bites screenshot ${index + 1}`}
            className="nyt-page__image"
            onClick={() => openModal(image)}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="nyt-page__modal" onClick={closeModal}>
          <img
            src={activeImage}
            alt="Enlarged screenshot"
            className="nyt-page__modal-image"
          />
        </div>
      )}
    </div>
  );
};

export default NytPage;
