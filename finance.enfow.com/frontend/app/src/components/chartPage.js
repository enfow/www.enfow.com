import { useState } from "react";
import { ExampleData } from "./Data";

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData }) {
  return <Line data={chartData} />;
}

function ChartPage() {
  const [data, setData] = useState({
    labels: ExampleData.map((dataPoint) => dataPoint.date),
    datasets: [
      {
        label: "Price",
        data: ExampleData.map((dataPoint) => dataPoint.price),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <LineChart chartData={data} />
      </div>
    </div>
  );
}

export default ChartPage;
