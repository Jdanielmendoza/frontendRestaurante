import "./App.css";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
import CambiarPassword from "./components/cambiarPassword/cambiarPassword";
import RegistrarUsuario from "./components/RegistrarUsuario/RegistrarUsuario";
import { Routes, Route } from "react-router-dom";
import ProtectorDeRutas from "./services/ProtectorDeRutas";
import Dashboard from "./components/Dashboard/Dashboard";

import Inicio from "./Views/Inicio/Inicio";
import Usuario from "./Views/Usuario/Usuario";
import PaymentType from "./components/PaymentType/PaymentType";
import Productos from "./Views/Productos/Productos";

import ManageProfile from "./components/ManageProfile/ManageProfile";
import TarjetaDeProductoDePedido from "./components/TarjetaDeProductoDePedido/TarjetaDeProductoDePedido";
import polloEnteroAlaBrasa from "/PolloEnteroALaBrasa.jpeg";

import FormularioRegistroCategoria from "./components/FormularioRegistroCategoria/FormularioRegistroCategoria";
import FormularioRegistroMesa from "./components/FormularioRegistroMesa/FormularioRegistroMesa";
import FormularioRegistroProducto from "./components/FormularioRegistroProducto/FormularioRegistroProducto";
import ListaProducto from "./components/Productos/TablaProducto/FilaProducto/ListaProducto";
import Mesas from "./Views/Mesas/Mesas";
import HeaderProducto from "./components/Productos/HeaderProducto/HeaderProducto";
import HeaderMesa from "./components/Mesas/HeaderMesa/HeaderMesa";

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
          <Route
            path="/"
            element={
              <Dashboard>
                <Inicio />
              </Dashboard>
            }
          />
          <Route>
            <Route
              path="/usuario"
              element={
                <Dashboard>
                  <Usuario />
                </Dashboard>
              }
            />
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

          <Route>
            <Route
              path="/producto"
              element={
                <Dashboard>
                  <Productos />
                </Dashboard>
              }
            />
            <Route
              path="/producto/registro"
              element={
                <Dashboard>
                  <FormularioRegistroProducto />
                </Dashboard>
              }
            />
            <Route
              path="/producto/edit"
              element={
                <Dashboard>
                  <FormularioRegistroProducto />
                </Dashboard>
              }
            />
          </Route>

          <Route>
            
            <Route
              path="/mesa"
              element={
                <Dashboard>
                  <Mesas />
                </Dashboard>
              }
            />
            <Route
              path="/mesa/registro"
              element={
                <Dashboard>
                  <FormularioRegistroMesa />
                </Dashboard>
              }
            />
            <Route
              path="/mesa/edit"
              element={
                <Dashboard>
                  <FormularioRegistroMesa />
                </Dashboard>
              }
            />
          </Route>
        </Route>

        <Route path="*" element={<div>ruta no encontrada</div>} />

        <Route
          path="/categoria/registro"
          element={<FormularioRegistroCategoria />}
        />

        {/* Acutal cambio */}
        <Route path="/lista/producto" element={<ListaProducto />} />
        <Route path="/lista/header/producto" element={<HeaderProducto />} />

        <Route path="/lista/header/Mesa" element={<HeaderMesa />} />
        <Route path="/tipodepago/registro" element={<PaymentType />} />
        <Route path="/rutaDeGestionDePerfil" element={<ManageProfile />} />
        <Route
          path="/rutaDeTarjetaDeProducto"
          element={
            <div>
              <TarjetaDeProductoDePedido
                imgDelProducto={polloEnteroAlaBrasa}
                tituloDelProducto="Pollo Entero A La Brasa"
                precioDelProducto="75.00"
              />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
