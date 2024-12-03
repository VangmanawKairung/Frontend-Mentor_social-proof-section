import React from "react";
import { review } from "./Information";

const ReviewCard = () => {
  return (
    <section className="reviews">
      {review.map((reviewInfo) => (
        <div className="review-card" key={`review-${reviewInfo.id}`}>
          <div className="reviewer">
            <img src={reviewInfo.img} alt={reviewInfo.alt} />
            <div className="reviewer-info">
              <h2 className="reviewer-name">{reviewInfo.name}</h2>
              <p className="reviewer-status">{reviewInfo.status}</p>
            </div>
          </div>
          <p className="review-statement">{`" ${reviewInfo.review} "`}</p>
        </div>
      ))}
    </section>
  );
};

export default ReviewCard;
