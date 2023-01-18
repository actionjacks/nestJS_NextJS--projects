import './circleIndicator.scss'

import { motion, useScroll, useSpring } from 'framer-motion'

type CircleIndicatorProps = {
  backGroundColor?: string
}

const CircleIndicator = ({ backGroundColor }: CircleIndicatorProps) => {
  const { scrollYProgress } = useScroll()

  const style = {
    background: backGroundColor ? backGroundColor : '#213143',
  }

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return <motion.div className="progress-bar" style={{ scaleY, ...style }} />
}

export default CircleIndicator
