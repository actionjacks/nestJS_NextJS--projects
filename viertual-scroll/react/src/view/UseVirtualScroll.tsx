import VirtualScroll from "../components/VirtualScroll";
import "./use-vierual-scroll.css";

export type Settings = {
  minIndex: number;
  maxIndex: number;
  startIndex: number;
  itemHeight: number;
  amount: number;
  tolerance: number;
};

function UseVirtualScroll() {
  const SETTINGS: Settings = {
    minIndex: 1,
    maxIndex: 999,
    startIndex: 1,
    itemHeight: 20,
    amount: 30,
    tolerance: 2,
  };

  const rowTemplate = (item: any) => (
    <div className="item" key={item.index}>
      <div>{item.text}</div>
    </div>
  );

  const getData = (
    offset: number,
    limit: number
  ): { index: number; text: string }[] => {
    const data = [];
    const start = Math.max(SETTINGS.minIndex, offset);
    const end = Math.min(offset + limit - 1, SETTINGS.maxIndex);
    if (start <= end) {
      for (let i = start; i <= end; i++) {
        data.push({ index: i, text: `item ${i}` });
      }
    }
    return data;
  };

  return (
    <div className="wrapper">
      <VirtualScroll settings={SETTINGS} get={getData} row={rowTemplate} />
    </div>
  );
}

export default UseVirtualScroll;
