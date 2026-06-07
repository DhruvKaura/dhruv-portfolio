'use client'

import Link from 'next/link'

import InspirationSection from '@/src/components/InspirationSection'
import ExperienceSection from '@/src/components/ExperienceSection'
import ExpertiseSection from '@/src/components/ExpertiseSection'
import EducationSection from '@/src/components/EducationSection'
import BackgroundSectionNav from '@/src/components/BackgroundSectionNav'
import WorkFooterSection from '@/src/components/WorkFooterSection'
import FooterSection from "@/src/components/FooterSection"

export default function BackgroundPage() {
  return (
    <main className="relative bg-black text-white min-h-screen dark-cursor-area overflow-x-hidden">

      {/* ================= HERO ================= */}
<BackgroundSectionNav />
<section
  id="inspiration"
  className="px-6 sm:px-10 lg:px-20 pt-36 sm:pt-44 lg:pt-52 pb-28"
>
  <div className="max-w-[1500px] mx-auto">

    {/* Top Label */}
    <div className="flex items-center gap-8 mb-14">
      <span className="text-xl font-medium">
        Get to know me
      </span>

      <span className="text-base text-white/40">
        Résumé & biography
      </span>
    </div>

    {/* Main Display Heading */}
<h1
  className="
    font-[450]
    tracking-[-0.02em]
    text-[36px]
    sm:text-[44px]
    md:text-[56px]
    lg:text-[68px]
    xl:text-[47px]
    leading-[1.15]
    max-w-[1150px]
    text-white/90
  "
>
My journey into software engineering began with a curiosity for how digital products work behind the scenes. What started with web development evolved into a passion for backend engineering, distributed systems, and building scalable applications that solve real-world problems.</h1>

    {/* CTA */}
    <div className="mt-20 flex justify-end">
      <a
        href="/work"
        className="group inline-flex items-center gap-5 text-white/60 hover:text-white transition-all duration-300"
      >
        <span className="text-lg">View my work</span>

        <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
          →
        </div>
      </a>
    </div>

  </div>
</section>
<InspirationSection/>
<ExperienceSection/>
<ExpertiseSection />
<EducationSection />
<div id="background-nav-end" className="h-px" />
<FooterSection />
    </main>
  )
}