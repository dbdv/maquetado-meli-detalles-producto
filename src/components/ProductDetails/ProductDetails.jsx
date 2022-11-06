import Carroussel from "../Carroussel/Carroussel";
import TopicNavigation from "./TopicNavigation/TopicNavigation";
import ProductIdBanner from "./ProductIdBanner/ProductIdBanner";
import ProductMainContent from "./ProductMainContent/ProductMainContent";

import "./ProductDetails.css";

export default function ProductDetails() {
  const product = { id: "925634878" };

  return (
    <div className="product-detail">
      <TopicNavigation />
      <ProductMainContent />
      <ProductIdBanner product={product} />
      <Carroussel
        sectionTopic={"Productos promocionados"}
        link={"Anunciá acá"}
        maxToShow={5}
      />
      <Carroussel
        sectionTopic={"Quienes vieron este producto también compraron"}
        maxToShow={5}
      />
      <Carroussel
        sectionTopic={"Quienes compraron este producto también compraron"}
        maxToShow={5}
      />
    </div>
  );
}
