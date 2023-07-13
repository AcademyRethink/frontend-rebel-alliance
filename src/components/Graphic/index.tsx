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
        data: [27, 28, 28, 27, 28, 31, 30, 27, 26, 25, 26, 29],
        backgroundColor: "#004CBD",
        borderColor: "#004CBD",
        pointBorderColor: "white",
        tension: 0.0, //curva ou reto
      },
    ],
  };

  function formatPercentage(value: { toString: () => string }) {
    return value.toString() + "%";
  }

  const options: ChartOptions<"line"> = {
    scales: {
      x: {
        min: 0, // Valor mínimo da escala horizontal
        max: 100, // Valor máximo da escala horizontal
        grid: {
          display: false, // Remove a grade da escala x
        },
        offset: true,
      },
      y: {
        min: 0, // Valor mínimo da escala vertical
        max: 50, // Valor máximo da escala vertical
        ticks: {
          stepSize: 10, // Define o incremento para 10 em 10
          callback: formatPercentage,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        align: "top", // Certifique-se de usar um valor válido, como 'top', 'center', 'bottom', 'start' ou 'end'
        color: "#000000",
        font: {
          size: 12,
        },
      },
    },
    layout: { padding: 20 },
  };

  return (
    <div className="teste">
      <Line data={data} options={options} />
    </div>
  );
};

export default Graphic;
