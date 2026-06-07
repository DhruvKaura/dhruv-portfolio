'use client'

import { githubProjects } from '@/src/data/githubProjects'

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-black text-white py-32"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        {/* HEADING */}
        <div className="mb-20">
          <h2 className="text-[18px] text-white/80 mb-4">
            Projects
          </h2>

          <p className="text-white/50 text-[16px] leading-relaxed max-w-xl">
            A collection of software systems, backend architectures,
            AI-powered applications, and digital products I've built
            throughout my engineering journey.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >
          {githubProjects.map((project, index) => (
            <a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                border
                border-white/10
                rounded-[32px]
                p-8
                min-h-[280px]
                flex
                flex-col
                transition-all
                duration-500
                hover:bg-white
                hover:text-black
              "
            >
              {/* NUMBER */}
              <span
                className="
                  text-sm
                  opacity-40
                  mb-8
                "
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* TITLE */}
              <h3
                className="
                  text-[28px]
                  leading-[1.1]
                  font-normal
                  mb-5
                "
              >
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  text-[15px]
                  opacity-60
                  leading-relaxed
                "
              >
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="mt-auto pt-10">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        text-[13px]
                        px-3
                        py-1
                        rounded-full
                        border
                        border-current/20
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* EXPLORE MORE BUTTON */}
        <div className="pt-20">
          <a
            href="https://github.com/DhruvKaura"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4"
          >
            {/* DOT → ARROW */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <span
                className="
                  absolute
                  text-white/60
                  text-[14px]
                  transition-all
                  duration-500
                  ease-out
                  group-hover:opacity-0
                  group-hover:scale-0
                "
              >
                ○
              </span>

              <div
                className="
                  absolute
                  w-10
                  h-10
                  rounded-full
                  bg-white
                  text-black
                  flex
                  items-center
                  justify-center
                  opacity-0
                  scale-75
                  transition-all
                  duration-500
                  ease-out
                  group-hover:opacity-100
                  group-hover:scale-100
                "
              >
                →
              </div>
            </div>

            {/* TEXT */}
            <div className="relative pb-2">
              <span
                className="
                  text-[18px]
                  font-light
                  text-white/50
                  transition-all
                  duration-500
                  group-hover:text-white
                "
              >
                Explore More
              </span>

              <div
                className="
                  absolute
                  left-0
                  bottom-0
                  h-[1px]
                  w-full
                  bg-white/40
                  transition-all
                  duration-500
                  ease-out
                  group-hover:translate-x-5
                  group-hover:bg-white
                "
              />
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}