import "./Productos.css";
import Button from "../../components/Button/Button";
import FilterTable from "../../components/FilterTable/FilterTable";
import { useState } from "react";
import SortTable from "../../components/SortTable/SortTable";
import SearchTable from "../../components/SearchTable/SearchTable";
import { IconSearch } from "@tabler/icons-react";
import ButtonDotsVertical from "../../components/ButtonDotsVertical/ButtonDotsVertical";
import FilaDeProducto from "./FilaDeProducto/FilaDeProducto";

const defaultsOption = [
  {
    id: "1a",
    nombre: "daniel",
    edad: 18,
    sexo: "M",
    estadoCivil: "casado",
    rol: "cajero",
  },
  {
    id: "1b",
    nombre: "juan",
    edad: 19,
    sexo: "M",
    estadoCivil: "soltero",
    rol: "cocinero",
  },
  {
    id: "1c",
    nombre: "pedro",
    edad: 20,
    sexo: "M",
    estadoCivil: "casado",
    rol: "administrador",
  },
  {
    id: "1d",
    nombre: "Ana",
    edad: 21,
    sexo: "F",
    estadoCivil: "soltero",
    rol: "administrador",
  },
  {
    id: "1e",
    nombre: "Maria",
    edad: 20,
    sexo: "F",
    estadoCivil: "viudo",
    rol: "administrador",
  },
];

const Productos = () => {
  const [usuarios, setUsuarios] = useState(defaultsOption);
  const [searchQuery, setSearchQuery] = useState("");
  const [filtros, setFiltros] = useState({
    sexo: "Todo",
    estadoCivil: "Todo",
    // se agrega más filtros según sea necesario
  });
  //ORDENAMIENTO POR DEFECTO
  const [ordenamiento, setOrdenamiento] = useState({
    clave: "nombre", // clave por defecto para ordenar
    direccion: "asc", // dirección por defecto (ascendente)
  });

  const listaFiltrada = usuarios.filter((user) => {
    return Object.entries(filtros).every(([clave, valor]) => {
      if (valor === "Todo") {
        return true;
      } else {
        return user[clave] === valor;
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

  return (
    <div className="containerProductos">
      <header className="containerHeaderProducto">
        <div className="child1">
        <Button titulo="Nuevo" navigateTo="/producto/registro" />
        <FilterTable titulo="sexo" setFiltros={setFiltros} clave="sexo">
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
        </FilterTable>

        <SortTable titulo="Ordenar Por" setOrdenamiento={setOrdenamiento}>
          <option value="nombre">Nombre</option>
          <option value="edad">Edad</option>
          <option value="estadoCivil">estadoCivil</option>
        </SortTable>
        </div>

        <div className="inputSearchFilterTable">
          <IconSearch className="iconSearchFilterTable"/> 
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
        <ButtonDotsVertical>
          <Button titulo="nueva categoria"/> 
          <Button  /> 
          <Button  /> 
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
          {listaConBusqueda.map((user) => (
            <FilaDeProducto  />
          ))}
        </ul>
      </section>
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
