import React from "react";
import { reviewAspect } from "./Information";
import FiveStars from "./FiveStars";

const ReviewAspectCard = () => {
  return (
    <section className="review-aspect">
      {reviewAspect.map((aspect) => (
        <div className="review-aspect-card" key={`review-aspect-${aspect.id}`}>
          <FiveStars />
          <p>{aspect.statement}</p>
        </div>
      ))}
    </section>
  );
};

export default ReviewAspectCard;
