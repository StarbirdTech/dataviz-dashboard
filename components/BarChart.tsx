import React from "react";
import { VictoryChart, VictoryBar } from "victory";
import publishedData from "../public/published.json";

const BarChart = () => {
  return (
    <VictoryChart domainPadding={20}>
      <VictoryBar
        colorScale={"warm"}
        data={publishedData}
        x={"What studio are you in?"}
        y={"Has working with your coaches been easy?"}
      />
    </VictoryChart>
  );
};

export default BarChart;
