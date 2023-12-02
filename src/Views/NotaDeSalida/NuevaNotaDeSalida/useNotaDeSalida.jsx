import { useContext } from "react"
import { contextCarritoDeCompras } from "./ContextNotaDeSalida"

const useNotaDeSalida = () => {
    const context = useContext(contextCarritoDeCompras)
    if(context === undefined){
        console.log("error el carrito no esta definido!");
        return {};
    }
    return context ;
}

export default useNotaDeSalida