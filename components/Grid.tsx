import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown, MdOutlineAdd, MdOutlineMinimize } from 'react-icons/md';

import BarChart from "../components/BarChart";

const graphData = [

  { year: 1980, efficiency: 24.3, sales: 8949000 },

  { year: 1985, efficiency: 27.6, sales: 10979000 },

  { year: 1990, efficiency: 28, sales: 9303000 },

  { year: 1991, efficiency: 28.4, sales: 8185000 },

  { year: 1992, efficiency: 27.9, sales: 8213000 },

  { year: 1993, efficiency: 28.4, sales: 8518000 },

  { year: 1994, efficiency: 28.3, sales: 8991000 },

  { year: 1995, efficiency: 28.6, sales: 8620000 },

  { year: 1996, efficiency: 28.5, sales: 8479000 },

  { year: 1997, efficiency: 28.7, sales: 8217000 },

  { year: 1998, efficiency: 28.8, sales: 8085000 },

  { year: 1999, efficiency: 28.3, sales: 8638000 },

  { year: 2000, efficiency: 28.5, sales: 8778000 },

  { year: 2001, efficiency: 28.8, sales: 8352000 },

  { year: 2002, efficiency: 29, sales: 8042000 },

  { year: 2003, efficiency: 29.5, sales: 7556000 },

  { year: 2004, efficiency: 29.5, sales: 7483000 },

  { year: 2005, efficiency: 30.3, sales: 7660000 },

  { year: 2006, efficiency: 30.1, sales: 7762000 },

  { year: 2007, efficiency: 31.2, sales: 7562000 },

  { year: 2008, efficiency: 31.5, sales: 6769000 },

  { year: 2009, efficiency: 32.9, sales: 5402000 },

  { year: 2010, efficiency: 33.9, sales: 5636000 },

  { year: 2011, efficiency: 33.1, sales: 6093000 },

  { year: 2012, efficiency: 35.3, sales: 7245000 },

  { year: 2013, efficiency: 36.4, sales: 7586000 },

  { year: 2014, efficiency: 36.5, sales: 7708000 },

  { year: 2015, efficiency: 37.2, sales: 7517000 },

  { year: 2016, efficiency: 37.7, sales: 6873000 },

  { year: 2017, efficiency: 39.4, sales: 6081000 },

]

const Grid = () => (
  //! Update tailwind safelist if change cols or rows
  <div className="grid grid-cols-3 grid-rows-3 m-8 gap-8 w-full">
    <GridComponent />
  </div>
);

const GridComponent = () => {
  // TODO make custom hook
  const [col, setCol] = useState(1);
  const [row, setRow] = useState(1);
  const [width, setWidth] = useState(1)
  const [height, setHeight] = useState(1)

  const clamp = (num: number, max: number) =>
    Math.min(Math.max(num, 1), max);

  // transition-all duration-200 hover:!scale-125 active:!scale-110

  return (
    <div
      //! Consider using vanilla css to avoid tailwind safelist
      className={`relative group w-full h-full bg-black rounded-lg text-white col-start-${col} row-start-${row} col-span-${width} row-span-${height}`}
    >
      <BarChart data={graphData} />
      {col > 1 && <button
        className="absolute vertical-center horizontal-center"
        onClick={() => setCol(clamp(col - 1, 3 - (width - 1)))}>
        <MdOutlineKeyboardArrowLeft className="w-8 h-8" />
      </button>}
      {col < 3 - (width - 1) && <button
        className="absolute vertical-center horizontal-center"
        onClick={() => setCol(clamp(col + 1, 3 - (width - 1)))}
      >
        <MdOutlineKeyboardArrowRight className="w-8 h-8" />
      </button>}
      {row > 1 && <button
        className="absolute vertical-center horizontal-center"
        onClick={() => setRow(clamp(row - 1, 3 - (height - 1)))}
      >
        <MdOutlineKeyboardArrowUp className="w-8 h-8" />
      </button>}
      {row < 3 - (height - 1) && <button
        className="absolute vertical-center horizontal-center"
        onClick={() => setRow(clamp(row + 1, 3 - (height - 1)))}
      >
        <MdOutlineKeyboardArrowDown className="w-8 h-8" />
      </button>}

      {col > 1 && <button
        className="button left-0 vertical-center rounded-r-full"
        onClick={() => setWidth(clamp(col - 1, 3))}>
        <MdOutlineMinimize className="w-8 h-8" />
      </button>}
      {col < 3 - (width - 1) && <button
        className="button right-0 vertical-center rounded-l-full"
        onClick={() => setWidth(clamp(col + 1, 3))}
      >
        <MdOutlineMinimize className="w-8 h-8" />
      </button>}
      {row > 1 && <button
        className="button top-0 horizontal-center rounded-b-full"
        onClick={() => setHeight(clamp(row - 1, 3))}
      >
        <MdOutlineMinimize className="w-8 h-8" />
      </button>}
      {row < 3 - (height - 1) && <button
        className="button bottom-0 horizontal-center rounded-t-full"
        onClick={() => setHeight(clamp(row + 1, 3))}
      >
        <MdOutlineMinimize className="w-8 h-8" />
      </button>}

      {col > 1 && <button
        className="button -left-8 vertical-center rounded-l-full"
        onClick={() => setWidth(clamp(col - 1, 3))}>
        <MdOutlineAdd className="w-8 h-8" />
      </button>}
      {col < 3 - (width - 1) && <button
        className="button -right-8 vertical-center rounded-r-full"
        onClick={() => setWidth(clamp(col + 1, 3))}
      >
        <MdOutlineAdd className="w-8 h-8" />
      </button>}
      {row > 1 && <button
        className="button -top-8 horizontal-center rounded-t-full"
        onClick={() => setHeight(clamp(row - 1, 3))}
      >
        <MdOutlineAdd className="w-8 h-8" />
      </button>}
      {row < 3 - (height - 1) && <button
        className="button -bottom-8 horizontal-center rounded-b-full"
        onClick={() => setHeight(clamp(row + 1, 3))}
      >
        <MdOutlineAdd className="w-8 h-8" />
      </button>}
    </div>
  );
};

export default Grid;
