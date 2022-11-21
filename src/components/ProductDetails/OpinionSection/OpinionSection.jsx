import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import "./OpinionSection.css";
import ReviewMessage from "./ReviewMessage/ReviewMessage";

export default function OpinionSection() {
  const toggleOptions = (idOption) => {
    const element = document.querySelector(`#${idOption}`);
    element.classList.toggle("active");
  };

  const testReview = {
    stars: 2,
    date: "22 jul. 2021",
    comment:
      "El peluche la verdad es muy parecido al de las fotos, pero ami me vino todo descosido, al otro día de comprarlo ya estaba roto, la verdad mis peores 900 pesos, no vale la pena.",
    usefulCount: 4,
    unusefulCount: 0,
  };

  const testReviews = [];

  for (let index = 0; index < 3; index++) {
    testReviews.push(<ReviewMessage key={index} review={testReview} />);
  }

  return (
    <div className="opinion-section">
      <div className="opinion-section-first">
        <h3>Opiniones del producto</h3>
      </div>
      <div className="opinion-section-second">
        <div className="opinion-section-califications">
          <img src="/calificationsBoardIMG.png" alt="" />
        </div>
        <div className="opinion-section-reviews">
          <div className="opinion-section-order-selectors">
            <div className="opinion-section-order">
              <div
                name=""
                id=""
                className="opinion-section-select"
                onClick={() => toggleOptions("order-options")}
              >
                <button value="">
                  <span> Ordenar</span>
                  <IoIosArrowDown />
                </button>
              </div>
              <div className="options" id="order-options">
                <ul>
                  <li>Más útiles</li>
                  <li>Más recientes</li>
                </ul>
              </div>
            </div>
            <div className="opinion-section-califications">
              <div
                name=""
                id=""
                className="opinion-section-select"
                onClick={() => toggleOptions("califications-options")}
              >
                <button value="">
                  <span> Calificación</span>
                  <IoIosArrowDown />
                </button>
              </div>
              <div className="options" id="califications-options">
                <ul>
                  <li>Todas</li>
                  <li>5</li>
                  <li>4</li>
                  <li>3</li>
                  <li>2</li>
                  <li>1</li>
                </ul>
              </div>
            </div>
          </div>
          <div>{testReviews}</div>
          <div className="opinion-section-see-all">
            <Link href="">Ver todas las opiniones</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
