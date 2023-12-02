import React from "react";
import "./MenuDelDia.css";
import fondo from "/fondo.jpg";
import { IconDeviceMobile, IconMapPin } from "@tabler/icons-react";

const MenuDelDia = () => {
  return (
    <div className="ContenedorDeMenuDelDia">
      <div className="ContenedorDeFondoMenuDelDia">
        <div className="PrimerGrupoDeParrafoMenuDelDia">
          <p className="PrimerParrafoMenuDelDia">El Mejor Abrazo De Oso</p>
          <p className="SegundoParrafoMenuDelDia">
            Para Comer Con La Mejor Atención
          </p>
          <p className="TercerParrafoMenuDelDia">Restaurante</p>
        </div>

        <button className="PrimetInputMenuDelDia">Menú Del Día</button>

      </div>

      <hr className="PrimeraLineaDelMenuDelDia"></hr>

      <div className="GrupoDeLaParteDeAbajoMenuDelDia">
        <div className="TercerGrupoDeParrafoMenuDelDia">
          <p className="SextoParrafoMenuDelDia">Horarios</p>
          <p className="SeptimoParrafoMenuDelDia">Lunes A Sábado</p>
          <p className="OctavoParrafoMenuDelDia">08:00 A 22:00 HRS</p>
          <IconDeviceMobile className="IconoDeMobilMenuDelDia" />
          <p className="NovenoParrafoMenuDelDia">69066140</p>
        </div>
        <div className="CuartoGrupoDeParrafoMenuDelDia">
          <IconMapPin className="IconoDeMapaMenuDelDia" stroke="3" />
          <p className="DecimoParrafoMenuDelDia">Ubicación</p>
        </div>
      </div>
    </div>
  );
};

export default MenuDelDia;
