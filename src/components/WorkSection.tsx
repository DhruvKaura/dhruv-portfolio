'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

gsap.registerPlugin(ScrollTrigger)

type Project = {
  title: string
  description: string
  image: string
  link: string
  badge: string | null
}

const projects: Project[] = [
  {
    title: 'The Revue Company',
    description:
      'A modern, high-performance WordPress website featuring sleek animations, smooth interactions, and a refined digital presence built for a marketing consultancy.',
    image: '/library/therevuecompanybanner.png',
    link: '/projects/capital-bank',
    badge: 'Recently Updated',
  },
  {
    title: 'Trox Fitness India',
    description:
      'A scalable WooCommerce-powered eCommerce platform built for a growing fitness brand, focused on performance, product showcase, and seamless purchasing experience.',
    image: '/library/troxfitnessbanner.png',
    link: '/projects/hiphi-ev',
    badge: null,
  },
  {
    title: 'Edxcellence',
    description:
      'A structured and scalable WordPress website for an EdTech brand, designed to deliver educational content efficiently with clean architecture and intuitive UX.',
    image: '/library/edxcellencebanner.png',
    link: '/projects/burgundy',
    badge: null,
  },
]

export default function WorkSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const sliderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.innerWidth < 1024) return

    const section = sectionRef.current
    const slider = sliderRef.current

    if (!section || !slider) return

    const totalWidth = slider.scrollWidth

    const ctx = gsap.context(() => {
      gsap.to(slider, {
        x: () => -(totalWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalWidth - window.innerWidth}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden"
    >
      {/* Desktop */}
      <div
        ref={sliderRef}
        className="hidden lg:flex gap-6 px-16 py-24 items-center"
      >
        {projects.map((project) => (
          <Banner
            key={project.title}
            project={project}
          />
        ))}

        <CTACard />
      </div>

      {/* Mobile */}
      <div className="lg:hidden px-4 py-16">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1.1}
          centeredSlides
          loop
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <Banner
                project={project}
                mobile
              />
            </SwiperSlide>
          ))}

          <SwiperSlide>
            <CTACard mobile />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

interface BannerProps {
  project: Project
  mobile?: boolean
}

function Banner({
  project,
  mobile = false,
}: BannerProps) {
  return (
    <Link
      href={project.link}
      className={`group relative rounded-3xl overflow-hidden block ${
        mobile
          ? 'w-full h-[65vh]'
          : 'w-[70vw] h-[80vh] flex-shrink-0'
      }`}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 1024px) 100vw, 70vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {project.badge && (
        <div className="absolute top-5 right-5 bg-white text-black text-xs px-4 py-2 rounded-full shadow">
          {project.badge}
        </div>
      )}

      <div className="absolute bottom-8 left-8 text-white max-w-[80%]">
        <h3 className="text-2xl font-semibold mb-2">
          {project.title}
        </h3>

        <p className="text-sm opacity-70 leading-relaxed">
          {project.description}
        </p>
      </div>
    </Link>
  )
}

interface CTACardProps {
  mobile?: boolean
}

function CTACard({
  mobile = false,
}: CTACardProps) {
  return (
    <a
      href="/work"
      className={`group relative bg-black rounded-3xl flex flex-col justify-end p-8 ${
        mobile
          ? 'w-full h-[65vh]'
          : 'w-[30vw] h-[80vh] flex-shrink-0'
      }`}
    >
      <div>
        <h2 className="text-4xl text-white mb-8 leading-tight">
          Want to see more?
        </h2>

        <div className="flex items-center gap-4">
          <span className="text-white/60 text-lg">
            View my work
          </span>

          <div className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
            →
          </div>
        </div>
      </div>
    </a>
  )
}