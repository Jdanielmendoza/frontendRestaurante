import "./NotaDeVenta.css";
const NotaDeVenta = ({ pedido, detalle_arreglo_pedido }) => {
  //console.log(detalle_arreglo_pedido);
  const fecha = new Date(detalle_arreglo_pedido[0]?.currentdate);
  const day =
    fecha.getDate() < 9 ? "0".concat(fecha.getDate()) : fecha.getDate();
  const month =
    fecha.getMonth() < 9 ? "0".concat(fecha.getMonth()) : fecha.getMonth();
  const year = fecha.getFullYear();

  return (
    <div className="contenedorDeNotaDeVenta">
      <div className="primerParrafo">
        <h4 className="primerTitulo">NOTA DE VENTA</h4>
        <h6 className="nroPedido">Nro Pedido: {pedido.nro_pedido}</h6>
      </div>

      <div className="segundoParrafo">
        <div className="segundoParrafoPrimeraFila">
          <p>VENDEDOR: {pedido.ci_usuario}</p>
          <p>MESA: {pedido.nro_mesa}</p>
        </div>

        <div className="segundoParrafoSegundaFila">
          <p>FECHA: {`${day}/${month}/${year}`}</p>
          <p>HORA: {detalle_arreglo_pedido[0]?.currenthour}</p>
        </div>
      </div>

      <div className="tercerParrafoDeColumnas">
        <p>UNID.</p>
        <p>NOMBRE</p>
        <p>PRECIO</p>
        <p>IMPORTE</p>
      </div>
      <hr className="primeraLinea"></hr>

      {detalle_arreglo_pedido.length === 0 ? (
        <div>cargando...</div>
      ) : (
        <>
          <section>
            {detalle_arreglo_pedido.map((detalle) => {
              return (
                <div key={detalle.nombre_producto + detalle.nro_pedido} className="cuartoParrafoDeDatos">
                  <p className="detalleParrafo" >{detalle.cantidad}</p>
                  <p className="detalleParrafo" >{detalle.nombre_producto}</p>
                  <p className="detalleParrafo" >{detalle.precio_producto}</p>
                  <p className="detalleParrafo" >{detalle.total_detalle}</p>
                </div>
              );
            })}
          </section>

          <hr className="segundaLinea"></hr>
          <hr className="terceraLinea"></hr>
          <div className="quintoParrafoDeTotales">
            <div className="quintoParrafoPrimeraLinea">
              <p>SUB TOTAL</p>
              <p>bs.{detalle_arreglo_pedido[0]?.total_pedido}</p>
            </div>
            <div className="quintoParrafoSegundaLinea">
              <p>DESCUENTO</p>
              <p>bs.{detalle_arreglo_pedido[0]?.descuento_pedido}</p>
            </div>
            <div className="quintoParrafoTerceraLinea">
              <p>TOTAL</p>
              <p>bs.{detalle_arreglo_pedido[0]?.total_raw} </p>
            </div>
          </div>
        </>
      )}

      <div className="sextoParrafo">
        <div className="sextoParrafoPrimeraLinea">
          <p>ID: {pedido.id_pedido}</p>
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
