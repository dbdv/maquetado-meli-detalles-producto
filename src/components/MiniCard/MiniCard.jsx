import "./MiniCard.css";

export default function MiniCard({ img, price, description }) {
  return (
    <div className="wrapper-mini-card">
      <div className="mini-card">
        <img src={img} alt="" className="mini-card-img" />
        <span className="mini-card-price-span">$ {price}</span>
        <p className="mini-card-item-description">{description}</p>
      </div>
    </div>
  );
}
