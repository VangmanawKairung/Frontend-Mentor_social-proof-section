import AvatarColton from "../assets/image-colton.jpg"
import AvatarIrene from "../assets/image-irene.jpg"
import AvatarAnne from "../assets/image-anne.jpg"

const REVIEW_DATA = [
    {
        name: "Colton Smith",
        status: "Verified Buyer",
        message: "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
        avatar: AvatarColton,
    },
    {
        name: "Irene Roberts",
        status: "Verified Buyer",
        message: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
        avatar: AvatarIrene,
    },
    {
        name: "Anne Wallace",
        status: "Verified Buyer",
        message: "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
        avatar: AvatarAnne,
    },
]

const Review = () => {
  return (
    <section className='reviews' aria-label="Customer Reviews">
      <ul className="reviews__list">
        {REVIEW_DATA.map(data => (
            <ReviewCard key={data.name} {...data} />
        ))}
      </ul>
    </section>
  )
}

export default Review

const ReviewCard = ({name, status, message, avatar}) => {
    return (
        <li className="review-card">
            <div className="review-card__header">
                <img src={avatar} alt={`Profile picture of ${name}`} className="review-card__avatar" />
                <div className="review-card__info">
                    <h2 className="review-card__reviewer-name">{name}</h2>
                    <span className="review-card__reviewer-status">{status}</span>
                </div>
            </div>
            <blockquote className="review-card__message">
                <p>"{message}"</p>
            </blockquote>
        </li>
    )
}
