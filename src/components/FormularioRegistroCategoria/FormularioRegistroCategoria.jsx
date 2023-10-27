import DropDownRol from "../DropDownRol";


const FormularioRegistroCategoria= () =>{
    return(
        <div className="min-h-screen flex items-center justify-center">
            {/* bg-opacity-50 */}
            <form className="w-full  bg-gray-50 rounded-md p-5">
                {/* Superior */}
                
                <div className="">
                    <label className="block text-letra-color text-1xl md:font-semibold pl-3 text-left uppercase">Nombre</label>
                    <input 
                        className="shadow-sm rounded-lg border-2 border-purple-400  w-full pl-3 py-2 "
                        placeholder="Tu Nombre" 
                    />
                </div>
                 
                {/* Medio  */}
                <section className="md:flex md:py-5 md:gap-10 w-full ">
                    <div className="md:w-full md:w-1/2 mt-5">
                        <label className="mb-1 block uppercase  text-left text-letra-color pl-2 text-1xl md:font-semibold">Descripcion</label>
                        <textarea className="shadow-sm rounded-lg border-2 border-purple-400 w-full "/>
                    </div>

                    <div className="md:w-full pt-12 md:w-1/2 md:mt-0 py-7">
                        <DropDownRol/>
                    </div>
                </section>

                {/* Botton */}
                <button className="bg-custom-color rounded-lg  px-1 py-[15px] uppercase  mt-[20px] text-white font-semibold text-1xl md:text-3xl px-100  w-full">Registrar</button>

            </form>
        </div>
    )
}

export default FormularioRegistroCategoria;