'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0
    let animationFrameId: number

    const speed = 0.12

    const move = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      currentX += (mouseX - currentX) * speed
      currentY += (mouseY - currentY) * speed

      cursor.style.transform = `translate3d(${currentX - 75}px, ${
        currentY - 75
      }px, 0)`

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', move)
    animationFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: 'linear',
        }}
        className="w-[150px] h-[150px]"
      >
        <svg viewBox="0 0 150 150" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="
                M 75,75
                m -58,0
                a 58,58 0 1,1 116,0
                a 58,58 0 1,1 -116,0
              "
            />
          </defs>

          {/* Subtle dark circle background like in the image */}
          <circle
            cx="75"
            cy="75"
            r="62"
            fill="rgba(0,0,0,0.45)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />

          <text
            fill="white"
            fontSize="11"
            letterSpacing="3.2"
            fontWeight="500"
            fontFamily="Arial, sans-serif"
          >
            <textPath href="#circlePath">
              · SCROLL TO SEE MORE · SCROLL TO SEE MORE
            </textPath>
          </text>

          {/* White dot center */}
          <circle cx="75" cy="75" r="10" fill="white" />
        </svg>
      </motion.div>
    </div>
  )
}