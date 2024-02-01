import React from "react";
import { ChartProps } from "./types";

function Chart({ percentage, color }: ChartProps) {
  return (
    <>
      <div className="flex h-2 w-44 flex-row rounded bg-blue-100">
        <div
          className="duration-900 h-full rounded transition-all"
          style={{ width: `${percentage}%`, background: color }}
        />
      </div>
      <p className="text-lg font-semibold" style={{ color }}>
        {percentage}%
      </p>
    </>
  );
}

export default Chart;
