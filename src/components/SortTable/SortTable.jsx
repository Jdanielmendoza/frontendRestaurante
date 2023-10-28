import { IconArrowsUpDown } from "@tabler/icons-react";
import "./SortTable.css"
import { useState } from "react";

const SortTable = ({ titulo = "Titulo", setOrdenamiento, children }) => {
    const [isAsc, setIsAsc] = useState(true); 

    const handleOrderFilter = ()=>{
        setIsAsc(!isAsc); 
        setOrdenamiento((prevOrdenamiento) => ({
            ...prevOrdenamiento,
            direccion: isAsc? 'asc': 'desc',
          }))        
    }

  return (
    <div className="containerTituloFiltro">
      <p className="tituloFiltro">{titulo} :</p>
      <select
        className="selectFilter"
        onChange={(e) => {
          const nuevaClave = e.target.value;
          setOrdenamiento((prevOrdenamiento) => ({
            ...prevOrdenamiento,
            clave: nuevaClave,
          }));
        }}
      >
        {children}
      </select>
      <div><IconArrowsUpDown onClick={handleOrderFilter} className="arrowUpDownSort" /></div>
    </div>
  );
};

export default SortTable;



/* <select
        className="selectFilter"
        onChange={(e) => {
          const nuevaDireccion = e.target.value;
          setOrdenamiento((prevOrdenamiento) => ({
            ...prevOrdenamiento,
            direccion: nuevaDireccion,
          }));
        }}
      >
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select> */