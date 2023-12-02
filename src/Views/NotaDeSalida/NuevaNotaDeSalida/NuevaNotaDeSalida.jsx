import { useEffect, useState } from "react";
import FilterTable from "../../../components/FilterTable/FilterTable";
import "./NuevaNotaDeSalida.css";
import { IconSearch, IconShoppingCart } from "@tabler/icons-react";
import { obtenerProductos } from "../../../apiServices/apiServices.js";
import CarritoNotaDeSalida from "./CarritoNotaDeSalida/CarritoNotaDeSalida.jsx";
import useNotaDeSalida from "./UseNotaDeSalida.jsx";
import CarritoVacio from "../../../components/CarritoVacio/CarritoVacio.jsx";
import { Toaster } from "react-hot-toast";
import TarjetaDeProductoDeSalida from "../../../components/TarjetaDeProductoDeSalida/TarjetaDeProductoDeSalida.jsx";

const NuevaNotaDeSalida = () => {
  const {carrito} = useNotaDeSalida();   
  const [categorias, setCategorias] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [producto, setProducto] = useState([]);
  const [filtros, setFiltros] = useState({
    categoria: "Todo",
    // se agrega más filtros según sea necesario
  });

  const listaFiltrada = producto.filter((product) => {
    return Object.entries(filtros).every(([clave, valor]) => {
      if (valor === "Todo") {
        return true;
      } else {
        return product[clave] === valor;
      }
    });
  });

  const listaConBusqueda =
    searchQuery == ""
      ? listaFiltrada
      : listaFiltrada.filter((item) => {
          for (const key in item) {
            if (
              item[key] !== null &&
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
    const productos = async () => {
      try {
        const response = await obtenerProductos();
        const categoriasUnicas = [
          ...new Set(
            response.map((producto) => {
              return producto.nombrecategoria;
            })
          ),
        ];
        setCategorias(categoriasUnicas);
        setProducto(response);
      } catch (error) {
        console.log(error);
      }
    };
    productos();
  }, []);

  return (
    <section className="containerPedidoHome">
      <article className="listaDeProductos">
        <header>
          <div className="headerFilterSearch">
            <div className="inputSearchFilterTable inputSearchFilterTable-pedido">
              <IconSearch className="iconSearchFilterTable" />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
            </div>
            <FilterTable
              titulo="categoria"
              setFiltros={setFiltros}
              clave="nombrecategoria"
            >
              {categorias.map((categoria, index) => {
                return (
                  <option key={index} value={categoria}>
                    {categoria}
                  </option>
                );
              })}
            </FilterTable>
          </div>

          <ul className="containerListNewProduct">
            {/* lista de productos  */}
            {listaConBusqueda.map((producto) => (
              <TarjetaDeProductoDeSalida
                key={producto.id}
                producto={producto}
              />
            ))}
          </ul>
        </header>
      </article>
      <article className="containerCarritoDeCompras">
        <label htmlFor="checkCart">
          <IconShoppingCart />
        </label>
        <input type="checkbox" id="checkCart" />
        <section className="containerCartDetails">
          {carrito?.arreglo_detalle_pedido.length ===0   ?<CarritoVacio/> :<CarritoNotaDeSalida/>}
        </section>
      </article>
      <Toaster/>
    </section>
  );
};

export default NuevaNotaDeSalida;
