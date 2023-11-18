export const obtenerArregloDeRolesUnicos = (usuarios) => {
  return [
    ...new Set(
      usuarios.map((usuario) => {
        return usuario.cargo;
      })
    ),
  ];
};

export const obtenerArregloDeSexosUnicos = (usuarios) => {
    return [
      ...new Set(
        usuarios.map((usuario) => {
          return usuario.sexo;
        })
      ),
    ];
  };
  
export const defaultUser = [{
    imagen:"https://www.libertyspecialtymarkets.com/_r/193x193/static/2020-07/profile-default.jpg?t=1596032829",
    nombre:"Joaquin Chumacero",
    ci:"14316421",
    telefono:"71034156",
    correo: "JoaquinC@gmail.com",
    sexo: "M", 
    id_rol: "1234",
    cargo : "administrador",
    contraseña: "12345",
    fechaDeNacimiento:"2003/08/21"
  }]