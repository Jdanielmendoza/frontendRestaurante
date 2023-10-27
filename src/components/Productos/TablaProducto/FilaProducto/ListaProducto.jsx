import iconoEditar from '/iconoEditar.svg'
import iconoEliminar from '/iconoEliminar.svg'

const ListaProducto = () => {
    return (
      <section className='bg-white w-full mt-2 px-6 rounded-lg'>
        <ul className='grid grid-cols-12 gap-5 rounded-lg shadow-md '>
        
          <li className=" font-semibold text-start col-span-1 py-2 " >
            <img src='/src/img/pollo.jpg' className='w-full h-full object-cover rounded-md' />
          </li>
          <li className=" font-semibold text-start col-span-3 py-5 px-2 h-1/">Pollo Entero a la Brasa</li>
          <li className=" font-semibold text-start col-span-1 py-5 px-2 ">75.00</li>
          <li className=" font-semibold text-start col-span-1 py-5 px-2">10</li>
          
          <li className=" font-semibold text-start col-span-2 py-5 px-2">Con salsa extra...</li>
          <li className=" font-semibold text-start col-span-2 py-5 px-2">Segundo</li>
          <li className="flex  col-span-2 py-5 px-2 gap-7">
            <img src={iconoEditar} alt='icono de editar' className='w-7'/>
            <img src={iconoEliminar} alt='icono de eliminar' className='w-7' />
          </li>
        </ul>
      </section>
    );
  }
  
  export default ListaProducto;
  