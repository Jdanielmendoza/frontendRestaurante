import "./RegistrarUsuario.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { eliminarUser, registerNewUser, updateUsuario } from "../../apiServices/apiServices";
import { useLocation, useNavigate } from "react-router-dom";
import { IconTrash } from "@tabler/icons-react";
import Swal from "sweetalert2";

const RegistrarUsuario = () => {
  const [file, setFile] = useState(null);
  const [imagen, setImagen] = useState(null);
  const [carnet, setCarnet] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState(0);
  const [correo, setCorreo] = useState("");
  const [fechaDeNacimiento, setFechaDeNacimiento] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [sexo, setSexo] = useState("M");
  const [rol, setRol] = useState("c60f1c68-3e53-4fa6-b75d-8e22dd720e2f");
  const navigate = useNavigate();

  const { state } = useLocation();

  const eliminarUsuario = async () => {
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
          await eliminarUser(carnet);
          Swal.fire("Deleted!", "Se elimino al usuario!.", "success").then(
            (res) => {
              if(res.isConfirmed){
                navigate(-1); 
              }
            }
          );
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const sendData = async () => {
    if (state) {
      if (file) {
        console.log("se actualizo la imagen");
        //se cambio la foto de perfil y es necesario subir a la nube la nueva imagen
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "presetRestaurante");
        const url = "https://api.cloudinary.com/v1_1/dsxfufsh5/image/upload";
        try {
          const response = axios.post(url, data);
          const imagenEnLaNube = await toast.promise(response, {
            loading: "Subiendo nueva imagen",
            success: "perfil actualizado",
            error: "error al subir la imagen",
          });
          await updateUsuario({
            imagen: imagenEnLaNube.data.secure_url,
            ci: carnet,
            nombre,
            telefono,
            correo,
            fechaDeNacimiento,
            sexo,
            id_rol: rol,
          });
        } catch (error) {
          console.log(error);
          toast.error("Ocurrio algun error al actualizar la imagen");
        }
      } else {
        // si no actuliazo la imagen le enviamos la misma url
        try {
          await updateUsuario({
            imagen,
            ci: carnet,
            nombre,
            telefono,
            correo,
            fechaDeNacimiento,
            sexo,
            id_rol: rol,
          });
        } catch (error) {
          console.log(error);
          toast.error("Ocurrio algun error al actualizar al usuario");
        }
      }
    } else {
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
        setImagen(imagenEnLaNube.data.secure_url);

        await registerNewUser({
          imagen: imagenEnLaNube.data.secure_url,
          ci: carnet,
          nombre,
          telefono,
          correo,
          fechaDeNacimiento,
          contraseña,
          sexo,
          id_rol: rol,
        });
      } catch (error) {
        console.log(error);
        toast.error("ocurrio algun error al subir la imagen");
      }
    }
    setTimeout(() => {
      navigate(-1);
    }, 1200);
  };

  useEffect(() => {
    if (state) {
      setCarnet(state.ci);
      setTelefono(state.telefono);
      setNombre(state.nombre);
      setCorreo(state.correo);
      let fecha = new Date(state.fechadenacimiento); // crea un objeto Date a partir de la cadena
      let fechaLocal = fecha.toLocaleDateString("es-BO", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }); // devuelve la fecha en el formato local de Bolivia con dos dígitos para el día y el mes
      let fechaInvertida = fechaLocal.replace(
        /(\d{2})\/(\d{2})\/(\d{4})/,
        "$3-$2-$1"
      ); // reemplaza el día por el año y viceversa
      setFechaDeNacimiento(fechaInvertida);
      setContraseña("••••••••");
      setRol(state.id_rol);
      setImagen(state.imagen);
    }
  }, []);
  return (
    <div className="containerFormRegistro">
      <form
        className="formRegistro"
        onSubmit={(e) => {
          e.preventDefault();
          sendData();
        }}
      >
        <div className="container-image">
          <img src={imagen} alt="perfil" id="imagePerfil" />
          <input
            type="file"
            accept="image/*"
            className="itemRegister"
            onChange={(e) => {
              document.getElementById("imagePerfil").src = URL.createObjectURL(
                e.target.files[0]
              );
              setFile(e.target.files[0]);
            }}
          />
        </div>

        <div>
          <label htmlFor="inputCarnet">Carnet De Identidad</label>
          <input
            type="text"
            className="inputRegister"
            id="inputCarnet"
            required
            readOnly={state}
            value={carnet}
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
            value={nombre}
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
            value={telefono}
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
            value={correo}
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
            value={fechaDeNacimiento}
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
            readOnly={state}
            value={contraseña}
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
              setSexo(e.target.value);
            }}
          >
            <option selected={state?.sexo === "M"} value="M">
              Masculino
            </option>
            <option selected={state?.sexo === "F"} value="F">
              Femenino
            </option>
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
            <option
              selected={state?.cargo === "administrador"}
              value="c60f1c68-3e53-4fa6-b75d-8e22dd720e2f"
            >
              Administrador
            </option>
            <option
              selected={state?.cargo === "cocinero"}
              value="bd77a31e-9bd4-4a9f-afd5-4cc4da45411d"
            >
              Cocinero
            </option>
            <option
              selected={state?.cargo === "cajero"}
              value="d85745e2-9cb8-421f-bd03-0a8033fddc2a"
            >
              Cajero
            </option>
          </select>
        </div>

        <div className="divSubmitButtonRegister">
          <input
            type="submit"
            value={state ? "ACTUALIZAR" : "REGISTRAR"}
            className="submitButtonRegister"
          />
        </div>
      </form>

      {state && (
        <IconTrash
          color="#e57"
          className="iconTrashDeleteUser"
          onClick={eliminarUsuario}
        />
      )}
      <Toaster />
    </div>
  );
};

export default RegistrarUsuario;
