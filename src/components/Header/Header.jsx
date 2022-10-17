import Search_bar from "../search_bar/Search_bar";
import { GrLocation } from "react-icons/gr";
import { RiArrowDownSLine } from "react-icons/ri";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="wrapper_header">
        <div className="top_header">
          <div className="first_section">
            <a href="#">
              <img src="../../public/logo.png" alt="" className="logo" />
            </a>
          </div>
          <div className="second_section">
            <Search_bar />
          </div>
          <div className="third_section">
            <img src="../../public/publicidad.png" alt="" className="ads" />
          </div>
        </div>
        <div className="bottom_header">
          <div className="first_section adress">
            <GrLocation className="location_icon" />
            <div>
              <span className="adress_user_name">Enviar a user</span>
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
            <a to="#profile">
              <div>Profile</div>
            </a>
            <a to="#compras">
              <span>Mis compras</span>
            </a>
            <a to="#favorites">
              <span>Favoritos</span>
            </a>
            <a to="#notifications">
              <span>Notif...</span>
            </a>
            <a to="#cart">
              <span>Cart</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
