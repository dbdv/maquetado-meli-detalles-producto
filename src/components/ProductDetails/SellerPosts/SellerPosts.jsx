import { Link } from "react-router-dom";
import "./SellerPosts.css";
import Carroussel from "../../Carroussel/Carroussel";

export default function SellerPosts() {
  return (
    <div className="seller-posts">
      <Carroussel
        sectionTopic={"Publicaciones del vendedor"}
        maxToShow={3}
        bgWhite={true}
      />
      <Link>Ver mas publicaciones del vendedor</Link>
    </div>
  );
}
