import GridElementData from "./gridElements.json";

const Grid = () => (
  <div className="grid grid-cols-3 grid-rows-3 m-8 gap-8 w-full">
    {GridElementData.map((data, key) => {
      return (
        <GridComponent
          content={"Test"}
          colStart={data.colStart}
          rowStart={data.rowStart}
          colSpan={data.colSpan}
          rowSpan={data.rowSpan}
          key={key}
        ></GridComponent>
      );
    })}
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
