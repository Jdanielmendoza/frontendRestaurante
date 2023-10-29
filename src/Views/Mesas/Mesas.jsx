import "./Mesas.css";
import HeaderMesa from "../../components/Mesas/HeaderMesa/HeaderMesa";
import FilaMesa from "../../components/Mesas/FilaMesa/FilaMesa";
import Button from "../../components/Button/Button";
import SortTable from "../../components/SortTable/SortTable";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { obtenerMesas } from "../../apiServices/apiServices.js";

const mesasDefault = [
  { nro: 1, nroSillas: 5 },
  { nro: 2, nroSillas: 4 },
  { nro: 3, nroSillas: 4 },
  { nro: 4, nroSillas: 8 },
  { nro: 5, nroSillas: 2 },
  { nro: 6, nroSillas: 2 },
  { nro: 7, nroSillas: 4 },
];

const Mesas = () => {
  const [mesas, setMesas] = useState(mesasDefault);
  const [searchQuery, setSearchQuery] = useState("");
  const [ordenamiento, setOrdenamiento] = useState({
    nombre: "nro", // clave por defecto para ordenar
    direccion: "asc", // dirección por defecto (ascendente)
  });

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const listaOrdenada = mesas.sort((a, b) => {
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
              item[key] !== null && key != "id" &&
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

  useEffect(() => {
    const FnGetMesas = async()=>{
     try {
      const response = await obtenerMesas();
      setMesas(response)
     } catch (error) {
       console.log(error);
     }
    }
    FnGetMesas();
  }, []);

  return (
    <div className="containerMesas">
      <header className="containerHeaderMesa">
        <div>
          <Button navigateTo="/mesa/registro" />
          <SortTable titulo="Ordenar Por" setOrdenamiento={setOrdenamiento}>
            <option value="nro">Nro</option>
            <option value="nrosillas">Nro Sillas</option>
          </SortTable>
        </div>
        <div className="inputSearchFilterTable">
          <IconSearch className="iconSearchFilterTable" />
          <input
            type="number"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
      </header>
      <HeaderMesa>
        {listaConBusqueda.map((mesa) => {
          return <FilaMesa key={mesa.nro} mesa={mesa} />;
        })}
      </HeaderMesa>
    </div>
  );
};

export default Mesas;
