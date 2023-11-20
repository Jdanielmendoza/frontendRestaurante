import React, { useRef, useState } from "react";

const SearchTable = ({ data, setData }) => {
  const newData = useRef(data.current);
  const [searchQuery, setSearchQuery] = useState("");

  const buscarEnListaOrdenada = (valorABuscar) => {
    // Realiza la búsqueda en la lista ordenada y filtrada
    const terminoLowerCase = valorABuscar.toLowerCase();
    const resultados =
      valorABuscar == ""
        ? (newData.current)
        : data.current.filter((item) => {
            for (const key in item) {
              if (
                item[key] !== null &&
                item[key].toString().toLowerCase().includes(terminoLowerCase)
              ) {
                return true;
              }
            }
            return false;
          });

    //data.current = resultados ;
    data.current = resultados; 
    setData(data.current) 
    console.log(data.current);
    // Actualiza el estado con los resultados de la búsqueda
    //setData(resultados);
  };

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    buscarEnListaOrdenada(query);
  };
  //console.log(data);
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
    </div>
  );
};

export default SearchTable;

/* import React, { useRef, useState } from "react";

const SearchTable = ({ data, setData }) => {
  const [searchQuery, setSearchQuery] = useState("");

  /*   function buscarEnlistaFiltradaYOrdenada(lista, valorABuscar) {
    // Convierte el término de búsqueda a minúsculas para hacer la búsqueda insensible a mayúsculas y minúsculas
    const terminoLowerCase = valorABuscar.toLowerCase();

    return lista.filter((item) => {
      // Itera sobre las propiedades de cada objeto
      for (const key in item) {
        if (
          item[key] !== null &&
          item[key].toString().toLowerCase().includes(terminoLowerCase)
        ) {
          // Comprueba si el valor de la propiedad (convertido a cadena) incluye el término de búsqueda
          return true;
        }
      }
      return false;
    });
  }
 

  const buscarEnListaOrdenada = (valorABuscar) => {
    // Realiza la búsqueda en la lista ordenada y filtrada
    const terminoLowerCase = valorABuscar.toLowerCase();
    const resultados = data.filter((item) => {
      for (const key in item) {
        if (
          item[key] !== null &&
          item[key].toString().toLowerCase().includes(terminoLowerCase)
        ) {
          return true;
        }
      }
      return false;
    });
    console.log(resultados);
    // Actualiza el estado con los resultados de la búsqueda
    setData(resultados);
  };

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    buscarEnListaOrdenada(query);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
    </div>
  );
};

export default SearchTable;
 */
