import React from "react";
import { review } from "./Information";

const ReviewCard = () => {
  return (
    <section className="reviews">
      {review.map((reviewInfo) => (
        <article className="review-card" key={`review-${reviewInfo.id}`}>
          <div className="reviewer">
            <img src={reviewInfo.img} alt={reviewInfo.alt} aria-hidden="true" />
            <div className="reviewer-info" id={`name-${reviewInfo.id}`}>
              <h2 className="reviewer-name">{reviewInfo.name}</h2>
              <p className="reviewer-status">{reviewInfo.status}</p>
            </div>
          </div>
          <p
            id={`review-${reviewInfo.id}`}
            className="review-statement"
            aria-labelledby={`name-${reviewInfo.id}`}
          >{`" ${reviewInfo.review} "`}</p>
        </article>
      ))}
    </section>
  );
};

export default ReviewCard;
