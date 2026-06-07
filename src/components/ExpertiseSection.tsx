'use client'

import { useState } from 'react'
import clsx from 'clsx'

const capabilities = [
  'Python Development',
  'Full-Stack Software Development',
  'Web Design',
  'Web Development',
  'Scalable Web Architecture',
  'AI Agent Development',
  'Generative AI Integration',
  'Cloud Deployment & Infrastructure',
  'Database Integration & Optimization',
  'Authentication & Secure Systems',
  'Frontend Engineering',
  'E-Commerce Platform Development',
  'Performance & Technical Optimization',
]

export default function ExpertiseSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="expertise" className="bg-black px-6 sm:px-8 lg:px-20 py-24 lg:py-32 overflow-visible">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">

        {/* LEFT COLUMN */}
        <div className="lg:sticky lg:top-32 self-start">
          <h2 className="text-[18px] text-white/80 mb-8 lg:mb-0">
            Areas of Experience
          </h2>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          {capabilities.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="py-1.5 sm:py-2"
            >
              <div
                className={clsx(
                  'leading-[1.2] transition-all duration-300 ease-out inline-block',
                  'text-[28px] sm:text-[32px] lg:text-[36px]',
                  activeIndex === null
                    ? 'font-light text-white/45'
                    : activeIndex === index
                    ? 'font-medium text-white lg:-translate-x-3'
                    : 'font-light text-white/20'
                )}
              >
                {item}
              </div>
            </div>
          ))}

          {/* EXPLORE MY WORK */}
          <div className="pt-16 lg:pt-24">
            <a
              href="/work"
              className="group inline-flex items-center gap-3 sm:gap-4"
            >
              {/* DOT / ARROW */}
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">

                {/* DEFAULT DOT */}
                <span
                  className="
                    absolute
                    text-white/60
                    text-[12px] sm:text-[14px]
                    transition-all
                    duration-500
                    ease-out
                    group-hover:opacity-0
                    group-hover:scale-0
                  "
                >
                  ○
                </span>

                {/* HOVER ARROW */}
                <div
                  className="
                    absolute
                    w-8 h-8 sm:w-10 sm:h-10
                    rounded-full
                    bg-white
                    text-black
                    flex items-center justify-center
                    text-sm sm:text-base
                    opacity-0
                    scale-75
                    transition-all
                    duration-500
                    ease-out
                    group-hover:opacity-100
                    group-hover:scale-100
                  "
                >
                  →
                </div>

              </div>

              {/* TEXT */}
              <div className="relative pb-2">
                <span
                  className="
                    text-[16px] sm:text-[18px]
                    font-light
                    text-white/50
                    transition-all
                    duration-500
                    group-hover:text-white
                  "
                >
                  Explore my work
                </span>

                {/* UNDERLINE */}
                <div
                  className="
                    absolute
                    left-0
                    bottom-0
                    h-[1px]
                    w-full
                    bg-white/40
                    transition-all
                    duration-500
                    ease-out
                    group-hover:translate-x-5
                    group-hover:bg-white
                  "
                />
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}