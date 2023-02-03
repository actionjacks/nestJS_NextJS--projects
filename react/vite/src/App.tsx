import React, { useState } from 'react';
import AnimBox from './components/AnimBox/AnimBox';

function App() {
  return (
    <div className="bg-slate-800 text-white">
      <div className="grid min-h-screen grid-cols-1 border-y-2 border-red-100">
        <AnimBox>
          <p>1</p>
        </AnimBox>
      </div>

      <div className="grid min-h-screen grid-cols-3 border-y-2 border-red-100">
        <AnimBox>
          <p>1</p>
        </AnimBox>
        <AnimBox>
          <p>2</p>
        </AnimBox>
        <AnimBox
          visible={{
            opacity: 1,
            x: 0,
            transition: { duration: 3 },
          }}
          hidden={{
            opacity: 0,
            x: -100,
          }}
        >
          <p>3</p>
        </AnimBox>

        <AnimBox
          visible={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.5 },
          }}
          hidden={{
            opacity: 0,
            x: -100,
          }}
        >
          <p>4</p>
        </AnimBox>
        <AnimBox duration={2}>
          <p>5</p>
        </AnimBox>
        <AnimBox>
          <p>6</p>
        </AnimBox>
      </div>

      <div className="grid min-h-screen grid-cols-2 border-y-2 border-red-100">
        <AnimBox>
          <p>1</p>
        </AnimBox>
        <AnimBox>
          <p>2</p>
        </AnimBox>
      </div>
    </div>
  );
}

export default App;
