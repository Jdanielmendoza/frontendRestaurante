import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import SortTable from "../../components/SortTable/SortTable";
import "./Pedidos.css";
import FilterTable from "../../components/FilterTable/FilterTable";
import { IconEye, IconSearch } from "@tabler/icons-react";
import ButtonDotsVertical from "../../components/ButtonDotsVertical/ButtonDotsVertical";
import FilaPedidos from "./FilaPedidos/FilaPedidos";
import { defaultPedido } from "./servicesPedido.js";
import { obtenerPedidos } from "../../apiServices/apiServices.js";

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [estados, setEstados] = useState([
    "pendiente",
    "terminado",
    "cancelado",
  ]);
  const [filtros, setFiltros] = useState({
    estado: "Todo",
    // se agrega más filtros según sea necesario
  });
  const [ordenamiento, setOrdenamiento] = useState({
    nro: "nro_pedido", // clave por defecto para ordenar
    direccion: "asc", // dirección por defecto (ascendente)
  });

  const listaFiltrada = pedidos.filter((pedido) => {
    return Object.entries(filtros).every(([clave, valor]) => {
      if (valor === "Todo") {
        return true;
      } else {
        return pedido[clave] === valor;
      }
    });
  });

  const listaOrdenada = listaFiltrada.sort((a, b) => {
    const { clave, direccion } = ordenamiento;

    if (typeof a[clave] === "number" && typeof b[clave] === "number") {
      // Si es un número, compara directamente los valores
      return direccion === "asc" ? a[clave] - b[clave] : b[clave] - a[clave];
    } else if (typeof a[clave] === "string" && typeof b[clave] === "string") {
      // Si es una cadena, compara las cadenas
      if (direccion === "asc") {
        return a[clave].localeCompare(b[clave]);
      } else {
        return b[clave].localeCompare(a[clave]);
      }
    } else {
      // Maneja otros tipos de datos si es necesario
      return 0;
    }
  });

  const listaConBusqueda =
    searchQuery == ""
      ? listaOrdenada
      : listaOrdenada.filter((item) => {
          for (const key in item) {
            if (
              item[key] !== null &&
              key !== "id" &&
              key !== "imagen_usuario" &&
              item[key]
                .toString()
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            ) {
              return true;
            }
          }
          return false;
        });

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  useEffect(() => {
    const obtenerTodosLosPedidos = async () => {
      try {
        const res = await obtenerPedidos();
        // console.log(res);
        setPedidos(res);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerTodosLosPedidos();
  }, []);

  return (
    <div className="containerPedidos">
      <header className="containerHeaderProducto">
        <div className="child1">
          {/* <Button titulo="Nuevo Pedido" navigateTo="/pedido/nuevopedido" /> */}
          {localStorage.getItem("cargo") === "cajero" ? (
            <Button titulo="Nuevo Pedido" navigateTo="/pedido/nuevopedido" />
          ) : (
            <></>
          )}
          <SortTable titulo="Ordenar Por" setOrdenamiento={setOrdenamiento}>
            <option value="nro_pedido">Nro pedido</option>
            <option value="nro_mesa">Nro de mesa</option>
            <option value="estado_pedido">Estado</option>
            <option value="primer_nombre_usuario">Cajero</option>
          </SortTable>

          <FilterTable
            titulo="Estado"
            setFiltros={setFiltros}
            clave="estado_pedido"
          >
            {estados.map((estado, index) => {
              return (
                <option key={index} value={estado}>
                  {estado}
                </option>
              );
            })}
          </FilterTable>
        </div>

        <div className="inputSearchFilterTable">
          <IconSearch className="iconSearchFilterTable" />
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
        <ButtonDotsVertical>
          <Button titulo="Nueva forma pago" navigateTo="/pagos/nuevo" />
          <Button
            titulo="Gestionar pagos"
            navigateTo="/pagos"
            Icono={IconEye}
          />
        </ButtonDotsVertical>
      </header>

      <section className="containerListProducts">
        <header className="headerPedidoTable">
          <p>Cajero</p>
          <p>Nro Pedido</p>
          <p>Nro Mesa</p>
          <p>Estado</p>
          <p>Descuento</p>
          <p>Total</p>
          <p>Acciones</p>
        </header>
        <ul className="listProductsQ">
          {listaConBusqueda.map((pedido) => (
            <FilaPedidos key={pedido.id_pedido} pedido={pedido}  setPedidos={setPedidos} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Pedidos;
