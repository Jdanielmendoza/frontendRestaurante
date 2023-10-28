
const FormularioRegistroMesa=()=>{
    return(
        <div className="min-h-screen flex items-center justify-center ">
            <form className="w-full  bg-gray-50 rounded-md p-5">

                <div className="mb-12">
                    <label htmlFor = "nro" className="block text-left pl-2 uppercase font-semibold text-letra-color">Nro</label>
                    <input 
                        id="nro"
                        className="py-1 rounded-lg border-2 border-purple-40 pl-5 w-full border-purple-400"
                        placeholder="Nro"
                    />
                </div>


                <div className="mb-12">
                    <label htmlFor = "nrosilla"className="block text-left pl-2 uppercase font-semibold text-letra-color">Nro Sillas</label>
                    <input 
                        id="nrosilla"
                        className="py-1 rounded-lg border-2 border-purple-400 pl-5 w-full"
                        placeholder="Cantidad de Sillas"
                    />
                </div>


                <button className="bg-custom-color uppercase text-white font-semibold w-full rounded-md sm:text-2xl py-3 mt-4 hover:bg-purple-600">
                    Registrar
                </button>

            </form>
        </div>
    )
}

export default FormularioRegistroMesa;