import { useNavigate } from "react-router-dom";
import "./FilaCategoria.css";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { eliminarCategoria } from "../../../apiServices/apiServices.js";
import Swal from "sweetalert2";
import { Toaster } from "react-hot-toast";

const defaultCategoria = {
  nombre: "gaseosas",
  descripcion: "conjunto de bebidas gaseosas",
  categoria_padre: "bebidas",
};

const FilaCategoria = ({ categoria = defaultCategoria }) => {
  const navigate = useNavigate();
  const elimCategoria = async () => {
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
          const res = await eliminarCategoria(categoria.id);
          if (res?.status == 200) {
            Swal.fire("Deleted!", res.data.message, "success");
            /* setTimeout(() => {
              window.location.href = "/categoria";
            }, 1000); */
            navigate(-1); 
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToEditProduct = () => {
    navigate("/categoria/edit", { state: { categoria } });
  };

  return (
    <li
      id="containerFilaCategoria"
      className="containerRowProduct"
      title="ver mas detalles"
    >
      <p className="producto-row-nombre">{categoria.nombre}</p>
      <p className="producto-row-precio">{categoria.descripcion}</p>
      <p className="producto-row-stock"> {categoria.categoria_padre} </p>
      <div id="actionsRowsCategoria" className="actionsRows">
        <IconEdit className="iconRowProduct" onClick={() => navigate('/categoria/edit',{
            state : {categoriaState:categoria}
        }) } />
        <IconTrash
          className="iconRowProduct"
          color="#D96565"
          onClick={() => elimCategoria()}
        />
      </div>
    </li>
  );
};

export default FilaCategoria;
