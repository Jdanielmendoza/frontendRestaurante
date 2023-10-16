
const CircularImage = () => {
  const imageUrl = 'https://friconix.com/png/fi-ctluxx-anonymous-user-circle-solid.png'; // Reemplaza con la URL de tu imagen

  return (
    <div className="flex items-center justify-center">
      {/* <div className="rounded-full w-24 h-24 overflow-hidden"> */}
        <img
          src={imageUrl}
          alt="Imagen Circular"
          className="w-20 h-full object-cover"
        />
      {/* </div> */}
    </div>
  );
}

export default CircularImage;
