import React, { useState } from "react";
import brainflixImage1 from "../../assets/brainflix1.png";
import brainflixImage2 from "../../assets/brainflix2.png";
import brainflixImage3 from "../../assets/brainflix3.png";
import brainflixHeaderImg from "../../assets/brainflix.png";
import "./BrainflixPage.scss";

const BrainflixPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const images = [brainflixImage1, brainflixImage2, brainflixImage3];

  const openModal = (image) => {
    setActiveImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveImage(null);
  };

  return (
    <div className="brainflix-page">
      <img
        src={brainflixHeaderImg}
        alt="Brainflix Logo"
        className="brainflix-page__header-image"
      />
      <h1 className="brainflix-page__title">
        BrainFlix: Video Streaming Platform Prototype
      </h1>

      <section className="brainflix-page__section">
        <p className="brainflix-page__text">
          BrainFlix is a prototype of a video streaming platform developed to
          simulate a real-world application similar to YouTube. Over the course
          of three sprints, I implemented all the required features, applying
          both frontend and backend development skills using modern web
          technologies.
        </p>
      </section>

      <section className="brainflix-page__section">
        <h2 className="brainflix-page__subtitle">Implemented Features</h2>

        <p className="brainflix-page__second-subtitle">
          Sprint 1: Development of a Static Prototype
        </p>
        <ul className="brainflix-page__sublist">
          <li>
            Responsive Design: Created a fully responsive interface that closely
            matches the provided mockups, ensuring a seamless user experience
            across various devices.
          </li>
          <li>
            Dynamic Content Rendering: Displayed video details, comments, and
            side videos dynamically using React components and state management.
          </li>
          <li>
            Data Handling: Managed data within the application's state,
            simulating API responses using provided JSON files.
          </li>
        </ul>

        <p className="brainflix-page__second-subtitle">
          Sprint 2: Routing and API Integration
        </p>
        <ul className="brainflix-page__sublist">
          <li>
            Multi-Page Routing: Implemented client-side routing with
            react-router-dom to create a multi-page application.
          </li>
          <li>
            API Integration: Fetched video data and details from a mock API
            using Axios, displaying content dynamically based on user
            interactions.
          </li>
          <li>
            Video Upload Page: Developed a video upload form with submission
            handling that redirects to the home page upon completion.
          </li>
          <li>
            Enhanced User Interaction: Enabled dynamic updating of video content
            through routing when users select different videos.
          </li>
        </ul>
        <p className="brainflix-page__second-subtitle">
          Sprint 3: Building a Custom Backend
        </p>
        <ul className="brainflix-page__sublist">
          <li>
            Custom API Server: Built a backend API with Node.js and Express to
            handle video data, matching the endpoints and response structures of
            the mock API.
          </li>
          <li>
            Data Persistence: Implemented data storage using a JSON file,
            ensuring data persists across server restarts.
          </li>
          <li>
            Static File Serving: Configured the server to serve static assets,
            including video thumbnails.
          </li>
          <li>
            Form Handling and Data Submission: Enabled the video upload
            functionality to post new videos to the backend API.
          </li>
          <li>
            File Handling with Multer: Utilized Multer middleware for handling
            file uploads on the server side.
          </li>
        </ul>
      </section>

      <section className="brainflix-page__section">
        <h2 className="brainflix-page__subtitle">Technologies Used</h2>
        <p className="brainflix-page__text">
          <strong>Frontend:</strong> React, React Router DOM, Axios, SASS,
          JavaScript.
          <br />
          <strong>Backend:</strong> Node.js, Express.js, Multer (for file
          handling).
          <br />
          <strong>Version Control:</strong> Git with feature branches, develop,
          and main branches.
          <br />
          <strong>Tools:</strong> Postman (for API testing), NPM scripts,
          Webpack (via Create React App).
        </p>
      </section>

      <section className="brainflix-page__section">
        <h2 className="brainflix-page__subtitle">What I Learned</h2>
        <ul className="brainflix-page__list">
          <li>
            Full-Stack Development: Gained hands-on experience in both frontend
            and backend development, creating a complete web application from
            scratch.
          </li>
          <li>
            API Development and Integration: Learned to build RESTful APIs and
            integrate them with frontend applications using Axios.
          </li>
          <li>
            State and Props Management: Improved skills in managing data flow in
            React applications.
          </li>
          <li>
            Routing in React: Mastered client-side routing to enhance user
            experience without page reloads.
          </li>
          <li>
            CSS Methodologies: Enhanced styling skills using SASS and BEM for
            organized and maintainable code.
          </li>
          <li>
            Data Persistence: Implemented server-side data storage to maintain
            application state.
          </li>
          <li>
            Best Practices in Version Control: Practiced effective Git workflows
            for collaborative development.
          </li>
        </ul>
      </section>

      <section className="brainflix-page__section">
        <h2 className="brainflix-page__subtitle">Source Code</h2>
        <p className="brainflix-page__text">
          <strong>Frontend:</strong>{" "}
          <a
            href="https://github.com/batradev/yulia-batrakova-brainflix"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/batradev/yulia-batrakova-brainflix
          </a>
          <br />
          <strong>Backend:</strong>{" "}
          <a
            href="https://github.com/batradev/yulia-batrakova-brainflix-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/batradev/yulia-batrakova-brainflix-api
          </a>
        </p>
      </section>

      <div className="brainflix-page__images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Brainflix screenshot ${index + 1}`}
            className="brainflix-page__image"
            onClick={() => openModal(image)}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="brainflix-page__modal" onClick={closeModal}>
          <img
            src={activeImage}
            alt="Enlarged screenshot"
            className="brainflix-page__modal-image"
          />
        </div>
      )}
    </div>
  );
};

export default BrainflixPage;
