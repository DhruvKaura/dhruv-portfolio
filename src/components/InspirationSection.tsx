'use client'

import { useEffect, useRef } from 'react'
import Matter from 'matter-js'

export default function InspirationSection() {
  const sceneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Mouse,
      MouseConstraint,
      Events
    } = Matter

    const engine = Engine.create()
    engine.world.gravity.y = 1

    const width = sceneRef.current!.clientWidth
    const height = sceneRef.current!.clientHeight

    const render = Render.create({
      element: sceneRef.current!,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent'
      }
    })

    const wallThickness = 300

    const floor = Bodies.rectangle(
      width / 2,
      height + wallThickness / 2,
      width,
      wallThickness,
      {
        isStatic: true,
        render: { fillStyle: 'transparent' }
      }
    )

    const leftWall = Bodies.rectangle(
      -wallThickness / 2,
      height / 2,
      wallThickness,
      height * 2,
      {
        isStatic: true,
        render: { fillStyle: 'transparent' }
      }
    )

    const rightWall = Bodies.rectangle(
      width + wallThickness / 2,
      height / 2,
      wallThickness,
      height * 2,
      {
        isStatic: true,
        render: { fillStyle: 'transparent' }
      }
    )

    const shapes = [
      Bodies.circle(60, -100, 14, {
        restitution: 0.5,
        render: { fillStyle: '#e8e8e8' }
      }),

      Bodies.rectangle(190, -200, 110, 110, {
        chamfer: { radius: 6 },
        restitution: 0.5,
        angle: Math.PI / 8,
        render: { fillStyle: '#e8e8e8' }
      }),

      Bodies.circle(370, -300, 75, {
        restitution: 0.5,
        render: { fillStyle: '#e8e8e8' }
      }),

      Bodies.rectangle(510, -150, 110, 110, {
        chamfer: { radius: 4 },
        restitution: 0.5,
        render: { fillStyle: '#e8e8e8' }
      }),

      Bodies.rectangle(650, -250, 95, 155, {
        chamfer: { radius: 4 },
        restitution: 0.5,
        render: { fillStyle: '#e8e8e8' }
      }),

      Bodies.circle(760, -180, 50, {
        restitution: 0.5,
        render: { fillStyle: '#e8e8e8' }
      }),
    ]

    const dragMe = shapes[5]

    Composite.add(engine.world, [
      floor,
      leftWall,
      rightWall,
      ...shapes
    ])

    const mouse = Mouse.create(render.canvas)

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    })

    Composite.add(engine.world, mouseConstraint)

    Events.on(render, 'afterRender', () => {
      const ctx = render.context

      ctx.save()
      ctx.translate(dragMe.position.x, dragMe.position.y)
      ctx.rotate(dragMe.angle)

      ctx.fillStyle = '#000'
      ctx.font = '600 11px sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      ctx.fillText('Drag me', 0, 0)

      ctx.restore()
    })

    Render.run(render)

    const runner = Runner.create()
    Runner.run(runner, engine)

    return () => {
      Render.stop(render)
      Runner.stop(runner)

      Composite.clear(engine.world, false)
      Engine.clear(engine)

      render.canvas.remove()
    }
  }, [])

  return (
    <section
      id="inspiration"
      className="bg-black text-white pt-32 pb-40"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-28">

        {/* LEFT */}
        <div className="relative h-[640px]">
          <h3
            className="
              absolute
              top-0
              left-0
              text-[22px]
              font-semibold
              tracking-tight
              text-white
              z-10
              pointer-events-none
            "
          >
            Built To Scale.
          </h3>

          <div
            ref={sceneRef}
            className="w-full h-full"
          />
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center">

          <div className="space-y-7 text-white/60 text-[16px] leading-[1.85]">

            <p>
              To me, great software isn&apos;t defined by how much code is
              written, but by how reliably it solves problems at scale.
              Every request, query, and interaction contributes to the
              experience users ultimately depend on.
            </p>

            <p>
              My approach to engineering is centered around performance,
              maintainability, and long-term scalability. Whether I&apos;m
              building REST APIs, designing database schemas,
              implementing asynchronous workflows, or deploying
              distributed systems, I focus on creating solutions that
              remain dependable as complexity grows.
            </p>

            <p>
              I enjoy working on backend systems because they sit at the
              intersection of architecture, problem-solving, and
              business impact. A well-designed backend can improve
              performance, reduce operational overhead, and provide the
              foundation for products to evolve confidently.
            </p>

            <p>
              Over time, I&apos;ve worked on production APIs, AI workflow
              orchestration systems, authentication frameworks, and
              data-intensive applications. These experiences have
              reinforced my belief that thoughtful engineering
              decisions today prevent costly problems tomorrow.
            </p>

            <p>
              For me, software engineering is about building systems
              that are fast, resilient, and easy to understand. The
              goal isn&apos;t simply to make something work—it&apos;s to make
              it work reliably, efficiently, and at a scale that
              supports future growth.
            </p>

          </div>

          <div className="mt-12">
            <a
              href="https://linkedin.com/in/dhruv-kaura"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                text-white
                text-[15px]
                underline
                underline-offset-4
              "
            >
              <span className="text-[10px] leading-none">
                ○
              </span>

              Let&apos;s connect on LinkedIn
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}