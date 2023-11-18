import { useEffect, useState } from "react";
import Button from "../Button/Button";
import SortTable from "../SortTable/SortTable";
import "./TablaCategorias.css";
import { IconSearch } from "@tabler/icons-react";
import { obtenerCategorias } from "../../apiServices/apiServices.js";
import FilaCategoria from "./FilaCategoria/FilaCategoria";
import { Toaster } from "react-hot-toast";

const defaultCategorias = [
  {
    id: "01",
    nombre: "gaseosas",
    descripcion: "conjunto de bebidas gaseosas",
    categoriapadre: "bebidas",
  },
  {
    id: "02",
    nombre: "no alcoholicas",
    descripcion: "conjunto de bebidas alcoholicas",
    categoriapadre: "bebidas",
  },
];

const TablaCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [ordenamiento, setOrdenamiento] = useState({
    nombre: "nombre", // clave por defecto para ordenar
    direccion: "asc", // dirección por defecto (ascendente)
  });

  const listaOrdenada = categorias.sort((a, b) => {
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
    const fnObtenerCategorias = async () => {
      try {
        const categorias = await obtenerCategorias();
        setCategorias(categorias);
      } catch (error) {
        console.log(error);
      }
    };
    setCategorias(defaultCategorias);
    fnObtenerCategorias();
  }, []);

  return (
    <div className="containerTableCategoria">
      <header className="headerTablaeCategoria">
        <div>
          <Button titulo="Nueva Categoria" navigateTo="/categoria/registro" />
          <SortTable titulo="Ordenar Por" setOrdenamiento={setOrdenamiento}>
            <option value="nombre">Nombre</option>
            <option value="categoria_padre">Categoria</option>
          </SortTable>
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
      </header>
      <section id="containerListCategoria" className="containerListProducts">
        <header id="headerTableCategory" className="headerProductoTable">
          <p>Nombre</p>
          <p>Descripcion</p>
          <p>Categoria Padre</p>
          <p>Acciones</p>
        </header>
        <ul className="listProductsQ">
          {listaConBusqueda.map((categoria) => {
            return <FilaCategoria key={categoria.id} categoria={categoria} />;
          })}
          {/* {listaConBusqueda.map((producto) => (
            <FilaDeProducto key={producto.id} producto={producto} />
          ))} */}
        </ul>
      </section>
      <Toaster />
    </div>
  );
};

export default TablaCategorias;
