import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Grid = () => (
  //! Update tailwind safelist if change cols or rows
  <div className="grid grid-cols-3 grid-rows-3 m-8 gap-8 w-full">
    <GridComponent></GridComponent>
  </div>
);

const GridComponent = () => {
  // TODO make custom hook
  const [col, setCol] = useState(1);
  const [row, setRow] = useState(1);
  //const [width, setWidth] = useState(1)
  //const [height, setHeight] = useState(1)

  return (
    <div
      //! Consider using vanilla css to avoid tailwind safelist
      className={`relative group w-full h-full bg-black rounded-lg text-white col-start-${col} row-start-${row} col-span-1 row-span-1`}
    >
      {col > 1 && <button
        className="button button-left"
        onClick={() => setCol(clamp(col - 1, 1, 3))}>
        <MdOutlineKeyboardArrowLeft className="w-8 h-8"></MdOutlineKeyboardArrowLeft>
      </button>}
      {col < 3 && <button
        className="button button-right"
        onClick={() => setCol(clamp(col + 1, 1, 3))}
      >
        <MdOutlineKeyboardArrowRight className="w-8 h-8"></MdOutlineKeyboardArrowRight>
      </button>}
      {row > 1 && <button
        className="button button-up"
        onClick={() => setRow(clamp(row - 1, 1, 3))}
      >
        <MdOutlineKeyboardArrowUp className="w-8 h-8"></MdOutlineKeyboardArrowUp>
      </button>}
      {row < 3 && <button
        className="button button-down"
        onClick={() => setRow(clamp(row + 1, 1, 3))}
      >
        <MdOutlineKeyboardArrowDown className="w-8 h-8"></MdOutlineKeyboardArrowDown>
      </button>}
    </div>
  );
};

const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);

export default Grid;
