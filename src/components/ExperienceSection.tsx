'use client'

import Image from 'next/image'
import { experiences } from '@/src/data/experience'

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-black text-white py-40">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 space-y-24">

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-start"
          >
            {/* LEFT TITLE */}
            {index === 0 ? (
              <div className="sticky top-40">
                <h2 className="text-[18px] text-white/80">
                  Work Experience
                </h2>
              </div>
            ) : (
              <div />
            )}

            {/* LOGO */}
            <div className="flex justify-center items-start px-8">
              <Image
                src={exp.logo}
                alt={exp.company}
                width={150}
                height={40}
                className="opacity-70"
              />
            </div>

            {/* DETAILS */}
            <div className="space-y-3">
              <h3 className="text-[20px] font-medium">
                {exp.role}
              </h3>

              <p className="text-white/60">
                {exp.company}, {exp.location}
              </p>

              <p className="text-white/70">
                {exp.duration}
              </p>
            </div>
          </div>
        ))}

      </div>

      {/* RESUME BUTTON */}
      <div className="mt-32 flex justify-center">
        <a
          href="/Dhruv_Kaura_Software_Engineer_Resume.pdf"
          target='blank'
          className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full text-[15px] hover:opacity-90 transition"
        >
          <span className="text-lg">↓</span>
          Download Resumé
        </a>
      </div>
    </section>
  )
}