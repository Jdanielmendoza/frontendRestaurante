import React from "react";
import "./FormularioLogin.css";
import userLogin from "/icon-userLogin.svg";
import password from "/password.svg";
import Oso from "/OsoRuedaLogo.png";
const FormularioLogin = () => {
  return (
    <div className="ContenedorFormLogin">
      <div className="TituloFormLogin">OSO RUEDA</div>
      <div className="ContainerIniciarSesionLogo">
        <div className="containerTitleForm">
          <div className="titleIniciarSesion">Iniciar Sesión</div>
          <form className="FormularioLogin">
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
                  placeholder="Password"
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
    </div>
  );
};

export default FormularioLogin;
