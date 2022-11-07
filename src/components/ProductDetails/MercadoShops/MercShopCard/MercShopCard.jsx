import "./MercShopCard.css";

export default function MercShopCard({ item }) {
  return (
    <div className="merc-shop-card">
      <h3>{item.title}</h3>
      <div>
        <img src={item.img_url} alt="" />
        <p>{item.description}</p>
      </div>
    </div>
  );
}
