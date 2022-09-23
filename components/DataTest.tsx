import React from "react";
import useFetch from "react-fetch-hook";

const DataTest = () => {
  const { isLoading } = useFetch("https://swapi.co/api/people/1");

  return isLoading ? <div>Loading...</div> : <div>HI</div>;
};

export default DataTest;
