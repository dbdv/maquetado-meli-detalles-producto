import Carroussel from "../Carroussel/Carroussel";
import TopicNavigation from "./TopicNavigation/TopicNavigation";
import ProductIdBanner from "./ProductIdBanner/ProductIdBanner";
import ProductMainContent from "./ProductMainContent/ProductMainContent";

import "./ProductDetails.css";

export default function ProductDetails() {
  const product = { id: "925634878" };

  return (
    <div>
      <TopicNavigation />
      <ProductIdBanner product={product} />
      <ProductMainContent />
      <Carroussel
        sectionTopic={"Productos promocionados"}
        link={"Anunciá acá"}
      />
      <Carroussel
        sectionTopic={"Quienes vieron este producto también compraron"}
      />
      <Carroussel
        sectionTopic={"Quienes compraron este producto también compraron"}
      />
    </div>
  );
}
