// // import React from 'react'
// import iconoEliminar from '/iconoEliminar.svg'
// import iconoEditar from '/iconoEditar.svg'

// const FilaPago = ({numero, descripcion}) => {
//     return (
//         <div>
//             <section className='bg-white w-full px-6 rounded-lg mt-5'>
//               <ul className='grid grid-cols-3 gap-10 '>
//                 <li className=" filamesa text-black text-center col-span-1 py-2  ">
//                   <div className="flex justify-center items-center mt-3 md:gap-5">
//                       {numero + 1}
//                   </div>
//                   </li>
//                 <li className="filamesa text-black text-center col-span-1 py-4  ">{descripcion}</li>
//                 <li className="text-black text-center col-span-1 py-4 ">
//                   <div className="flex justify-center items-center gap-5">
//                     {/* <Link */}
//                       {/* to="/header/mesa/registro"> */}
//                       {/* <img src={iconoEditar} alt='icono de editar' className='w-7'/> */}
//                     {/* </Link> */}
//                     {/* to="/header/mesa/registro"> */}
//                     <img src={iconoEditar} alt='icono de editar' className='w-7'/>
//                     <button>
//                       <img src={iconoEliminar} alt='icono de eliminar' className='w-7' />
//                     </button>
//                   </div>
//                 </li>
//               </ul>
//             </section>
//             {/* <ListaProducto/> */}
//         </div>
//       )
// }

// export default FilaPago


// import { obtenerPagos } from "../../apiServices/apiServices.js"
import { useEffect,useState} from "react"
// import FilaGestionarPago from "./FilaGestionarPago.jsx";

const FilaPago = () => {
//     const [pagos , setPagos] = useState([]); 

//     useEffect(()=> {  
//       const getPagos = async()=>{
//       try{
//         const tiposDePago = await obtenerPagos();
//         setPagos(tiposDePago); 
//       }catch{
//         console.log('error');
        
//       }
//     }


//     getPagos();
//     },[]);
    
//     console.log(tiposDePago);

    return (
        <div>
            <section className='bg-white w-full px-6 rounded-lg'>
              <ul className='grid grid-cols-3 gap-10 '>
                <li className=" font-semibold text-letra-color text-center col-span-1 py-2 ">Nro</li>
                <li className=" font-semibold text-letra-color text-center col-span-1 py-2 ">Nombre</li>
                <li className=" font-semibold text-letra-color text-center col-span-1 py-2 ">Acciones</li>
              </ul>
            </section>
             {/* <FilaGestionarPago/>
            <FilaGestionarPago/>
            <FilaGestionarPago/>
            <FilaGestionarPago/>
            <FilaGestionarPago/ */}

            {/* {pagos.map( (pago) => <FilaGestionarPago key={pago.id} id={pago.id} nombre={pago.nombre} />)
              
            } */}

        </div>
    )
}

export default FilaPago



