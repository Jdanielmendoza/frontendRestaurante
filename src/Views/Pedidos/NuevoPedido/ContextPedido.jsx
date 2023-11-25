import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const defaultCarrito = {
  ci_cajero: localStorage.getItem("ci"),
  id_pedido: uuidv4(),
  nro_pedido: 1,
  arreglo_detalle_pedido: [
    /*  {
      id: "",
      nombre: "",
      precio: "25",
      cantidad: "2",
      importe: "0",
    }, */
  ],
  descuento: 0,
  total: 0,
  nro_mesa: "",
  detalle: "",
  id_pago: "",
};

// creamos el contexto
export const contextCarritoDeCompras = createContext();

// creamos el provider
const ContextPedido = ({ children }) => {
  const [carrito, setCarrito] = useState(defaultCarrito);

  const agregarAlCarrito = (nuevoProducto) => {
    const IndiceDelProducto = carrito.arreglo_detalle_pedido.findIndex(
      (producto) => producto.id_producto == nuevoProducto.id_producto
    );

    if (IndiceDelProducto >= 0) {
      //quiere decir que el producto existe y necesita ser actualizado
      const carritoActualizado = {
        ...carrito,
        arreglo_detalle_pedido: carrito.arreglo_detalle_pedido.map((producto) =>
          producto.id_producto === nuevoProducto.id_producto
            ? nuevoProducto
            : producto
        ),
      };
      return actualizarTotal(carritoActualizado);
      //return setCarrito(carritoActualizado);
    }
    const nuevoCarrito = {
      ...carrito,
      arreglo_detalle_pedido:
        carrito.arreglo_detalle_pedido.concat(nuevoProducto),
    };
    return actualizarTotal(nuevoCarrito);
    //return setCarrito(nuevoCarrito);
  };

  const eliminarProductoDelCarrito = (id) => {
    const newArrayProducto = carrito.arreglo_detalle_pedido.filter(
      (producto) => producto.id_producto !== id
    );
    localStorage.removeItem(id);

    return actualizarTotal({
      ...carrito,
      arreglo_detalle_pedido: newArrayProducto,
    });
  };

  const limpiarCarrito = () => {
    return setCarrito({});
  };

  const actualizarTotal = (nuevoCarrito) => {
    let totalAPagar = 0;
    for (
      let index = 0;
      index < nuevoCarrito.arreglo_detalle_pedido.length;
      index++
    ) {
      /*  totalAPagar +=
        nuevoCarrito.arreglo_detalle_pedido[index].precio *
        nuevoCarrito.arreglo_detalle_pedido[index].cantidad; */
      totalAPagar += nuevoCarrito.arreglo_detalle_pedido[index].total;
    }
    localStorage.setItem(
      "carritoDeCompras",
      JSON.stringify({
        ...nuevoCarrito,
        total: totalAPagar - nuevoCarrito.descuento,
      })
    );
    return setCarrito({
      ...nuevoCarrito,
      total: totalAPagar - nuevoCarrito.descuento,
    });
  };

  const actualizarDetalle = (nuevoDetalleDelPedido) => {
    localStorage.setItem(
      "carritoDeCompras",
      JSON.stringify({ ...carrito, detalle: nuevoDetalleDelPedido })
    );
    return setCarrito({ ...carrito, detalle: nuevoDetalleDelPedido });
  };

  const actualizarNroMesa = (nro) => {
    localStorage.setItem(
      "carritoDeCompras",
      JSON.stringify({ ...carrito, nro_mesa: nro })
    );
    return setCarrito({ ...carrito, nro_mesa: nro });
  };

  const actualizarTipoDePago = (id_tipoDePago) => {
    localStorage.setItem(
      "carritoDeCompras",
      JSON.stringify({ ...carrito, id_pago: id_tipoDePago })
    );
    return setCarrito({ ...carrito, id_pago: id_tipoDePago });
  };

  const actualizarNroPedido = () => {
    let nuevoNroPedido = 0 ;
    if (localStorage.getItem("carritoDeCompras") !== null) {
      nuevoNroPedido  = JSON.parse(localStorage.getItem("carritoDeCompras"))?.nro_pedido + 1;
      localStorage.setItem(
        "carritoDeCompras",
        JSON.stringify({ ...carrito, nro_pedido: nuevoNroPedido })
      );
    }
    return setCarrito({ ...carrito, nro_pedido: nuevoNroPedido });
  };

  useEffect(() => {
    console.log(!!!localStorage.getItem("carritoDeCompras"));
    if (!!!localStorage.getItem("carritoDeCompras")) {  //si el local es null 
      setCarrito(defaultCarrito);
    } else {
      console.log("por true");
      console.log(carrito);
      setCarrito(JSON.parse(localStorage.getItem("carritoDeCompras")));
    }
  }, []);

  return (
    <contextCarritoDeCompras.Provider
      value={{
        agregarAlCarrito,
        limpiarCarrito,
        carrito,
        actualizarTotal,
        eliminarProductoDelCarrito,
        actualizarDetalle,
        actualizarNroMesa,
        actualizarTipoDePago,
        actualizarNroPedido,
      }}
    >
      {children}
    </contextCarritoDeCompras.Provider>
  );
};

export default ContextPedido;
