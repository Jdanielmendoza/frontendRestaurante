
import iconoInicio from '/iconoInicio.svg';
import iconoUsuario from '/iconoUsuario.svg';
import iconoProducto from '/iconoProducto.svg';

import iconoCartilla from '/iconoCartilla.svg';
import iconoInsumo from '/iconoInsumo.svg';
import iconoMesa from '/iconoMesa.svg';
import iconoNotaSalida from '/iconoNotaSalida.svg';
import iconoReporte from '/iconoReporte.svg';
import iconoCerrarSesion from '/iconoCerrarSesion.svg';
import IconoDrop from '/iconoDrop.svg';

import iconoInicioBlanco from '/iconoInicioBlanco.svg';    
import CircularImagen from '../components/CircularImagen';


const Layout = ()=>{
    return(
        <div className='md:flex md:min-h-screen'>
            {/* <header className='bg-white md:h-1/6 p-10 w-15'></header> */}

            <aside className='md:-1/4 bg-white px-5 py-10 w-1/6 '>
                {/* <h2 className='text-4xl font-black text-center text-white'>CRM -Clientes</h2> */}
                 {/* imagen */}
                 <div className='rounded-full w-30 h-23 overflow-hidden flex items-center justify-center '>
                    <CircularImagen/>

                 </div>
                    <p className="text-black font-sans text-xs font-bold mb-[50px]">Nombre</p>
                
                {/* agregar de sugerencia font-['Rowdies'] junto con font-bold */}
                <div className='flex gap-3 mt-[15px] cursor-pointer bg-custom-color rounded-lg py-2'>
                    <img src ={iconoInicioBlanco} alt = "iconoInicio" />
                    <label className="text-white text-sm font-bold">Inicio</label>
                    {/* <img src ={IconoDrop} alt = "iconoDropDown" className='ml-auto text-white' /> */}
                </div>

                <div className='flex gap-3  mt-[15px] w-full cursor-pointer  rounded-lg py-2 bg-custom-color px-[15px]'>
                    <img src ={iconoUsuario} alt = 'iconoUsuario' />
                    <label className="text-zinc-500 text-sm font-bold">Usuario</label>
                    <img src ={IconoDrop} alt = "iconoDropDown"  className='ml-auto'/>
                </div>

                <div className='flex gap-3 mt-[15px] cursor-pointer  rounded-lg py-2 hover:bg-custom-color '>
                    <img src ={iconoProducto} alt = "iconoProducto" />
                    <label className="text-zinc-500 text-sm font-bold hover:text-white">Producto</label>
                    <img src ={IconoDrop} alt = "iconoDropDown"  className='ml-auto' />
                </div>

                <div className='flex gap-3 mt-[15px] cursor-pointer  rounded-lg py-2'>
                    <img src ={iconoCartilla} alt = "iconoCartilla" />
                    <label className="text-zinc-500 text-sm font-bold">Cartilla</label>
                    <img src ={IconoDrop} alt = "iconoDropDown"  className='ml-auto' />
                </div>

                <div className='flex gap-3 mt-[15px] cursor-pointer  rounded-lg py-2'>
                    <img src ={iconoInsumo} alt = "iconoInsumo" />
                    <label className="text-zinc-500 text-sm font-bold">Insumo</label>
                    <img src ={IconoDrop} alt = "iconoDropDown"   className='ml-auto'/>
                </div>

                <div className='flex gap-3 mt-[15px] cursor-pointer  rounded-lg py-2'>
                    <img src ={iconoMesa} alt = "iconoMesa" />
                    <label className="text-zinc-500 text-sm font-bold ">Mesas</label>
                    <img src ={IconoDrop} alt = "iconoDropDown"  className='ml-auto'/>
                </div>

                <div className='flex gap-3 mt-[15px] cursor-pointer  rounded-lg py-2'>
                    <img src ={iconoNotaSalida} alt = "iconoNotaSalida" />
                    <label className="text-zinc-500 text-sm font-bold">Nota de Salida</label>
                    <img src ={IconoDrop} alt = "iconoDropDown"  className='ml-auto'/>
                </div>

                <div className='flex gap-3 mt-[15px] cursor-pointer rounded-lg py-2'>
                    <img src ={iconoReporte} alt = "iconoReporte" />
                    <label className="text-zinc-500 text-sm font-bold ">Reportes</label>
                    <img src ={IconoDrop} alt = "iconoDropDown"  className='ml-auto'/>
                </div>

                <div className='flex gap-3 mt-[15px] cursor-pointer  rounded-lg py-2'>
                    <img src ={iconoCerrarSesion} alt = "iconoCerrarSesion" />
                    <label className="text-zinc-500 text-sm font-bold">Cerrar Sesión</label>
                </div>
                        
            </aside>
            <main className='md:w-3/4 p-[10px] md:h-screen overflow-scroll '>
                
            </main>
        </div>
    )
}

export default Layout;