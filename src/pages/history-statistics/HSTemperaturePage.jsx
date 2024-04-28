import React from "react";
import StatisticsPageLayout from "/src/components/layout/StatisticsPageLayout";
import temperature from "/src/assets/data/temperature";

export default function HSTemperaturePage() {
  return (
    <StatisticsPageLayout title="Temperature" data={temperature} unit="°C" />
  );
}
