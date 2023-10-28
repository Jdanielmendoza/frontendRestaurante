import React from "react";
import "./FormularioLogin.css";
import userLogin from "/icon-userLogin.svg";
import password from "/password.svg";
import Oso from "/OsoRuedaLogo.png";
import { Toaster } from 'react-hot-toast';
import { loginUser } from "../../apiServices/apiServices.js";
import { useState } from "react";

const FormularioLogin = () => {
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");

  return (
    <div className="ContenedorFormLogin">
      <div className="TituloFormLogin">OSO RUEDA</div>
      <div className="ContainerIniciarSesionLogo">
        <div className="containerTitleForm">
          <div className="titleIniciarSesion">Iniciar Sesión</div>
          <form className="FormularioLogin" onSubmit={(e)=>{
            e.preventDefault(); 
            loginUser(nombre,contraseña)}
          }>
            <div className="GrupUserImgLabelinput">
              <img
                className="IconoUser"
                src={userLogin}
                alt="Imagen De Usuario"
              ></img>

              <div className="GrupUserLabelInput">
                <label htmlFor="inputUserId" className="labelUser">
                  Usuario
                </label>
                <input
                  type="text"
                  className="inputUser"
                  id="inputUserId"
                  placeholder="Usuario"
                  onChange={(e)=> {setNombre(e.target.value) }}
                  required
                />
              </div>
            </div>
            <div className="GrupPassImgLabelInput">
              <img
                className="IconoPassword"
                src={password}
                alt="Imagen De Contra"
              ></img>

              <div className="GrupPassLabelInput">
                <label htmlFor="inputPasswordId" className="labelPassword">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="inputPasswor"
                  id="inputPasswordId"
                  placeholder="Password"/*Para que se vea adentro de la caja*/ 
                  onChange={(e)=>{setContraseña(e.target.value)}}
                  required
                />
              </div>
            </div>
            <input type="submit" value="INGRESAR" className="inputEnter" />
          </form>
        </div>
        <div className="containerLogoOso">
          <img src={Oso} alt="osoLogo" />
        </div>
      </div>
      <Toaster/> 
    </div>
  );
};

export default FormularioLogin;
