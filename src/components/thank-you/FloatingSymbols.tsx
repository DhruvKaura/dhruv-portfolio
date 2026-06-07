'use client'

import { motion } from 'framer-motion'

const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  size: Math.random() * 8 + 6,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: Math.random() * 12 + 10,
  delay: Math.random() * 5,
  opacity: Math.random() * 0.5 + 0.2,
}))

export default function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: 0,
            y: 0,
          }}
          animate={{
            y: [-25, 25, -25],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
          className="absolute"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
          }}
        >
          <div
            className="rounded-full bg-white"
            style={{
              width: particle.size,
              height: particle.size,
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}