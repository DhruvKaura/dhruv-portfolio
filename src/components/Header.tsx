'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import ReachOutModal from '@/src/components/contact/ReachOutModal'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={clsx(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500',
          scrolled
            ? 'bg-white text-black py-4 shadow-sm'
            : 'bg-transparent text-white py-6'
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Dhruv Logo"
              width={120}
              height={40}
              priority
              className={clsx(
                'transition duration-500',
                scrolled && 'invert'
              )}
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">

            <NavLink label="Work" href="/work" />

            <NavLink label="Background" href="/background" />

            <button
              onClick={() => setIsContactOpen(true)}
              className={clsx(
                `
                px-8
                py-3
                rounded-full
                border
                transition-all
                duration-300
                `,
                scrolled
                  ? 'border-black text-black hover:bg-black hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-black'
              )}
            >
              Reach Out
            </button>

          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              flex
              flex-col
              justify-center
              items-center
              w-8
              h-8
              gap-1
            "
          >
            <motion.span
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 6 : 0,
              }}
              className={clsx(
                'w-6 h-[2px]',
                scrolled ? 'bg-black' : 'bg-white'
              )}
            />

            <motion.span
              animate={{
                opacity: menuOpen ? 0 : 1,
              }}
              className={clsx(
                'w-6 h-[2px]',
                scrolled ? 'bg-black' : 'bg-white'
              )}
            />

            <motion.span
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -6 : 0,
              }}
              className={clsx(
                'w-6 h-[2px]',
                scrolled ? 'bg-black' : 'bg-white'
              )}
            />
          </button>

        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              bg-black
              text-white
              flex
              flex-col
              items-center
              justify-center
              gap-10
              z-40
              md:hidden
            "
          >
            <NavLink
              label="Projects"
              href="/work#projects"
              onClick={() => setMenuOpen(false)}
            />

            <NavLink
              label="Work"
              href="/work"
              onClick={() => setMenuOpen(false)}
            />

            <NavLink
              label="Background"
              href="/background"
              onClick={() => setMenuOpen(false)}
            />

            <button
              onClick={() => {
                setMenuOpen(false)
                setIsContactOpen(true)
              }}
              className="
                border
                border-white
                px-6
                py-2
                rounded-full
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
              "
            >
              Reach Out
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTACT MODAL */}
      <ReachOutModal
        open={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  )
}

function NavLink({
  label,
  href,
  onClick,
}: {
  label: string
  href: string
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        relative
        cursor-pointer
        text-sm
        tracking-wide
        group
      "
    >
      <motion.span
        whileHover={{ y: -2 }}
        className="inline-block"
      >
        {label}
      </motion.span>

      <span
        className="
          absolute
          left-0
          -bottom-1
          w-0
          h-[1px]
          bg-current
          transition-all
          duration-300
          group-hover:w-full
        "
      />
    </Link>
  )
}
