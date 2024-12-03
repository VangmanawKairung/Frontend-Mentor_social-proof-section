import React from "react";
import star from "../assets/icon-star.svg";

const FiveStars = () => {
  return (
    <div className="stars">
      <img src={star} alt="Solid yellow star icon" aria-hidden="true" />
      <img src={star} alt="Solid yellow star icon" aria-hidden="true" />
      <img src={star} alt="Solid yellow star icon" aria-hidden="true" />
      <img src={star} alt="Solid yellow star icon" aria-hidden="true" />
      <img src={star} alt="Solid yellow star icon" aria-hidden="true" />
    </div>
  );
};

export default FiveStars;
