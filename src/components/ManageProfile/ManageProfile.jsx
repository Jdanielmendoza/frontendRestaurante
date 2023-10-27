import React from "react";
import "./ManageProfile.css";
import iconoMaximizar from "/iconoMaximizar2.svg";
import iconoLapiz from "/iconoLapiz.svg";
import iconoTuerca from "/iconoEditarPerfil.svg";
import iconoClose from "/iconoClose.svg";
import logoRestaurante from "/logoRestaurante.jpeg";
const ManageProfile = () => {
  return (
    <div className="contenedorGestorDePerfil">
      <img className="imgDeTrabajador" src={logoRestaurante} alt="Imagen Del Trabajador"></img>

      <div className="contenedorDeDetalle">
        <div className="primerDetalle">
          <img
            className="iconoPantallaCompleta"
            src={iconoMaximizar}
            alt="Icono De Maximixar"
          ></img>
          <p className="primerParrafo">Pantalla Completa</p>
        </div>

        <div className="segundoDetalle">
          <img
            className="iconoCambiarPassword"
            src={iconoLapiz}
            alt="Icono De Lapiz"
          ></img>
          <p className="segundoParrafo">Cambiar Contraseña</p>
        </div>

        <div className="tercerDetalle">
          <img
            className="iconoEditarPerfil"
            src={iconoTuerca}
            alt="Icono De Herramienta"
          ></img>
          <p className="tercerParrafo">Editar Perfil</p>
        </div>

        <hr className="lineaDeDetalle"></hr>

        <div className="cuartoDetalle">
          <img className="iconoClose" src={iconoClose} alt="Icono Close"></img>
          <p className="cuartoParrafo">Cerrar Sesión</p>
        </div>
      </div>
    </div>
  );
};

export default ManageProfile;
