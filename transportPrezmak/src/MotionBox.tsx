import './motion_box.scss'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

type AnimBoxProps = {
  children?: React.ReactNode
  styles?: Record<string, string>
  motionPathLength?: number
  motionAxis?: 'x' | 'y'
}

const MotionBox = ({ motionAxis, motionPathLength, styles, children }: AnimBoxProps) => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('animate')
      return
    }
    control.start('initial')
  }, [control, inView])

  const boxVariant = {
    initial: { [`${motionAxis ?? 'x'}`]: `${motionPathLength ?? '500'}px`, opacity: 0 },
    animate: { [`${motionAxis ?? 'x'}`]: 0, opacity: 1 },
  }

  return (
    <div className="motion-wrapper" style={styles}>
      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="initial"
        animate={control}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default MotionBox
