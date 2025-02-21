import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <b>About</b>
      <p>
        A high-end yet inclusive fashion store that curates a vast selection of
        clothing for all styles, occasions, and budgets. Universal Clothing
        Emporium combines luxury brands, everyday essentials, and sustainable
        fashion under one roof, catering to diverse customer needs.
      </p>
      <img
        className="company"
        src="./empresa.jpeg"
        alt="Universal Clothing Emporium"
      />
    </div>
  );
};

export default About;
