import React, { useEffect, useState } from "react";
import "./CarritoNotaDeSalida.css";
import { v4 as uuidv4 } from "uuid";
import basurero from "/iconoBasurero.svg";
import { crearNotaDeSalida } from "../../../../apiServices/apiServices.js";
import useNotaDeSalida from "../UseNotaDeSalida.jsx";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ItemDetalleProducto = ({ id_producto, Cantidad, Nombre, Precio }) => {
  const { eliminarProductoDelCarrito } = useNotaDeSalida();

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

const CarritoNotaDeSalida = () => {
  const {
    carrito,
    actualizarDetalle,
  } = useNotaDeSalida();
  const navigate = useNavigate();

  useEffect(() => {
    
  }, []);

  const enviarNotaDeSalida = async () => {
    console.log(carrito);
    const fecha = new Date();
    try {
      const res = await crearNotaDeSalida({
        id: uuidv4(),
        total: carrito.total,
        detalle: carrito.detalle,
        fecha,
        ci_usuario: carrito.ci_cajero,
        arreglo_de_detalles_de_pedidos: carrito.arreglo_detalle_pedido,
      });
      console.log(res);
      Swal.fire({
        icon: "success",
        title: "se registraron los productos de salida!",
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
      <h3 className="TituloDePedido">Nota de salida</h3>

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

      <div className="ContenedorDeTotalAPagar">
        <p className="ParrafoDelPrecioTotal">Total</p>
        <p className="ParrafoDeLaCantidadTotal">Bs.{carrito.total}</p>
      </div>

      <hr className="SegundaLinea"></hr>

     
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
          onClick={() => enviarNotaDeSalida()}
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
            onClick={() => navigate("/notadesalida")}
          />
        </div>
      </div>
    </div>
  );
};

export default CarritoNotaDeSalida;
