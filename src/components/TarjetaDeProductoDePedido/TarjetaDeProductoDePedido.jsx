import React, { useEffect, useState } from "react";
import "./TarjetaDeProductoDePedido.css";
import { IconMinus, IconPlus } from "@tabler/icons-react";
const TarjetaDeProductoDePedido = ({ producto }) => {
  const [cant, setCant] = useState(0);

  const incrementCantProduct = () => {
    if (cant < producto.stock) {
      let a = cant + 1;
      localStorage.setItem(producto.id, a);
      return setCant(cant + 1);
    } else {
    }
  };
  const decrementCantProduct = () => {
    let a = cant - 1;
    localStorage.setItem(producto.id, a);
    if (a <= 0) {
      localStorage.removeItem(producto.id);
    }
    return a >= 0 && setCant(cant - 1);
  };

  useEffect(() => {
    //  localStorage.setItem(producto.id, cant)
    console.log(producto);
    setCant(
      localStorage.getItem(producto.id)
        ? parseInt(localStorage.getItem(producto.id))
        : 0
    );
  }, []);

  return (
    <div
      className="contenedorDeTarjetaDeProductoDePedidos"
      id={producto?.stock === 0 ? "productoFueraDeStock" : ""}
    >
      <div className="portadaDelProducto">
        <img
          className="imgDelProducto"
          src={producto.imagen}
          alt="Imagen Del Producto"
        />
        <p className="tituloDelProducto">{producto.nombre}</p>
      </div>

      <div className="contenedorDelCuerpoDeLaTarjeta">
        <div className="contenedorDeCantidadYPrecioDelProducto">
          <p className="precioDelProducto">Bs.{producto.precio}</p>
          <div className="grupoDeButtonDeCantidadDeProducto">
            <button
              className="inputIncrementAndDecrement"
              onClick={decrementCantProduct}
            >
              <IconMinus className="iconMinusProduct" stroke="4" />
            </button>

            <p className="cantidadDelProducto">{cant}</p>
            {producto.stock > 0 && (
              <button
                className="inputIncrementAndDecrement"
                id={cant == producto.stock ? "alertOutStock" : ""}
                onClick={incrementCantProduct}
              >
                <IconPlus stroke="4" className="iconMinusProduct" />
              </button>
            )}
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
