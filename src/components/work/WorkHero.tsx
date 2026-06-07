'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const heading =
  "Featured projects that I've built, crafting scalable software, intelligent systems and digital experiences with impact."

export default function WorkIntroSection() {
  const router = useRouter()

  const words = heading.split(' ')

  return (
    <section
      className="
        relative
        bg-black
        text-white
        min-h-screen
        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-8
          lg:px-16
          pt-48
          pb-24
          h-screen
          flex
          flex-col
        "
      >
        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            flex
            items-center
            gap-6
            mb-12
          "
        >
          <h3
            className="
              text-[18px]
              font-medium
              text-white
            "
          >
            Selected projects & work
          </h3>

          <span
            className="
              text-[14px]
              text-white/30
            "
          >
            Last updated June 2026
          </span>
        </motion.div>

        {/* WORD REVEAL HEADING */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className="
            max-w-[1200px]
            text-[22px]
            sm:text-[26px]
            md:text-[46px]
            leading-[1.15]
            font-normal
            flex
            flex-wrap
          "
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
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

        {/* BOTTOM RIGHT CTA */}
        <div
          className="
            mt-auto
            flex
            justify-end
            items-center
            gap-8
          "
        >
          <span
            className="
              text-[18px]
              md:text-[20px]
              text-white/45
            "
          >
            Learn About Me
          </span>

          <button
            onClick={() => router.push('/background')}
            className="
              w-20
              h-20
              rounded-full
              border
              border-white/20
              flex
              items-center
              justify-center
              text-[28px]
              transition-all
              duration-500
              hover:bg-white
              hover:text-black
            "
          >
            →
          </button>
        </div>
      </div>

      
    </section>
  )
}