import "./RegistrarUsuario.css";
import { useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { registerNewUser } from "../../apiServices/apiServices";

const RegistrarUsuario = () => {
  const [file, setFile] = useState(null);
  const [imageCloudinary, setImageCloudinary] = useState("");
  const [carnet, setCarnet] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState(0);
  const [correo, setCorreo] = useState("");
  const [fechaDeNacimiento, setFechaDeNacimiento] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [sexo, setSexo] = useState("M");
  const [rol, setRol] = useState("c60f1c68-3e53-4fa6-b75d-8e22dd720e2f");

  const sendData = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "presetRestaurante");
    const url = "https://api.cloudinary.com/v1_1/dsxfufsh5/image/upload";
    try {
      const response = axios.post(url, data);
      const imagenEnLaNube = await toast.promise(response, {
        loading: "subiendo Imagen",
        success: "imagenSubida",
        error: "error Imagen",
      });
      setImageCloudinary(imagenEnLaNube.data.secure_url);

      await registerNewUser({
        imagen:imagenEnLaNube.data.secure_url,
        ci : carnet, 
        nombre,
        telefono,
        correo,
        fechaDeNacimiento,
        contraseña,
        sexo,
        id_rol : rol
      });

    } catch (error) {
      console.log(error);
      toast.error("ocurrio algun error al subir la imagen");
    }
  };

  return (
    <div className="containerFormRegistro">
      <form
        className="formRegistro"
        onSubmit={(e) => {
          e.preventDefault();
          sendData();
        }}
      >
        <input
          type="file"
          accept="image/*"
          className="itemRegister"
          onChange={(e) => {
            console.log(e.target.files[0]);
            setFile(e.target.files[0]);
          }}
        />

        <div>
          <label htmlFor="inputCarnet">Carnet De Identidad</label>
          <input
            type="text"
            className="inputRegister"
            id="inputCarnet"
            required
            onChange={(e) => {
              setCarnet(e.target.value);
            }}
            placeholder="carnet de identidad"
          />
        </div>

        <div>
          <label htmlFor="inputName">Nombre</label>
          <input
            type="text"
            className="inputRegister"
            id="inputName"
            required
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="inputTelefono">Telefono</label>
          <input
            type="number"
            className="inputRegister"
            id="inputTelefono"
            required
            onChange={(e) => {
              setTelefono(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="inputEmail">Correo</label>
          <input
            type="email"
            className="inputRegister"
            id="inputEmail"
            required
            onChange={(e) => {
              setCorreo(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="inputDate">Fecha de nacimiento</label>
          <input
            type="date"
            className="inputRegister"
            id="inputDate"
            required
            onChange={(e) => {
              setFechaDeNacimiento(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="inputContra">Contraseña</label>
          <input
            type="password"
            className="inputRegister"
            id="inputContra"
            required
            onChange={(e) => {
              setContraseña(e.target.value);
            }}
          />
        </div>

        <div className="selectOption">
          <label htmlFor="inputSexo">Sexo</label>
          <select
            id="inputSexo"
            onChange={(e) => {
              console.log(e);
              setSexo(e.target.value);
            }}
          >
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>
        </div>

        <div className="selectOption">
          <label htmlFor="inputRol">Rol</label>
          <select
            id="inputRol"
            onChange={(e) => {
              setRol(e.target.value);
            }}
          >
            <option value="c60f1c68-3e53-4fa6-b75d-8e22dd720e2f">
              Administrador
            </option>
            <option value="bd77a31e-9bd4-4a9f-afd5-4cc4da45411d">
              Cocinero
            </option>
            <option value="d85745e2-9cb8-421f-bd03-0a8033fddc2a">Cajero</option>
          </select>
        </div>

        <div className="divSubmitButtonRegister">
          <input
            type="submit"
            value="REGISTRAR"
            className="submitButtonRegister"
          />
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default RegistrarUsuario;
