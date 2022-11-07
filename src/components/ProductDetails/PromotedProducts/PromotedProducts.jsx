import "./PromotedProducts.css";
import { Link } from "react-router-dom";
import NanoCard from "./NanoCard/NanoCard";

export default function PromotedProducts() {
  const testProducts = [
    {
      img_url: "/stichIMG.jpg",
      price: "1.605",
      description: "Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos",
      free_shipping: true,
    },
    {
      img_url: "/stich2IMG.jpg",
      price: "1.605",
      description: "Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos",
      free_shipping: true,
    },
    {
      img_url: "/stich3IMG.jpg",
      price: "1.605",
      description: "Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos",
      free_shipping: true,
    },
    {
      img_url: "/stichIMG.jpg",
      price: "1.605",
      description: "Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos",
      free_shipping: true,
    },
  ];
  return (
    <div className="promoted-products">
      <div className="title">
        <h3>Productos promocionados</h3>
        <Link>Anunciá acá</Link>
      </div>
      <div className="products-nano-cards">
        {testProducts.map((tp, index) => (
          <NanoCard key={index} item={tp} />
        ))}
      </div>
    </div>
  );
}
