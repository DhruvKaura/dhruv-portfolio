'use client'
import { useState } from 'react'
import clsx from 'clsx'

const capabilities = [
  'Creative Direction & Strategy',
  'Full-Stack Software Development',
  'Web Design',
  'Web Development',
  'Scalable Web Architecture',
  'Digital Product Design',
  'REST API Design & Integration',
  'Cloud Deployment & Infrastructure',
  'Database Integration & Optimization',
  'Usability Testing & Research',
  'Authentication & Secure Systems',
  'Frontend Engineering',
  'E-Commerce Platform Development',
  'Performance & Technical Optimization',
]

export default function CapabilitiesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="bg-white px-10 lg:px-20 py-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-28">

        {/* LEFT COLUMN */}
        <div className="lg:sticky lg:top-32 h-fit">
          <h2 className="text-[42px] font-normal text-black mb-6">
            Capabilities
          </h2>
          <p className="text-black text-base font-light">
            Here's what I bring to the table
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          {capabilities.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="py-2"
            >
              <div
                className={clsx(
                  'text-[36px] leading-[1.2] text-black transition-all duration-300 ease-out inline-block',
                  activeIndex === index
                    ? 'font-medium -translate-x-3'
                    : 'font-light translate-x-0'
                )}
              >
                {item}
              </div>
            </div>
          ))}

          {/* BUTTON */}
          <div className="pt-16">
            <a href="/work"/>
            <button className="flex items-center gap-5 group">
              <span className="text-black text-lg font-light">
                Learn more about me
              </span>
              <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center text-black transition-all duration-300 group-hover:bg-black group-hover:text-white">
                →
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}