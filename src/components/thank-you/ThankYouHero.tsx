'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import FloatingSymbols from './FloatingSymbols'

export default function ThankYouHero() {
  return (
    <section
      className="
        relative
        min-h-screen
        bg-black
        text-white
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >
      <FloatingSymbols />

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          relative
          z-10
          text-center
          px-8
        "
      >
        <h1
          className="
            text-[42px]
            md:text-[72px]
            leading-[0.95]
            tracking-tight
            font-normal
          "
        >
          Thanks for
          <br />
          reaching out!
        </h1>

        <p
          className="
            mt-6
            text-white/50
            text-lg
          "
        >
          I&apos;ll get back to you
          as soon as I can :)
        </p>

        <Link
          href="/"
          className="
            mt-12
            inline-flex
            items-center
            gap-4
            px-8
            py-4
            rounded-full
            border
            border-white/20
            hover:bg-white
            hover:text-black
            transition-all
            duration-500
          "
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  )
}