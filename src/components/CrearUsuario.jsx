import DropDown from "./DropDownGenero";
import DropDownRol from "./DropDownRol";
import ImageUploader from './ImageUploader.jsx';


const CrearUsuario = ()=>{
    return(

        <div className="flex justify-center items-center h-screen">
            <form className=" p-[25px]">
                {/* Superior */}
                <div className="flex flex-col sm:flex-row sm:px-10 sm:py-5">
                    {/* Izquierdo Imagen */}
                    <div className="w-full sm:w-1/3 bg-purple-400">
                        {/* <p className="bg-purple-200 p-[50px] text-center">Imagen</p> */}
                        <ImageUploader/>
                    </div>

                    {/* Derecho */}
                    <div className="mt-5 sm:mt-0 sm:ml-5 sm:w-2/3">
                        <label className="mb-3 block uppercase font-normal text-left">Nombre</label>
                        <input className="shadow-sm rounded-lg border-2 border-purple-400 w-full p-3" placeholder="Tu Nombre" />

                        <label className="mb-3 block uppercase mt-5 font-normal text-left">Correo</label>
                        <input className="shadow-sm rounded-lg border-2 border-purple-400 w-full p-3" placeholder="Tu Correo" type="email" />
                    </div>
                </div>

                
                {/* Medio  */}
                <div className="mt-3 md:flex md:px-10 md:py-5 md:gap-10">
                {/* Izquierdo */}
                    <div className="w-full md:w-1/2">
                        <label className="mb-3 block uppercase font-normal text-left">Carnet de Identidad</label>
                        <input className="shadow-sm rounded-lg border-2 border-purple-400 w-full p-3" placeholder="Tu CI" />

                        <label className="mb-3 block uppercase font-normal text-left mt-5">Contraseña</label>
                        <input className="shadow-sm rounded-lg border-2 border-purple-400 w-full p-3" placeholder="Tu Contraseña" type="email" />

                        <div>
                        <label className="mb-3 block uppercase font-normal text-left mt-5">Genero</label>
                        <DropDown />
                        </div>
                    </div>

                    {/* Derecho */}
                    <div className="w-full md:w-1/2 mt-5 md:mt-0">
                        <label className="mb-3 block uppercase font-normal text-left">Telefono</label>
                        <input className="shadow-sm rounded-lg border-2 border-purple-400 w-full p-3" placeholder="Tu Telefono" type="tel" />

                        <label className="mb-3 block uppercase font-normal text-left mt-5">Fecha</label>
                        <input className="shadow-sm rounded-lg border-2 border-purple-400 w-full p-3" type="date" />

                        <div>
                        <label className="mb-3 block uppercase font-normal text-left mt-5">Rol</label>
                        <DropDownRol />
                        </div>
                    </div>
                </div>



                {/* Botton */}
                <button className="bg-purple-400 rounded-lg py-[10px] uppercase px-[285px] mt-[20px]">Registrar</button>

            </form>
        </div>
       
    )
}

export default CrearUsuario;