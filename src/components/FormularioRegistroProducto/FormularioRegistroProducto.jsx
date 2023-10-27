import DropDownProducto from "./DropDownProducto"

const FormularioRegistroProducto=()=>{
    return(
        <div className="min-h-screen flex items-center justify-center ">
            <form className="w-full  bg-gray-50 rounded-md p-5">

                <section className="md:flex  md:gap-5">
                    <div className="md:w-1/2 bg-purple-300 flex h-full md:py-28 md:mt-3 mb-8 md:mb-0">
                        <label className="m-auto">Arrastre una imagen</label>
                    </div>

                    <div className="md:w-1/2">
                        <label className="pl-2 block text-letra-color uppercase font-semibold text-left">Nombre</label>
                        <input className="w-full py-1 pl-3 border-2 rounded-md border-purple-400 mb-10" placeholder="Nombre" />

                        <label className="pl-2 block text-letra-color uppercase font-semibold text-left">Precio</label>
                        <input className="w-full py-1 pl-3 border-2 rounded-md border-purple-400 mb-10" placeholder="Precio" />

                        <label className="pl-2 block text-letra-color uppercase font-semibold text-left">Stock</label>
                        <input className="w-full py-1 pl-3 border-2 rounded-md border-purple-400 mb-10" placeholder="Stock" />
                    </div>

                </section>

                <section className="md:flex mb-10 md:gap-5 ">
                    <div className="md:w-1/2">
                        <label className="pl-2 block text-letra-color uppercase font-semibold text-left ">Descripcion</label>
                        <textarea className="border-purple-400 w-full border-2 rounded-md"/>
                    </div>

                    <div className="md:w-1/2 pt-5">
                        <DropDownProducto/>
                    </div>  
                </section>

                <button  className="text-white font-semibold py-3 w-full bg-custom-color rounded-md uppercase md:text-2xl mt-12 hover:bg-purple-600">
                    Registrar
                </button>
            </form>
        </div>
    )
}

export default FormularioRegistroProducto