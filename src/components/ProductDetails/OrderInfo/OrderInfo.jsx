import "./OrderInfo.css";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TfiBackLeft } from "react-icons/tfi";
import { AiOutlineUp } from "react-icons/ai";
import { BsTruck, BsCircle, BsTrophy } from "react-icons/bs";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import generateStars from "../../../utils/generateStars";
import { useState } from "react";

export default function OrderInfo() {
  const disponibility = 11;
  const [color, setColor] = useState(0);
  const [units, setUnits] = useState(1);
  const [visible, toggleVisible] = useState(false);
  const colors = [
    {
      color_id: 0,
      color: "Azul",
      img_url: "/stich2IMG.jpg",
    },
    {
      color_id: 2,
      color: "Rosa",
      img_url: "/stich3IMG.jpg",
    },
  ];
  const stars = generateStars(4);
  const spanUnits = [];

  for (let index = 0; index < 6; index++) {
    spanUnits.push(
      <span
        key={index + 1 + 10}
        id={index + 1}
        className={`${index + 1 === units ? "unit-selected" : ""}`}
        onClick={() => {
          setUnits(index + 1);
        }}
      >
        {index + 1} unidades
      </span>
    );
  }
  spanUnits.push(
    <span
      id="-1"
      className={`${-1 === units ? "unit-selected" : ""}`}
      onClick={(e) => setUnits(-1)}
    >
      Más de 6 unidades
    </span>
  );
  return (
    <div className="OrderInfo">
      <div className="condition-sold">
        <span>Nuevo</span>
        <span>|</span>
        <span>2400 vendidos</span>
      </div>
      <div className="title-price">
        <div>
          <h2>Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos</h2>
        </div>
        <span className="fav-icon">
          <AiOutlineHeart />
        </span>
      </div>
      <div className="califications">
        <span className="stars">{stars}</span>
        <span className="reviews-number">(96)</span>
      </div>
      <div className="position">
        <span>Más vendido</span>
        <span>5° en peluches</span>
      </div>
      <div className="price">
        <span className="prev-price">$1.780</span>
        <div className="current-price">
          <span>$ 1.513</span>
          <span className="discount">15% OFF</span>
        </div>
        <p>
          en 12x de $239<sup className="cents">47</sup> pagando con Mercado
          Crédito
        </p>
      </div>
      <div className="payment-methods">
        <Link to="#payment-methods">Ver los medios de pago</Link>
      </div>
      <div className="shipping-info">
        <span className="icon">
          <MdOutlineLocalShipping />
        </span>
        <div>
          <span>
            Llega el viernes por $1.289<sup>99</sup>{" "}
            <span className="prev-price">
              $1.409<sup>99</sup>
            </span>
          </span>
          <p>
            Comprando dentro de las próximas <strong>2 h 55 min</strong> <br />
            Beneficio Mercado Puntos
          </p>
          <Link>Ver más formas de entrega</Link>
        </div>
      </div>
      <div className="refund-info">
        <span className="icon">
          <TfiBackLeft />
        </span>
        <div>
          <span>Devolucion gratis</span>
          <p>Tenes 30 días desde que lo recibís</p>
          <Link>Conocer más</Link>
        </div>
      </div>
      <div className="colors">
        <p>
          Color: <span>{colors.find((c) => c.color_id === color).color}</span>
        </p>
        <div className="colors-prev">
          {colors.map((c) => (
            <img
              key={c.color_id}
              src={c.img_url}
              alt={c.color}
              className={`${c.color_id === color ? "color-selected" : ""}`}
              onClick={() => setColor(c.color_id)}
            />
          ))}
        </div>
      </div>
      <div className="stock">
        <span>Stock disponible</span>
        <div
          onClick={() => toggleVisible((prev) => !prev)}
          className="selector"
        >
          <span>Cantidad:</span>
          <div>
            <span className="units">{units}</span>
            <AiOutlineUp className={visible ? "rotate" : ""} />
          </div>
          <span>({disponibility} disponibles)</span>
        </div>
        {visible && <div className="modal-selector">{spanUnits}</div>}
      </div>
      <div className="buttons">
        <button>Comprar ahora</button>
        <button>Agregar al carrito</button>
        <div>
          <div className="truck-icon-mix">
            <BsCircle className="circle" />
            <BsTruck className="truck" />
          </div>
          <p>
            Armá un carrito de productos del mismo vendedor y ahorrá en el
            envío.
          </p>
        </div>
      </div>
      <div className="protected-purchase">
        <IoShieldCheckmarkOutline />
        <p>
          <Link>Compra protegida</Link>, recibí el producto que esperabas o te
          devolvemos tu dinero.
        </p>
      </div>
      <div className="mercado-points">
        <BsTrophy />
        <p>
          <Link>Mercado Puntos</Link>. Sumás 10 puntos
        </p>
      </div>
    </div>
  );
}
