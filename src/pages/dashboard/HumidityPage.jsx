import React from "react";
import DashboardPageLayout from "/src/components/layout/DashboardPageLayout";
import humidity from "/src/assets/data/humidity";

export default function HumidityPage() {
  const range = [20, 100];
  const safeRange = [40, 80];
  const warningMsgLst = [
    "The humidity is low! Beware of fire!",
    "The humidity is high! Beware of mold!",
  ];
  const item = humidity;
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
      title="Humidity"
      value={
        containsToday() !== null
          ? item[containsToday()].data.length > 0
            ? item[containsToday()].data[
                item[containsToday()].data.length - 1
              ].value
            : null
          : null
      }
      unit="%"
      range={range}
      safeRange={safeRange}
      warningMsgLst={warningMsgLst}
    />
  );
}
