'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function GlobalCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  const [isHovering, setIsHovering] = useState(false)
  const [isDarkArea, setIsDarkArea] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0
    let frame: number

    const speed = 0.18

    const move = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      currentX += (mouseX - currentX) * speed
      currentY += (mouseY - currentY) * speed

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      frame = requestAnimationFrame(animate)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Detect dark section
      if (target.closest('.dark-cursor-area')) {
        setIsDarkArea(true)
      } else {
        setIsDarkArea(false)
      }

      // Detect hover on interactive elements
      if (target.closest('a, button')) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (target.closest('a, button')) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)

    animate()

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <motion.div
      ref={cursorRef}
      animate={{
        width: isHovering ? 48 : 12,
        height: isHovering ? 48 : 12,
        backgroundColor: isDarkArea
          ? 'rgba(255,255,255,1)'
          : isHovering
          ? 'rgba(0,0,0,0.08)'
          : 'rgba(0,0,0,1)',
        border: isDarkArea
          ? '0px solid transparent'
          : isHovering
          ? '1.5px solid rgba(0,0,0,0.6)'
          : '0px solid transparent',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full"
    />
  )
}