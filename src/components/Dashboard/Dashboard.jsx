import "./Dashboard.css";
import Nav from "./Nav/Nav";
import logoRestaurante from "/logoRestaurante.jpeg";
import ManageProfile from "../ManageProfile/ManageProfile";
import { IconChevronDown } from "@tabler/icons-react";

const Dashboard = ({ children }) => {
  
  const handleShowManageProfile = ()=> {
    document.querySelector(".IconChevronDownDashboard").classList.toggle("IconChevronDownDashboard-active");
    document.querySelector(".contenedorGestorDePerfil").classList.toggle("contenedorGestorDePerfil-active")
  }

  return (
    <div className="containerDashboard">
      <header className="headerDashboard">
        <h4 className="tituloHeaderDashboard">OSO RUEDA</h4>
        <section className="ContainericonoPerfilDashboardLogo">
          <p className="rolUserDashboard">{localStorage.getItem("cargo")}</p>
          <div className="containerPerfilAndImageAndListOptionDashboard">
            <div className="contImgAndIconDown" onClick={handleShowManageProfile}>
              <img
                src={logoRestaurante}
                alt="logoRestaur"
                className="imageLogoRestauranteDashboard"
              />
              <IconChevronDown color="#898484" className="IconChevronDownDashboard"/>
            </div>
            <ManageProfile  />
          </div>
        </section>
      </header>
      <nav className="containerMenuNavegacionDashboard">
        <Nav />
      </nav>
      <section className="childrenDashboard">{children}</section>
    </div>
  );
};

export default Dashboard;
