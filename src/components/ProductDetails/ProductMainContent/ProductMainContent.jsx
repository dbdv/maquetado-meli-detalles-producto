import "./ProductMainContent.css";
import OpinionSection from "../OpinionSection/OpinionSection";
import QuestionsAnswers from "../QuestionsAnswers/QuestionsAnswers";
import Description from "../Description/Description";
import MainFeatures from "../MainFeatures/MainFeatures";
import SellerPosts from "../SellerPosts/SellerPosts";
import Divider from "../../Divider/Divider";
import Gallery from "../Gallery/Gallery";
import PromotedProducts from "../PromotedProducts/PromotedProducts";
import CommonInformation from "../CommonInformation/CommonInformation";

export default function ProductMainContent() {
  const images = [
    {
      id: 0,
      alt: "",
      url: "/stich2IMG.jpg",
    },
    {
      id: 1,
      alt: "",
      url: "/stichIMG.jpg",
    },
    {
      id: 2,
      alt: "",
      url: "/logo.png",
    },
    {
      id: 3,
      alt: "",
      url: "/stich3IMG.jpg",
    },
  ];
  return (
    <div className="wrapper-main-content">
      <div className="product-main-content">
        <div className="left">
          <Gallery images={images} />
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
          <aside className="aside-temp">
            <CommonInformation />
            <PromotedProducts />
          </aside>
        </div>
      </div>
    </div>
  );
}
