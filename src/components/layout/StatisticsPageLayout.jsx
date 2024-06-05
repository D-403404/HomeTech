import React, { useEffect, useState } from "react";
import ReturnButton from "/src/components/general/ReturnButton";
import DateInputField from "/src/components/history-statistics/DateInputField";
import LineChart from "/src/components/history-statistics/LineChart";

export default function StatisticsPageLayout({ title, data, unit }) {
  const defaultDate = new Date("2024-05-10T00:00:00");
  // console.log(defaultDate);
  // console.log(defaultDate.getDate().toString().padStart(2, "0"));
  // console.log((defaultDate.getMonth() + 1).toString().padStart(2, "0"));
  // console.log(defaultDate.getFullYear().toString());

  const [displayDate, setDisplayDate] = useState(defaultDate);
  const [displayData, setDisplayData] = useState(findDate(data, displayDate));
  const rawData = ((displayData == []) ? [] : [...displayData.map((row) => row.value)]);
  const time = ((displayData == []) ? [] : [...displayData.map((row) => row.time)]);

  console.log(displayData);
  console.log(rawData);
  // const [average, setAverage] = useState(findAverage(rawData));
  // const [peak, setPeak] = useState(findPeak(rawData));
  const average = findAverage(rawData);
  const peak = findPeak(rawData);
  console.log(average);
  console.log(peak);

  useEffect(() => {
    setDisplayData(findDate(data, displayDate));
  }, [displayDate]);

  // useEffect(() => {
  //   setAverage(findAverage(rawData));
  //   setPeak(findPeak(rawData));
  // }, [rawData]);

  return (
    <div className="relative min-h-[100vh] min-w-[1001px] bg-background">
      <ReturnButton link={"/home/history-statistics"} />
      <div className="pl-[25px] pt-[35px]">
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
            <DateInputField
              label="Date:"
              type="date"
              default_1={defaultDate.getDate().toString().padStart(2, "0")}
              default_2={(defaultDate.getMonth() + 1).toString().padStart(2, "0")}
              default_3={defaultDate.getFullYear().toString()}
              setValue={setDisplayDate}
            />
          </div>
          <div className="px-[36.5px] flex flex-col items-center textformat">
            <div className="text-[20px]">AVERAGE</div>
            <div className="h-[58px] w-[158px] rounded-[20px] border-[1px] border-primary text-[27px] font-[Anaheim] text-center content-center">
              {average.toFixed(1)}
              {unit}
            </div>
          </div>
          <div className="px-[36.5px] flex flex-col items-center textformat">
            <div className="text-[20px]">PEAK</div>
            <div className="h-[58px] w-[158px] rounded-[20px] border-[1px] border-primary text-[27px] font-[Anaheim] text-center content-center">
              {peak.toFixed(1)}
              {unit}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function findDate(data, displayDate) {
  for (let i = 0; i < data.length; i++) {
    const iDate = new Date(data[i].date)
    if (
      iDate.getDate() === displayDate.getDate() &&
      iDate.getMonth() === displayDate.getMonth() &&
      iDate.getYear() === displayDate.getYear()
    ) {
      console.log('Match: ' + data[i])
      return data[i].data;
    }
  }
  return [];
}

function findAverage(data) {
  if (data.length === 0) return NaN;
  console.log(data)
  return data.reduce((a, b) => a + b) / data.length;
}

function findPeak(data) {
  if (data.length === 0) return NaN;
  return Math.max(...data);
}
