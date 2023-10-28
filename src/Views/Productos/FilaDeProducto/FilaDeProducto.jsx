import "./FilaDeProducto.css";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import pollo from "/imagePolloDefault.jpg"; 
const productoDefault = {
  id : "01",
  nombre: "nombre Producto",
  descripcion : "descripcion producto que es un texto bastante largo a mostrar por lo que se beria mostrar cortado en un cierto limite para no arruinar el layout de la fila ",
  precio : "25.00",
  stock : "3",
  imagen: pollo,
  categoria: "alguna categoria",
};

const FilaDeProducto = ({ producto = productoDefault }) => {
  return (
    <li className="containerRowProduct"  title="ver mas detalles" >
      <img src={producto.imagen} alt="imgProduct" className="imageRowProduct" />
      <p className="producto-row-nombre" >{producto.nombre}</p>
      <p className="producto-row-precio" >{producto.precio} bs</p>
      <p className="producto-row-stock" > {producto.stock} </p>
      <p className="producto-row-descripcion" > {producto.descripcion} </p>
      <p className="producto-row-categoria" > {producto.categoria} </p>
        <div className="actionsRows">
        <IconEdit className="iconRowProduct" onClick={()=>alert()} />
        <IconTrash className="iconRowProduct" color="#D96565" />
        </div>
    </li>
  );
};

export default FilaDeProducto;
