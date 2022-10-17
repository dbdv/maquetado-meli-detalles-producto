import "./search_bar.css";
import { AiOutlineSearch } from "react-icons/ai";

export default function Search_bar() {
  return (
    <div className="search_bar">
      <input type="text" placeholder="Buscar productos, marcas y más..." />
      <button>
        <AiOutlineSearch className="search_icon" />
      </button>
    </div>
  );
}
