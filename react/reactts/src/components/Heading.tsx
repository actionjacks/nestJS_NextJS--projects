import React from "react";

interface Props {
  title: string
}
export default function Heading({ title }: Props) {
  return <div>lorem-ipsum{title}</div>;
}
