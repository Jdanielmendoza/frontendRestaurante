import { IconScanEye, IconEdit } from "@tabler/icons-react";
import "./FilaPedidos.css";
import { bg_color } from "../servicesPedido";
import { useNavigate } from "react-router-dom";
import { useEffect, useId, useState } from "react";
import { obtenerDetallesPedidos, actulizarPedido } from "../../../apiServices/apiServices.js";
import NotaDeVenta from "../../../components/NotaDeVenta/NotaDeVenta.jsx";
import Swal from "sweetalert2";
import { usePDF } from 'react-to-pdf';

const FilaPedidos = ({ pedido, setPedidos }) => {
  const [cargo, setCargo] = useState("administrador");
  const [detalle_arreglo_pedido, setDetalle_arreglo_pedido] = useState([]);
  const idDialog = useId();
  const { toPDF, targetRef } = usePDF({filename: 'notaDeVenta.pdf'});
  const navigate = useNavigate(); 

  const mostrarNotaDeVenta = () => {
    const getDetalleDelPedido = async () => {
      try {
        const dialog = document.getElementById(idDialog + ":dialog");
        dialog.showModal();
        const res = await obtenerDetallesPedidos(pedido.id_pedido);
        setDetalle_arreglo_pedido(res);
      } catch (error) {
        console.log(error);
      }
    };
    getDetalleDelPedido();
  };
  const cerrarModalNotaDeVenta = () => {
    const dialog = document.getElementById(idDialog + ":dialog");
    dialog.close();
  };

  const entregarPedido = () => {
   if(pedido.estado_pedido ==='pendiente'){
    Swal.fire({
      title: "Estas seguro?",
      text: "no podras revertir los cambios!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, entregar!",
    }).then(async(result) => {
      if (result.isConfirmed) {
        console.log(pedido);
        await actulizarPedido({
          estado: 'terminado',
          total : pedido.total_pedido ,
          descuento : pedido.descuento_pedido,
          detalle : pedido.descripcion_pedido,
          id_tipodepago: pedido.id_tipodepago,
          idPedido:pedido.id_pedido
        }); 
        //llamar aqui a la funcion asincrona que setea el pedido a terminado
        setPedidos((prev) => {
          return prev.map((ped) =>
            ped.id_pedido === pedido.id_pedido
              ? { ...ped, estado_pedido: "terminado" }
              : ped
          );
        });
        Swal.fire(
          "Terminado!",
          "Se marco el pedido como terminado!.",
          "success"
        );
      }
    });
   }else{
    Swal.fire('el estado del pedido no es pendiente!')
   }
  };

  useEffect(() => {
    setCargo(localStorage.getItem("cargo"));
  }, []);

  return (
    <li
      className="containerRowPedido"
      title="ver mas detalles"
      onDoubleClick={() => {
        cargo === "cocinero" ? mostrarNotaDeVenta() : () => {};
      }}
    >
      <div className="containImageNameUser">
        <img
          src={pedido?.imagen_usuario}
          alt="imgUser"
          className="imageRowUser"
        />
        <p className="user-row-nombre">{pedido?.primer_nombre_usuario}</p>
      </div>
      <p className="pedido-row-precio">{pedido?.nro_pedido}</p>
      <p className="pedido-row-precio">{pedido?.nro_mesa}</p>
      <p
        className="pedido-row-stock"
        style={{
          "--bgColor-state": bg_color[pedido.estado_pedido],
          "--color-text-state":
            pedido.estado_pedido == "cancelado" ? "#fff" : "#000",
        }}
      >
        {pedido?.estado_pedido}
      </p>
      <p className="pedido-row-descripcion"> {pedido?.descuento_pedido} </p>
      <p className="pedido-row-categoria"> {pedido?.total_pedido} </p>
      <div className="actionsRows actionRowsPedido">
        {cargo === "cajero" ? (
          <>
            <IconScanEye
              stroke="2.5"
              className="iconRowPedido scanEyePedido"
              onClick={mostrarNotaDeVenta}
            />
            
              <IconEdit
                stroke="2.5"
                className="iconRowPedido IconEditPedido "
                onClick={()=>navigate('editarPedido',{state:pedido })}
              />
          </>
        ) : (
          <button
            className="buttonTerminadoCocinero"
            title="entregar pedido"
            onClick={() => entregarPedido()}
          >
            ENTREGAR
          </button>
        )}
      </div>

      <dialog id={idDialog + ":dialog"} className="notaDeVentaDialog">
        <div>
          <NotaDeVenta
            Ref={targetRef}
            pedido={pedido}
            detalle_arreglo_pedido={detalle_arreglo_pedido}
          />
          <div>
            <button
              className="closeNotaDeVetanBoton"
              onClick={cerrarModalNotaDeVenta}
              title="cerrar ventana emergente"
            >
              cerrar
            </button>
            <button
              className="imprimirNotaDeVetanBoton"
              onClick={() => toPDF()}
              title="imprimir nota de venta"
            >
              descargar
            </button>
          </div>
        </div>
      </dialog>
    </li>
  );
};

export default FilaPedidos;
