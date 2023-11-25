

const FormularioFormaPago = () => {
  return (
    <div className='mx-16 block'>
        <form className='bg-white py-5 px-8 flex flex-col items-start rounded-lg shadow-lg'>
           
            <section className="mt-3">

                <label className="text-left">Pagos de Online</label>

                <div className="pl-5 mt-4">
                    <input
                        type="checkbox"
                        
                    />
                    <label className="ml-2">Codigo Qr</label>
                </div>

            </section>

            <section className="mt-10">
                <label className="text-left">En la Entrega</label>
               
                <div className="pl-4 mt-4">
                    <input
                        type="checkbox"
                    />
                    <label className="ml-2">Efectivo</label>
                </div>

            </section>

            <section className="mt-10">
                <label className="text-left">Marca por otra Categoria</label>

                <select
                    // id = "categoria"
                    // value = 
                    // onChange=
                    className="block border-2 border-colorBordeDropDounw rounded-lg md:ml-5" 
                    >
                        <option value ="tarjeta">Tarjeta de Crédito</option>
                        <option value ="paypal">Paypal</option>
                        <option value ="transferencia">Transferencia</option>
                        <option value ="cheques">Cheques</option>
                </select>
            </section>
        </form>
    </div>
  )
}

export default FormularioFormaPago
