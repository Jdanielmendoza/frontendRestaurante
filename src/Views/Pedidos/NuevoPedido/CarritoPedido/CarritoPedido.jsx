import React, { useEffect, useState } from "react";
import "./CarritoPedido.css";
import { v4 as uuidv4 } from "uuid";
import basurero from "/iconoBasurero.svg";
import {
  obtenerMesas,
  obtenerPagos,
  crearPedido,
} from "../../../../apiServices/apiServices.js";
import useCarrito from "../useCarrito.jsx";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ItemDetalleProducto = ({ id_producto, Cantidad, Nombre, Precio }) => {
  const { eliminarProductoDelCarrito } = useCarrito();

  return (
    <li
      className="LiDeContenidoDeCantidadNombreYPrecio"
      onClick={() => eliminarProductoDelCarrito(id_producto)}
      title="eliminar del carrito"
    >
      <p className="ParrafoCantidadDePlatillos">x{Cantidad}</p>
      <p className="ParrafoPlatillos">{Nombre}</p>
      <p className="ParrafoPrecioDePlatillo">Bs.{Precio}</p>
    </li>
  );
};

const CarritoPedido = () => {
  const {
    carrito,
    actualizarTotal,
    actualizarDetalle,
    actualizarNroMesa,
    actualizarTipoDePago,
  } = useCarrito();
  const [mesas, setMesas] = useState([]);
  const [pagos, setPagos] = useState([]);
  const navigate = useNavigate();
  const [idMesa , setIdMesa] = useState(); 

  useEffect(() => {
    const getMesas = async () => {
      try {
        const result = await obtenerMesas();
        const res = await obtenerPagos();
        setMesas(result);
        setPagos(res);
        carrito.id_pago = res[0]?.id ; 
        carrito.nro_mesa = result[0]?.id; 
      } catch (error) {}
    };
    getMesas();
  }, []);

  const enviarPedido = async () => {
    console.log(carrito);
    const fecha = new Date();
    try {
      const res = await crearPedido({
        id: uuidv4(),
        estado: "pendiente",
        total: carrito.total,
        descuento: carrito.descuento,
        detalle: carrito.detalle,
        fecha,
        ci_usuario: carrito.ci_cajero,
        id_tipodepago: carrito.id_pago,
        id_mesa: carrito.nro_mesa,
        nro: carrito.nro_pedido,
        arreglo_de_detalles_de_pedidos: carrito.arreglo_detalle_pedido,
      });
      console.log(res);
      Swal.fire({
        icon: "success",
        title: "El pedido se envio a la cocina!",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        navigate(-1);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ContenedorCarritoPedido">
      <h3 className="TituloDePedido">Nro Pedido: {carrito.nro_pedido}</h3>

      <ul className="ContedorDeProductos">
        {carrito.arreglo_detalle_pedido.map((producto) => {
          return (
            <ItemDetalleProducto
              key={producto.id_producto}
              id_producto={producto.id_producto}
              Cantidad={producto.cantidad}
              Nombre={producto.nombre}
              Precio={producto.cantidad * producto.precio}
            />
          );
        })}
      </ul>

      <hr className="PrimeraLinea"></hr>
      <div className="ContenedorDeDescuento">
        <p className="ParrafoDeTituloDeDescuento">Aplicar Descuento</p>

        <div className="ContenerdorDeInputDeDescuento">
          Bs.
          <input
            type="number"
            className="InputDeDescuento"
            min={0}
            onChange={(e) =>
              actualizarTotal({ ...carrito, descuento: e.target.value })
            }
            value={carrito.descuento}
          />
        </div>
      </div>

      <div className="ContenedorDeTotalAPagar">
        <p className="ParrafoDelPrecioTotal">Total</p>
        <p className="ParrafoDeLaCantidadTotal">Bs.{carrito.total}</p>
      </div>

      <hr className="SegundaLinea"></hr>

      <div className="DivNroDeMesas">
        <p className="ParrafoDeNroDeMesas">Nro De Mesa</p>
        <div className="OpcionesEngrupo">
          <select
            className="ContenerdorDeNumerosDeMesa"
            onChange={(e) => actualizarNroMesa(e.target.value)}
            defaultValue={null}
            required
          >
            <optgroup label="Mesas">
              {mesas.map((mesa) => {

                return (
                  <option
                    key={mesa.id}
                    value={mesa.id}/* 
                    selected={mesa.id === carrito.nro_mesa} */
                  >
                    {mesa.nro}
                  </option>
                );
              })}
            </optgroup>
          </select>
        </div>
      </div>

      <div className="DivNroDeMesas">
        <p className="ParrafoDeNroDeMesas">Tipo de pago</p>
        <div className="OpcionesEngrupo">
          <select
            className="ContenerdorDeNumerosDeMesa"
            onChange={(e) => actualizarTipoDePago(e.target.value)}
            defaultValue={null}
          >
            <optgroup label="Pagos">
              {pagos.map((pago) => {
                return (
                  <option
                    key={pago.id}
                    value={pago.id}
                    selected={pago.id === carrito.id_pago}
                  >
                    {pago.nombre}
                  </option>
                );
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
          placeholder="Escriba Especificaciones Del Pedido o Restricciones..."
          value={carrito.detalle}
          onChange={(e) => actualizarDetalle(e.target.value)}
        ></textarea>
      </div>

      <div className="ContenerdorDeInput">
        <input
          type="button"
          value="Enviar a cocina"
          className="InputEnviarACocina"
          onClick={() => enviarPedido()}
        />

        <div className="UltimoInput">
          <img
            className="IconoDeBasurero"
            src={basurero}
            alt="Imagen De Basurero"
          ></img>

          <input
            type="button"
            value=" Cancelar pedido"
            className="InputCancelarPedido"
            onClick={() => navigate("/pedido")}
          />
        </div>
      </div>
    </div>
  );
};

export default CarritoPedido;
