'use client'

import { useRef, useEffect, useState } from 'react'
import CustomCursor from './CustomCursor'
import LiveClock from './LiveClock'
import LiveDate from './LiveDate'
import GreetingRotator from './GreetingRotator'

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowCursor(entry.isIntersecting)
      },
      { threshold: 0.6 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="hero-section relative min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Custom Cursor ONLY when hero visible */}
      {showCursor && <CustomCursor />}
      

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 items-center gap-10 text-center md:text-left">
        <div className="flex justify-center md:justify-start">
          <LiveClock />
        </div>

        <div className="flex justify-center">
          <GreetingRotator />
        </div>

        <div className="flex justify-center md:justify-end">
          <LiveDate />
        </div>
      </div>

      <div className="absolute bottom-8 text-xs sm:text-sm tracking-widest opacity-60">
        ( SCROLL )
      </div>
    </section>
  )
}