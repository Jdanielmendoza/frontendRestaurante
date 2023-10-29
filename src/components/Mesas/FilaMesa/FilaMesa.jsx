import { Toaster } from 'react-hot-toast';
import { eliminarMesa } from '../../../apiServices/apiServices';
import iconoEditar from '/iconoEditar.svg'
import iconoEliminar from '/iconoEliminar.svg'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';


const FilaMesa = ({mesa}) => {
   const navigate = useNavigate(); 
   const NavigateToEditTable = ()=>{
    navigate('/mesa/edit',{
      state:mesa
    })
   }

   const elimMesa = () => {
    try {
      Swal.fire({
        title: "Estas Seguro?",
        text: "No prodras revertir los cambios!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await eliminarMesa(mesa.id);
            if(res?.status == 200){
              Swal.fire("Eliminado!", "La mesa fue eliminada!.", "success");
              setTimeout(() => {
                navigate(-1); 
              }, 1000);
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

    return (
      <div>
          <section className='bg-white w-full px-6 rounded-lg mt-5'>
            <ul className='grid grid-cols-3 gap-10 '>
              <li className=" font-bold text-black text-center col-span-1 py-2  ">
                <div className="flex justify-center items-center md:gap-5">
                    <img src="/src/img/imagenMesa.png" className="w-11 h-11"/>
                    {mesa.nro}
                </div>
                </li>
              <li className=" font-bold text-black text-center col-span-1 py-4  ">{mesa.nrosillas}</li>
              <li className=" font-bold text-black text-center col-span-1 py-4 ">
                <div className="flex justify-center items-center gap-5">
                    <img src={iconoEditar} alt='icono de editar' onClick={()=>NavigateToEditTable()}  className='w-7 cursor-pointer'/>
                    <img src={iconoEliminar} alt='icono de eliminar' className='w-7 cursor-pointer' onClick={()=>elimMesa()} />
                </div>
              </li>
            </ul>
          </section>
       <Toaster/>
      </div>
    )
  }
  
  export default FilaMesa
  