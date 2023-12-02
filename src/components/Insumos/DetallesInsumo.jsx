import React from 'react'
import {useNavigate,useLocation} from 'react-router-dom'

const DetallesInsumo = () => {

  
    const {state} = useLocation();
    
    const { nombre, cantidad, descripcion, fecha } = state || {};
    const navigate = useNavigate();

    const obtenerFecha=(fecha)=>{

        const copiaFecha = fecha;
        const fechaExtraida = copiaFecha.slice(0, 10);

        // Invertir la fecha
        const partesFecha = fechaExtraida.split("-");
        const fechaInvertida = partesFecha.reverse().join("-");
        return fechaInvertida
    }
   
    console.log(nombre, cantidad, fecha, descripcion);
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
                            value={nombre}
                            // onChange={(e)=>setDatoNombre(e.target.value)}
                            // value = {datoNombre}
                        />

                        <label className='font-semibold text-gray-500 pl-1'>Cantidad</label>

                        <input  
                            className= 'block border-2 rounded-lg py-1 pl-2 border-purple-400 w-full mb-3' 
                            placeholder='Cantidad'
                            value={cantidad}
                            // onChange={(e)=>setDatoCantidad(e.target.value)}
                            // type='number'
                            // value={datoCantidad}
                        />
                        
                        <label className='font-semibold text-gray-500 pl-1'>Fecha</label>
                        <input  
                            className= 'block border-2 rounded-lg py-1 pl-2 border-purple-400 w-full mb-3' 
                            placeholder='Fecha'
                            value={obtenerFecha(fecha)}
                            // type='date'
                            // onChange={(e)=>setDatoFecha(e.target.value)}
                            // value = {datoFecha}
                        />

                    </div>

                    <div className=' md:w-1/2 text-start'>
                        <label className='font-semibold text-gray-500'>Descripción</label>
                        <textarea 
                            className='border-2 border-purple-400 rounded-lg w-full h-full'
                            // onChange={(e)=>setDatoDescripcion(e.target.value)}
                        >
                            {descripcion} 
                        </textarea>
                    </div>
                </section>

                <button 
                    className='uppercase font-semibold bg-ColorLilaBoton w-full rounded-lg text-white py-2 mt-10 mb-8'
                    onClick={()=>navigate('/insumo') }
                >
                    Regresar
                </button>

            </div>
        </form>
        {/* Componente para ver la parte superior (cargando) */}
    </div>
    )
}

export default DetallesInsumo
