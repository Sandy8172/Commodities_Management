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
import { useThemeStore } from "@/store/themeStore";

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
  const isDark = useThemeStore((state) => state.theme === "dark");
  console.log(isDark);

  const chartData = {
    labels: data.map((ele) => ele.month),
    datasets: [
      {
        label: "Overview",
        data: data.map((ele) => ele.value),
        borderColor: isDark ? "rgb(222, 128, 43)" : "rgba(75,192,192,1)",
        backgroundColor: isDark ? "rgb(222, 128, 43)" : "rgb(110, 140, 251)",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: isDark ? "white" : "black", // legend text color
        },
      },
      title: {
        display: true,
        text: "Monthly Overview",
        color: isDark ? "white" : "black", // title text color
      },
    },
    scales: {
      x: {
        grid: { display: false, drawBorder: false },
        ticks: { color: isDark ? "white" : "black" },
      },
      y: {
        grid: { display: false, drawBorder: false },
        ticks: { color: isDark ? "white" : "black" },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl p-6 col-span-2 dark:bg-zinc-900">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default OverviewChart;
