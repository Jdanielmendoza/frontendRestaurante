import iconoImprimir from '/iconoImprimir.svg'

import FormularioFormaPago from './FormularioFormaPago'

const FormaPago = () => {
  return (
    <div className='m-7'> {/* Utiliza flex, justify-center e items-center para centrar el contenido */}
        <section className="md:flex justify-center items-center">

            <div className='flex-1'>
                <button className="uppercase justify-center bg-CustomColorBotonPago rounded-lg text-white font-semibold py-4 px-7 mt-10">Forma de Pago</button>

            </div>

            <div className='flex ml-auto items-end bg-white mt-10 rounded-lg p-2'>
                <img
                    src = {iconoImprimir}
                    alt = 'icono imprimir'
                />

                <button className="flex-1 bg-white font-semibold rounded-lg">Imprimir</button>
            </div>

        </section>


        <hr className='bg-CustomColorLineaPago mt-8 mb-10'/>
        <FormularioFormaPago/>

        

    </div>


  )
}

export default FormaPago
