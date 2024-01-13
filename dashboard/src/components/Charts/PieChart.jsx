import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import "./Chart.css";

const PieChart = ({ data }) => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    if (!data || data.length === 0) {
      setChartData({ labels: [], datasets: [] });
      return;
    }

    const companyData = data.reduce((acc, mission) => {
      const { company, price, successful } = mission;

      if (!acc[company]) {
        acc[company] = { total: 0, count: 0, successCount: 0 };
      }

      acc[company].total += price;
      acc[company].count += 1;

      if (successful) {
        acc[company].successCount += 1;
      }

      return acc;
    }, {});

    const companies = Object.keys(companyData);
    const averagePrices = companies.map((company) => {
      const average = companyData[company].total / companyData[company].count;
      return { company, average };
    });

    const labels = averagePrices.map(({ company }) => company);
    const dataPoints = averagePrices.map(({ average }) => average);

    const colors = [
      "#FF6384",
      "#36A2EB",
      "#FFCE56",
      "#4BC0C0",
      "#9966FF",
      "#FF8C00",
      "#008080",
      "#FFD700",
      "#2E8B57",
      "#9370DB",
      "#DC143C",
      "#32CD32",
    ];

    setChartData({
      labels,
      datasets: [
        {
          data: dataPoints,
          backgroundColor: colors.slice(0, companies.length),
        },
      ],
    });
  }, [data]);

  return (
    <div className="pie-a pie">
      <h1>Average Price spent on missions</h1>
      <Doughnut data={chartData} />
    </div>
  );
};

export default PieChart;
