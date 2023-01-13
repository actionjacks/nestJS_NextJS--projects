import './circleIndicator.scss'

import { motion, useScroll, useSpring } from 'framer-motion'

const CircleIndicator = () => {
  const { scrollXProgress } = useScroll()

  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return <motion.div className="progress-bar" style={{ scaleX }} />
}

export default CircleIndicator
