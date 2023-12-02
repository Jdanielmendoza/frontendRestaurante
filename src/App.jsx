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
import HeaderPedido from "./components/Pedido/HeaderPedido/HeaderPedido";
// import FormaPago from "./components/Pagos/FormaPago";
import GestionarPago from "./components/Pagos/GestionarPago";
import FilaGeneralGestionarPago from "./components/Pagos/FilaGeneralGestionarPago";
import TablaCategorias from "./components/TablaCategorias/TablaCategorias";
import Pedidos from "./Views/Pedidos/Pedidos";
import NuevoPedido from "./Views/Pedidos/NuevoPedido/NuevoPedido";
import CarritoPedido from "./Views/Pedidos/NuevoPedido/CarritoPedido/CarritoPedido";
import NotaDeVenta from "./components/NotaDeVenta/NotaDeVenta";
import CartaDePlato from "./components/CartaDePlato/CartaDePlato";
import MenuDelDia from "./Views/MenuDelDia/MenuDelDia";
import CartaDeMenuDelDia from "./Views/CartaDeMenuDelDia/CartaDeMenuDelDia";
import ContextPedido from "./Views/Pedidos/NuevoPedido/ContextPedido";
import FormularioRegistroInsumo from "./components/Insumos/FormularioRegistroInsumo";
import ListaGeneralInsumo from "./components/Insumos/ListaGeneralInsumo";
import DetallesInsumo from "./components/Insumos/DetallesInsumo";

import FormEditPedido from "./components/FormEditPedido/FormEditPedido";
import NotaDeSalida from "./Views/NotaDeSalida/NotaDeSalida";
import ContextNotaDeSalida from "./Views/NotaDeSalida/NuevaNotaDeSalida/ContextNotaDeSalida";
import NuevaNotaDeSalida from "./Views/NotaDeSalida/NuevaNotaDeSalida/NuevaNotaDeSalida";

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
              path="/usuario/registro"
              element={
                <Dashboard>
                  <RegistrarUsuario />
                </Dashboard>
              }
            />
            <Route
              path="/usuario/update"
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
              path="/pedido"
              element={
                <Dashboard>
                  <Pedidos />
                </Dashboard>
              }
            />

            <Route
              path="/pedido/nuevopedido"
              element={
                <Dashboard>
                  <ContextPedido>
                    <NuevoPedido />
                  </ContextPedido>
                </Dashboard>
              }
            />
            <Route
              path="/pedido/editarPedido"
              element={
                <Dashboard>
                    <FormEditPedido />
                </Dashboard>
              }
            />
          </Route>

          <Route>
            <Route
              path="/notadesalida"
              element={
                <Dashboard>
                  <NotaDeSalida />
                </Dashboard>
              }
            />

            <Route
              path="/notadesalida/nuevanotadesalida"
              element={
                <Dashboard>
                  <ContextNotaDeSalida>
                    <NuevaNotaDeSalida />
                  </ContextNotaDeSalida>
                </Dashboard>
              }
            />
            <Route
              path="/pedido/editarPedido"
              element={
                <Dashboard>
                    <FormEditPedido />
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

          <Route>
            <Route
              path="/categoria"
              element={
                <Dashboard>
                  <TablaCategorias />
                </Dashboard>
              }
            />

            <Route
              path="/categoria/registro"
              element={
                <Dashboard>
                  <FormularioRegistroCategoria />
                </Dashboard>
              }
            />

            <Route
              path="/categoria/edit"
              element={
                <Dashboard>
                  <FormularioRegistroCategoria />
                </Dashboard>
              }
            />
          </Route>

          <Route>
            <Route
              path="/insumo"
              element={
                <Dashboard>
                  <ListaGeneralInsumo/>{/* aqui tu componente */}
                </Dashboard>
              }
            />
            <Route
              path="/insumo/registro"
              element={
                <Dashboard>
                  <FormularioRegistroInsumo/>{/* aqui tu componente */}
                </Dashboard>
              }
            />

            <Route
              path="/insumo/detalle"
              element={
                <Dashboard>
                  <DetallesInsumo/>{/* aqui tu componente */}
                </Dashboard>
              }
            />

            <Route
              path="/insumo/edit"
              element={
                <Dashboard>
                  <FormularioRegistroMesa />{/* aqui tu componente */}
                </Dashboard>
              }
            />
          </Route>

        </Route>

        <Route path="*" element={<div>ruta no encontrada</div>} />

        {/* Acutal cambio */}
        <Route path="/lista/producto" element={<ListaProducto />} />
        <Route path="/lista/header/producto" element={<HeaderProducto />} />

        <Route path="/lista/header/Mesa" element={<HeaderMesa />} />
        <Route path="/tipodepago/registro" element={<PaymentType />} />
        <Route path="/rutaDeGestionDePerfil" element={<ManageProfile />} />

        <Route path="/header/Mesa" element={<HeaderMesa />} />

        <Route
          path="/header/Mesa/registro"
          element={<FormularioRegistroMesa />}
        />

        <Route path="/header/pedido" element={<HeaderPedido />} />

        {/* <Route path="/pagos/nuevo" element={<FormaPago/>} /> */}
        <Route path="/pagos/nuevo" element={<GestionarPago />} />

        <Route
          path="/pagos"
          element={
            <Dashboard>
              <FilaGeneralGestionarPago />
            </Dashboard>
          }
        />

        <Route path="/registro/insumo" element ={<FormularioRegistroInsumo/>}/>
      </Routes>
    </>
  );
}

export default App;
