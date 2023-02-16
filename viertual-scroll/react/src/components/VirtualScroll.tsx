import React, { useState, useEffect, useRef } from "react";
import { Settings } from "../view/UseVirtualScroll";

type VirtualScrollProps = {
  settings: Settings;
  get: (
    offset: number,
    limit: number
  ) => {
    index: number;
    text: string;
  }[];
  row: any;
};

function VirtualScroll({ settings, get, row }: VirtualScrollProps) {
  const setInitialState = (settings: any): any => {
    const { itemHeight, amount, tolerance, minIndex, maxIndex, startIndex } =
      settings;
    const viewportHeight = amount * itemHeight;
    const totalHeight = (maxIndex - minIndex + 1) * itemHeight;
    const toleranceHeight = tolerance * itemHeight;
    const bufferHeight = viewportHeight + 2 * toleranceHeight;
    const bufferedItems = amount + 2 * tolerance;
    const itemsAbove = startIndex - tolerance - minIndex;
    const topPaddingHeight = itemsAbove * itemHeight;
    const bottomPaddingHeight = totalHeight - topPaddingHeight;
    const initialPosition = topPaddingHeight + toleranceHeight;

    return {
      settings,
      viewportHeight,
      totalHeight,
      toleranceHeight,
      bufferHeight,
      bufferedItems,
      topPaddingHeight,
      bottomPaddingHeight,
      initialPosition,
      data: [],
    };
  };
  const initialState = setInitialState(settings);

  const viewportElement = useRef<null | HTMLDivElement>(null);
  const [virtualSettings, setVirtualSettings] = useState<any>(initialState);

  const runScroller: any = ({
    target: { scrollTop },
  }: {
    target: { scrollTop: number };
  }) => {
    const { totalHeight, toleranceHeight, bufferedItems } = virtualSettings;
    const { itemHeight, minIndex } = virtualSettings.settings;

    const index =
      minIndex + Math.floor((scrollTop - toleranceHeight) / itemHeight);

    const data = get(index, bufferedItems);
    const topPaddingHeight = Math.max((index - minIndex) * itemHeight, 0);

    const bottomPaddingHeight = Math.max(
      totalHeight - topPaddingHeight - data.length * itemHeight,
      0
    );

    setVirtualSettings({
      ...virtualSettings,
      topPaddingHeight,
      bottomPaddingHeight,
      data,
    });
  };

  useEffect(() => {
    if (viewportElement.current) {
      viewportElement.current.scrollTop = virtualSettings.initialPosition;
    }
    if (!virtualSettings.initialPosition) {
      runScroller({ target: { scrollTop: 0 } });
    }
  }, []);

  return (
    <div
      ref={viewportElement}
      className="viewport"
      style={{ height: virtualSettings?.viewportHeight }}
      onScroll={runScroller}
    >
      <div style={{ height: virtualSettings?.topPaddingHeight }}></div>
      {virtualSettings?.data.map(row)}
      <div style={{ height: virtualSettings?.bottomPaddingHeight }}></div>
    </div>
  );
}

export default VirtualScroll;
