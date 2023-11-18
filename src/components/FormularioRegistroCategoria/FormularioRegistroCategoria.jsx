import { useEffect, useState } from "react";
import DropDownProducto from "../FormularioRegistroProducto/DropDownProducto";
import "./FormularioRegistroCategoria.css";
import {
  actulizarCategoria,
  obtenerCategorias,
  registrarCategoria,
} from "../../apiServices/apiServices.js";
import { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const FormularioRegistroCategoria = () => {
  const [categoriasOptions, setCategoriasOptions] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState();
  const navigate = useNavigate(); 
  const { state } = useLocation();

  useEffect(() => {
    const fnOptionsCategoria = async () => {
      const categorys = await obtenerCategorias();
      setCategoriasOptions([{ nombre: "Ninguna", id: null }, ...categorys]);
    };

    if (state) {
      const { categoriaState } = state;
      setNombre(categoriaState?.nombre);
      setDescripcion(categoriaState?.descripcion);
      setCategoria(categoriaState.id_categoria); 
      /* .... */
      fnOptionsCategoria();
    }
    fnOptionsCategoria();
  }, []);

  const sendCategory =async () => {
    if(state){
      const { categoriaState } = state;
      try {
        const res = await actulizarCategoria(categoriaState.id, nombre, descripcion, categoria);
        if(res?.status == 200 ){
          navigate(-1); 
        }
      } catch (error) {
        console.log(error);
      }
    }else{
      try {
        const id = crypto.randomUUID();
        const res = await registrarCategoria(id, nombre, descripcion, categoria);
        if(res?.status == 200 ){
          navigate(-1); 
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div
      id="containerFormCategoria"
      className="min-h-screen flex items-center justify-center"
    >
      {/* bg-opacity-50 */}
      <form
        className="w-full  bg-gray-50 rounded-md p-5"
        onSubmit={(e) => {
          e.preventDefault();
          sendCategory();
        }}
      >
        {/* Superior */}

        <div className="">
          <label className="block text-letra-color text-1xl md:font-semibold pl-3 text-left uppercase">
            Nombre
          </label>
          <input
            type="text"
            className="shadow-sm rounded-lg border-2 border-purple-400  w-full pl-3 py-2 "
            required
            placeholder="Tu Nombre"
            defaultValue={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        {/* Medio  */}
        <section className="md:flex md:py-5 md:gap-10 w-full ">
          <div className="md:w-full md:w-1/2 mt-5">
            <label className="mb-1 block uppercase  text-left text-letra-color pl-2 text-1xl md:font-semibold">
              Descripcion
            </label>
            <textarea
              className="shadow-sm rounded-lg border-2 border-purple-400 w-full p-2"
              defaultValue={descripcion}
              onChange={(e) =>setDescripcion(e.target.value)}
            />
          </div>

          <div className="md:w-full pt-12 md:w-1/2 md:mt-0 py-7">
            <DropDownProducto
              arregloCategorias={categoriasOptions}
              setCategoria={setCategoria}
              defualtValueSelected={state?.categoriaState?.categoria_padre}
            />
          </div>
        </section>

        <input
          type="submit"
          className="bg-custom-color rounded-lg  px-1 py-[10px] uppercase  mt-[20px] text-white font-semibold text-1xl md:text-1xl px-100  w-full cursor-pointer"
          value={state?"Guardar Cambios": "Registrar"}
        />
      </form>
      <Toaster />
    </div>
  );
};

export default FormularioRegistroCategoria;
