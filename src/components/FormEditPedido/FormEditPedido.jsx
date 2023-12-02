import "./FormEditPedido.css";
import { IconArrowBackUp, IconRefresh, IconReload } from "@tabler/icons-react";
import ButtonDelete from "../ButtonDeleteAnimation/ButtonDelete";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  actulizarPedido2,
  eliminarPedido,
  obtenerMesas,
  obtenerPagos,
} from "../../apiServices/apiServices.js";
import { Toaster } from "react-hot-toast";

const FormEditPedido = () => {
  const [idMesa, setIdMesa] = useState();
  const [nroPedido, setNroPedido] = useState(100);
  const [idTipoDePago, setIdTipoDePago] = useState();
  const [estado, setEstado] = useState();

  //-----------------------------------------
  const [mesas, setMesas] = useState([]);
  const [pagos, setPagos] = useState([]);

  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        const mesas = await obtenerMesas();
        const pagos = await obtenerPagos();
        setPagos(pagos);
        setMesas(mesas);
        const id_delamesa = mesas.filter(
          (mesa) => mesa.nro === state.nro_mesa
        )[0]?.id;
        setIdMesa(id_delamesa);
        setNroPedido(state?.nro_pedido);
        setIdTipoDePago(state?.id_tipodepago);
        setEstado(state?.estado_pedido);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleSubmit = async () => {
    try {
      await actulizarPedido2({
        idPedido: state?.id_pedido,
        id_mesa: idMesa,
        id_tipodepago: idTipoDePago,
        estado,
        nro: nroPedido,
      });

      setTimeout(() => {
        navigate(-1);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="containerEditFormPedido">
      <header className="headerEditPedido">
        <IconArrowBackUp
          stroke="2.5"
          className="arrow-backPedido"
          onClick={() => navigate(-1)}
        />
        <p className="labelEditPedido">Editando Pedido</p>
      </header>
      <section className="sectionEditPedido">
        {/* -------------NRO DE MESA--------------- */}
        <div className="DivNroDeMesas optionPedidoEdit">
          <p className="ParrafoDeNroDeMesas">Nro De Mesa</p>
          <div className="OpcionesEngrupo">
            <select
              className="ContenerdorDeNumerosDeMesa"
              onChange={(e) => setIdMesa(e.target.value)}
              defaultValue={null}
            >
              <optgroup label="Mesas">
                {mesas.map((mesa) => {
                  return (
                    <option
                      key={mesa.id}
                      value={mesa.id}
                      selected={mesa.nro === state.nro_mesa}
                    >
                      {mesa.nro}
                    </option>
                  );
                })}
              </optgroup>
            </select>
          </div>
        </div>

        {/* -------------ID TIPO DE PAGO--------------- */}
        <div className="DivNroDeMesas optionPedidoEdit">
          <p className="ParrafoDeNroDeMesas">Tipo de pago</p>
          <div className="OpcionesEngrupo">
            <select
              className="ContenerdorDeNumerosDeMesa"
              onChange={(e) => setIdTipoDePago(e.target.value)}
              defaultValue={null}

            >
              <optgroup label="Tipo de pago">
                {pagos.map((pago) => {
                  return (
                    <option
                      key={pago.id}
                      value={pago.id}
                      selected={pago.id === state.id_tipodepago}
                    >
                      {pago.nombre}
                    </option>
                  );
                })}
              </optgroup>
            </select>
          </div>
        </div>

        {/* -------------ESTADO DEL PEDIDO--------------- */}
        <div className="DivNroDeMesas optionPedidoEdit">
          <p className="ParrafoDeNroDeMesas">Estado</p>
          <div className="OpcionesEngrupo">
            <select
              required
              className="ContenerdorDeNumerosDeMesa"
              onChange={(e) => setEstado(e.target.value)}
              defaultValue={null}

            >
              <optgroup label="estados">
                <option
                  value="pendiente"
                  selected={state.estado_pedido === "pendiente"}
                >
                  pendiente
                </option>
                <option
                  value="cancelado"
                  selected={state.estado_pedido === "cancelado"}
                >
                  cancelado
                </option>
                <option
                  value="terminado"
                  selected={state.estado_pedido === "terminado"}
                >
                  terminado
                </option>
              </optgroup>
            </select>
          </div>
        </div>

        {/* -------------NRO DE PEDIDO--------------- */}
        <div className="DivNroDeMesas optionPedidoEdit">
          <p className="ParrafoDeNroDeMesas">Nro Pedido</p>
          <div className="OpcionesEngrupo">
            <input
              type="number"
              min="0"
              required
              onChange={(e) => setNroPedido(e.target.value)}
              value={nroPedido}
            />
          </div>
        </div>
      </section>
      <div className="container-btn-actions">
        <button className="btn-update-pedido" onClick={handleSubmit}>
          <IconRefresh /> Guardar cambios
        </button>
        <ButtonDelete id_pedido={state?.id_pedido} />
      </div>
      <Toaster />
    </div>
  );
};

export default FormEditPedido;
