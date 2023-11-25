import "./CarritoVacio.css";
import carritoVacioImg from "/carritoVacioOso.png";

const CarritoVacio = () => {
  return (
    <div className="containerCarritoVacio">
      <img
        src={carritoVacioImg}
        alt="imgCarritoDeCompras"
        className="imgCarritoOso"
      />
      <p className="textCarritoVacio">TU CARRITO ESTA VACIO !</p>
    </div>
  );
};

export default CarritoVacio;
