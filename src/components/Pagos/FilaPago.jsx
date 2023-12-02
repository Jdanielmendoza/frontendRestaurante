import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import iconoEditar from "/iconoEditar.svg";
import iconoEliminar from "/iconoEliminar.svg";
import { eliminarPago } from "../../apiServices/apiServices";
import Swal from "sweetalert2";
// import toast from "react-hot-toast";

import { IconEdit, IconTrash } from "@tabler/icons-react";
import GestionarPago from "./GestionarPago";
import { Toaster } from "react-hot-toast";


const FilaPago = ({ index, nombre, idPago }) => {
  const navigate = useNavigate();

  const elimPago = () => {
    try {
      Swal.fire({
        title: "Estas Seguro?",
        text: "No prodras revertir los cambios!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await eliminarPago(idPago);
            if (res?.status == 200) {
              Swal.fire("Eliminado!", "El Pago fue eliminado!.", "success");
              setTimeout(() => {
                navigate("/");
              }, 1000);
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="mx-auto">
      <section className=" mx-auto bg-white w-4/5 rounded-lg">
        <ul className="grid grid-cols-3 gap-10 my-5 py-3 shadow-md ">
          <li className=" font-semibold text-letra-color text-center col-span-1 py-2 ">
            {index + 1}
          </li>
          <li className=" font-semibold text-letra-color text-center col-span-1 py-2 ">
            {nombre}
          </li>
          <li>
            <div className="flex justify-center items-center gap-6">
              {/* <Link to="/pagos/nuevo" onClick={sendData}>
                <img src={iconoEditar} alt="icono de editar" className="" />
              </Link> */}

              {/* Editar */}

              {/* /-----------------/ */}
              {/* <Link to="/pagos/nuevo" onClick={sendData}>
              </Link> */}
 

              <button
                  onClick={()=>navigate('/pagos/nuevo',{state:{idPago,nombre}})}
                >
                <img src={iconoEditar} alt="icono de editar" className="" />
              </button> 

              {/* /-----------------/ */}

              <IconTrash
                className="iconRowProduct"
                color="#D96565"
                onClick={() => elimPago()}
              />
              {/* <Link>
                <img src={iconoEliminar} alt="icono de eliminar" className="" />
              </Link> */}
            </div>
          </li>
          {/* <li className=" font-semibold text-letra-color text-center col-span-1 py-2 ">Acciones</li> */}
        </ul>
      </section>
      <Toaster/>
    </div>
  );
};

export default FilaPago;
