import iconoEditar from '/iconoEditar.svg'
import iconoEliminar from '/iconoEliminar.svg'

const FilaMesa = () => {
    return (
      <div>
          <section className='bg-white w-full px-6 rounded-lg mt-5'>
            <ul className='grid grid-cols-3 gap-10 '>
              <li className=" font-bold text-black text-center col-span-1 py-2  ">
                <div className="flex justify-center items-center md:gap-5">
                    <img src="/src/img/imagenMesa.png" className="w-11 h-11"/>
                    3
                </div>
                </li>
              <li className=" font-bold text-black text-center col-span-1 py-4  ">2</li>
              <li className=" font-bold text-black text-center col-span-1 py-4 ">
                <div className="flex justify-center items-center gap-5">
                    <img src={iconoEditar} alt='icono de editar' className='w-7'/>
                    <img src={iconoEliminar} alt='icono de eliminar' className='w-7' />
                </div>
              </li>
            </ul>
          </section>
          {/* <ListaProducto/> */}
      </div>
    )
  }
  
  export default FilaMesa
  