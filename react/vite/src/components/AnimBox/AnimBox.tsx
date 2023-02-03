import React, { useState } from 'react';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type AnimBoxProps = {
  children?: React.ReactNode;
  duration?: number;
};

function AnimBox({ children, duration }: AnimBoxProps) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('on');
      return;
    }
    control.start('off');
  }, [control, inView]);

  const boxVariant = {
    on: {
      opacity: 1,
      scale: 1,
      transition: { duration: duration ? duration : 0.5 },
    },
    off: {
      opacity: 0,
      scale: 0.2,
    },
  };

  return (
    <motion.div ref={ref} variants={boxVariant} initial="off" animate={control}>
      {children}
    </motion.div>
  );
}

export default AnimBox;
