import "./Inicio.css";
import TarjetaDeReporteDeInicio from "../../components/TarjetaDeReporteDeInicio/TarjetaDeReporteDeInicio";
import Money from "/Money.png";
import CarritoDeCompras from "/CarritoDeCompras.png";
import Timbre from "/Timbre.png";
import { useEffect, useState } from "react";
import {
  obtenerCantidadDeVentas,
  obtenerVentasSemanales,
} from "../../apiServices/apiServices.js";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
);

export const options = {
  responsive: true, 
  plugins: {
    legend: {
      position: "top",
    },
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const labels = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

export const fnData = (datas) => {
  return {
    labels,
    datasets: [
      {
        label: "Ventas semanales",
        data: datas,
        backgroundColor: ["#B87DE6aa", "#8476DEaa"],
        borderColor: ["#B87DE6", "#8476DE"],
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  };
};

const Inicio = () => {
  const [ingresoPorVentas, setIngresosPorVentas] = useState("0");
  const [totalCantidadVentasSemanales, setTotalCantidadVentasSemanales] =
    useState(0);
  const [ventasSemanales, setVentasSemanales] = useState([]);
  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: "Ventas semanales",
        data: [],
        backgroundColor: ["#B87DE6aa", "#8476DEaa"],
        borderColor: ["#B87DE6", "#8476DE"],
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  });

  useEffect(() => {
    const getReportes = async () => {
      try {
        const res = await obtenerCantidadDeVentas();
        const ventasDeLaSemana = await obtenerVentasSemanales();
        setIngresosPorVentas(res[0]?.ingreso_por_ventas);
        setVentasSemanales(ventasDeLaSemana);
        let total = 0;
        ventasDeLaSemana.map((venta) => (total += parseInt(venta.cantidad)));
        setTotalCantidadVentasSemanales(total);
        const diasEnEspanol = {
          Monday: "Lunes",
          Tuesday: "Martes",
          Wednesday: "Miércoles",
          Thursday: "Jueves",
          Friday: "Viernes",
          Saturday: "Sábado",
          Sunday: "Domingo",
        };
        const ordenDia = {
          Lunes: 1,
          Martes: 2,
          Miércoles: 3,
          Jueves: 4,
          Viernes: 5,
          Sábado: 6,
          Domingo: 7,
        };

        // Mapeamos los nombres de los días al español
        const datosEnEspanolOrdenados = ventasDeLaSemana
          .map((item) => ({
            dia: diasEnEspanol[item.dia.trim()],
            cantidad: item.cantidad,
          }))
          .sort((a, b) => ordenDia[a.dia] - ordenDia[b.dia]);

        const datosDeCantidad = datosEnEspanolOrdenados.map((item) =>
          parseInt(item.cantidad)
        );

        console.log(datosDeCantidad);

        setData(fnData(datosDeCantidad));
      } catch (error) {
        console.log(error);
      }
    };
    getReportes();
  }, []);

  return (
    <div className="containerInicio">
      <section className="containerReportCard">
        <TarjetaDeReporteDeInicio
          ImgDeTarjeta={Money}
          ColorDeFondo="#161f41"
          ColorDeFondoDeImg="rgba(80, 210, 85, 0.59)"
          iconoPortada=""
          tituloDeNumero={ingresoPorVentas}
          tituloDeValorDeNumero="bs"
          descripcion="Ingreso Por Ventas"
          detalle="(hoy dia)"
        />
        <TarjetaDeReporteDeInicio
          ImgDeTarjeta={Timbre}
          ColorDeFondo="#231864"
          ColorDeFondoDeImg="#FFB611"
          iconoPortada=""
          tituloDeNumero={totalCantidadVentasSemanales}
          tituloDeValorDeNumero="Total"
          descripcion="Cantidad De Ventas"
          detalle="(De La Semana)"
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
      <main className="graficosReportes">
        <section className="sectionGrafica">
          <p>CANTIDAD DE VENTAS</p>
          <Bar className="barGrafic" options={options} data={data} />
        </section>
        <section className="sectionGrafica">
          <p>CANTIDAD DE PRODUCTOS EN SALIDA</p>
          <Line  options={options} data={data} />
        </section>
      </main>
    </div>
  );
};

export default Inicio;
