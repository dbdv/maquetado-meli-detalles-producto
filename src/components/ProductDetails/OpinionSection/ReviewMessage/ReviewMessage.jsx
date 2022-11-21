import "./ReviewMessage.css";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import generateStars from "../../../../utils/generateStars";

export default function ReviewMessage({ review }) {
  const stars = generateStars(review.stars);
  return (
    <div className="review-message-wrapper">
      <div className="review-message">
        <div className="review-message-calification-and-date">
          <div className="review-message-stars">{stars}</div>
          <div className="review-message-date">{review.date}</div>
        </div>
        <div className="review-message-comment">{review.comment}</div>
        <div className="review-message-buttons">
          <div className="review-message-usefulness">
            <button className="review-message-isUseful button">
              <span>Es útil</span>
              <AiOutlineLike />
              {review.usefulCount}
            </button>
            <button className="review-message-isUnuseful button">
              <AiOutlineDislike />
            </button>
          </div>
          <div className="review-message-more-options"></div>
        </div>
      </div>
    </div>
  );
}
