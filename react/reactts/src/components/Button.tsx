import React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Button: React.FC<React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement>
  & { title?: string }
> = ({ children, title, style, ...rest }) => (
  <button
    {...rest}
    style={{
      ...style,
      backgroundColor: "red"
    }}>
    {title ?? children}
  </button>
)