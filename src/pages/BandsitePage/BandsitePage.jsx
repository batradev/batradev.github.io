import React, { useState } from "react";
import bandsiteImage1 from "../../assets/bandsite1.png";
import bandsiteImage2 from "../../assets/bandsite2.png";
import bandsiteImage3 from "../../assets/bandsite3.png";
import bandsiteHeaderImg from "../../assets/bandsite.png";
import "./BandsitePage.scss";

const BandsitePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const images = [bandsiteImage1, bandsiteImage2, bandsiteImage3];

  const openModal = (image) => {
    setActiveImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveImage(null);
  };

  return (
    <div className="bandsite-page">
      <img
        src={bandsiteHeaderImg}
        alt="Bandsite Logo"
        className="bandsite-page__header-image"
      />
      <h1 className="bandsite-page__title">BandSite: Responsive Website for a Music Band</h1>

      <section className="bandsite-page__section">
        <p className="bandsite-page__text">
          BandSite is a fully responsive website developed for an up-and-coming music band. Over three sprints, I designed and implemented the site, ensuring it met all specified requirements and provided an engaging user experience. The project is deployed on Netlify, making it accessible across various devices and platforms.
        </p>
      </section>

      <section className="bandsite-page__section">
        <h2 className="bandsite-page__subtitle">Implemented Features</h2>

        <p className="bandsite-page__second-subtitle">Sprint 1: Building the Responsive Layout</p>
        <ul className="bandsite-page__sublist">
          <li>Created a mobile-first, fully responsive website matching the provided mockups.</li>
          <li>Integrated provided assets for the hero image, musician images, and photo gallery, ensuring seamless adaptation across different screen sizes.</li>
          <li>Utilized SASS for styling, incorporating variables and mixins for reusable code; employed BEM methodology for organized CSS.</li>
          <li>Implemented Flexbox for efficient and responsive layout control.</li>
        </ul>

        <p className="bandsite-page__second-subtitle">Sprint 2: Adding Interactivity with JavaScript</p>
        <ul className="bandsite-page__sublist">
          <li>Enabled users to add new comments through a form that captures their name and comment, displaying comments dynamically with the newest at the top.</li>
          <li>Initialized the page with three default comments using a JavaScript array.</li>
          <li>Created a Shows page displaying upcoming shows, dynamically generating show data from a JavaScript array.</li>
          <li>Embedded a SoundCloud player using an iframe for users to play a selected song.</li>
          <li>Applied interactive styling to show items, highlighting them on hover and selection using JavaScript and CSS classes.</li>
        </ul>

        <p className="bandsite-page__second-subtitle">Sprint 3: Integrating with a Backend API</p>
        <ul className="bandsite-page__sublist">
          <li>Developed a BandSiteApi class to interact with the provided backend API using Axios, implementing methods for fetching comments and shows data.</li>
          <li>Modified the comments section to retrieve and display comments from the backend API, allowing users to add new comments stored on the server.</li>
          <li>Updated the Shows page to fetch and display show data from the backend API.</li>
          <li>Employed async/await syntax to handle asynchronous API calls, ensuring data is sorted and displayed correctly.</li>
          <li>Added basic error handling for API requests to enhance user experience in case of network issues.</li>
        </ul>
      </section>

      <section className="bandsite-page__section">
        <h2 className="bandsite-page__subtitle">Technologies Used</h2>
        <p className="bandsite-page__text">
          <strong>Frontend:</strong> HTML5, CSS3 (SASS with variables and mixins), JavaScript, Flexbox.<br />
          <strong>Libraries and Tools:</strong> Axios for HTTP requests, SASS compiler, BEM methodology for CSS class naming.<br />
          <strong>Deployment:</strong> Netlify for hosting the live site.
        </p>
      </section>

      <section className="bandsite-page__section">
        <h2 className="bandsite-page__subtitle">What I Learned</h2>
        <ul className="bandsite-page__list">
          <li>Strengthened skills in creating mobile-first, responsive layouts across different devices.</li>
          <li>Gained experience with SASS, using variables, mixins, and nesting for efficient CSS.</li>
          <li>Improved proficiency in manipulating the DOM to dynamically generate and update content.</li>
          <li>Learned how to interact with a backend API using Axios, handling GET and POST requests with authentication.</li>
          <li>Enhanced understanding of async/await for handling asynchronous operations in JavaScript.</li>
        </ul>
      </section>

      <section className="bandsite-page__section">
        <h2 className="bandsite-page__subtitle">Project Links</h2>
        <p className="bandsite-page__text">
          <strong>Live Site on Netlify:</strong>{" "}
          <a href="https://band-site-yulia-batrakova.netlify.app/" target="_blank" rel="noopener noreferrer">
            BandSite
          </a>
        </p>
      </section>
      <p className="homepage__project-capstone">
      Designed and developed as a project during my studies at BrainStation.
      </p>

      <div className="bandsite-page__images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Bandsite screenshot ${index + 1}`}
            className="bandsite-page__image"
            onClick={() => openModal(image)}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="bandsite-page__modal" onClick={closeModal}>
          <img
            src={activeImage}
            alt="Enlarged screenshot"
            className="bandsite-page__modal-image"
          />
        </div>
      )}
    </div>
  );
};

export default BandsitePage;
