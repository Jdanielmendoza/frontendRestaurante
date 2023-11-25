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
        localStorage.setItem("usuario", response.data?.data?.nombre);
        localStorage.setItem("imagen", response.data?.data.imagen);
        localStorage.setItem("cargo", response.data?.data.cargo);
        localStorage.setItem("ci", response.data?.data.ci);
        window.location.href = "/";
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

export const registerNewUser = async ({
  imagen,
  ci,
  nombre,
  telefono,
  correo,
  fechaDeNacimiento,
  contraseña,
  sexo,
  id_rol,
}) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    console.log({
      imagen,
      ci,
      nombre,
      telefono,
      correo,
      fechaDeNacimiento,
      contraseña,
      sexo,
      id_rol,
    });
    const url = baseUrl + "/usuario/registro";
    const sendUser = axios.post(url, {
      imagen,
      ci,
      nombre,
      telefono,
      correo,
      fechaDeNacimiento,
      contraseña,
      sexo,
      id_rol,
    });

    const result = await toast.promise(sendUser, {
      loading: "verificando datos",
      success: "registrado con exito!",
      error: "ocurrio un error al registrar",
    });

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const updateUsuario = async ({
  imagen,
  ci,
  nombre,
  telefono,
  correo,
  fechaDeNacimiento,
  sexo,
  id_rol,
}) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/usuario";
    const sendUser = axios.put(url, {
      imagen,
      ci,
      nombre,
      telefono,
      correo,
      fechaDeNacimiento,
      sexo,
      id_rol,
    });

    const result = await toast.promise(sendUser, {
      loading: "verificando datos",
      success: "actualizado con exito!",
      error: "ocurrio un error al actualizar!",
    });

    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const eliminarUser = async (carnet) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/usuario/" + carnet;
    const usuario = axios.delete(url);
    const res = await toast.promise(usuario, {
      loading: "cargando...",
      success: "usuario eliminado!",
      error: "ocurrio un error al tratar de eliminar al usuario!",
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const cambiarContraseña = async (
  ci,
  antiguaContraseña,
  nuevaContraseña,
  verificarContraseña
) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/usuario/cambiarClave";
    if (nuevaContraseña == verificarContraseña) {
      const passwordPromise = axios.patch(url, {
        ci,
        antiguaContraseña,
        nuevaContraseña,
      });
      const res = await toast.promise(passwordPromise, {
        loading: "cargando...",
        success: "se cambio la contraseña!",
        error: "ocurrio un error al cambiar la contraseña!",
      });
      return res.data;
    } else {
      toast.error("nuevas contraseñas no coinciden!");
    }
  } catch (error) {
    toast.error(error.response.data);
  }
};

export const registerNewProduct = async ({
  id,
  nombre,
  descripcion,
  precio,
  stock,
  imagen,
  id_categoria,
}) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/producto";
    const sendProduct = axios.post(url, {
      id,
      nombre,
      descripcion,
      precio,
      stock,
      imagen,
      id_categoria,
    });

    const result = await toast.promise(sendProduct, {
      loading: "verificando datos",
      success: "registrado con exito!",
      error: "ocurrio un error al registrar",
    });

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async ({
  id,
  nombre,
  descripcion,
  precio,
  stock,
  imagen,
  id_categoria,
}) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/producto/" + id;
    const sendProduct = axios.patch(url, {
      nombre,
      descripcion,
      precio,
      stock,
      imagen,
      id_categoria,
    });

    const result = await toast.promise(sendProduct, {
      loading: "verificando datos",
      success: "actualizado con exito!",
      error: "ocurrio un error al actualizar!",
    });

    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerCategorias = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/categoria";
    const categorias = await axios.get(url);
    return categorias.data;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProductos = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/producto";
    const productos = await axios.get(url);
    return productos.data;
  } catch (error) {
    console.log(error);
  }
};

export const eliminarProducto = async (idProducto) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/producto" + "/" + idProducto;
    const producto = axios.delete(url);
    const res = await toast.promise(producto, {
      loading: "cargando...",
      success: "producto eliminado!",
      error: "ocurrio un error al tratar de eliminar el producto!",
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerMesas = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/mesa";
    const mesas = await axios.get(url);
    return mesas.data;
  } catch (error) {
    console.log(error);
  }
};

export const registrarNuevaMesa = async (id, nro, nroSillas) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/mesa";
    const sendTable = axios.post(url, {
      id,
      nro,
      nroSillas,
    });
    const result = await toast.promise(sendTable, {
      loading: "verificando datos",
      success: "registrado con exito!",
      error: "ocurrio un error al registrar",
    });

    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data);
  }
};

export const updateTable = async (id, nro, nroSillas) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/mesa";
    const sendProduct = axios.put(url, {
      id,
      nro,
      nroSillas,
    });

    const result = await toast.promise(sendProduct, {
      loading: "verificando datos",
      success: "actualizado con exito!",
      error: "ocurrio un error al actualizar!",
    });
    /* console.log(result); */
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const eliminarMesa = async (id) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/mesa/" + id;
    const mesa = axios.delete(url);
    const res = await toast.promise(mesa, {
      loading: "cargando...",
      success: "producto eliminado!",
      error: "ocurrio un error al tratar de eliminar la mesa!",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const registrarCategoria = async (
  id,
  nombre,
  descripcion,
  id_categoria
) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/categoria";
    const sendCategory = axios.post(url, {
      id,
      nombre,
      descripcion,
      id_categoria,
    });
    const result = await toast.promise(sendCategory, {
      loading: "verificando datos",
      success: "registrado con exito!",
      error: "ocurrio un error al registrar",
    });

    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data);
  }
};

export const actulizarCategoria = async (
  id,
  nombre,
  descripcion,
  id_categoria
) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/categoria";
    const sendCategory = axios.put(url, {
      id,
      nombre,
      descripcion,
      id_categoria,
    });
    const result = await toast.promise(sendCategory, {
      loading: "verificando datos",
      success: "actualizado con exito!",
      error: "ocurrio un error al actualizar",
    });

    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data);
  }
};

export const eliminarCategoria = async (id) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/categoria/" + id;
    const mesa = axios.delete(url);
    const res = await toast.promise(mesa, {
      loading: "cargando...",
      success: "categoria eliminada!",
      error: "ocurrio un error al tratar de eliminar la categoria!",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/usuario";
    const usuarios = await axios.get(url);
    return usuarios.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const crearPedido = async ({
  id,
  estado,
  total,
  descuento,
  detalle,
  fecha,
  ci_usuario,
  id_tipodepago,
  id_mesa,
  nro,
  arreglo_de_detalles_de_pedidos,
}) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/pedido";
    const pedidoPendiente = axios.post(url, {
      id,
      estado,
      total,
      descuento,
      detalle,
      fecha,
      ci_usuario,
      id_tipodepago,
      id_mesa,
      nro,
      arreglo_de_detalles_de_pedidos,
    });
    const result = await toast.promise(pedidoPendiente, {
      loading: "cargando...",
      success: "pedido registrado!",
      error: "ocurrio un error al crear el pedido",
    });

    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data);
  }
};

export const obtenerPedidos = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/pedido";
    const pedidos = await axios.get(url);
    return pedidos.data;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerDetallesPedidos = async (id_pedido) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/pedido/" + id_pedido;
    console.log("fetching");
    const pedidos = await axios.get(url);
    return pedidos.data;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerPagos = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/tipoDePago";
    const pagos = await axios.get(url);
    return pagos.data;
  } catch (error) {
    console.log(error);
  }
};

export const actulizarPedido = async (
  estado,
  total,
  descuento,
  detalle,
  id_tipodepago,
  ci_usuario,
  idPedido
) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "/pedido/"+ idPedido;
    const sendCategory = axios.put(url, {
      estado,
      total,
      descuento,
      detalle,
      id_tipodepago,
      ci_usuario,
    });
    const result = await toast.promise(sendCategory, {
      loading: "cargando...",
      success: "se actualizo el pedido!",
      error: "ocurrio un error al actualizar el pedido!",
    });

    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data);
  }
};
