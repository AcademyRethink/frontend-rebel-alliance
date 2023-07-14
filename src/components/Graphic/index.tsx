import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import type { ChartData, ChartOptions } from "chart.js";
import "./styles.scss";
import { GraphicProps } from "../../types/graphicTypes";

Chart.register(...registerables);
Chart.register(ChartDataLabels);

const Graphic = ({
  chartData,
  backgroundColor,
  unit,
  minY,
  maxY,
  increment,
}: GraphicProps) => {
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
        data: chartData,
        backgroundColor: backgroundColor,
        borderColor: backgroundColor,
        pointBorderColor: "#FFFFFF",
        tension: 0.0, //curva ou reto
        pointRadius: 5, //tamanho da bolinha
      },
    ],
  };

  function formatY(value: { toString: () => string }, unit: string) {
    return value.toString() + unit;
  }

  const options: ChartOptions<"line"> = {
    maintainAspectRatio: false, // Permite ajustar o tamanho do gráfico de acordo com o contêiner
    responsive: true, // Permite que o gráfico seja responsivo

    scales: {
      x: {
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
        min: minY, // Valor mínimo da escala vertical
        max: maxY, // Valor máximo da escala vertical
        ticks: {
          stepSize: increment, // Define o incremento para 10 em 10
          callback: (value: { toString: () => string }) => formatY(value, unit),
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
