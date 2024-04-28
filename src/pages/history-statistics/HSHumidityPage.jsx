import React from "react";
import StatisticsPageLayout from "/src/components/layout/StatisticsPageLayout";
import humidity from "/src/assets/data/humidity";

export default function HSTemperaturePage() {
  return <StatisticsPageLayout title="Humidity" data={humidity} unit="%" />;
}
