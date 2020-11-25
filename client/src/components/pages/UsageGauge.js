import React from "react";

import GaugeChart from "react-gauge-chart";

const UsageGauge = () => {
  return (
    <div className="card">
      <h3>General usage</h3>
      <GaugeChart
        id="gauge-chart3"
        nrOfLevels={5}
        textColor="#000"
        colors={["#93c54b", "#d9534f"]}
        arcWidth={0.2}
        arcPadding={0.1}
        percent={0.25}
      />
      <div className="row">
        <div className="col">
          <h4 className="float-left">0kWh</h4>
        </div>
        <div className="col">
          <h4 className="float-right">500kWh</h4>
        </div>
      </div>
    </div>
  );
};

export default UsageGauge;
