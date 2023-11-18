import React, { useState } from "react";
import "./ManageProfile.css";
import logoRestaurante from "/logoRestaurante.jpeg";
import Button from "../Button/Button";
import {
  IconArrowsMaximize,
  IconPencil,
  IconSettings,
  IconLogout,
  IconArrowsMinimize
} from "@tabler/icons-react";
const ManageProfile = () => {
  const [isMax, setIsMax] = useState(document.fullscreenElement);
  const element = document.documentElement;
  const handleScreen = () => {
    if (!document.fullscreenElement) {
      element.requestFullscreen().catch((err) => {
        console.log(
          `Error al intentar entrar en modo de pantalla completa: ${err.message}`
        );
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsMax(!document.fullscreenElement);
  };
  return (
    <div className="contenedorGestorDePerfil">
      <img
        className="imgDeTrabajador"
        src={logoRestaurante}
        alt="Imagen Del Trabajador"
      ></img>

      <div className="contenedorDeDetalle">
        <Button
          Icono={isMax?IconArrowsMinimize: IconArrowsMaximize}
          titulo={isMax?"Minimizar Pantalla" :"Pantalla Completa"}
          backgroundColorButton="#fff0"
          colorIconButton="#5D52A3"
          colorTextButton="#898484"
          OnClickFn={handleScreen}
        />
        <Button
          Icono={IconPencil}
          titulo="Cambiar Contraseña"
          backgroundColorButton="#fff0"
          colorIconButton="#5D52A3"
          colorTextButton="#898484"
          navigateTo="/cambiarcontraseña"
        />
        <Button
          Icono={IconSettings}
          titulo="Editar Perfil"
          backgroundColorButton="#fff0"
          colorIconButton="#5D52A3"
          colorTextButton="#898484"
          navigateTo="/"
        />

        <hr className="lineaDeDetalle"></hr>

        <Button
          Icono={IconLogout}
          titulo="Cerrar Sesión"
          backgroundColorButton="#fff0"
          colorIconButton="#BF8484"
          colorTextButton="#BF8484"
          OnClickFn={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("cargo");
            localStorage.removeItem("imagen");
            localStorage.removeItem("usuario");
            window.location.href = "/";
          }}
        />
      </div>
    </div>
  );
};

export default ManageProfile;
