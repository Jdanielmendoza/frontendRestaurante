import React from "react";
import "./CambiarPassword.css";
import danger from "/iconoDanger.svg";
const CambiarPassword = () => {
  return (
    <div className="ContenedorCambiarPassword">
      <div className="TituloDePassword">
        <img className="IconoDanger1" src={danger} alt="Imagen Danger"></img>
        <div className="TituloPrincipalPassword">CAMBIO DE CONTRASEÑA</div>
        <img className="IconoDanger2" src={danger} alt="Imagen Danger"></img>
      </div>
      <div className="ContenedorInputLabel">

        <div className="primerLabelInput">
          <label htmlFor="inputPasswordAnciId" className="labelPasswordAnci">
            ANTIGUA CONTRASEÑA
          </label>
          <input
            type="password"
            className="inputF inputPasswordAnci"
            id="inputPasswordAnciId"
            placeholder="Antigua Contraseña"
          ></input>
        </div>

        <div className="segundoLabelInput">
          <label htmlFor="inputPasswordNewId" className="labelPasswordNew">
            NUEVA CONTRASEÑA
          </label>
          <input
            type="password"
            className="inputF inputPasswordNew"
            id="inputPasswordNewId"
            placeholder="Nueva Contraseña"
          ></input>
        </div>

        <div className="terceroLabelInput">
          <label htmlFor="inputPasswordVeriId" className="labelPasswordVeri">
            VERIFICACIÓN DE NUEVA CONTRASEÑA
          </label>
          <input
            type="password"
            className="inputF inputPasswordVeri"
            id="inputPasswordVeriId"
            placeholder="Verificación De Contraseña"
          ></input>
        </div>

        <input
          type="submit"
          value="CAMBIAR CONTRASEÑA"
          className="inputF inputNewPassword"
        ></input>
      </div>
    </div>
  );
};

export default CambiarPassword;
