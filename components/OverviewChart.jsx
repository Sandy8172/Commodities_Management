import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register components globally
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const OverviewChart = ({ data }) => {
  const chartData = {
    labels: data.map((ele) => ele.month),
    datasets: [
      {
        label: "Overview",
        data: data.map((ele) => ele.value),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgb(110, 140, 251)",
        tension: 0.3, // smooth line
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly Overview" },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: true,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: true,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl p-6 col-span-2">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default OverviewChart;
