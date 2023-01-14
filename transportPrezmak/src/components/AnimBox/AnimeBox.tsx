import './anime_box.scss'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

type AnimBoxProps = {
  children?: React.ReactNode
}

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
}

const AnimBox = ({ children }: AnimBoxProps) => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
      return
    }
    control.start('hidden')
  }, [control, inView])

  return (
    <div className="Box-wrapper">
      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default AnimBox
