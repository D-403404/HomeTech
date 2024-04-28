import React, { useEffect, useState } from "react";
import history from "/src/assets/data/history.jsx";
import Table from "/src/components/history-statistics/Table";
import ReturnButton from "/src/components/general/ReturnButton";
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
        <ReturnButton link={"/home/history-statistics"} />
        <div className="pl-[40px] pt-[35px]">
          <div className="textformat text-[30px] mb-[40px]">History</div>
          <Table headers={headers} data={data} />
          <div className="flex items-center pt-[40px] pb-[20px]">
            <div className="text-[#627DD9] font-main text-[30px]">Filter</div>
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

  const [startDate, setStartDate] = useState(new Date("2000-01-01T00:00:00"));
  const [endDate, setEndDate] = useState(new Date("2100-12-31T00:00:00"));
  const [startTime, setStartTime] = useState("00:00:00");
  const [endTime, setEndTime] = useState("23:59:59");

  // const [startDay, setStartDay] = useState(1);
  // const [startMonth, setStartMonth] = useState(1);
  // const [startYear, setStartYear] = useState(2000);
  // const [endDay, setEndDay] = useState(1);
  // const [endMonth, setEndMonth] = useState(1);
  // const [endYear, setEndYear] = useState(2000);

  // const [startHour, setStartHour] = useState(0);
  // const [startMinute, setStartMinute] = useState(0);
  // const [startSecond, setStartSecond] = useState(0);
  // const [endHour, setEndHour] = useState(0);
  // const [endMinute, setEndMinute] = useState(0);
  // const [endSecond, setEndSecond] = useState(0);

  console.log(data);
  console.log("startDate: " + startDate);
  console.log("endDate: " + endDate);

  useEffect(() => {
    setData(
      data.filter((row) => {
        // console.log("timestamp: " + row.timestamp);
        // console.log("startDate: " + startDate);
        // console.log("endDate: " + endDate);
        const startTimestamp = new Date(
          `${startDate.getFullYear()}-${(startDate.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${startDate
            .getDate()
            .toString()
            .padStart(2, "0")}T${startTime}`
        );
        const endTimestamp = new Date(
          `${endDate.getFullYear()}-${(endDate.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${endDate
            .getDate()
            .toString()
            .padStart(2, "0")}T${endTime}`
        );
        // console.log("startTimestamp: " + startTimestamp);
        // console.log("endTimestamp: " + endTimestamp);
        return (
          (device === "All" ? true : row.device === device) &&
          (type === "All" ? true : row.type === type) &&
          row.timestamp >= startTimestamp &&
          row.timestamp <= endTimestamp
        );
      })
    );
  }, [device, type, startDate, endDate, startTime, endTime]);

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
        <DateInputField
          label="Start date:"
          type="date"
          default_1="01"
          default_2="01"
          default_3="2000"
          value={startDate}
          setValue={setStartDate}
        />
        <DateInputField
          label="End date:"
          type="date"
          default_1="31"
          default_2="12"
          default_3="2100"
          value={endDate}
          setValue={setEndDate}
        />
      </div>
      <div className="flex items-center py-[8px]">
        <DateInputField
          label="Start time:"
          type="time"
          default_1="00"
          default_2="00"
          default_3="00"
          value={startTime}
          setValue={setStartTime}
        />
        <DateInputField
          label="End time:"
          type="time"
          default_1="23"
          default_2="59"
          default_3="59"
          value={endTime}
          setValue={setEndTime}
        />
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
