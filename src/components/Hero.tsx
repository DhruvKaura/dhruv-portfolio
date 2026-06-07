'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../animations/fadeUp'

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center">
      <motion.h1
        variants={fadeUp}
        initial="initial"
        animate="animate"
        className="text-6xl font-bold"
      >
        Dhruv Kaura  
      </motion.h1>
    </section>
  )
}