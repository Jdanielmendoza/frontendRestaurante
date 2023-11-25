import { IconEdit, IconTrash } from "@tabler/icons-react";
import "./FilaUsuario.css";
import { defaultUser } from "../servicesUser.js";
import logoWhatsApp from "/whatsapp_icon.png";
import { useNavigate } from "react-router-dom";
const FilaUsuario = ({ usuario = defaultUser }) => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate("/usuario/update", { state: usuario });
  };

  return (
    <li
      id="containerRowUser"
      className="containerRowProduct"
      title="ver mas detalles"
    >
      <div className="containImageNameUser">
        <img src={usuario.imagen} alt="imgProduct" className="imageRowUser" />
        <p className="user-row-nombre">{usuario.nombre}</p>
      </div>
      <p className="producto-row-precio">{usuario.ci}</p>
      <p className="producto-row-precio">{usuario.telefono}</p>
      <p className="producto-row-stock"> {usuario.correo} </p>
      <p className="producto-row-descripcion"> {usuario.sexo} </p>
      <p className="producto-row-categoria"> {usuario.cargo} </p>
      <div className="actionsRows cActionRowa">
        <IconEdit
          id="iconRowEditUser"
          className="iconRowProduct"
          onClick={handleUpdate}
        />
        
        <a href={`https://api.whatsapp.com/send?phone=${usuario.telefono}&text=${"hola que tal?"}`} target="__BLANK" className="logoWhatsAppC">
          <img
            src={logoWhatsApp}
            alt="message"
            className="logoWhatsApp"
            title="enviar mensaje"
          />
        </a>
      </div>
    </li>
  );
};

export default FilaUsuario;
