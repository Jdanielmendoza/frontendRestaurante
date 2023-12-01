import React from "react";
import "./CartaDePlato.css";
import PolloEnteroALaBrasa from "/PolloEnteroALaBrasa.jpeg";

const CartaDePlato = () => {
  return (
    <div className="ContenedorCartaDePlato">
      <img
        className="PrimeraImg"
        src={PolloEnteroALaBrasa}
        alt="Img De Platillo"
      />
      <div className="GrupoDeParrafos">
        <p className="PrimerParrafo">Pollo Entero A La Brasa</p>
        <p className="SegundoParrafo">Bs.75.00</p>
      </div>
    </div>
  );
};

export default CartaDePlato;
