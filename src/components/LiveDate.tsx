'use client'

import { useEffect, useState } from 'react'

export default function LiveDate() {
  const [date, setDate] = useState('')

  useEffect(() => {
    const updateDate = () => {
      const now = new Date()

      setDate(
        now
          .toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          })
          .toUpperCase()
      )
    }

    updateDate()
    const interval = setInterval(updateDate, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-lg sm:text-xl md:text-2xl tracking-widest text-right min-w-[160px]">
      {date}
    </div>
  )
}