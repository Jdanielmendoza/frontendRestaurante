import { useEffect, useState } from "react";
import FilaGestionarPago from "./FilaPago";
import { IconBrandTripadvisor, IconSearch } from "@tabler/icons-react";
import Button from "../Button/Button";
import FilaPago from "./FilaPago";
import { obtenerPagos } from "../../apiServices/apiServices.js";

const FilaGeneralGestionarPago = () => {
  const [pagos, setPagos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const listaConBusqueda =
    searchQuery == ""
      ? pagos
      : pagos.filter((item) => {
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

  const contador = 0;
  
  useEffect(() => {
    const getPagos = async () => {
      try {
        const tipoDePago = await obtenerPagos();
        setPagos(tipoDePago);
      } catch {
        console.log("Error");
      }
    };

    getPagos();
  }, []);

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  console.log(pagos);

  return (
    <div className="bg-slate-50 w-full h-full overflow-scroll">
      <header className="flex justify-between items-center pt-14 px-12 mb-10">
        <Button navigateTo="/pagos/nuevo" />

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
      <section className="mx-auto bg-white w-4/5 px-6 rounded-lg">
        <ul className="grid grid-cols-3 gap-10 ">
          <li className=" font-semibold text-letra-color text-center col-span-1 py-2 ">
            Nro
          </li>
          <li className=" font-semibold text-letra-color text-center col-span-1 py-2 ">
            Nombre
          </li>
          <li className=" font-semibold text-letra-color text-center col-span-1 py-2 ">
            Acciones
          </li>
        </ul>
      </section>

      <main className="">
        {listaConBusqueda.map((pago, index) => (
          <FilaPago
            
            key={pago.id}
            index={index}
            nombre={pago.nombre}
            idPago={pago.id}
          />
        ))}
      </main>
    </div>
  );
};

export default FilaGeneralGestionarPago;
