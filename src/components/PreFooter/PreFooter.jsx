import { useState } from "react";
import {
  IoIosArrowDown as ArrowIcon,
  IoIosArrowUp as ArrowIconUp,
} from "react-icons/io";
import "./PreFooter.css";

export default function PreFooter() {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="pre-footer-wrapper">
      <span
        className="toggle-more-info-span"
        onClick={() => {
          setShowInfo((prevState) => !prevState);
        }}
      >
        Más información
        {showInfo ? (
          <ArrowIcon className="icon" />
        ) : (
          <ArrowIconUp className="icon" />
        )}
      </span>
      {showInfo && (
        <div className="pre-footer">
          <div className="wrapper-pre-footer">
            <div className="more-info-div">
              <div className="links-topic-div">
                <span>Acerca de</span>
                <p>Mercalfkaslf</p>
                <p>faskflaskf</p>
                <p>gfagdasg</p>
                <p>agdsggds</p>
              </div>
              <div className="links-topic-div">
                <span>Otros sitios</span>
                <p>Mercalfkaslf</p>
                <p>faskflaskf</p>
                <p>gfagdasg</p>
                <p>agdsggds</p>
              </div>
              <div className="links-topic-div">
                <span>Ayuda</span>
                <p>Mercalfkaslf</p>
                <p>faskflaskf</p>
                <p>gfagdasg</p>
                <p>agdsggds</p>
              </div>
              <div className="links-topic-div">
                <span>Redes sociales</span>
                <p>Mercalfkaslf</p>
                <p>faskflaskf</p>
                <p>gfagdasg</p>
                <p>agdsggds</p>
              </div>
              <div className="links-topic-div">
                <span>Mi cuenta</span>
                <p>Mercalfkaslf</p>
                <p>faskflaskf</p>
                <p>gfagdasg</p>
                <p>agdsggds</p>
              </div>
              <div className="links-topic-div">
                <span>Mercado puntos</span>
                <p>Mercalfkaslf</p>
                <p>faskflaskf</p>
                <p>gfagdasg</p>
                <p>agdsggds</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
