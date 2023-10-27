import ListaProducto from '../TablaProducto/FilaProducto/ListaProducto'

const HeaderProducto = () => {
    return (
      <div>
        <section className='bg-white w-full px-6 rounded-lg'>
          <ul className='grid grid-cols-12 gap-5 '>
            <li className=" font-semibold text-letra-color text-start col-span-1 py-2 ">Imagen</li>
            <li className=" font-semibold text-letra-color text-start col-span-3 px-2 py-2">nombre</li>
            <li className=" font-semibold text-letra-color text-start col-span-1 px-2 py-2">Precio(bs)</li>
            <li className=" font-semibold text-letra-color text-start col-span-1 px-2 py-2">Stock</li>
            <li className=" font-semibold text-letra-color text-start col-span-2 px-2 py-2">Descripcion</li>
            <li className=" font-semibold text-letra-color text-start col-span-2 px-2 py-2">Categoria</li>
            <li className=" font-semibold text-letra-color text-start col-span-2 px-2 py-2">Acciones</li>
          </ul>
        </section>
        <ListaProducto/>
      </div>
    );
  }
  
  export default HeaderProducto;
  