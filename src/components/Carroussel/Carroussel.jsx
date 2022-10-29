import MiniCard from "../MiniCard/MiniCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Carroussel.css";

export default function Carroussel() {
  const templateProduct = {
    img: "/kenaiIMG.jpeg",
    price: "1.605",
    description: "Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos",
  };

  const testProducts = [];
  for (let index = 0; index < 15; index++) {
    const p = (
      <MiniCard
        img={templateProduct.img}
        price={templateProduct.price}
        description={templateProduct.description}
      />
    );
    testProducts.push(p);
  }
  return (
    <div className="wrapper-carroussel">
      <div className="carroussel">
        <span className="carroussel-topic">
          Quienes compraron este producto también compraron
        </span>
        <div className="outer-products">
          <div className="wrapper-icon-arrow">
            <IoIosArrowBack className="icon arrow-icon backArrow" />
          </div>
          <div className="wrapper-products">{testProducts.slice(0, 5)}</div>
          <div className="wrapper-icon-arrow forwardArrow active">
            <IoIosArrowForward className="icon arrow-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
