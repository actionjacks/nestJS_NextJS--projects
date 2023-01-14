import './circleIndicator.scss'

import { motion, useScroll, useSpring } from 'framer-motion'

type CircleIndicatorProps = {
  backGroundColor?: string
}

const CircleIndicator = ({ backGroundColor }: CircleIndicatorProps) => {
  const { scrollXProgress } = useScroll()

  const style = {
    background: backGroundColor ? backGroundColor : 'rgb(206, 136, 135)',
  }

  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return <motion.div className="progress-bar" style={{ scaleX, ...style }} />
}

export default CircleIndicator
