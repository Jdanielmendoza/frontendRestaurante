import "./Usuario.css"
import Button from "../../components/Button/Button"
import FilterTable from "../../components/FilterTable/FilterTable"
import SortTable from "../../components/SortTable/SortTable"
import { IconSearch } from "@tabler/icons-react"
import { Toaster } from "react-hot-toast"
import { useEffect, useState } from "react"
import { defaultUser, obtenerArregloDeRolesUnicos, obtenerArregloDeSexosUnicos } from "./servicesUser.js"
import { getUsers } from "../../apiServices/apiServices.js"
import FilaUsuario from "./FilaUsuario/FilaUsuario.jsx"

const Usuario = () => {
  const [usuarios, setUsuarios ] = useState(defaultUser);
  const [imagen,setImagen] = useState();
  const [nombre, setNombre] = useState(""); 
  const [carnet, setCarnet] = useState("");
  const [telefono, setTelefono] = useState(); 
  const [correo, setCorreo] = useState(); 
  const [sexo , setSexo] = useState();
  const [id_rol, setId_rol] = useState();
  const [cargo, setCargo] = useState(); 
  const [contraseña, setContraseña] = useState("");
  const [fechaDeNacimiento , setFechaDeNacimiento ] = useState() ;
  /* ----------------------------------------------------------- */
  const [arregloDeRoles, setArregloDeRoles] = useState([]); 
  const [arregloDeSexos, setArregloDeSexos] = useState([]); 
  /* ----------------------------------------------------------- */
  const [searchQuery, setSearchQuery] = useState("");
  const [filtros, setFiltros] = useState({
    sexo: "Todo",
    cargo: "Todo"
  });

  const [ordenamiento, setOrdenamiento] = useState({
    nombre: "nombre", // clave por defecto para ordenar
    direccion: "asc", // dirección por defecto (ascendente)
  });

  /* -------------------------------------------------------- */

  const listaFiltrada = usuarios.filter((usuario) => {
    return Object.entries(filtros).every(([clave, valor]) => {
      if (valor === "Todo") {
        return true;
      } else {
        return usuario[clave] === valor;
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
  /*--------------------------------------------------------- */

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };


  useEffect(()=>{
    const obtenerUsuarios = async()=>{
      try {
        const response = await getUsers();
        setUsuarios(response)
        setArregloDeRoles(obtenerArregloDeRolesUnicos(response)); 
        setArregloDeSexos(obtenerArregloDeSexosUnicos(response)); 
      } catch (error) {
        console.log(error);        
      }
    }

    obtenerUsuarios(); 
  },[])

  return (
    <section className="containerUserView">
      <header className="headerFilter">
        <div>
        <Button  navigateTo="/usuario/registro" />
        <SortTable titulo="Ordenar Por" setOrdenamiento={setOrdenamiento}>
          <option value="nombre">nombre</option>
          <option value="ci">carnet</option>
          <option value="correo">correo</option>
          <option value="sexo">sexo</option>
        </SortTable>  
        <FilterTable
            titulo="Rol"
            setFiltros={setFiltros}
            clave="cargo"
          >
            {arregloDeRoles.map((rol, index) => {
              return <option key={index} value={rol}>{rol}</option>;
            })}
          </FilterTable>
          <FilterTable
            titulo="Sexo"
            setFiltros={setFiltros}
            clave="sexo"
          >
            {arregloDeSexos.map((sexo, index) => {
              return <option key={index} value={sexo}>{sexo}</option>;
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
      </header>

      <section className="containerListProducts">
        <header id="headerUserTable" className="headerProductoTable">
          <p>Nombre</p>
          <p>Carnet</p>
          <p>Telefono</p>
          <p>Correo</p>
          <p>Sexo</p>
          <p>Cargo</p>
          <p>Acciones</p>
        </header>
        <ul className="listProductsQ">
          {listaConBusqueda.map((usuario) => (
            <FilaUsuario key={usuario.ci} usuario={usuario} />
          ))}
        </ul>
      </section>
      <Toaster />

    </section>
  )
}

export default Usuario