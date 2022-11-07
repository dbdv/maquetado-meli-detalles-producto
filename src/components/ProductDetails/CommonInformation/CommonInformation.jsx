import { Link } from "react-router-dom";
import "./CommonInformation.css";

export default function CommonInformation() {
  return (
    <div className="common-information">
      <div>
        <h3>Devolución gratis</h3>
        <div>
          <p>
            Tenés 30 días desde que recibís el producto para devolverlo. ¡No
            importa el motivo!
          </p>
        </div>
        <Link>Conocer más sobre devoluciones</Link>
      </div>
      <div>
        <h3>Garantía</h3>
        <div>
          <span>Compra protegida con Mercado Pago</span>
          <p>Recibí el producto que esperabas o te devolvemos tu dinero</p>
        </div>
        <div>
          <span>Garantía del vendedor</span>
          <p>Sin garantía</p>
        </div>
        <Link>Conocer más sobre garantía</Link>
      </div>
      <div>
        <h3>Medios de pago</h3>
        <div>
          <span></span>
          <p>¡Cuotas sin interés con bancos</p>
        </div>
        <Link>Conocer más sobre devoluciones</Link>
      </div>
    </div>
  );
}
