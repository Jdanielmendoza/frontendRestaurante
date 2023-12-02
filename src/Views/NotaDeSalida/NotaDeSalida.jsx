import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import "./NotaDeSalida.css";
import { IconSearch } from "@tabler/icons-react";
import FilaNotaDeSalida from "./FilaNotaDeSalida/FilaNotaDeSalida";
import { obtenerPedidos } from "../../apiServices/apiServices.js";
import { Toaster } from "react-hot-toast";

const NotaDeSalida = () => {
  const [pedidos, setPedidos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
 
  const listaConBusqueda =
    searchQuery == ""
      ? pedidos
      : pedidos.filter((item) => {
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
        //        console.log(res);
        setPedidos(res);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerTodosLosPedidos();
  }, []);

  return (
    <div className="containerPedidos">
      <header className="containerHeaderProducto containerHeaderNotaDeSalida">
        <Button
          titulo="Nueva Nota Salida"
          navigateTo="/notadesalida/nuevanotadesalida"
        />

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
        <header className="headerSalidaTable">
          <p>Cajero</p>
          <p>Descripcion</p>
          <p>Total</p>
          <p>Acciones</p>
        </header>
        <ul className="listProductsQ">
          {listaConBusqueda.map((pedido) => (
            <FilaNotaDeSalida key={pedido.id_pedido} pedido={pedido} />
          ))}
        </ul>
      </section>
      <Toaster />
    </div>
  );
};

export default NotaDeSalida;
