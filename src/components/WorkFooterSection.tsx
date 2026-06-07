'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function WorkFooterSection() {
  const [hovered, setHovered] = useState<'work' | 'thoughts' | null>(null)

  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        {/* Top Divider */}
        <div className="h-px bg-white/10 mb-2" />

        {/* WORK */}
        <Link
          href="/work#projects"
          onMouseEnter={() => setHovered('work')}
          onMouseLeave={() => setHovered(null)}
          className={`
            flex
            items-center
            justify-between
            py-10
            px-4
            rounded-full
            transition-all
            duration-500
            ${
              hovered === 'work'
                ? 'bg-white text-black'
                : 'bg-transparent text-white/50'
            }
          `}
        >
          <h2
            className="
              text-[42px]
              lg:text-[64px]
              font-light
              leading-none
            "
          >
            Work
          </h2>

          <p
            className="
              hidden
              lg:block
              text-[18px]
            "
          >
            Curated software projects and engineering work
          </p>

          <div
            className={`
              w-14
              h-14
              rounded-full
              flex
              items-center
              justify-center
              transition-all
              duration-500
              ${
                hovered === 'work'
                  ? 'bg-black text-white'
                  : 'bg-white/10 text-white'
              }
            `}
          >
            <ArrowRight size={20} />
          </div>
        </Link>

        {/* Divider */}
        <div className="h-px bg-white/10" />

        {/* THOUGHTS */}
        <div
          onMouseEnter={() => setHovered('thoughts')}
          onMouseLeave={() => setHovered(null)}
          className={`
            flex
            items-center
            justify-between
            py-10
            px-4
            rounded-full
            transition-all
            duration-500
            cursor-none
            ${
              hovered === 'thoughts'
                ? 'bg-white text-black'
                : 'bg-transparent text-white/50'
            }
          `}
        >
          <h2
            className="
              text-[42px]
              lg:text-[64px]
              font-light
              leading-none
            "
          >
            Thoughts
          </h2>

          <p
            className="
              hidden
              lg:block
              text-[18px]
            "
          >
            Articles on backend engineering, AI and startups
          </p>

          <div
            className={`
              w-14
              h-14
              rounded-full
              flex
              items-center
              justify-center
              transition-all
              duration-500
              ${
                hovered === 'thoughts'
                  ? 'bg-black text-white'
                  : 'bg-white/10 text-white'
              }
            `}
          >
            <ArrowRight size={20} />
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="h-px bg-white/10 mt-2" />
      </div>
    </section>
  )
}
