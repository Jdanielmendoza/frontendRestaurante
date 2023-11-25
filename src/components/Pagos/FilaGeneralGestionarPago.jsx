import FilaGestionarPago from "./FilaPago"

const FilaGeneralGestionarPago = () => {
    return (
        <div>
            <section className='bg-white w-full px-6 rounded-lg'>
              <ul className='grid grid-cols-3 gap-10 '>
                <li className=" font-semibold text-letra-color text-center col-span-1 py-2 ">Nro</li>
                <li className=" font-semibold text-letra-color text-center col-span-1 py-2 ">Nombre</li>
                <li className=" font-semibold text-letra-color text-center col-span-1 py-2 ">Acciones</li>
              </ul>
            </section>
            <FilaGestionarPago/>
            <FilaGestionarPago/>
            <FilaGestionarPago/>
            <FilaGestionarPago/>
            <FilaGestionarPago/>
        </div>
    )
}

export default FilaGeneralGestionarPago
