import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import type { ChartData, ChartOptions } from "chart.js";
import "./styles.scss";

Chart.register(...registerables);
Chart.register(ChartDataLabels);

const Graphic = () => {
  const data: ChartData<"line"> = {
    labels: [
      "12H",
      "14H",
      "16H",
      "18H",
      "20H",
      "22H",
      "24H",
      "02H",
      "06H",
      "08H",
      "10H",
      "12H",
    ],

    datasets: [
      {
        label: "Chuva",
        data: [27, 28, 28, 27, 28, 39, 30, 27, 26, 25, 26, 29],
        backgroundColor: "#004CBD",
        borderColor: "#004CBD",
        pointBorderColor: "white",
        tension: 0.0, //curva ou reto
        pointRadius: 5, //tamanho da bolinha
      },
    ],
  };

  function formatPercentage(value: { toString: () => string }) {
    return value.toString() + "%";
  }

  const options: ChartOptions<"line"> = {
    maintainAspectRatio: false, // Permite ajustar o tamanho do gráfico de acordo com o contêiner
    responsive: true, // Permite que o gráfico seja responsivo
    scales: {
      x: {
        min: 0, // Valor mínimo da escala horizontal
        max: 100, // Valor máximo da escala horizontal
        grid: {
          display: false, // Remove a grade da escala x
        },
        offset: true, //Espaçamento entre a linha e a escala
        ticks: {
          font: {
            size: 10.593, // Define o tamanho da fonte do eixo y
          },
        },
      },
      y: {
        min: 0, // Valor mínimo da escala vertical
        max: 50, // Valor máximo da escala vertical
        ticks: {
          stepSize: 10, // Define o incremento para 10 em 10
          callback: formatPercentage,
          font: {
            size: 12.106, // Define o tamanho da fonte do eixo y
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        align: "top",
        color: "#000000",
        font: {
          size: 12,
        },
      },
    },
    layout: { padding: 20 },
  };

  return (
    <div className="containerGraphic">
      <Line data={data} options={options} />
    </div>
  );
};

export default Graphic;
