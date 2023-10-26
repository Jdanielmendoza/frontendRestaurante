import React from "react";
import "./TarjetaDeReporteDeInicio.css";

const TarjetaDeReporteDeInicio = (props) => {
  return (
    <div
      className="contenedorDeTarjeta"
      style={{ "--fondoDeColorDeTarjeta": props.ColorDeFondo }}    
    >
      <img className="iconoPortada" src={props.ImgDeTarjeta} alt="Imagen De Portada"
      style={{ "--fondoDeColorTarjetaImagen": props.ColorDeFondoDeImg }}
      ></img>

      <div className="contenedorDeDescripcion">
        <div className="contenedorDeTitulo">
          <div className="tituloDeNumero">{props.tituloDeNumero}</div>
          <div className="tituloDeValorDeNumero">
            {props.tituloDeValorDeNumero}
          </div>
        </div>

        <div className="portada">
          <div className="descripcion">{props.descripcion}</div>
          <div className="detalle">{props.detalle}</div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaDeReporteDeInicio;
