import { BrowserRouter, Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import PreFooter from "./components/PreFooter/PreFooter";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Carroussel from "./components/Carroussel/Carroussel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ProductDetails />
        <div className="fake-body"></div>
        <Carroussel />
        <PreFooter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
