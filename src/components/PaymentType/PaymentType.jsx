import React from "react";
import "./PaymentType.css";
const PaymentType = () => {
  return (
    <div className="contenedorTipoDePago">
      <div className="tituloTipoDePago">TIPO DE PAGO</div>
      <div className="contenedorLabelInputTextSubmit">
        <label htmlFor="inputTextId" className="labelTipoDePago">
          NUEVO TIPO DE PAGO
        </label>
        <input
          type="text"
          className="inputText"
          id="inputTextId"
          placeholder="Nombre Del Tipo De Pago"
        ></input>
        <input type="submit" 
        value="AGREGAR"
        className="inputAgregar"
        ></input>
      </div>
    </div>
  );
};
export default PaymentType;
