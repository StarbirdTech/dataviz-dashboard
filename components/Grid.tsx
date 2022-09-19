import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown, MdOutlineAdd, MdOutlineMinimize } from 'react-icons/md';

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
