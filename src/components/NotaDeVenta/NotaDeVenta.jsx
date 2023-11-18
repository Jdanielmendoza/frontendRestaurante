import React from "react";
/*rafce*/
import "./NotaDeVenta.css";
const NotaDeVenta = () => {
  return (
    <div className="contenedorDeNotaDeVenta">
      <div className="primerParrafo">
        <h4 className="primerTitulo">NOTA DE VENTA</h4>
        <h6 className="nroPedido">Nro Pedido: 05</h6>
      </div>

      <div className="segundoParrafo">
        <div className="segundoParrafoPrimeraFila">
          <p>VENDEDOR: 9</p>
          <p>MESA: 8</p>
        </div>

        <div className="segundoParrafoSegundaFila">
          <p>FECHA: 03/09/2026</p>
          <p>HORA: 15:07:53</p>
        </div>
      </div>

      <div className="tercerParrafoDeColumnas">
        <p>UNID.</p>
        <p>NOMBRE</p>
        <p>PRECIO</p>
        <p>IMPORTE</p>
      </div>
      <hr className="primeraLinea"></hr>

      <div className="cuartoParrafoDeDatos">
        <p>04</p>
        <p>POLLO AL HORNO</p>
        <p>13.00</p>
        <p>52.00</p>
      </div>

      <hr className="segundaLinea"></hr>
      <hr className="terceraLinea"></hr>
      <div className="quintoParrafoDeTotales">
        <div className="quintoParrafoPrimeraLinea">
          <p>SUB TOTAL</p>
          <p>74.00</p>
        </div>
        <div className="quintoParrafoSegundaLinea">
          <p>DESCUENTO</p>
          <p>10.00</p>
        </div>
        <div className="quintoParrafoTerceraLinea">
          <p>TOTAL</p>
          <p>64.00</p>
        </div>
      </div>

      <div className="sextoParrafo">
        <div className="sextoParrafoPrimeraLinea">
          <p>ID: 79baaba6-cee9-48cd-9355-b7a0f72f3bc8</p>
        </div>
        <div className="sextoParrafoSegundaLinea">
          <p>*** GRACIAS POR SU VISITA ***</p>
          <p>ESPERO QUE TENGA UN ABRAZO DE OSO</p>
        </div>
      </div>
    </div>
  );
};

export default NotaDeVenta;
