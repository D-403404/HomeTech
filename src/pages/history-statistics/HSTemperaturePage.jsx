import React, { useEffect } from "react";
import StatisticsPageLayout from "/src/components/layout/StatisticsPageLayout";
import temperature from "/src/assets/data/temperature2.json";
// import fs from 'fs'

export default function HSTemperaturePage() {
  console.log(temperature);

  // const dummyData = {
  //   _id: "abc",
  //   feed_id: "temp",
  //   value: "27.1",
  //   created_at: "2024-05-03T05:51:50.924+00:00",
  // };
  const dummyData = '{"_id":{"$oid":"663db5f6bdecfbc428cfc0b1"},"feed_id":"temp","value":"27.1","created_at":{"$date":{"$numberLong":"1715320310924"}}}'

  function updateData(obj) {
    const newDate = new Date(parseInt(obj.created_at.$date.$numberLong));
    const measurement = {
      time: `${newDate.getHours().toString().padStart(2, "0")}:${newDate
        .getMinutes()
        .toString()
        .padStart(2, "0")}`,
      value: obj.value,
    };

    var existedDate = false;

    for (let i = 0; i < temperature.length; i++) {
      const iDate = new Date(temperature[i].date);
      if (
        iDate.getDate() === newDate.getDate() &&
        iDate.getMonth() === newDate.getMonth() &&
        iDate.getFullYear() === newDate.getFullYear()
      ) {
        temperature[i].data.push(measurement);
        existedDate = true;
        console.log("Date exists");
      }
    }
    if (existedDate === false) console.log("Date does not exist");
    temperature.push({
      date: `${newDate.getFullYear()}-${newDate
        .getMonth()
        .toString()
        .padStart(2, "0")}-${newDate
        .getDate()
        .toString()
        .padStart(2, "0")}T00:00:00`,
      data: [measurement],
    });

    // fs.writeFile('/src/assets/data/temperature.json', JSON.stringify(temperature), (err) => {
    //   if (err)
    //     console.log(err);
    //   else {
    //     console.log("File written successfully\n");
    //     console.log("The written has the following contents:");
    //     console.log(fs.readFileSync("books.txt", "utf8"));
    //   }
    // })

    console.log(temperature);
  }

  useEffect(() => {
    console.log("updateData");
    updateData(JSON.parse(dummyData));
  }, []);

  return (
    <StatisticsPageLayout title="Temperature" data={temperature} unit="°C" />
  );
}
