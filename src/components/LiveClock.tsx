'use client'

import { useEffect, useState } from 'react'

export default function LiveClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()

      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      const ms = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0')

      setTime(`${hours}:${minutes}:${seconds}:${ms}`)
    }

    const interval = setInterval(updateTime, 10)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-mono text-lg sm:text-xl md:text-2xl tracking-widest min-w-[160px]">
      {time}
    </div>
  )
}