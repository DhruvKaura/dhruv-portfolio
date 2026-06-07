'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

const tabData = {
  'For Everyone': {
    content:
      "Hi, I'm Dhruv — a Software Engineer building scalable backend systems and modern full-stack applications. I design APIs, architect databases, and ship production-ready digital products.",
    buttonText: 'View my work',
  },
  Recruiters: {
    content:
      'I build scalable backend systems with Python and architect high-performance applications designed for real-world scale. My focus is clean architecture, system reliability, and production-grade engineering.',
    buttonText: 'Read my Resume',
  },
  Agencies: {
    content:
      'I collaborate with agencies to build high-quality websites and scalable web applications. I translate design into clean, production-ready code and architect backend systems that ensure performance and long-term reliability.',
    buttonText: 'View my work',
  },
  Clients: {
    content:
      'I help businesses build modern, high-performance websites and scalable web applications. I focus on clean architecture, performance optimization, and delivering reliable solutions that drive growth.',
    buttonText: 'Get in Touch',
  },
  Collaborators: {
    content:
      'I enjoy collaborating with designers, engineers, and product teams to build scalable, well-architected systems. I value clean code, thoughtful problem solving, and shipping reliable solutions together.',
    buttonText: 'Connect with me',
  },
}

const ArrowCircle = () => (
  <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:text-white">
    →
  </div>
)

export default function IntroSection() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof tabData>('For Everyone')

  const words = tabData[activeTab].content.split(' ')

  const renderButton = () => {
    switch (activeTab) {
      case 'For Everyone':
      case 'Agencies':
        return (
          <a href="/work" className="flex items-center gap-6 group w-fit">
            <span className="text-lg sm:text-xl">View my work</span>
            <ArrowCircle />
          </a>
        )

      case 'Recruiters':
        return (
          <a
            href="/Dhruv_Kaura_Software_Engineer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 group w-fit"
          >
            <span className="text-lg sm:text-xl">Read my Resume</span>
            <ArrowCircle />
          </a>
        )

      case 'Clients':
        return (
          <a
            href="mailto:dhruvkaura25@gmail.com"
            className="flex items-center gap-6 group w-fit"
          >
            <span className="text-lg sm:text-xl">Get in Touch</span>
            <ArrowCircle />
          </a>
        )

      case 'Collaborators':
        return (
          <a
            href="https://www.linkedin.com/in/dhruv-kaura/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 group w-fit"
          >
            <span className="text-lg sm:text-xl">Connect with me</span>
            <ArrowCircle />
          </a>
        )

      default:
        return null
    }
  }

  return (
    <section
      className="
        relative bg-white text-black
        rounded-t-[40px]
        pt-20 sm:pt-24 md:pt-28
        pb-20 sm:pb-24 md:pb-28
        px-6
      "
    >
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 sm:gap-6 mb-16 sm:mb-20">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as keyof typeof tabData)}
              className={clsx(
                'px-4 py-1.5 rounded-full text-sm transition-all duration-300',
                activeTab === tab
                  ? 'bg-black text-white'
                  : 'text-black hover:bg-black/5'
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Animated Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
            className="
              text-[22px] sm:text-[26px] md:text-[46px]
              leading-[1.2] md:leading-[1.15]
              font-normal max-w-4xl
              flex flex-wrap
            "
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeOut',
                }}
                className="mr-3 mb-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Button */}
        <div className="mt-12 sm:mt-16">
          {renderButton()}
        </div>

        {/* Location */}
        <div className="mt-20 sm:mt-24">
          <p className="text-sm opacity-50 mb-2">Current Location</p>
          <p className="text-lg font-medium">India</p>
        </div>
      </div>
    </section>
  )
}