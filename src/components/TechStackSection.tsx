'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const techStack = {
  Languages: ['python', 'javascript', 'typescript'],
  Frontend: ['react', 'nextjs', 'html5', 'css3', 'bootstrap', 'tailwind'],
  Backend: ['flask', 'nodejs'],
  Databases: ['mongodb', 'postgresql', 'mysql'],
  'Platforms & CMS': ['wordpress', 'shopify', 'webflow', 'framer'],
  'Cloud & DevOps': ['vercel', 'aws', 'docker', 'git', 'github'],
}

// Proper formatting for tech names
function formatTechName(name: string) {
  const formatted: Record<string, string> = {
    nextjs: 'Next.js',
    html5: 'HTML5',
    css3: 'CSS3',
    nodejs: 'Node.js',
    mongodb: 'MongoDB',
    postgresql: 'PostgreSQL',
    mysql: 'MySQL',
    aws: 'AWS',
    git: 'Git',
    github: 'GitHub',
  }

  return formatted[name] || name.charAt(0).toUpperCase() + name.slice(1)
}

export default function TechStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      categoryRefs.current.forEach((category) => {
        if (!category) return

        const logos = category.querySelectorAll('.logo-item')

        gsap.fromTo(
          logos,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: category,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play reverse play reverse',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-white px-8 lg:px-20 py-32"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-24">
          <h2 className="text-[42px] md:text-[46px] lg:text-[48px] font-medium text-black mb-4">
            Technical Stack
          </h2>
          <p className="text-black text-lg font-light">
            Technologies and tools I use to build scalable and production-ready software systems.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-20">
          {Object.entries(techStack).map(([category, items], index) => (
            <div
              key={category}
              ref={(el) => (categoryRefs.current[index] = el)}
            >
              <h3 className="text-2xl font-medium text-black mb-10">
                {category}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-12">
                {items.map((tech) => (
                  <div
                    key={tech}
                    className="logo-item flex flex-col items-center justify-center gap-3"
                  >
                    <Image
                      src={`/tech/${tech}.svg`}
                      alt={tech}
                      width={42}
                      height={42}
                      className="object-contain"
                    />

                    <span className="text-sm text-black/80 font-medium tracking-wide">
                      {formatTechName(tech)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}