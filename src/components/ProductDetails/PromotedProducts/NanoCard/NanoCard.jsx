import "./NanoCard.css";

export default function NanoCard({ item }) {
  return (
    <div className="nano-card">
      <img src={item.img_url} alt="" />
      <div>
        <h3>${item.price}</h3>
        {item.free_shipping && <span>Envío gratis</span>}
        <p>{item.description}</p>
      </div>
    </div>
  );
}
