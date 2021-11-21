import React from "react";

interface Props {
  name: string;
}

const HelloWord: React.FC<Props> = ({ name }) => {
  return <div>hello {name}</div>;
};

const App: React.FC = () => {
  return <div className="app">hello</div>;
};
export default App;
