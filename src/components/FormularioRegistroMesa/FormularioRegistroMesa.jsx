import { useEffect, useState } from "react";
import "./FormularioRegistroMesa.css";
import { registrarNuevaMesa, updateTable } from "../../apiServices/apiServices";
import { Toaster } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";

const FormularioRegistroMesa = () => {
  const [nro, setNro] = useState("");
  const [nroDeSillas, setNroDeSillas] = useState("");
  const navigate = useNavigate(); 
  const {state} = useLocation();  

  const handleSubmitNewTable = async () => {
    if(state){
        try {
            const response = await updateTable(state.id, nro, nroDeSillas);
            console.log(response);
            setTimeout(() => {
              navigate(-1);
            }, 2000);
          } catch (error) {
            console.log(error);
          }
    }else{
        try {
            const id = crypto.randomUUID();
            const response = await registrarNuevaMesa(id, nro, nroDeSillas);
            console.log(response);
            setTimeout(() => {
              navigate(-1);
            }, 2000);
          } catch (error) {
            console.log(error);
          }
    }
  };

  useEffect(()=>{
    if(state){//if state distinto de null 
        const {nro, nrosillas} = state
        setNro(nro); 
        setNroDeSillas(nrosillas); 
    }
  },[])
  return (
    <div className="min-h-screen flex items-center justify-center containerRegisterMesa ">
      <form
        className="w-full  bg-gray-50 rounded-md p-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitNewTable();
        }}
      >
        <div className="mb-12">
          <label
            htmlFor="nro"
            className="block text-left pl-2 uppercase font-semibold text-letra-color"
          >
            Nro
          </label>
          <input
            id="nro"
            className="py-1 rounded-lg border-2 border-purple-40 pl-5 w-full border-purple-400"
            placeholder="Nro"
            required
            type="number"
            min="1"
            value={nro}
            onChange={(e)=>setNro(e.target.value)}
          />
        </div>

        <div className="mb-12">
          <label
            htmlFor="nrosilla"
            className="block text-left pl-2 uppercase font-semibold text-letra-color"
          >
            Nro Sillas
          </label>
          <input
            id="nrosilla"
            className="py-1 rounded-lg border-2 border-purple-400 pl-5 w-full"
            placeholder="Cantidad de Sillas"
            required
            type="number"
            min="1"
            onChange={(e)=>setNroDeSillas(e.target.value)}
            value={nroDeSillas}
          />
        </div>

        <input
          type="submit"
          value="Registrar"
          className="bg-custom-color uppercase text-white font-semibold w-full rounded-md sm:text-2xl py-3 mt-4 hover:bg-purple-600 cursor-pointer"
        />
      </form>
      <Toaster/>
    </div>
  );
};

export default FormularioRegistroMesa;
