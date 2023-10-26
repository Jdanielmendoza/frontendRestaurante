import "./App.css";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
import CambiarPassword from "./components/cambiarPassword/cambiarPassword";
import CrearUsuario from "./components/CrearUsuario";
import RegistrarUsuario from "./components/RegistrarUsuario/RegistrarUsuario";
import { Routes, Route } from "react-router-dom";
import ProtectorDeRutas from "./services/ProtectorDeRutas";
import Dashboard from "./components/Dashboard/Dashboard";
import PaymentType from "./components/PaymentType/PaymentType";
import TarjetaDeReporteDeInicio from "./components/TarjetaDeReporteDeInicio/TarjetaDeReporteDeInicio";
import Money from "/Money.png";
import CarritoDeCompras from "/CarritoDeCompras.png";
import Timbre from "/Timbre.png";
function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<FormularioLogin />} />
        <Route
          element={
            <ProtectorDeRutas permisos={localStorage.getItem("token")} />
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/registro"
            element={
              <Dashboard>
                <RegistrarUsuario />
              </Dashboard>
            }
          />
          <Route
            path="/cambiarContraseña"
            element={
              <Dashboard>
                <CambiarPassword />
              </Dashboard>
            }
          />
        </Route>
        <Route path="*" element={<div>ruta no encontrada</div>} />
        <Route path="/tipodepago/registro" element={<PaymentType />} />
        <Route
          path="/rutaDePrueva"
          element={
            <div>
              <TarjetaDeReporteDeInicio
                ImgDeTarjeta={Money}
                ColorDeFondo="#161f41"
                ColorDeFondoDeImg="rgba(80, 210, 85, 0.59)"
                iconoPortada=""
                tituloDeNumero="376"
                tituloDeValorDeNumero="bs"
                descripcion="Ingreso Por Ventas"
                detalle="(hoy dia)"
              />
              <TarjetaDeReporteDeInicio
                ImgDeTarjeta={Timbre}
                ColorDeFondo="#231864"
                ColorDeFondoDeImg="#FFB611"
                iconoPortada=""
                tituloDeNumero="113"
                tituloDeValorDeNumero="Total"
                descripcion="Cantidad De Ventas"
                detalle="(De La Semna)"
              />
              <TarjetaDeReporteDeInicio
                ImgDeTarjeta={CarritoDeCompras}
                ColorDeFondo="#0C405E"
                ColorDeFondoDeImg="#E62D65"
                iconoPortada=""
                tituloDeNumero="42"
                tituloDeValorDeNumero="Total"
                descripcion="Productos De Salida"
                detalle="(De La Semana)"
              />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
