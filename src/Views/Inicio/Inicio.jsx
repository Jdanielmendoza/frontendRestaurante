import "./Inicio.css"
import TarjetaDeReporteDeInicio from "../../components/TarjetaDeReporteDeInicio/TarjetaDeReporteDeInicio"
import Money from "/Money.png";
import CarritoDeCompras from "/CarritoDeCompras.png";
import Timbre from "/Timbre.png";
import { useEffect } from "react";

const Inicio = () => {


  return (
    <div className="containerInicio" >
        <section className="containerReportCard">
        <TarjetaDeReporteDeInicio
                ImgDeTarjeta={Money}
                ColorDeFondo="#161f41"
                ColorDeFondoDeImg="rgba(80, 210, 85, 0.59)"
                iconoPortada=""
                tituloDeNumero="376"
                tituloDeValorDeNumero="bs"
                descripcion="Ingreso Por Ventas"
                detalle="(hoy dia)"
              />
              <TarjetaDeReporteDeInicio
                ImgDeTarjeta={Timbre}
                ColorDeFondo="#231864"
                ColorDeFondoDeImg="#FFB611"
                iconoPortada=""
                tituloDeNumero="113"
                tituloDeValorDeNumero="Total"
                descripcion="Cantidad De Ventas"
                detalle="(De La Semna)"
              />
              <TarjetaDeReporteDeInicio
                ImgDeTarjeta={CarritoDeCompras}
                ColorDeFondo="#0C405E"
                ColorDeFondoDeImg="#E62D65"
                iconoPortada=""
                tituloDeNumero="42"
                tituloDeValorDeNumero="Total"
                descripcion="Productos De Salida"
                detalle="(De La Semana)"
              />
        </section>
    </div>
  )
}

export default Inicio