import React from "react";
import logoOso from "/logoRestaurante.jpeg";
import "./CartaDeMenuDelDia.css";
import logoDeOsoRueda from "/OsoRuedaLogo.png";

const CartaDeMenuDelDia = () => {
  return (
    <div className="ContenedorDeCartaDeMenu">
      <div className="ContenedorDeTituloDeCartaDeMenu">
        <img
          className="ImagenDeEsqinaDeCartaDeMenu"
          src={logoOso}
          alt="Oso Rueda"
        />
        <h3 className="TituloDeCartaDeMenu">El Mejor Abrazo De Oso</h3>
      </div>

      <div className="ContenedorDeParraforDeCartaDeMenu">
        <div className="GrupoDeParrafosDeCartaDeMenu">
          <h2 className="ParrafoDeSegundoDeCartaDeMenu">Segundos</h2>
          <h2 className="ParrafoDeSopasDeCartaDeMenu">Sopas</h2>
          <h2 className="ParrafoDePostreDeCartaDeMenu">Postre</h2>
        </div>
       <img className="ImagenDeOsoRuedaDeCartaDeMenu" 
       src={logoDeOsoRueda}
       alt="OsoRueda"/>
      </div>
    </div>
  );
};

export default CartaDeMenuDelDia;
