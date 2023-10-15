
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

const Sidebar = ()=>{
    return(
       <div className='bg-red-700 ml-auto'>
            <div className='block items-center justify-center'>
                {/* imagen */}
                <div className='bg-orange-100'>p</div>
                <p className="text-zinc-500 text-sm font-bold font-['Rowdies']">Daniel Mendoza</p>
            </div>

{/* agregar de sugerencia font-['Rowdies'] junto con font-bold */}
            <div className='bg-custom-color flex gap-3 mt-[15px]'>
                <img src ={iconoInicio} alt = "iconoInicio" />
                <label className="text-zinc-500 text-sm font-bold">Inicio</label>
                <img src ={IconoDrop} alt = "iconoDropDown" className='ml-auto' />
            </div>

            <div className='flex gap-3  mt-[15px]'>
                <img src ={iconoUsuario} alt = 'iconoUsuario' />
                <label className="text-zinc-500 text-sm font-bold">Usario</label>
                <img src ={IconoDrop} alt = "iconoDropDown"  className='ml-auto'/>
            </div>

            <div className='flex gap-3 mt-[15px]'>
                <img src ={iconoProducto} alt = "iconoProducto" />
                <label className="text-zinc-500 text-sm font-bold">Producto</label>
                <img src ={IconoDrop} alt = "iconoDropDown"  className='ml-auto' />
            </div>

            <div className='flex gap-3 mt-[15px]'>
                <img src ={iconoCartilla} alt = "iconoCartilla" />
                <label className="text-zinc-500 text-sm font-bold">Cartilla</label>
                <img src ={IconoDrop} alt = "iconoDropDown"  className='ml-auto' />
            </div>

            <div className='flex gap-3 mt-[15px]'>
                <img src ={iconoInsumo} alt = "iconoInsumo" />
                <label className="text-zinc-500 text-sm font-bold">Insumo</label>
                <img src ={IconoDrop} alt = "iconoDropDown"   className='ml-auto'/>
            </div>

            <div className='flex gap-3 mt-[15px]'>
                <img src ={iconoMesa} alt = "iconoMesa" />
                <label className="text-zinc-500 text-sm font-bold ">Mesas</label>
                <img src ={IconoDrop} alt = "iconoDropDown"  className='ml-auto'/>
            </div>

            <div className='flex gap-3 mt-[15px]'>
                <img src ={iconoNotaSalida} alt = "iconoNotaSalida" />
                <label className="text-zinc-500 text-sm font-bold">Nota de Salida</label>
                <img src ={IconoDrop} alt = "iconoDropDown"  className='ml-auto'/>
            </div>

            <div className='flex gap-3 mt-[15px]'>
                <img src ={iconoReporte} alt = "iconoReporte" />
                <label className="text-zinc-500 text-sm font-bold ">Reportes</label>
                <img src ={IconoDrop} alt = "iconoDropDown"  className='ml-auto'/>
            </div>

            <div className='flex gap-3 mt-[15px]'>
                <img src ={iconoCerrarSesion} alt = "iconoCerrarSesion" />
                <label className="text-zinc-500 text-sm font-bold">Cerrar Sesión</label>
            </div>
       </div>
    )
}

export default Sidebar