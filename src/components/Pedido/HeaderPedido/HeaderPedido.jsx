import FilaPedido from '../FilaPedido/FilaPedido'

const HeaderPedido = () => {
  return (
    <div>
        <section className='bg-white w-full px-6 rounded-lg'>
          <ul className='grid grid-cols-12 gap-5 '>
            <li className=" font-semibold text-letra-color text-start col-span-2 py-2 bg-slate-400">Cajero</li>
            <li className=" font-semibold text-letra-color text-start col-span-1 px-2 py-2 bg-slate-400">Nro Pedido</li>
            <li className=" font-semibold text-letra-color text-start col-span-1 px-2 py-2 bg-slate-400">Nro Mesa</li>
            <li className=" font-semibold text-letra-color text-start col-span-1 px-2 py-2 bg-slate-400">Estado</li>
            <li className=" font-semibold text-letra-color text-start col-span-2 px-2 py-2 bg-slate-400">Descuento</li>
            <li className=" font-semibold text-letra-color text-start col-span-2 px-2 py-2 bg-slate-400">Total</li>
            <li className=" font-semibold text-letra-color text-start col-span-3 px-2 py-2 bg-slate-400">Acciones</li>
          </ul>
        </section>
        <FilaPedido/>
      </div>
    );
  }
  

export default HeaderPedido
