'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

const sections = [
  {
    id: 'inspiration',
    label: 'Inspiration',
  },
  {
    id: 'experience',
    label: 'Experience',
  },
  {
    id: 'expertise',
    label: 'Expertise',
  },
  {
    id: 'education',
    label: 'Education',
  },
]

export default function BackgroundSectionNav() {
  const [expanded, setExpanded] = useState(false)
  const [activeSection, setActiveSection] = useState('inspiration')
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(section => {
      const element = document.getElementById(section.id)

      if (!element) return

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(section.id)

              if (!expanded) {
                setExpanded(true)
              }
            }
          })
        },
        {
          threshold: 0.45,
        }
      )

      observer.observe(element)
      observers.push(observer)
    })

    const endMarker = document.getElementById(
      'background-nav-end'
    )

    let footerObserver: IntersectionObserver | null = null

    if (endMarker) {
      footerObserver = new IntersectionObserver(
        ([entry]) => {
          setVisible(!entry.isIntersecting)
        },
        {
          threshold: 0.1,
        }
      )

      footerObserver.observe(endMarker)
    }

    return () => {
      observers.forEach(observer =>
        observer.disconnect()
      )

      footerObserver?.disconnect()
    }
  }, [expanded])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.7,
            y: 20,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            fixed
            bottom-5
            lg:bottom-8
            left-1/2
            -translate-x-1/2
            z-[9999]
          "
        >
          <AnimatePresence mode="wait">
            {!expanded ? (
              <motion.div
                key="dot"
                layoutId="background-nav"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  w-[58px]
                  h-[58px]
                  lg:w-[70px]
                  lg:h-[70px]
                  rounded-full
                  border
                  border-white/10
                  bg-black/40
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                "
              >
                <div
                  className="
                    w-3
                    h-3
                    rounded-full
                    bg-white
                  "
                />
              </motion.div>
            ) : (
              <motion.div
                key="nav"
                layoutId="background-nav"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 28,
                }}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-black/90
                  backdrop-blur-xl
                  p-1.5
                  shadow-[0_0_30px_rgba(0,0,0,0.35)]
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-1
                    overflow-x-auto
                    whitespace-nowrap
                    scrollbar-none
                  "
                >
                  {sections.map(section => (
                    <button
                      key={section.id}
                      onClick={() =>
                        scrollToSection(section.id)
                      }
                      className="
                        relative
                        px-4
                        lg:px-6
                        py-2.5
                        rounded-full
                        text-[13px]
                        lg:text-[15px]
                        font-light
                        whitespace-nowrap
                      "
                    >
                      {activeSection === section.id && (
                        <motion.div
                          layoutId="active-pill"
                          transition={{
                            type: 'spring',
                            stiffness: 320,
                            damping: 30,
                          }}
                          className="
                            absolute
                            inset-0
                            bg-white
                            rounded-full
                          "
                        />
                      )}

                      <span
                        className={clsx(
                          'relative z-10 transition-colors duration-300',
                          activeSection === section.id
                            ? 'text-black'
                            : 'text-white'
                        )}
                      >
                        {section.label}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}