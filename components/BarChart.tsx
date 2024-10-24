"use client";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  // Legend,
);
import data from "@/lib/data.json";
import { Bar } from "react-chartjs-2";

export default function BarChart() {
  // Prepare data for the chart
  const days = data.map((item) => item.day);
  const amounts = data.map((item) => item.amount);
  const maxAmountIndex = amounts.indexOf(Math.max(...amounts)); // get the highest amount

  const chartData = {
    labels: days,
    datasets: [
      {
        label: "Expenses",
        data: amounts,
        backgroundColor: amounts.map((amount, index) =>
          index === maxAmountIndex ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)",
        ),
        borderColor: "transparent",
        borderWidth: 1,
        borderRadius: 6,
        padding: 0,
        autoPadding: false,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Disable aspect ratio
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Remove y-axis grid lines
        },
        ticks: {
          display: false, // Remove tick marks and numbers
        },
        border: {
          display: false, // Remove any border on the y-axis
        },
      },
      x: {
        grid: {
          display: false, // Remove grid lines
          drawBorder: false, // Ensure no bottom border
        },
        ticks: {
          display: true, // Keep x-axis labels visible
          color: "hsl(28, 10%, 53%)", // Set the text color for the x-axis labels
        },
        border: {
          display: false, // Remove any border on the y-axis
        },
      },
    },
  };
  return (
    <Bar
      data={chartData}
      options={options}
      style={{ height: "100%", width: "100%" }} // Force full size
    />
  );
}
