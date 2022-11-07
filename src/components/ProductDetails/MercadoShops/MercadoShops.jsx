import { Link } from "react-router-dom";
import "./MercadoShops.css";
import MercShopCard from "./MercShopCard/MercShopCard";

export default function MercadoShops() {
  const items = [
    {
      title: "Item 3",
      img_url: "/stichIMG.jpg",
      description: "Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos",
    },
    {
      title: "Item 1",
      img_url: "/stich2IMG.jpg",
      description: "Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos",
    },
    {
      title: "Item 2",
      img_url: "/stich3IMG.jpg",
      description: "Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos",
    },
    {
      title: "Item 3",
      img_url: "/stichIMG.jpg",
      description: "Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos",
    },
  ];
  return (
    <div className="mercado-shops">
      <div className="back">
        <div>
          <img src="/mercShopsLogo.png" alt="" />
          <span>Comprá online en tiendas fuera de Mercado Libre</span>
        </div>
        <div></div>
      </div>
      <div className="front">
        {items.map((i, index) => (
          <MercShopCard key={index} item={i} />
        ))}
        <div className="links">
          <Link>Anunciá acá</Link>
          <div></div>
          <Link>Creá tu mercado shop</Link>
        </div>
      </div>
    </div>
  );
}
