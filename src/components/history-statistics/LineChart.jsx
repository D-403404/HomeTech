import React from "react";
import Chart from "react-apexcharts";

export default function LineChart({ title, data, categories, linecolor, unit }) {
  const series = [
    {
      name: title,
      data: data,
    },
  ];
  //   console.log(data)
  const options = {
    chart: {
      height: "473px",
      width: "868px",
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    colors: [linecolor],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 1,
    },
    xaxis: {
      categories: categories,
      axisTicks: {
        show: true,
        borderType: "solid",
        color: "#3A53A9",
        width: 6,
        offsetX: 0,
        offsetY: 0,
      },
      axisBorder: {
        show: true,
        color: "#3A53A9",
        offsetX: 0,
        offsetY: 0,
      },
    },
    yaxis: {
      stepSize: `${title === 'Temperature' ? 1 : 10}`,
      decimalsInFloat: 0,
      axisTicks: {
        show: true,
        borderType: "solid",
        color: "#3A53A9",
        width: 6,
        offsetX: 0,
        offsetY: 0,
      },
      axisBorder: {
        show: true,
        color: "#3A53A9",
        offsetX: 0,
        offsetY: 0,
      },
      labels: {
        formatter: (value) => {
          return value + unit;
        },
      },
    },
  };
  return (
    <div id="chart">
      <Chart
        options={options}
        series={series}
        type="line"
        height={473}
        width={868}
        className="h-[473px] w-[868px] ml-[50px] bg-white rounded-[20px] border-[2px] border-primary shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
      />
    </div>
  );
}
