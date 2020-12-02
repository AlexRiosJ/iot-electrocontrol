import React, { useMemo } from "react";

import GaugeChart from "react-gauge-chart";

const UsageGauge = ({ min, max, usageHistory }) => {
  const accUsage = useMemo(
    () =>
      usageHistory
        .map((elem) => ({ ...elem, value: elem.value / 24 }))
        .reduce((acc, curr) => Number(curr.value) + acc, 0),
    [usageHistory]
  );

  return (
    <div className="card" style={{ height: "18rem" }}>
      <h3>General usage</h3>
      <GaugeChart
        id="gauge-chart3"
        nrOfLevels={4}
        textColor="#000cc"
        colors={["#93c54b", "#d9534f"]}
        arcWidth={0.2}
        arcPadding={0.1}
        needleColor="#8e8c84cc"
        needleBaseColor="#3e3f3acc"
        percent={accUsage / max}
      />
      <div className="row">
        <div className="col">
          <h4 className="float-left">{min}kWh</h4>
        </div>
        <div className="col">
          <h4 className="float-left">{accUsage.toFixed(2)}kWh</h4>
        </div>
        <div className="col">
          <h4 className="float-right">{max}kWh</h4>
        </div>
      </div>
    </div>
  );
};

export default UsageGauge;
