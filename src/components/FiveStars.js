import React from "react";
import star from "../assets/icon-star.svg";

const FiveStars = () => {
  return (
    <div className="stars">
      <img src={star} alt="Solid yellow star icon" />
      <img src={star} alt="Solid yellow star icon" />
      <img src={star} alt="Solid yellow star icon" />
      <img src={star} alt="Solid yellow star icon" />
      <img src={star} alt="Solid yellow star icon" />
    </div>
  );
};

export default FiveStars;
