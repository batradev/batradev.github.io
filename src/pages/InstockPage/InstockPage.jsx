import React, { useState } from "react";
import instockImage1 from "../../assets/instock1.png";
import instockImage2 from "../../assets/instock2.png";
import instockImage3 from "../../assets/instock3.png";
import instockHeaderImg from "../../assets/instock.png";
import "./InstockPage.scss";

const InstockPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const images = [instockImage1, instockImage2, instockImage3];

  const openModal = (image) => {
    setActiveImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveImage(null);
  };

  return (
    <div className="instock-page">
      <img
        src={instockHeaderImg}
        alt="Instock Logo"
        className="instock-page__header-image"
      />
      <h1 className="instock-page__title">InStock: Team Development Project</h1>

      <section className="instock-page__section">
        <p className="instock-page__text">
          InStock is a full-stack inventory management system developed
          collaboratively by our team using Agile methodologies. The project
          simulates an application for managing inventories, aimed at addressing
          scalability and performance issues. <br />
          <br />
          We built a modern React frontend communicating with an Express
          backend, following industry best practices in version control, project
          management, and development workflows.
        </p>
      </section>

      <section className="instock-page__section">
        <h2 className="instock-page__subtitle">My Contributions</h2>
        <p className="instock-page__text">
          <strong>Global Component List:</strong> Created a comprehensive list
          of global components to ensure consistency across the application.
          <br />
          <strong>Core UI Components:</strong> Developed and styled foundational
          components including Button, IconButton, TableLink, and SearchBar,
          facilitating reusable and maintainable code.
          <br />
          <strong>SASS Architecture:</strong> Established initial partials and
          mixins for managing colors, fonts, breakpoints, etc., in SASS,
          promoting a scalable and organized styling system.
          <br />
          <strong> Warehouse Component and Page:</strong> Designed and
          implemented the Warehouse component and Warehouse page, ensuring full
          responsiveness across all breakpoints without overlapping elements.
          <br />
          <strong>Delete Warehouse Modal:</strong> Created a responsive Delete
          Warehouse modal using the React Modal package and corresponding
          WarehouseController.js, enhancing user interaction and experience.
          <br />
          <strong>Search Functionality:</strong> Developed the search bar
          functionality. Although time constraints prevented merging my branch
          into the main branch before the deadline, this work laid the
          groundwork for future enhancements.
          <br />
        </p>
      </section>

      <section className="instock-page__section">
        <h2 className="instock-page__subtitle">Project Features</h2>
        <ul className="instock-page__sublist">
          <li>
            Inventory and Warehouse Management: Implemented features for adding,
            editing, and deleting inventory items and warehouses. Users can view
            detailed information, manage stock levels, and maintain accurate
            records.
          </li>
          <li>
            Responsive Design: Ensured the application is fully responsive
            across all devices, providing a seamless user experience without
            overlapping elements.
          </li>
          <li>
            User Interaction Enhancements: Enhanced user experience with
            interactive elements such as modals for confirming actions, hover
            effects, and efficient navigation.
          </li>
          <li>
            Backend Integration: Developed RESTful API endpoints for CRUD
            operations on inventory and warehouse data, utilizing MySQL and
            Knex.js for database management and ensuring data persistence.
          </li>
          <li>
            Global Components and Styling: Established a consistent look and
            feel across the application with reusable components and a scalable
            SASS architecture following BEM methodology.
          </li>
        </ul>
      </section>

      <section className="instock-page__section">
        <h2 className="instock-page__subtitle">Technologies Used</h2>
        <p className="instock-page__text">
          <strong>Frontend:</strong> React, React Router DOM, SASS (with BEM
          methodology), JavaScript.
          <br />
          <strong>Backend:</strong> Node.js, Express.js, MySQL, Knex.js.
          <br />
          <strong>Tools and Practices:</strong> Git and GitHub (with feature
          branches, develop, and main branches), Jira for project management and
          Agile Scrum workflow, Postman for API testing, NPM packages (e.g.,
          React Modal), Environment variables (.env) for configuration.
        </p>
      </section>

      <section className="instock-page__section">
        <h2 className="instock-page__subtitle">What I Learned</h2>
        <ul className="instock-page__list">
          <li>
            Team Collaboration in an Agile Environment: Gained valuable
            experience working in a cross-functional team, participating in
            sprint planning, daily stand-ups, and collaborative problem-solving.
          </li>
          <li>
            Full-Stack Development: Enhanced skills in both front-end and
            back-end development, including React, Node.js, Express, and
            database integration.
          </li>
          <li>
            Version Control Best Practices: Practiced effective Git workflows,
            including branching strategies, pull requests, code reviews, and
            resolving merge conflicts.
          </li>
          <li>
            Problem-Solving Under Deadlines: Learned to prioritize tasks and
            collaborate effectively to meet project deadlines, even when facing
            technical challenges.
          </li>
        </ul>
      </section>
      <p className="homepage__project-capstone">
        Designed and developed as a project during my studies at BrainStation.
      </p>

      <div className="instock-page__images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Instock screenshot ${index + 1}`}
            className="instock-page__image"
            onClick={() => openModal(image)}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="instock-page__modal" onClick={closeModal}>
          <img
            src={activeImage}
            alt="Enlarged screenshot"
            className="instock-page__modal-image"
          />
        </div>
      )}
    </div>
  );
};

export default InstockPage;
