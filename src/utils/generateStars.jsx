import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

export default function generateStars(starsNumber) {
  const stars = [];
  for (let index = 0; index < 5; index++) {
    stars.push(
      index < starsNumber ? <BsStarFill key={index} /> : <BsStar key={index} />
    );
  }
  return stars;
}
