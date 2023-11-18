import { IconScanEye, IconEdit } from "@tabler/icons-react";
import "./FilaPedidos.css";
import { bg_color } from "../servicesPedido";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { useId } from "react";

const FilaPedidos = ({ pedido }) => {
  const idDialog = useId(); 

  const mostrarNotaDeVenta = () => {
    const dialog = document.getElementById(idDialog+":dialog");
    dialog.showModal();
  };
  const cerrarModalNotaDeVenta = () => {
    const dialog = document.getElementById(idDialog+":dialog");
    dialog.close();
  };
  return (
    <li className="containerRowPedido" title="ver mas detalles">
      <div className="containImageNameUser">
        <img src={pedido?.imagen} alt="imgUser" className="imageRowUser" />
        <p className="user-row-nombre">{pedido?.nombre}</p>
      </div>
      <p className="pedido-row-precio">{pedido?.nro_pedido}</p>
      <p className="pedido-row-precio">{pedido?.nro_mesa}</p>
      <p
        className="pedido-row-stock"
        style={{
          "--bgColor-state": bg_color[pedido.estado],
          "--color-text-state": pedido.estado == "cancelado" ? "#fff" : "#000",
        }}
      >
        {pedido?.estado}
      </p>
      <p className="pedido-row-descripcion"> {pedido?.descuento} </p>
      <p className="pedido-row-categoria"> {pedido?.total} </p>
      <div className="actionsRows actionRowsPedido">
        <IconScanEye
          stroke="2.5"
          className="iconRowPedido scanEyePedido"
          onClick={mostrarNotaDeVenta}
        />
        <Link to="/pedido/edit">
          <IconEdit stroke="2.5" className="iconRowPedido IconEditPedido " />
        </Link>
      </div>

      <dialog id={idDialog+":dialog"} className="notaDeVentaDialog">
        {/* <div>hola</div>
        <p>{pedido.nro_pedido}</p>
        <p>{pedido.total}</p> */}
        <button onClick={cerrarModalNotaDeVenta}>cerrar</button>
      </dialog>
    </li>
  );
};

export default FilaPedidos;
