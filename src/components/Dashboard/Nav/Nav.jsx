import "./Nav.css";
import DropDown from "./DropDown/DropDown";
import {
  IconSmartHome,
  IconUsers,
  IconBottle,
  IconLogout,
  IconSquareRoundedPlus,
  IconX,
  IconShoppingCartPlus,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";

const Nav = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCocinero, setIsCocinero] = useState(false);
  const [isCajero, setIsCajero] = useState(false);

  const handleClickShowMenu = () => {
    document
      .querySelector(".containerMenuNavegacionDashboard")
      .classList.toggle("containerMenuNavegacionDashboard-active");
  };

  useEffect(() => {
    const rol = localStorage.getItem("cargo");
    if (rol === "administrador") {
      setIsAdmin(true);
    }
    if (rol === "cajero") {
      setIsCajero(true);
    }
    if (rol === "cocinero") {
      setIsCocinero(true);
    }
  }, []);

  return (
    <nav className="containerNav">
      <div className="perfilNav">
        <IconX
          className="iconXMenu"
          stroke={3}
          onClick={() => handleClickShowMenu()}
        />
        <img
          src={localStorage.getItem("imagen")}
          alt="perfil"
          className="imagePerfil"
        />
        <p className="nombreDashboard">{localStorage.getItem("usuario")}</p>
      </div>
      <section className="sectionNavMenu">
        <DropDown icono={<IconSmartHome stroke={3} />} titulo="Inicio" />
        {isAdmin ? (
          <DropDown
            icono={<IconUsers stroke={3} />}
            titulo="Usuario"
            NavigateTo="/usuario"
          />
        ) : (
          <DropDown
            icono={<IconShoppingCartPlus />}
            titulo="Pedidos"
            NavigateTo="/pedido"
          />
        )}

        <DropDown
          icono={<IconBottle stroke={3} />}
          titulo="Producto"
          NavigateTo="/producto"
        />

        <DropDown icono={<IconUsers stroke={3} />} titulo="Insumos">
          Insumos
        </DropDown>
        <DropDown
          icono={<IconUsers stroke={3} />}
          titulo="Mesas"
          NavigateTo="/mesa"
        />
        <DropDown icono={<IconUsers stroke={3} />} titulo="Nota de Salida">
          hola
        </DropDown>
        <DropDown icono={<IconUsers stroke={3} />} titulo="Reportes">
          reporte
        </DropDown>
      </section>
    </nav>
  );
};

export default Nav;
