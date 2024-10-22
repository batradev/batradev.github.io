import React from 'react';
import resumePDF from '../../assets/documents/Yulia_Batrakova_Resume.pdf'; 
import myPhoto from '../../assets/my_photo.jpg'; 
import './AboutPage.scss';

const AboutPage = () => {
  return (
    <div className="about-page">
      <img src={myPhoto} alt="Yulia Batrakova" className="about-page__photo" />
      <h1 className="about-page__title">About Me</h1>
      <p className="about-page__text">
        My name is Yulia, and I’m transitioning into software engineering, driven by a strong interest in solving problems. 
        My attention to detail, developed through years of content creation, motivates me to strive for writing clean, efficient code. 
        Thriving in collaborative environments, I leverage my communication skills in cross-functional teams. 
        My experience in public relations helps me better understand user needs, allowing me to contribute to building products that align with their expectations.
      </p>
      <p className="about-page__text second">
        I am passionate about continuous learning and enjoy exploring new technologies and programming languages as I grow in this field. 
      </p>
      <p className="about-page__text second">
        Feel free to reach out if you're looking for someone reliable, ready to take on challenges, and passionate about building great applications.
      </p>
      {/* <p className="about-page__text">
        <a href={resumePDF} download="Yulia_Batrakova_Resume.pdf" className="about-page__link">
        Download my resume (PDF)
        </a>
      </p> */}
    </div>
  );
};

export default AboutPage;
