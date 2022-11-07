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
          <span>Hasta 12 cuotas sin tarjeta</span>
          <img src="/payment_methods/merCred.png" alt="" />
        </div>
        <div>
          <span>Tarjetas de crédito</span>
          <p>¡Cuotas sin interés con bancos</p>
          <img src="/payment_methods/tarjCred.png" alt="" />
        </div>
        <div>
          <span>Tarjetas de débito</span>
          <img src="/payment_methods/tarjDeb1.png" alt="" />
          <img src="/payment_methods/tarjDeb2.png" alt="" />
        </div>
        <div>
          <span>Efectivo</span>
          <img src="/payment_methods/efect.png" alt="" />
        </div>
        <Link>Conocer más sobre devoluciones</Link>
      </div>
    </div>
  );
}
