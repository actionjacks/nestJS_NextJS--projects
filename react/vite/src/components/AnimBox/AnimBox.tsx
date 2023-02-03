import React, { useState } from 'react';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type Anim = {
  opacity?: number;
  x?: number;
  y?: number;
  scale?: number;
  transform?: string;
  transition?: { delay?: number; duration?: number };
};

type AnimBoxProps = {
  visible?: Anim;
  hidden?: Anim;
  children?: React.ReactNode;
  duration?: number;
};

function AnimBox({ children, visible, hidden, duration }: AnimBoxProps) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
      return;
    }
    control.start('hidden');
  }, [control, inView]);

  const boxVariant = {
    visible: visible
      ? visible
      : {
          opacity: 1,
          scale: 1,
          transition: { duration: duration ? duration : 0.5 },
        },
    hidden: hidden
      ? hidden
      : {
          opacity: 0,
          scale: 0.2,
          transition: { duration: duration ? duration : 1.5 },
        },
  };

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
}

export default AnimBox;
