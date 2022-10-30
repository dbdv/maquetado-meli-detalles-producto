import Search_bar from "../search_bar/Search_bar";
import { GrLocation } from "react-icons/gr";
import { RiArrowDownSLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <div className="wrapper_header">
        <div className="top_header">
          <div className="first_section">
            <Link to="#">
              <img src="../../public/logo.png" alt="" className="logo" />
            </Link>
          </div>
          <div className="second_section">
            <Search_bar />
          </div>
          <div className="third_section">
            <img src="/publicidad.png" alt="" className="ads" />
          </div>
        </div>
        <div className="bottom_header">
          <div className="first_section adress">
            <GrLocation className="location_icon" />
            <div className="text-adress-container">
              <span className="adress_user_name">Enviar a Daniel</span>
              <span>General Paz 1500</span>
            </div>
          </div>
          <div className="second_section">
            <div className="navigation"></div>
            <ul className="nav_links">
              <li>
                <div>
                  <span>Categorias</span>
                  <RiArrowDownSLine />
                  <ul></ul>
                </div>
              </li>
              <li>Ofertas</li>
              <li>Historial</li>
              <li>Supermercado</li>
              <li>Moda</li>
              <li>Vender</li>
              <li>Ayuda</li>
            </ul>
          </div>
          <div className="third_section user_data_nav">
            <Link to="#profile">
              <div>
                <CgProfile className="profile-icon" /> Daniel Bus...
              </div>
            </Link>
            <Link to="#compras">
              <span>Mis compras</span>
            </Link>
            <Link to="#favorites">
              <span>Favoritos</span>
            </Link>
            <Link to="#notifications">
              <span>
                <IoIosNotificationsOutline className="notification-icon" />
              </span>
            </Link>
            <Link to="#cart">
              <span>
                <BsCart2 className="cart-icon" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
