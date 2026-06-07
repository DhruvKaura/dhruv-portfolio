'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const projects = [
  { id: 0, image: '/library/edxcellencebanner.png' },
  { id: 1, image: '/library/therevuecompanybanner.png' },
  { id: 2, image: '/library/troxfitnessbanner.png' },
]

const hoveredStates = [
  { x: -420, y: 60, rotate: -14, zIndex: 1 },
  { x: 0, y: 0, rotate: 0, zIndex: 3 },
  { x: 420, y: 60, rotate: 14, zIndex: 1 },
]

const defaultStates = [
  { x: -18, y: 30, rotate: -4, zIndex: 1 },
  { x: 0, y: 0, rotate: 0, zIndex: 3 },
  { x: 18, y: 30, rotate: 4, zIndex: 1 },
]

export default function CreativeLibrarySection() {
  const [hovered, setHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section
      className="
        relative bg-white text-black rounded-b-[40px]
        pt-20 sm:pt-24 md:pt-28
        pb-12
        px-6
      "
    >
      <div
        className="
          relative w-full rounded-[32px] bg-[#141414] text-white
          flex flex-col items-center overflow-hidden dark-cursor-area
          min-h-[60vh] lg:min-h-[90vh]
        "
      >
        {/* Heading + Button */}
        <div className="flex flex-col items-center pt-20 sm:pt-24 lg:pt-24 z-10 relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-8 text-center tracking-tight">
            Browse my creative library
          </h2>

          <a
            href="/work"
            className="flex items-center gap-3 border border-white/25 rounded-full px-6 py-3 text-white text-sm sm:text-base font-normal hover:bg-white hover:text-black transition-all duration-300"
          >
            View archives <span>→</span>
          </a>
        </div>

        {/* Gallery - Desktop Only */}
        {!isMobile && (
          <div
            className="relative w-full flex-1 flex items-end justify-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {projects.map((project, index) => {
              const pos = hovered
                ? hoveredStates[index]
                : defaultStates[index]

              return (
                <motion.div
                  key={project.id}
                  animate={{
                    x: pos.x,
                    y: pos.y,
                    rotate: pos.rotate,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 180,
                    damping: 26,
                    delay: index * 0.03,
                  }}
                  className="absolute bottom-0 rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    width: '480px',
                    height: '320px',
                    zIndex: pos.zIndex,
                  }}
                >
                  <Image
                    src={project.image}
                    alt={`Project ${project.id + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}