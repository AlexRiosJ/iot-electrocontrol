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
  const groups = usageHistory.reduce((groups, record) => {
    const date = record.created_at.split("T")[0];
    if (!groups[date]) {
      groups[date] = 0;
    }
    groups[date] += Number(record.value);
    return groups;
  }, {});

  const groupArrays = Object.keys(groups)
    .map((elem) => {
      return {
        day: elem,
        value: Number(groups[elem].toFixed(2))
      };
    })
    .reverse();

  return (
    <div className="card" style={{ height: "18rem" }}>
      <div style={{ verticalAlign: "middle" }}>
        <LineChart
          width={530}
          height={260}
          data={groupArrays}
          margin={{ top: 0, right: 0, bottom: 0, left: 5 }}
        >
          <Line
            type="monotone"
            dataKey="value"
            stroke="#93c54b"
            name="Daily Usage"
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="day" />
          <YAxis unit="kWh" />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
        </LineChart>
      </div>
    </div>
  );
};

export default UsageChart;
