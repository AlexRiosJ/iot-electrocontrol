import React, { useEffect, useContext } from "react";

import UsageContext from "../../context/usage/usageContext";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

const UsageChart = () => {
  const usageContext = useContext(UsageContext);

  const { getUsageHistory, usageHistory, loading } = usageContext;

  useEffect(() => {
    getUsageHistory();
    // eslint-disable-next-line
  }, []);

  return (
    !loading && (
      <div className="card">
        <LineChart
          width={530}
          height={300}
          data={usageHistory.map((element) => {
            return {
              ...element,
              created_at: new Date(element.created_at).toLocaleDateString()
            };
          })}
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
    )
  );
};

export default UsageChart;
