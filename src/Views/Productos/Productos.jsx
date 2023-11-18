import "./Productos.css";
import Button from "../../components/Button/Button";
import FilterTable from "../../components/FilterTable/FilterTable";
import { useEffect, useState } from "react";
import SortTable from "../../components/SortTable/SortTable";
import SearchTable from "../../components/SearchTable/SearchTable";
import { IconSearch } from "@tabler/icons-react";
import ButtonDotsVertical from "../../components/ButtonDotsVertical/ButtonDotsVertical";
import FilaDeProducto from "./FilaDeProducto/FilaDeProducto";
import {
  obtenerCategorias,
  obtenerProductos,
} from "../../apiServices/apiServices.js";
import { Toaster } from "react-hot-toast";
import { IconEye } from "@tabler/icons-react";

const Productos = () => {
  const [categorias, setCategorias] = useState([]);
  const [producto, setProducto] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filtros, setFiltros] = useState({
    categoria: "Todo",
    // se agrega más filtros según sea necesario
  });
  //ORDENAMIENTO POR DEFECTO
  const [ordenamiento, setOrdenamiento] = useState({
    nombre: "nombre", // clave por defecto para ordenar
    direccion: "asc", // dirección por defecto (ascendente)
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

  // Ordena la lista filtrada según el ordenamiento actual
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
        /*mapeamos el arreglo de objetos productos para extraer el valor de la propiedad nombrecategoria de cada objeto. Luego, utilizamos el constructor Set para obtener un conjunto de categorías únicas, ya que los conjuntos no permiten elementos duplicados. Finalmente, convertimos ese conjunto nuevamente en un arreglo utilizando el operador de propagación (...) para obtener un arreglo de categorías únicas ↓*/
        const categoriasUnicas = [
          ...new Set(
            response.map((producto) => {
              return producto.nombrecategoria;
            })
          ),
        ];
        setCategorias(categoriasUnicas);
        setProducto(response);
        /* console.log(response); */
      } catch (error) {
        console.log(error);
      }
    };
    productos();
  }, []);

  return (
    <div className="containerProductos">
      <header className="containerHeaderProducto">
        <div className="child1">
          <Button titulo="Nuevo" navigateTo="/producto/registro" />
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

          <SortTable titulo="Ordenar Por" setOrdenamiento={setOrdenamiento}>
            <option value="nombre">Nombre</option>
            <option value="precio">Precio</option>
            <option value="stock">Stock</option>
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
        <ButtonDotsVertical>
          <Button titulo="Nueva Categoria" navigateTo="/categoria/registro" />
          <Button
            titulo="Ver Categorias"
            navigateTo="/categoria"
            Icono={IconEye}
          />
        </ButtonDotsVertical>
      </header>
      <section className="containerListProducts">
        <header className="headerProductoTable">
          <p>Imagen</p>
          <p>Nombre</p>
          <p>Precio bs</p>
          <p>Stock</p>
          <p>Descripcion</p>
          <p>Categoria</p>
          <p>Acciones</p>
        </header>
        <ul className="listProductsQ">
          {listaConBusqueda.map((producto) => (
            <FilaDeProducto key={producto.id} producto={producto} />
          ))}
        </ul>
      </section>
      <Toaster />
    </div>
  );
};

export default Productos;

/*  <li key={user.id}>
              | {user.nombre} | {user.edad} | {user.sexo} | {user.estadoCivil} |{" "}
              {user.rol}
            </li> */

{
  /* {usuarios
          .filter((user) => {
            return Object.entries(filtros).every(([clave, valor]) => {
              if (valor === "Todo") {
                return true;
              } else {
                return user[clave] === valor;
              }
            });
          })
          .map((user) => (
            <li key={user.id}>
              | {user.nombre} | {user.edad} | {user.sexo} | {user.estadoCivil} |{" "}
              {user.rol}
            </li>
          ))} */
}

/*
const usuariosInicial = useRef(usuarios);


 <FilterTable
        titulo="Sexo"
        listaConstanteInicial={usuariosInicial.current}
        listFilter={usuarios}
        setListFilter={setUsuarios}
        clave="sexo"
      >
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
      </FilterTable>

      <FilterTable
        titulo="estadoCivil"
        listaConstanteInicial={usuariosInicial.current}
        listFilter={usuarios}
        setListFilter={setUsuarios}
        clave="estadoCivil"
      >
        <option value="soltero">soltero</option>
        <option value="casado">casado</option>
        <option value="viudo">viudo</option>
      </FilterTable>
 */

{
  /*       <ul>
  {usuarios.map((user) => (
    <li key={user.id}>
      | {user.nombre} | {user.edad} | {user.sexo} | {user.estadoCivil}
    </li>
  ))}
</ul> */
}
