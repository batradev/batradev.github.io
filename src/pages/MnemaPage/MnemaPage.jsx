import React, { useState } from "react";
import mnemaImage1 from "../../assets/mnema1.png";
import mnemaImage2 from "../../assets/mnema2.png";
import mnemaImage3 from "../../assets/mnema3.png";
import mnemaHeaderImg from "../../assets/mnema4.png";
import "./MnemaPage.scss";

const MnemaPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const images = [mnemaImage1, mnemaImage2, mnemaImage3];

  const openModal = (image) => {
    setActiveImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveImage(null);
  };

  return (
    <div className="mnema-page">
      <img
        src={mnemaHeaderImg}
        alt="Mnema Logo"
        className="mnema-page__header-image"
      />
      <h1 className="mnema-page__title">
        Mnema: Mnemonic Language Learning App
      </h1>

      <section className="mnema-page__section">
        <p className="mnema-page__text">
          Mnema is an application designed to make learning new languages more
          efficient by utilizing mnemonic technique, a method of improving
          memory by creating associations between new information and already
          known concepts.
        </p>
      </section>

      <section className="mnema-page__section">
        <h2 className="mnema-page__subtitle">The Problem</h2>
        <p className="mnema-page__text">
          Memorizing new words when learning a language from scratch can be
          challenging. Traditional flashcards that offer only words and
          translations often make the learning process feel tedious and
          time-consuming. There's a need for a more engaging approach that
          enhances retention and keeps learners motivated.
        </p>
      </section>

      <section className="mnema-page__section">
        <h2 className="mnema-page__subtitle">The Solution</h2>
        <p className="mnema-page__text">
          Mnema addresses this challenge by automatically generating mnemonic
          images and descriptions tailored to each user's personal preferences.
          Understanding that the key to effective mnemonics is that the more
          unusual and vivid the image, the better it sticks in memory, the app
          creates quirky and memorable associations. By linking new words to
          these unique images, Mnema enhances vocabulary retention and recall.
        </p>
      </section>

      <section className="mnema-page__section">
        <h2 className="mnema-page__subtitle">Tech Stack</h2>
        <p className="mnema-page__text">
          <strong>Frontend:</strong> React, JavaScript, Axios, React Router.
          <br />
          <strong>Backend:</strong> Node.js, Express, MySQL, Knex.js,
          Passport.js (Google OAuth), OpenAI API.
          <br />
          <strong>Deployment:</strong> Netlify (Frontend), Heroku (Backend).
        </p>
      </section>

      <section className="mnema-page__section">
        <h2 className="mnema-page__subtitle">How It Works</h2>
        <ul className="mnema-page__list">
          <li>
            <strong>Selecting Interests and Professions:</strong> Users begin by
            selecting their interests and professions from a range of options.
            This allows the app to adapt images and mnemonics to the user's
            experience, making them more relevant and engaging.
          </li>
          <li>
            <strong>Creating a Deck and Adding Words:</strong> Users can create
            custom decks and add the words they wish to learn. This feature
            offers flexibility in organizing vocabulary based on topics or
            difficulty levels.
          </li>
          <li>
            <strong>Generating Translations and Mnemonics:</strong> The system
            automatically generates translations and mnemonic descriptions for
            the added words. Leveraging the OpenAI API, it creates peculiar,
            vivid and personalized associations.
          </li>
          <li>
            <strong>Generating Images:</strong> Mnema generates images
            corresponding to each mnemonic description, further reinforcing the
            memory association.
          </li>
        </ul>
      </section>

      <section className="mnema-page__section">
        <h2 className="mnema-page__subtitle">Key Features</h2>
        <ul className="mnema-page__list">
          <li>
            Secure Authentication: Integration with Google OAuth for easy and
            secure user login.
          </li>
          <li>
            User-Friendly Interface: Intuitive navigation for creating decks and
            adding words.
          </li>
          <li>
            Personalized Mnemonics: Generates mnemonic images and descriptions
            based on user-selected interests using the OpenAI API.
          </li>
        </ul>
      </section>

      <section className="mnema-page__section">
        <h2 className="mnema-page__subtitle">Achievements</h2>
        <ul className="mnema-page__list">
          <li>
            Version Control Best Practices: Successfully implemented a Git
            workflow using feature branches, enhancing code management and
            collaboration readiness.
          </li>
          <li>
            Visual Design and Responsiveness: Developed a user interface with a
            focus on visual appeal and responsiveness across different devices.
          </li>
          <li>
            Database as a storage: Effectively designed and set up a MySQL
            database using Knex.js, ensuring efficient data management.
          </li>
          <li>
            Documentation: Created well-defined README files for both client and
            server repositories.
          </li>
          <li>
            Deployment: Successfully deployed the application, making it
            accessible online for users.
          </li>
          <li>
            Custom Domain: Configured and connected a custom domain to the
            deployed application.
          </li>
        </ul>
      </section>

      <section className="mnema-page__section">
        <h2 className="mnema-page__subtitle">Planned Improvements</h2>
        <p className="mnema-page__text">
          As I continue to refine the project, here are the next improvements I
          plan to implement:
        </p>
        <ul className="mnema-page__list">
          <li>
            <strong>Cloud Storage for Images:</strong> Store generated images
            securely in cloud storage to ensure scalability and easy access.
          </li>
          <li>
            <strong>Anki Deck Generation:</strong> Explore using the genanki
            Python library to automatically generate Anki decks (.apkg files).
          </li>
          <li>
            <strong>Image Generation Optimization:</strong> Generate images in
            batches and use background jobs to optimize cost and user experience
            (using OpenAI batch API).
          </li>
          <li>
            <strong>Implement email notifications</strong> to notify users that
            their images are generated.
          </li>
          <li>
            <strong>Add Audio Pronunciation:</strong> Integrate text-to-speech
            API to provide pronunciation for each word in the user’s deck.
          </li>
        </ul>
      </section>

      <section className="mnema-page__section">
        <h2 className="mnema-page__subtitle">Demo and Source Code</h2>
        <p className="mnema-page__text">
          <strong>Live Demo:</strong>{" "}
          <a href="https://mnema.ca" target="_blank" rel="noopener noreferrer">
            mnema.ca
          </a>
          <br />
          <strong>Frontend:</strong>{" "}
          <a
            href="https://github.com/batradev/yulia-batrakova-mnema"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/batradev/yulia-batrakova-mnema
          </a>
          <br />
          <strong>Backend:</strong>{" "}
          <a
            href="https://github.com/batradev/yulia-batrakova-mnema-server"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/batradev/yulia-batrakova-mnema-server
          </a>
        </p>
      </section>
      <p className="homepage__project-capstone">
        Developed as a Capstone project during my studies at BrainStation.
      </p>

      {isModalOpen && (
        <div className="mnema-page__modal" onClick={closeModal}>
          <img
            src={activeImage}
            alt="Enlarged screenshot"
            className="mnema-page__modal-image"
          />
        </div>
      )}
    </div>
  );
};

export default MnemaPage;
