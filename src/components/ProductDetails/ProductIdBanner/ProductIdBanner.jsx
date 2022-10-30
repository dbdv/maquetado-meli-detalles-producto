import "./ProductIdBanner.css";

export default function ProductIdBanner({ product }) {
  return (
    <div className="product-id-banner">
      <div className="product-id">
        <p className="product-number">
          Publicacion
          <span>
            #{product.id}
            <p>|</p>
            <a href="#denunciar">Denunciar</a>
          </span>
        </p>
      </div>
    </div>
  );
}
