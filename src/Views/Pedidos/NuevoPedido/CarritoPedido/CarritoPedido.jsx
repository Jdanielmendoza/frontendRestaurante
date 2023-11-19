import React, { useEffect, useState } from "react";
import "./CarritoPedido.css";
import basurero from "/iconoBasurero.svg";
import { obtenerMesas } from "../../../../apiServices/apiServices.js";

const ItemDetalleProducto = ({ Cantidad, Nombre, Precio }) => {
  return (
    <li className="LiDeContenidoDeCantidadNombreYPrecio">
      <p className="ParrafoCantidadDePlatillos">x {Cantidad}</p>
      <p className="ParrafoPlatillos">{Nombre}</p>
      <p className="ParrafoPrecioDePlatillo">Bs.{Precio}</p>
    </li>
  );
};

const CarritoPedido = ({ NroPedido, TotalAPagar }) => {
  const [mesas, setMesas] = useState([]);
  useEffect(() => {
    const getMesas = async () => {
      try {
        const result = await obtenerMesas();
        setMesas(result)
      } catch (error) {}
    };
    getMesas();
  }, []);

  return (
    <div className="ContenedorCarritoPedido">
      <h3 className="TituloDePedido">Nro Pedido: {NroPedido}</h3>

      <ul className="ContedorDeProductos">
        <ItemDetalleProducto
          Cantidad="1"
          Nombre="Pollo A La Brasa"
          Precio={75.0}
        />
      </ul>

      <hr className="PrimeraLinea"></hr>
      <div className="ContenedorDeDescuento">
        <p className="ParrafoDeTituloDeDescuento">Aplicar Descuento</p>

        <div className="ContenerdorDeInputDeDescuento">
          Bs.
          <input type="number" className="InputDeDescuento" min={0} />
        </div>
      </div>

      <div className="ContenedorDeTotalAPagar">
        <p className="ParrafoDelPrecioTotal">Total</p>
        <p className="ParrafoDeLaCantidadTotal">Bs.{TotalAPagar}</p>
      </div>

      <hr className="SegundaLinea"></hr>

      <div className="DivNroDeMesas">
        <p className="ParrafoDeNroDeMesas">Nro De Mesa</p>
        <div className="OpcionesEngrupo">
          <select className="ContenerdorDeNumerosDeMesa">
            <optgroup label="Mesas">

              {mesas.map((mesa) => {
                return <option 
                key={mesa.id} >
                    {mesa.nro}
                </option>;
              })}

            </optgroup>
          </select>
        </div>
      </div>

      <div className="ContenedorDeDetalleDePedido">
        <p className="ParrafoDeDetalleDePedido">Detalle Del Pedido</p>
        <textarea
          id="story"
          className="TextoDeArea"
          rows="7"
          cols="30"
          placeholder="Escriba Especificaciones Del Pedido o Restricciones..."
        ></textarea>
      </div>

      <div className="ContenerdorDeInput">
        <input
          type="button"
          value="Enviar A Cocina"
          className="InputEnviarACocina"
        />

        <div className="UltimoInput">
          <img
            className="IconoDeBasurero"
            src={basurero}
            alt="Imagen De Basurero"
          ></img>

          <input
            type="button"
            value="CancelarPedido"
            className="InputCancelarPedido"
          />
        </div>
      </div>
    </div>
  );
};

export default CarritoPedido;
