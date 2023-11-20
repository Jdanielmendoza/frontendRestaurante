import "./FilaDeProducto.css";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import Swal from "sweetalert2";
import pollo from "/imagePolloDefault.jpg";
import { eliminarProducto } from "../../../apiServices/apiServices.js";
import { useNavigate } from "react-router-dom";

const productoDefault = {
  id: "01",
  nombre: "nombre Producto",
  descripcion:
    "descripcion producto que es un texto bastante largo a mostrar por lo que se beria mostrar cortado en un cierto limite para no arruinar el layout de la fila ",
  precio: "25.00",
  stock: "3",
  imagen: pollo,
  categoria: "alguna categoria",
};

const FilaDeProducto = ({ producto = productoDefault }) => {
  const navigate  = useNavigate(); 
  const elimProducto = async () => {
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
          await eliminarProducto(producto.id);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToEditProduct = ()=>{
    navigate('/producto/edit',{state: {producto}})
  }

  return (
    <li className="containerRowProduct" title="ver mas detalles">
      <div className="containImageProduct">
        <img
          src={producto.imagen}
          alt="imgProduct"
          className="imageRowProduct"
        />
      </div>
      <p className="producto-row-nombre">{producto.nombre}</p>
      <p className="producto-row-precio">{producto.precio} bs</p>
      <p className="producto-row-stock"> {producto.stock} </p>
      <p className="producto-row-descripcion"> {producto.descripcion} </p>
      <p className="producto-row-categoria"> {producto.nombrecategoria} </p>
      <div className="actionsRows">
        <IconEdit className="iconRowProduct" onClick={()=>navigateToEditProduct()}  />
        <IconTrash
          className="iconRowProduct"
          color="#D96565"
          onClick={() => elimProducto()}
        />
      </div>
    </li>
  );
};

export default FilaDeProducto;
