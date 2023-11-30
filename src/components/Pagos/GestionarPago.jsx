import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {registrarPago} from '../../apiServices/apiServices.js'
import { v4 as uuidv4 } from 'uuid'
import FilaPago from './FilaPago';
import { Toaster } from 'react-hot-toast';

const GestionarPago = () => {

    const[texto, setTexto] = useState("");
    const[listaPago,setListaPago] = useState([]);
    console.log(texto);
    const navigate = useNavigate();



        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
              await registrarPago({
                id: uuidv4(),
                nombre: texto,
              });
            } catch (error) {
                console.error('Error al enviar la solicitud POST:', error);
            }

        }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <form className='bg-white shadow-lg rounded-lg p-5 w-1/3'>

                    <header className='uppercase text-start text-purple-400 font-semibold mb-14 text-2xl'>
                        Tipo de Pago
                    </header>

                    <div className='px-14'>

                        <label className='uppercase block text-start font-semibold text-gray-500 pl-2'>
                            Nuevo Tipo de pago
                        </label>

                        <input 
                            
                            className='border rounded-lg mb-14 w-full py-1 pl-3 border-purple-600'
                            placeholder='Efectivo'
                            onChange={(e)=>setTexto(e.target.value)}
                            value={texto}
                        >
                            
                        </input>

                        <button 
                            onClick={(e)=>handleSubmit(e)}
                            className='w-full rounded-lg text-center bg-ColorLilaBoton uppercase text-white font-semibold shadow-lg py-2 mb-5'>                    
                            Agregar
                        </button>

                        <button 
                            onClick={()=>navigate('/pedido')}
                            className='w-full rounded-lg text-center bg-red-700 uppercase text-white font-semibold shadow-lg py-2 mb-10'>                    
                            Cancelar
                        </button>

                    </div>

            </form>
            <Toaster/>
        </div>
    )
}

export default GestionarPago
