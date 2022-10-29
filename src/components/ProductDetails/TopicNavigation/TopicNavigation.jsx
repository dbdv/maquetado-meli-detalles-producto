import "./TopicNavigation.css";

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
            <span>Juegos y Juguetes</span>
            <span>{">"}</span>
            <span>Peluches</span>
          </div>
          <div className="actions">
            <span>Compartir</span>
            <span className="divider">|</span>
            <span>Vender uno igual</span>
          </div>
        </div>
      </div>
    </div>
  );
}
