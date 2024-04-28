import React from "react";
import StatisticsPageLayout from "/src/components/layout/StatisticsPageLayout";
import light from "/src/assets/data/light";

export default function HSTemperaturePage() {
  return (
    <StatisticsPageLayout title="Light intensity" data={light} unit=" lx" />
  );
}
