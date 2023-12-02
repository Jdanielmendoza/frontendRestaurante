import { useEffect, useState } from "react";
import DropDownProducto from "./DropDownProducto";
import "./FormularioRegistroProducto.css";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import {
  registerNewProduct,
  obtenerCategorias,
  updateProduct,
} from "../../apiServices/apiServices.js";
import axios from "axios";
import { useLocation , useNavigate } from "react-router-dom";

const FormularioRegistroProducto = () => {
  const [categoriasOption, setCategoriaOption] = useState([]);
  const [file, setFile] = useState(null);
  const [imagen, setImagen] = useState(null);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState();
  const [stock, setStock] = useState();
  const [descripcion, setDescripcion] = useState();
  const [categoria, setCategoria] = useState();

  const { state } = useLocation();
  const navigate = useNavigate();

  const sendData = async () => {
    try {
      if (imagen == null) {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "presetRestaurante");
        const url = "https://api.cloudinary.com/v1_1/dsxfufsh5/image/upload";

        const response = axios.post(url, data);
        const imagenEnLaNube = await toast.promise(response, {
          loading: "subiendo Imagen",
          success: "imagen Subida",
          error: "error al subir la Imagen",
        });
        if (state == null) {  //-*********************-en caso de que por la ruta no se entrega valores
          await registerNewProduct({
            imagen: imagenEnLaNube.data.secure_url,
            id: crypto.randomUUID(),
            nombre,
            descripcion,
            precio,
            stock,
            id_categoria: categoria,
          });
        } else { // ************************caso contrario
          /* console.log("intentando Actualizar producto..."); */
          await updateProduct({
            imagen:imagenEnLaNube.data.secure_url,
            id: state.producto.id,
            nombre,
            descripcion,
            precio,
            stock,
            id_categoria: categoria,
          });
        }
      } else {
        /* console.log("intentando Actualizar producto..."); */
        await updateProduct({
          imagen,
          id: state.producto.id,
          nombre,
          descripcion,
          precio,
          stock,
          id_categoria: categoria,
        });
      }

      setTimeout(() => {
        navigate(-1);
      }, 1000); 
    } catch (error) {
      console.log(error);
      toast.error("ocurrio algun error al subir la imagen");
    }
  };


  const handleInputChangeImage = (e) => {
    setImagen(null);
    setFile(e.target.files[0]);
    const imageSelected = document.querySelector(".imageSelectedFormProduct");
    if (e.target.files.length == 0) {
      imageSelected.src = "";
    } else {
      imageSelected.src = URL.createObjectURL(e.target.files[0]);
      /* console.log(e.target.files[0]); */
    }
  };


  useEffect(() => {
    const obtenerCategoriasP = async () => {
      const result = await obtenerCategorias();
      setCategoriaOption(result);
    };
    if (state != null) {
      obtenerCategoriasP();
      const { producto } = state;
      setImagen(producto.imagen);
      setNombre(producto.nombre);
      setPrecio(producto.precio);
      setStock(producto.stock);
      setDescripcion(producto.descripcion);
    } else {
      obtenerCategoriasP();
    }
  }, []);



  
  return (
    <div className=" flex items-center justify-center containerProductoRegistro ">
      <form
        className="w-full  bg-gray-50 rounded-md p-5 "
        onSubmit={(e) => {
          e.preventDefault();
          sendData();
        }}
      >
        <section className="md:flex  md:gap-5">
          <div
            className="md:w-1/2 bg-purple-300 flex h-full md:py-2 md:px-2 md:mt-3 mb-8 md:mb-0 "
            id="inputImageProductoContainer"
          >
            {/* <label className="m-auto">Arrastre una imagen</label> */}
            <input
              type="file"
              accept="image/*"
              name=""
              id="inputImageSelectedFile"
              required={state == null}
              onChange={handleInputChangeImage}
            />
            <img
              src={state ? state.producto.imagen : ""}
              className="imageSelectedFormProduct"
            />
          </div>

          <div className="md:w-1/2">
            <label className="pl-2 block text-letra-color uppercase font-semibold text-left">
              Nombre
            </label>
            <input
              className="w-full py-1 pl-3 border-2 rounded-md border-purple-400 mb-10"
              placeholder="Nombre"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              type="text"
            />

            <label className="pl-2 block text-letra-color uppercase font-semibold text-left">
              Precio
            </label>
            <input
              type="number"
              className="w-full py-1 pl-3 border-2 rounded-md border-purple-400 mb-10"
              placeholder="Precio"
              onChange={(e) => setPrecio(e.target.value)}
              value={precio}
              required
            />

            <label className="pl-2 block text-letra-color uppercase font-semibold text-left">
              Stock
            </label>
            <input
              type="number"
              className="w-full py-1 pl-3 border-2 rounded-md border-purple-400 mb-10"
              placeholder="Stock"
              onChange={(e) => setStock(e.target.value)}
              value={stock}
              required
            />
          </div>
        </section>

        <section className="md:flex mb-10 md:gap-5 ">
          <div className="md:w-1/2">
            <label className="pl-2 block text-letra-color uppercase font-semibold text-left ">
              Descripcion
            </label>
            <textarea
              className="border-purple-400 p-1 w-full border-2 rounded-md"
              onChange={(e) => setDescripcion(e.target.value)}
              value={descripcion}
            />
          </div>

          <div className="md:w-1/2 pt-5">
            <DropDownProducto
              setCategoria={setCategoria}
              arregloCategorias={categoriasOption}
              defualtValueSelected={state?.producto.nombrecategoria}
            />
          </div>
        </section>

        <input
          type="submit"
          className="text-white font-semibold py-3 w-full bg-custom-color rounded-md uppercase md:text-2xl mt-7 hover:bg-purple-600 cursor-pointer"
          value={state ? "Guardar Cambios" : "Registrar"}
        />
      </form>
      <Toaster />
    </div>
  );
};

export default FormularioRegistroProducto;
