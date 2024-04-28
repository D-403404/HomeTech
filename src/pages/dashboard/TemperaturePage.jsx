import React from "react";
import DashboardPageLayout from "/src/components/layout/DashboardPageLayout";
import temperature from "/src/assets/data/temperature";

export default function TemperaturePage() {
  const range = [0, 50];
  const safeRange = [20, 37];
  const warningMsgLst = [
    "The temperature is low! Please keep warm!",
    "The temperature is high! Beware of fire!",
  ];
  const item = temperature;
  const today = new Date();

  function containsToday() {
    var i = item.length;
    while (i--) {
      const date = item[i].date;
      if (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      ) {
        return i;
      }
    }
    return null;
  }

  return (
    <DashboardPageLayout
      title="Temperature"
      value={
        containsToday() !== null
          ? item[containsToday()].data.length > 0
            ? item[containsToday()].data[
                item[containsToday()].data.length - 1
              ].value
            : null
          : null
      }
      unit="°C"
      range={range}
      safeRange={safeRange}
      warningMsgLst={warningMsgLst}
    />
  );
}
