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
import SellerInfo from "../SellerInfo/SellerInfo";
import MercadoShops from "../MercadoShops/MercadoShops";
import OrderInfo from "../OrderInfo/OrderInfo";

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

  const seller = {
    location: "Balvanera, Capital federal",
    category: "MercadoLíder Platinum",
    categoryCaption: "¡Es uno de los mejores del sitio!",
    lastSales: 3978,
    badges: ["Brinda buena atención", "Despacha sus productos a tiempo"],
    score: "score-high",
  };
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
            <OrderInfo />
            <SellerInfo sellerInfo={seller} />
            <CommonInformation />
            <PromotedProducts />
            <MercadoShops />
          </aside>
        </div>
      </div>
    </div>
  );
}
