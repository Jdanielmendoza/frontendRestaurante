import { IconScanEye, IconEdit } from "@tabler/icons-react";
import "./FilaNotaDeSalida.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useId, useState } from "react";
import { obtenerDetallesPedidos } from "../../../apiServices/apiServices.js";
import NotaDeVenta from "../../../components/NotaDeVenta/NotaDeVenta.jsx";
import { usePDF } from "react-to-pdf";

const FilaNotaDeSalida = ({ pedido }) => {
  const [cargo, setCargo] = useState("administrador");
  const [detalle_arreglo_pedido, setDetalle_arreglo_pedido] = useState([]); //-------------------------
  const idDialog = useId();
  const { toPDF, targetRef } = usePDF({ filename: "notaDeSalida.pdf" });
  const navigate = useNavigate();

  const mostrarNotaDeVenta = () => {
    const getDetalleDeLaNotaDeSalida = async () => {
      try {
        const dialog = document.getElementById(idDialog + ":dialog");
        dialog.showModal();
        const res = await obtenerDetallesPedidos(pedido.id_pedido); //UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU
        setDetalle_arreglo_pedido(res); //-----------------------------------------------------------
      } catch (error) {
        console.log(error);
      }
    };
    getDetalleDeLaNotaDeSalida();
  };
  const cerrarModalNotaDeVenta = () => {
    const dialog = document.getElementById(idDialog + ":dialog");
    dialog.close();
  };

  /*  const entregarPedido = () => {
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
  };//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
 */
  useEffect(() => {
    setCargo(localStorage.getItem("cargo"));
  }, []);

  return (
    <li
      className="containerRowSalida"
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

      <p className="pedido-row-descripcion">
        alguna descripcino largar de la nota de salida{" "}
        {/*pedido?.descuento_pedido*/}{" "}
      </p>

      <p className="pedido-row-categoria"> {pedido?.total_pedido} </p>
      <div className="actionsRows actionRowsPedido">
        <IconScanEye
          stroke="2.5"
          className="iconRowPedido scanEyePedido"
          onClick={mostrarNotaDeVenta}
        />

        <IconEdit
          stroke="2.5"
          className="iconRowPedido IconEditPedido "
          onClick={() => navigate("editarPedido", { state: pedido })}
        />
      </div>
      <dialog id={idDialog + ":dialog"} className="notaDeVentaDialog">
        <div>
          <NotaDeVenta
            Ref={targetRef}
            pedido={pedido} //UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU
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

export default FilaNotaDeSalida;
