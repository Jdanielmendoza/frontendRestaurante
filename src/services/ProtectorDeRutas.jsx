import { Outlet } from "react-router-dom"
import FormularioLogin from "../components/FormularioLogin/FormularioLogin"

const ProtectorDeRutas = ({permisos}) => {
   if(permisos == null){
    return <FormularioLogin/> 
   } 

   return <Outlet/> 
}

export default ProtectorDeRutas