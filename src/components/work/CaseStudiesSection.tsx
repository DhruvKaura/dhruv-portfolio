'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const caseStudies = [
  {
    title: 'The Revue Company',
    type: 'Business Consultancy Website',
    year: '2025',
    image: '/library/therevuecompanybanner.png',
    href: 'https://therevuecompany.com',
    tags: [
      'WordPress',
      'Elementor',
      'SEO',
      'Brand Strategy',
    ],
  },

  {
    title: 'TRO-X Fitness',
    type: 'Fitness Equipment E-Commerce',
    year: '2025',
    image: '/library/troxfitnessbanner.png',
    href: 'https://troxfitnessindia.com',
    tags: [
      'WooCommerce',
      'WordPress',
      'E-Commerce',
      'Performance',
    ],
  },

  {
    title: 'EdXcellence',
    type: 'Educational Platform',
    year: '2026',
    image: '/library/edxcellencebanner.png',
    href: 'https://edxcellence.org.in',
    tags: [
      'WordPress',
      'UI / UX',
      'Responsive',
      'Custom Features',
    ],
  },
]

export default function CaseStudiesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section
      id="case-studies"
      className="bg-black text-white py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">

        {/* HEADING */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-[18px] text-white/80 mb-4">
            Selected Client Work
          </h2>

          <p className="text-white/50 text-[16px] leading-relaxed max-w-2xl">
            A selection of websites crafted for businesses across
            consultancy, e-commerce and education, combining strategy,
            design and development into meaningful digital experiences.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            lg:gap-12
          "
        >
          {caseStudies.map((project, index) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* IMAGE CARD */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[22px]
                  lg:rounded-[28px]
                  bg-white/5
                  aspect-[4/3]
                "
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition-all
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/10
                    transition-all
                    duration-500
                    group-hover:bg-black/40
                  "
                />

                {/* TAGS */}
                <AnimatePresence>
                  {hoveredCard === index && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 20,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                        absolute
                        left-4
                        right-4
                        bottom-4
                        lg:left-8
                        lg:right-8
                        lg:bottom-8
                        flex
                        flex-wrap
                        gap-2
                        lg:gap-3
                      "
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            px-3
                            py-2
                            lg:px-4
                            rounded-full
                            border
                            border-white/30
                            bg-black/30
                            backdrop-blur-md
                            text-[12px]
                            lg:text-[13px]
                            whitespace-nowrap
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CONTENT */}
              <div className="mt-5 lg:mt-6">

                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-4
                  "
                >
                  <h3
                    className="
                      text-[22px]
                      sm:text-[24px]
                      md:text-[28px]
                      lg:text-[32px]
                      font-normal
                      leading-[1.1]
                    "
                  >
                    {project.title}
                  </h3>

                  <span
                    className="
                      shrink-0
                      text-[18px]
                      md:text-[22px]
                      lg:text-[26px]
                      text-white/70
                    "
                  >
                    {project.year}
                  </span>
                </div>

                <p
                  className="
                    mt-2
                    text-[14px]
                    lg:text-[15px]
                    text-white/40
                  "
                >
                  {project.type}
                </p>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}