import "./ProductMainContent.css";
import OpinionSection from "../OpinionSection/OpinionSection";

export default function ProductMainContent() {
  return (
    <div className="wrapper-main-content">
      <div className="product-main-content">
        <OpinionSection />
        <aside className="aside-temp"></aside>
      </div>
    </div>
  );
}
