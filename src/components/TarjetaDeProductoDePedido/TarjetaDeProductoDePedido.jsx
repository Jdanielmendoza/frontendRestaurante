import React from "react";
import "./TarjetaDeProductoDePedido.css";
const TarjetaDeProductoDePedido = (props) => {
  return (
    <div className="contenedorDeTarjetaDeProductoDePedidos">
      <div className="portadaDelProducto">
        <img
          className="imgDelProducto"
          src={props.imgDelProducto}
          alt="Imagen Del Producto"
        ></img>
        <p className="tituloDelProducto">{props.tituloDelProducto}</p>
      </div>

      <div className="contenedorDelCuerpoDeLaTarjeta">
        <div className="contenedorDeCantidadYPrecioDelProducto">
          <p className="precioDelProducto">Bs.{props.precioDelProducto}</p>
          <div className="grupoDeButtonDeCantidadDeProducto">
            <button className="inputIncrementAndDecrement">-</button>

            <p className="cantidadDelProducto">10</p>
            <button className="inputIncrementAndDecrement">+</button>
          </div>
        </div>

        <input
          id="inputAgregarProductoDeComida"
          type="button"
          value="Agregar Orden"
        />
      </div>
    </div>
  );
};

export default TarjetaDeProductoDePedido;
