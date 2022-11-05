import "./QuestionBox.css";
import { GrTopCorner } from "react-icons/gr";

export default function QuestionBox({ question }) {
  return (
    <div className="question-box">
      <p>{question.question}</p>
      <div>
        <GrTopCorner className="icon" />
        <p>{question.answer}</p>
        <span>{question.date}</span>
      </div>
    </div>
  );
}
