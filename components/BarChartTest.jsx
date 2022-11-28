import React from "react";
import { VictoryChart, VictoryBar, VictoryAxis } from "victory";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, data };
};

const dataV = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

const BarChartTest = () => {
  const { data } = useFetch(
    "https://opensheet.elk.sh/1Rhql9HewbN0fRn8KmG9Tegd3bvU-95EpMGABjkFsmiE/published"
  );
  console.log(data);
  return (
    <VictoryChart domainPadding={20}>
      <VictoryAxis
        tickValues={[1, 2, 3, 4]}
        tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
      />
      <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />
      <VictoryBar data={dataV} x="quarter" y="earnings" />
    </VictoryChart>
  );
};

export default BarChartTest;
