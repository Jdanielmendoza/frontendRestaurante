import "./Nav.css";
import DropDown from "./DropDown/DropDown";
import {
  IconSmartHome,
  IconUsers,
  IconBottle,
  IconLogout,
  IconSquareRoundedPlus,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Button from "./Button/Button";

const Nav = () => {
  return (
    <nav className="containerNav">
      <div className="perfilNav">
        <img
          src={localStorage.getItem("imagen")}
          alt="perfil"
          className="imagePerfil"
        />
        <p className="nombreDashboard">{localStorage.getItem("usuario")}</p>
      </div>
      <section className="sectionNavMenu">
        <DropDown icono={<IconSmartHome stroke={3} />} titulo="Inicio" />
        <DropDown icono={<IconUsers stroke={3} />} titulo="Usuario" NavigateTo="/usuario" />
        <DropDown icono={<IconBottle stroke={3} />} titulo="Producto" NavigateTo="/producto"/>

        <DropDown icono={<IconUsers stroke={3} />} titulo="Insumos">
          Insumos
        </DropDown>
        <DropDown icono={<IconUsers stroke={3} />} titulo="Mesas">
          <Link to="/registro" className="">
            <Button
              icono={<IconSquareRoundedPlus stroke={2.5} />}
              titulo="Registrar Usuario"
            />
          </Link>
        </DropDown>
        <DropDown icono={<IconUsers stroke={3} />} titulo="Nota de Salida">
          hola
        </DropDown>
        <DropDown icono={<IconUsers stroke={3} />} titulo="Reportes">
          reporte
        </DropDown>

        <div
          className="containerCerrarSesion"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
        >
          <IconLogout stroke={2.2} color="#BA6B6B" />
          <p>Cerrar Sesion</p>
        </div>
      </section>
    </nav>
  );
};

export default Nav;
