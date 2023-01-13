import './box_wrapper.scss'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

type BoxWrapperProps = {
  number: number
}

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
}

const BoxWrapper = ({ number }: BoxWrapperProps) => {
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
        {number}
      </motion.div>
    </div>
  )
}

export default BoxWrapper
