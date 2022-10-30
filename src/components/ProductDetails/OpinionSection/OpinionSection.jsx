import { IoIosArrowDown } from "react-icons/io";
import "./OpinionSection.css";

export default function OpinionSection() {
  const toggleOptions = (idOption) => {
    const element = document.querySelector(`#${idOption}`);
    element.classList.toggle("active");
  };
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
        </div>
      </div>
    </div>
  );
}
