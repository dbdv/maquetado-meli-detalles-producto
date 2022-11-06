import "./ProductMainContent.css";
import OpinionSection from "../OpinionSection/OpinionSection";
import QuestionsAnswers from "../QuestionsAnswers/QuestionsAnswers";
import Description from "../Description/Description";

export default function ProductMainContent() {
  return (
    <div className="wrapper-main-content">
      <div className="product-main-content">
        <div className="left">
          <Description />
          <QuestionsAnswers />
          <OpinionSection />
        </div>
        <div className="right">
          <aside className="aside-temp"></aside>
        </div>
      </div>
    </div>
  );
}
