import React from "react";

//export default function Box({ children }: { children: React.ReactNode }) {
//const Box: React.FC<{ children: React.ReactNode }> = ({ children }) =>

const Box: React.FC<{
  children: React.ReactNode,
  items?: string[],
  onClick?: (item: string) => void
}>
  = ({ children, items, onClick }) =>
  (
    <div>
      <p>up children</p>

      {children}

      {items?.map((i, inx) => (
        <li key={inx} onClick={() => onClick?.(i)}>
          {i}
        </li>
      ))}
      <p>down children</p>
    </div>
  )

export { Box }
