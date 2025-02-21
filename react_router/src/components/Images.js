import React from "react";
import "./Images.css";

const Images = () => {
  return (
    <div className="image-container">
      <img src="./casaco.jpeg" alt="casaco" />
      <img src="./calça.jpeg" alt="calça" />
      <img className="bota" src="./bota.jpeg" alt="Bota" />
    </div>
  );
};

export default Images;
