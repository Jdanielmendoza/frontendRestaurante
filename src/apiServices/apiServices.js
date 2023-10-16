import axios from "axios";
import toast from "react-hot-toast";

const config = {
  duration: 3000,
  position: "top-center",
};
export const loginUser = async (nombre, contraseña) => {

  if (nombre.length > 3) {
    if (contraseña.length > 4) {
      const dataUser = {
        nombre,
        contraseña,
      };

      try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const url = baseUrl + "/auth/login";
        const data = axios.post(url, dataUser);
        const response = await toast.promise(data, {
          loading: "loading",
          success: "success",
          error: "error",
        });

        console.log(response);

        localStorage.setItem("token", response.data?.token);
        localStorage.setItem("user", response.data?.name);
        //window.location.href = "/";
      } catch (error) {
        console.log(error);
        const messageError = error.response?.data?.message;
        toast.error(messageError, config);
      }
    } else {
      toast.error("contraseña deberia tener al menos 5 caracteres", config);
    }
  } else {
    toast.error("nombre muy corto", config);
  }
};
