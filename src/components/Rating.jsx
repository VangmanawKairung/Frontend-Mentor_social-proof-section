import IconStar from "../assets/icon-star.svg";

const RATING_TOPIC = ["Reviews", "Report Guru", "BestTech"];

const Rating = () => {
  return (
    <section className="ratings" aria-label="Product Ratings">
      <ul className="ratings__list">
        {RATING_TOPIC.map((topic) => (
          <RatingCard key={topic} topic={topic} />
        ))}
      </ul>
    </section>
  );
};

export default Rating;

const RatingCard = ({ topic }) => {
  return (
    <li className="rating-card">
      <Stars />
      <p className="rating-card__detail">Rated 5 Stars in {topic}</p>
    </li>
  );
};

const Stars = () => {
  return (
    <div className="rating-card__stars" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <img
          key={index}
          src={IconStar}
          alt=""
          className="rating-card__star-icon"
        />
      ))}
    </div>
  );
};
