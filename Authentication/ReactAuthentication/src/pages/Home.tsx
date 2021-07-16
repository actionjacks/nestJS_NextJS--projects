import React from "react";

const Home = (props: { name: string }) => {
  return (
    <div>
      <p>hi ! {props.name}</p>
    </div>
  );
};

export default Home;
