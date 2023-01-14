import './draw.scss'

import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 1.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 0.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    }
  },
}

const Draw = () => {
  return (
    <div className="Draw">
      <motion.svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          stroke="#ff0055"
          variants={draw}
          custom={1}
        />

        <motion.line
          x1="220"
          y1="30"
          x2="360"
          y2="170"
          stroke="#00cc88"
          variants={draw}
          custom={2}
        />

        <motion.rect
          width="140"
          height="140"
          x="410"
          y="30"
          rx="20"
          stroke="#0099ff"
          variants={draw}
          custom={3}
        />
      </motion.svg>
    </div>
  )
}

export default Draw
