import "./TopicNavigation.css";
import { Link } from "react-router-dom";

export default function TopicNavigation() {
  return (
    <div className="wrapper-topic-nav">
      <div className="topic-nav">
        <div className="suggestion">
          <p>
            <span className="text-bold">También puede interesarte:</span>{" "}
            squishmallow
          </p>
        </div>
        <div className="second-sec">
          <div className="categories-tree">
            <span>Volver al listado</span>
            <span className="divider">|</span>
            <span>
              <Link>Juegos y Juguetes</Link>
            </span>
            <span>{">"}</span>
            <span>
              <Link>Peluches</Link>
            </span>
          </div>
          <div className="actions">
            <span>
              <Link>Compartir</Link>
            </span>
            <span className="divider">|</span>
            <span>
              <Link>Vender uno igual</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
