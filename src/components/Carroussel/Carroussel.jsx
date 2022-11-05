import MiniCard from "../MiniCard/MiniCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Carroussel.css";
import { useState } from "react";

export default function Carroussel({ sectionTopic, link }) {
  const [startPosition, setStartPosition] = useState(0);

  const templateProduct = {
    img: "/stichIMG.jpg",
    price: "1.605",
    description: "Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos",
  };

  const testProducts = [];
  for (let index = 0; index < 15; index++) {
    const p = (
      <MiniCard
        key={index}
        img={templateProduct.img}
        price={templateProduct.price}
        description={index + "-" + templateProduct.description}
      />
    );
    testProducts.push(p);
  }

  const moveToLeft = () => {
    if (startPosition > 0) setStartPosition((pos) => pos - 5);
  };

  const moveToRight = () => {
    if (startPosition < testProducts.length - 1)
      setStartPosition((pos) => pos + 5);
  };

  return (
    <div className="wrapper-carroussel">
      <div className="carroussel">
        <span className="carroussel-topic">
          {sectionTopic}
          {link && <a>{link}</a>}
        </span>
        <div className="outer-products">
          <div
            onClick={() => moveToLeft()}
            className={`wrapper-icon-arrow backArrow ${
              startPosition > 0 && "active"
            }`}
          >
            <IoIosArrowBack className="icon arrow-icon" />
          </div>
          <div className="wrapper-products">
            {testProducts.slice(startPosition, startPosition + 5)}
          </div>
          <div
            onClick={() => moveToRight()}
            className={`wrapper-icon-arrow forwardArrow ${
              startPosition + 5 < testProducts.length - 1 && "active"
            }`}
          >
            <IoIosArrowForward className="icon arrow-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
