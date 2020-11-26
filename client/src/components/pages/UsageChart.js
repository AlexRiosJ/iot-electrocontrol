import React from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

const UsageChart = ({ usageHistory }) => {
  return (
    <div className="card" style={{ height: "18rem" }}>
      <div style={{ verticalAlign: "middle" }}>
        <LineChart
          width={530}
          height={260}
          data={usageHistory
            .map((element) => {
              return {
                ...element,
                created_at: new Date(element.created_at).toLocaleDateString()
              };
            })
            .reverse()}
          margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
        >
          <Line
            type="monotone"
            dataKey="value"
            stroke="#93c54b"
            name="Daily Usage"
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="created_at" />
          <YAxis unit="kWh" />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
        </LineChart>
      </div>
    </div>
  );
};

export default UsageChart;
