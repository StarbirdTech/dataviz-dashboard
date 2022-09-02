import GridElementData from "./gridElements.json";

const Grid = () => (
  <div className="grid grid-cols-3 grid-rows-3 m-8 gap-8 w-full">
    <GridComponent
      content={"Test"}
      colStart={1}
      rowStart={GridElementData[0].rowStart}
      colSpan={1}
      rowSpan={1}
    ></GridComponent>
  </div>
);

type GridComponentProps = {
  content: any;
  colStart: number;
  rowStart: number;
  colSpan: number;
  rowSpan: number;
};

const GridComponent = ({
  content,
  colStart,
  rowStart,
  colSpan,
  rowSpan,
}: GridComponentProps) => (
  <div
    className={`w-full h-full bg-black rounded-lg text-white col-start-${colStart} row-start-${rowStart} col-span-${colSpan} row-span-${rowSpan}`}
  >
    {content}
  </div>
);

export default Grid;
