import React from 'react'
import iconoEditar from "/iconoEditar.svg";
import iconoVista from "/iconoVista.svg";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import {useNavigate} from 'react-router-dom'
import Swal from "sweetalert2";
import {eliminarInsumo} from '../../apiServices/apiServices.js'
import DetallesInsumo from './DetallesInsumo.jsx';


const ListaInsumo = ({index,nombre,idInsumo,cantidad, descripcion,fecha}) => {

    const navigate = useNavigate();

    const handleSubmit=()=>{
      console.log(nombre,cantidad,fecha,descripcion);
      // <DetallesInsumo
      //   nombre = {nombre}
      //   cantidad = {cantidad}
      //   fecha = {fecha}
      //   descripcion = {descripcion}
      // />
      navigate('/insumo/detalle',
        {state:{idInsumo,nombre,cantidad,descripcion,fecha}}
      )

    }

    const deleteInsumo = (e) => {
        // e.preventDefault();
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
                const res = await eliminarInsumo(idInsumo);
                if (res?.status == 200) {
                  Swal.fire("Eliminado!", "El insumo fue eliminado!.", "success");
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
            <ul className="grid grid-cols-4 gap-10 my-5 py-3 shadow-md ">
                <li className=" font-semibold text-letra-color text-center col-span-1 py-2 ">
                    {index + 1}
                </li>

                <li className=" font-semibold text-letra-color text-center col-span-1 py-2 ">
                    {nombre}
                </li>

                <li className=" font-semibold text-letra-color text-center col-span-1 py-2 ">
                    {cantidad}
                </li>
                

                <li>
                    <div className="flex justify-center items-center gap-3">

                        {/* <Link to="/pagos/nuevo" onClick={sendData}>
                        <img src={iconoEditar} alt="icono de editar" className="" />
                        </Link> */}

                        {/* Editar */}

                        {/* /-----------------/ */}
                        {/* <Link to="/pagos/nuevo" onClick={sendData}>
                        </Link> */}


                        <button
                            onClick={()=>navigate('/insumo/registro',{state:{idInsumo,nombre,cantidad,descripcion}})}
                        >

                            <img src={iconoEditar} alt="icono de editar"  /> 
                        </button> 

                        <button
                            className='pt-2'

                            onClick={handleSubmit}
                        >

                            <img src={iconoVista} alt="icono de editar"  /> 
                        </button> 

                


                        <IconTrash
                            className="iconRowProduct"
                            color="#D96565"
                            onClick={(e) => deleteInsumo(e)}
                        />

                        {/* <Link>
                        <img src={iconoEliminar} alt="icono de eliminar" className="" />
                        </Link> */}

                    </div>
                </li>
                {/* <li className=" font-semibold text-letra-color text-center col-span-1 py-2 ">Acciones</li> */}
            </ul>
            </section>
            {/* <Toaster/> */}
        </div>
    )
}

export default ListaInsumo
