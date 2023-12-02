import {useNavigate,useLocation} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import {registrarInsumo,updateInsumo} from '../../apiServices/apiServices.js'
import { useEffect, useState } from 'react'
import {Toaster,toast} from 'react-hot-toast'

const FormularioRegistroInsumo = () => {

    const[datoNombre, setDatoNombre] = useState("");
    const[datoCantidad, setDatoCantidad] = useState("");
    const[datoDescripcion, setDatoDescripcion] = useState("");
    // const[datoFecha, setDatoFecha] = useState("");

    const{state} = useLocation();
    console.log("Estado: ",state);
    const sendData = async (e) => {
        e.preventDefault();
        const ci_usuario = localStorage.getItem('ci');

        
        try {
          const fecha = new Date();
          if (state == null) {
            //-*********************-en caso de que por la ruta no se entrega valores

            await registrarInsumo({
              id: uuidv4(),
              nombre: datoNombre,
              cantidad: datoCantidad,
              descripcion: datoDescripcion,
              ci_usuario,
              fecha
            });
          } else {
            // ************************caso contrario
            /* console.log("intentando Actualizar producto..."); */
            await updateInsumo({
              id: state.idInsumo,
              nombre:datoNombre ,
              cantidad:datoCantidad,
              descripcion:datoDescripcion,
              ci_usuario,
              fecha
            });
          }
    
          setTimeout(() => {
            navigate(-1);
          }, 1000);
        } catch (error) {
          console.log(error);
          toast.error("ocurrio algun error");
        }
      };

      useEffect(()=>{
        if(state == null){
            setDatoNombre("");
            setDatoCantidad("");
            setDatoDescripcion("");
        }else{
            console.log(state.descripcion)
            setDatoNombre(state.nombre);
            setDatoCantidad(state.cantidad);
            setDatoDescripcion(state.descripcion);
        }
      },[])

      console.log("aaaaaa",datoDescripcion);

    const navigate = useNavigate();
    return (
        <div className="flex justify-center items-center min-h-screen">
            <form className='bg-white rounded-lg w-full max-w-2xl text-start px-7 pt-5 shadow-lg' >
                <label className='uppercase font-semibold text-purple-400 text-2xl md:text-3xl'>Insumos</label>
                <div className='md:px-12 '>

                    <section className='mt-10 sm:flex gap-8'>
                        <div className='text-start   md:w-1/2'>
                            <label className='font-semibold text-gray-500 pl-1'>Nombre</label>

                            <input  
                                className= 'block border-2 rounded-lg py-1 pl-2 border-purple-400 w-full mb-3' 
                                placeholder='Nombre'
                                type='text'
                                onChange={(e)=>setDatoNombre(e.target.value)}
                                value = {datoNombre}
                            />

                            <label className='font-semibold text-gray-500 pl-1'>Cantidad</label>

                            <input  
                                className= 'block border-2 rounded-lg py-1 pl-2 border-purple-400 w-full mb-3' 
                                placeholder='Cantidad'
                                onChange={(e)=>setDatoCantidad(e.target.value)}
                                type='number'
                                value={datoCantidad}
                            />
                            
                            {/* <label className='font-semibold text-gray-500 pl-1'>Fecha</label>
                            <input  
                                className= 'block border-2 rounded-lg py-1 pl-2 border-purple-400 w-full mb-3' 
                                placeholder='Fecha'
                                type='date'
                                onChange={(e)=>setDatoFecha(e.target.value)}
                                value = '2023-12-02'
                            /> */}

                        </div>

                        <div className=' md:w-1/2 text-start'>
                            <label className='font-semibold text-gray-500'>Descripción</label>
                            <textarea 
                                className='border-2 border-purple-400 rounded-lg w-full h-full px-2'
                                onChange={(e)=>setDatoDescripcion(e.target.value)}
                                value = {datoDescripcion}

                            >
                            </textarea>
                        </div>
                    </section>

                    <button 
                        className='uppercase font-semibold bg-ColorLilaBoton w-full rounded-lg text-white py-2 mt-10'
                        onClick={(e)=>sendData(e)}
                    >
                        {
                            state === null ? "Agregar" : "Actualizar"
                        }
                    </button>

                    <button 
                        onClick={()=>navigate('/insumo')}
                        className='uppercase font-semibold bg-red-700 w-full rounded-lg text-white py-2 mt-2 mb-10'>
                            Regresar
                    </button>
                </div>
            </form>
            {/* Componente para ver la parte superior (cargando) */}
            <Toaster/>   
        </div>
    )
}

export default FormularioRegistroInsumo





//Contraseña 
// bolivarcampeon