import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { CiMedal } from "react-icons/ci";
import { BiMessage } from "react-icons/bi";
import { TfiTimer } from "react-icons/tfi";
import { AiFillCheckCircle } from "react-icons/ai";
import "./SellerInfo.css";

export default function SellerInfo({ sellerInfo }) {
  return (
    <div className="seller-info">
      <h3>Información sobre el vendedor</h3>
      <div className="seller-location">
        <GrLocation />
        <div>
          <span>Ubicación</span>
          <p>{sellerInfo.location}</p>
        </div>
      </div>
      <div className="seller-category">
        <CiMedal />
        <div>
          <span>{sellerInfo.category}</span>
          <p>{sellerInfo.categoryCaption}</p>
        </div>
      </div>
      <div className={`sales-count-color ${sellerInfo.score}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="last-sales">
        <div>
          <span>{sellerInfo.lastSales}</span>
          <p>Ventas en los últimos 60 días</p>
        </div>
        <div>
          <div>
            <BiMessage />
            <AiFillCheckCircle />
          </div>
          <p>{sellerInfo.badges[0]}</p>
        </div>
        <div>
          <div>
            <TfiTimer />
            <AiFillCheckCircle />
          </div>
          <p>{sellerInfo.badges[1]}</p>
        </div>
      </div>
      <Link>Ver más datos de este vendedor</Link>
    </div>
  );
}
