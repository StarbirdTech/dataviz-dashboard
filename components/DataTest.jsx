import React from "react";
import useFetch from "react-fetch-hook";

const DataTest = () => {
  const { data } = useFetch("https://swapi.co/api/people/1");
  return <button onClick={console.log(data)}>Button</button>;
};

export default DataTest;
