import React, { useEffect, useState } from "react";
import history from "/src/assets/data/history.jsx";
import Table from "/src/components/history-statistics/Table";
import ReturnButton from "/src/components/history-statistics/ReturnButton";
import DateInputField from "/src/components/history-statistics/DateInputField";

export default function HSHistoryPage() {
  const [data, setData] = useState(history);
  // displayData.filter((row) => {return row.type === 'Humidity'});
  const headers = [
    ["DEVICE", 260.59],
    ["TIMESTAMP", 236.83],
    ["MEASUREMENT TYPE", 263.33],
    ["VALUE", 98.27],
  ];
  return (
    <div className="">
      <div className="relative min-h-[100vh] min-w-[1001px] bg-background">
        <ReturnButton />
        <div className="pl-[40px] pt-[35px]">
          <div className="textformat text-[30px] mb-[40px]">History</div>
          <Table headers={headers} data={data} />
          <div className="flex items-center pt-[40px] pb-[20px]">
            <div className="text-[#627DD9] font-sans text-[30px]">Filter</div>
            <div className="h-[207.5px] w-0 mx-[17px] border-l-[1px] border-bordercolor"></div>
            <Filter data={history} setData={setData} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Filter({ data, setData }) {
  const deviceOptions = ["All", ...new Set(data.map((row) => row.device))];
  const typeOptions = ["All", ...new Set(data.map((row) => row.type))];

  const [device, setDevice] = useState("All");
  const [type, setType] = useState("All");

  const [startDay, setStartDay] = useState(1);
  const [startMonth, setStartMonth] = useState(1);
  const [startYear, setStartYear] = useState(2000);
  const [endDay, setEndDay] = useState(1);
  const [endMonth, setEndMonth] = useState(1);
  const [endYear, setEndYear] = useState(2000);

  const [startHour, setStartHour] = useState(0);
  const [startMinute, setStartMinute] = useState(0);
  const [startSecond, setStartSecond] = useState(0);
  const [endHour, setEndHour] = useState(0);
  const [endMinute, setEndMinute] = useState(0);
  const [endSecond, setEndSecond] = useState(0);

  useEffect(() => {
    setData(
      data.filter((row) => {
        return (
          (device === "All" ? true : row.device === device) &&
          (type === "All" ? true : row.type === type)
        );
      })
    );
    console.log(device);
    console.log(type);
    console.log(deviceOptions);
    console.log(typeOptions);
  }, [device, type]);

  return (
    <div className="">
      <div className="flex items-center py-[8px]">
        <div className="pr-[6px] textformat text-[20px]">Device:</div>
        <select
          className="h-[40px] w-[211px] selectfield"
          onChange={(event) => setDevice(deviceOptions[event.target.value])}
        >
          {deviceOptions.map((val, valIndex) => (
            <option className="text-[20px]" key={valIndex} value={valIndex}>
              {val}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center py-[8px]">
        <DateInputField label="Start date:" type="date" />
        <DateInputField label="End date:" type="date" />
      </div>
      <div className="flex items-center py-[8px]">
        <DateInputField label="Start time:" type="time" />
        <DateInputField label="End time:" type="time" />
      </div>
      <div className="flex items-center py-[8px]">
        <div className="pr-[6px] textformat text-[20px]">Measurement type:</div>
        <select
          className="h-[40px] w-[211px] selectfield"
          onChange={(event) => setType(typeOptions[event.target.value])}
        >
          {typeOptions.map((val, valIndex) => (
            <option className="text-[20px]" key={valIndex} value={valIndex}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
