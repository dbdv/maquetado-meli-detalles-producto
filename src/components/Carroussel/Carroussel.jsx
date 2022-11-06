import MiniCard from "../MiniCard/MiniCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Carroussel.css";
import { useState } from "react";

export default function Carroussel({
  sectionTopic,
  link,
  maxToShow,
  bgWhite = false,
}) {
  const [startPosition, setStartPosition] = useState(0);

  const testProducts = [
    {
      img: "/stichIMG.jpg",
      price: "1.605",
      description: "Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos",
    },
    {
      img: "/stich2IMG.jpg",
      price: "1.605",
      description: "Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos",
    },
    {
      img: "/stich3IMG.jpg",
      price: "1.605",
      description: "Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos",
    },
    {
      img: "/stichIMG.jpg",
      price: "1.605",
      description: "Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos",
    },
    {
      img: "/stich2IMG.jpg",
      price: "1.605",
      description: "Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos",
    },
    {
      img: "/stich3IMG.jpg",
      price: "1.605",
      description: "Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos",
    },
    {
      img: "/stichIMG.jpg",
      price: "1.605",
      description: "Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos",
    },
    {
      img: "/stich2IMG.jpg",
      price: "1.605",
      description: "Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos",
    },
    {
      img: "/stich3IMG.jpg",
      price: "1.605",
      description: "Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos",
    },
    {
      img: "/stichIMG.jpg",
      price: "1.605",
      description: "Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos",
    },
  ];
  const moveToLeft = () => {
    if (startPosition > 0) setStartPosition((pos) => pos - maxToShow);
  };

  const moveToRight = () => {
    if (startPosition < testProducts.length - 1)
      setStartPosition((pos) => pos + maxToShow);
  };

  return (
    <div className={`wrapper-carroussel ${bgWhite ? "bg-white" : ""}`}>
      <div className={`carroussel ${bgWhite ? "bg-white" : ""}`}>
        <span className="carroussel-topic">
          {sectionTopic}
          {link && <a>{link}</a>}
        </span>
        <div className={`outer-products ${bgWhite ? "bg-white" : ""}`}>
          <div
            onClick={() => moveToLeft()}
            className={`wrapper-icon-arrow backArrow ${
              startPosition > 0 && "active"
            }`}
          >
            <IoIosArrowBack className="icon arrow-icon" />
          </div>
          <div className={`wrapper-products ${bgWhite ? "bg-white" : ""}`}>
            {testProducts
              .slice(startPosition, startPosition + maxToShow)
              .map((p, index) => (
                <MiniCard
                  key={index}
                  img={p.img}
                  price={p.price}
                  description={index + "-" + p.description}
                />
              ))}
          </div>
          <div
            onClick={() => moveToRight()}
            className={`wrapper-icon-arrow forwardArrow ${
              startPosition + maxToShow < testProducts.length - 1 && "active"
            }`}
          >
            <IoIosArrowForward className="icon arrow-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
