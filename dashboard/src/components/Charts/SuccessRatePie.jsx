import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import "./Chart.css";

const SuccessRatePieChart = ({ data }) => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    if (!data || data.length === 0) {
      setChartData({ labels: [], datasets: [] });
      return;
    }

    const companyData = data.reduce((acc, mission) => {
      const { company, successful } = mission;

      if (!acc[company]) {
        acc[company] = { total: 0, successCount: 0 };
      }

      acc[company].total += 1;

      if (successful) {
        acc[company].successCount += 1;
      }

      return acc;
    }, {});

    const companies = Object.keys(companyData);
    const successRates = companies.map((company) => {
      const successRate =
        (companyData[company].successCount / companyData[company].total) * 100;
      return { company, successRate };
    });

    const labels = successRates.map(({ company }) => company);
    const dataPoints = successRates.map(({ successRate }) => successRate);

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
    <div className="pie-b pie">
      <h1>Success Rate for each missions</h1>
      <Doughnut data={chartData} />
    </div>
  );
};

export default SuccessRatePieChart;
