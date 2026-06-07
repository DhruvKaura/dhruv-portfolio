'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const greetings = [
  'Hello',
  'Hola',
  'Bonjour',
  'Ciao',
  'Hallo',
  'こんにちは',
  '안녕하세요',
  'नमस्ते',
  'Olá',
  'Hej',
]

export default function GreetingRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

return (
  <div className="relative min-h-[120px] sm:min-h-[160px] md:min-h-[200px] flex items-center justify-center">
    <AnimatePresence mode="wait">
      <motion.div
        key={greetings[index]}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6 }}
        className="absolute text-4xl sm:text-6xl md:text-8xl font-bold"
      >
        {greetings[index]}
      </motion.div>
    </AnimatePresence>
  </div>
)
}