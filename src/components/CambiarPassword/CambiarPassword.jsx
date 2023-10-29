import React, { useState } from "react";
import "./CambiarPassword.css";
import danger from "/iconoDanger.svg";
import { cambiarContraseña } from "../../apiServices/apiServices.js";
import { Toaster } from "react-hot-toast";
const CambiarPassword = () => {
  const [oldPassword, setOldPassword ] = useState(""); 
  const [newPassword, setNewPassword ] = useState(""); 
  const [passwordVerify, setPasswordVerify] = useState(""); 

  const handleClickPassword = async()=>{
    try {
      const ci = localStorage.getItem("ci")
      const res = await cambiarContraseña(ci,oldPassword, newPassword, passwordVerify); 
      window.location.href = "/"
      console.log(res);
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="ContenedorCambiarPassword">
      <div className="TituloDePassword">
        <img className="IconoDanger1" src={danger} alt="Imagen Danger"></img>
        <div className="TituloPrincipalPassword">CAMBIO DE CONTRASEÑA</div>
        <img className="IconoDanger2" src={danger} alt="Imagen Danger"></img>
      </div>
      <form className="ContenedorInputLabel" onSubmit={(e)=>{
        e.preventDefault(); 
        handleClickPassword(); 
      }}>

        <div className="primerLabelInput">
          <label htmlFor="inputPasswordAnciId" className="labelPasswordAnci">
            ANTIGUA CONTRASEÑA
          </label>
          <input
            type="password"
            className="inputF inputPasswordAnci"
            id="inputPasswordAnciId"
            placeholder="Antigua Contraseña"
            onChange={(e)=>{
              setOldPassword(e.target.value);
            }}
            required
          />
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
            onChange={(e)=>{
              setNewPassword(e.target.value);
            }}
            required
          />
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
            onChange={(e)=>{
              setPasswordVerify(e.target.value);
            }}
            required
          />
        </div>

        <input
          type="submit"
          value="CAMBIAR CONTRASEÑA"
          className="inputF inputNewPassword"
        ></input>
      </form>
      <Toaster/>
    </div>
  );
};

export default CambiarPassword;
