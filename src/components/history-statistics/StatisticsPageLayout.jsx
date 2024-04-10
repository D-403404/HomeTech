import React, { useState } from "react";
import ReturnButton from "/src/components/history-statistics/ReturnButton";

import DateInputField from "./DateInputField";
import LineChart from "./LineChart";

export default function StatisticsPageLayout({ title, data, unit }) {
  const [displayDate, setDisplayDate] = useState(
    new Date("2024-04-03").setHours(0, 0, 0, 0)
  );
  const [displayData, setDisplayData] = useState(findDate(data, displayDate));
  const rawData = [...displayData.map((row) => row.value)];
  const time = [...displayData.map((row) => row.time)]

  const [average, setAverage] = useState(findAverage(rawData));
  const [peak, setPeak] = useState(findPeak(rawData));
  console.log(average);
  console.log(peak);
  return (
    <div className="">
      <div className="relative min-h-[100vh] min-w-[1001px] bg-background">
        <ReturnButton />
        <div className="pl-[40px] pt-[35px]">
          <div className="textformat text-[30px] mb-[40px]">{title}</div>
          <LineChart
            title={title}
            data={rawData}
            categories={time}
            linecolor={
              title === "Temperature"
                ? "#FF0000"
                : title === "Humidity"
                ? "#0000FF"
                : "#BDD71C"
            }
            unit={unit}
          />
          <div className="pl-[78px] pr-[50.5px] pt-[48px] pb-[40px] flex items-center">
            <div className="pt-[30px]">
              <DateInputField label="Date:" type="date" />
            </div>
            <div className="px-[36.5px] flex flex-col items-center textformat">
              <div className="text-[20px]">AVERAGE</div>
              <div className="h-[58px] w-[158px] rounded-[20px] border-[1px] border-primary text-[27px] text-center content-center">
                {average.toFixed(1)}
                {unit}
              </div>
            </div>
            <div className="px-[36.5px] flex flex-col items-center textformat">
              <div className="text-[20px]">PEAK</div>
              <div className="h-[58px] w-[158px] rounded-[20px] border-[1px] border-primary text-[27px] text-center content-center">
                {peak.toFixed(1)}
                {unit}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function findDate(data, displayDate) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].date === displayDate) return data[i].data;
  }
  return [];
}

function findAverage(data) {
  return data.reduce((a, b) => a + b) / data.length;
}

function findPeak(data) {
  return Math.max(...data);
}
