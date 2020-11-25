import React from "react";

import GaugeChart from "react-gauge-chart";

const UsageGauge = () => {
  return (
    <div className="card">
      <GaugeChart
        id="gauge-chart3"
        nrOfLevels={5}
        colors={["#93c54b", "#d9534f"]}
        arcWidth={0.2}
        arcPadding={0.1}
        percent={0.0}
      />
    </div>
  );
};

export default UsageGauge;
