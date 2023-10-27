import "./Productos.css";
import Button from "../../components/Button/Button";
import FilterTable from "../../components/FilterTable/FilterTable";
import { useState } from "react";

const defaultsOption = [
  {
    id: "1a",
    nombre: "daniel",
    edad: 18,
    sexo: "M",
  },
  {
    id: "1b",
    nombre: "juan",
    edad: 19,
    sexo: "M",
  },
  {
    id: "1c",
    nombre: "pedro",
    edad: 20,
    sexo: "M",
  },
  {
    id: "1d",
    nombre: "Ana",
    edad: 21,
    sexo: "F",
  },
  {
    id: "1e",
    nombre: "pedro",
    edad: 20,
    sexo: "F",
  },
];

const Productos = () => {
  const [usuarios, setUsuarios] = useState(defaultsOption);
  const [filter , setFilter] = useState("") ;

  return (
    <div className="containerProductos">
      <FilterTable titulo="Categoria" Onchange={(e)=>{setFilter(e.target.value)}}>
        <option value="nombre">sexo</option>
        <option value="2">todo</option>
      </FilterTable>

      <ul>
        {usuarios.map((user) => (
          <li key={user.id} >
            {user.nombre}: {user.edad}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;
