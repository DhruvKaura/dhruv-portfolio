'use client'

import Image from 'next/image'

export default function EducationSection() {
  return (
    <section id="education" className="bg-black text-white py-40">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">

          {/* LEFT TITLE */}
          <div className="sticky top-40 self-start">
            <h2 className="text-[18px] text-white/80">
              Education
            </h2>
          </div>

          {/* CENTER LOGO */}
          <div className="flex justify-center items-start px-8">
            <Image
              src="/company/gna-logo.png"
              alt="GNA University"
              width={150}
              height={40}
              className="opacity-70"
            />
          </div>

          {/* RIGHT DETAILS */}
          <div className="space-y-3">
            <h3 className="text-[20px] font-medium">
              Bachelor of Technology (B.Tech)
            </h3>

            <p className="text-white/60">
              Computer Science & Engineering
            </p>

            <p className="text-white/60">
              GNA University, Punjab
            </p>

            <p className="text-white/70">
              2020 — 2024
            </p>

            <p className="text-white/40 text-sm pt-2">
              GPA: 8.15 / 10
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}