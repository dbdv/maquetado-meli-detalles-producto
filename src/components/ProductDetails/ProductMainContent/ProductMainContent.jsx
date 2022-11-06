import "./ProductMainContent.css";
import OpinionSection from "../OpinionSection/OpinionSection";
import QuestionsAnswers from "../QuestionsAnswers/QuestionsAnswers";
import Description from "../Description/Description";
import MainFeatures from "../MainFeatures/MainFeatures";
import SellerPosts from "../SellerPosts/SellerPosts";
import Divider from "../../Divider/Divider";

export default function ProductMainContent() {
  return (
    <div className="wrapper-main-content">
      <div className="product-main-content">
        <div className="left">
          <Divider />
          <SellerPosts />
          <Divider />
          <MainFeatures />
          <Divider />
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
