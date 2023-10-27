import "./App.css";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
import CambiarPassword from "./components/cambiarPassword/cambiarPassword";
import RegistrarUsuario from "./components/RegistrarUsuario/RegistrarUsuario";
import { Routes, Route } from "react-router-dom";
import ProtectorDeRutas from "./services/ProtectorDeRutas";
import Dashboard from "./components/Dashboard/Dashboard";

import FormularioRegistroCategoria from './components/FormularioRegistroCategoria/FormularioRegistroCategoria';
import FormularioRegistroMesa from "./components/FormularioRegistroMesa/FormularioRegistroMesa";
import FormularioRegistroProducto from "./components/FormularioRegistroProducto/FormularioRegistroProducto";

function App() {
  return (
    <>
      <Routes >
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

        <Route path="/categoria/registro" element={<FormularioRegistroCategoria/>} />
        <Route path="/mesa/registro" element={<FormularioRegistroMesa/>} />

        <Route path="/producto/registro" element={<FormularioRegistroProducto/>} />
      </Routes>
    </>
  );
}

export default App;
