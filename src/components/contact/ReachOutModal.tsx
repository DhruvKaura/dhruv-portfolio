'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'



interface ReachOutModalProps {
  open: boolean
  onClose: () => void
}

export default function ReachOutModal({ open, onClose }: ReachOutModalProps) {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    reason: '',
    name: '',
    email: '',
    message: '',
  })
  const router = useRouter()

  const handleSubmit = async () => {
    try {
      setLoading(true)

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit')
      }

      router.push('/thank-you')
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('reachout-open')
    } else {
      document.body.style.overflow = 'auto'
      document.body.classList.remove('reachout-open')
    }

    return () => {
      document.body.style.overflow = 'auto'
      document.body.classList.remove('reachout-open')
    }
  }, [open])

  const progress = (step / 3) * 100

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9998]"
          />

          {/* PANEL */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="
              fixed top-0 right-0 h-screen
              w-full lg:w-[48vw] xl:w-[44vw]
              bg-black text-white z-[9999]
              border-l border-white/10
              flex flex-col
            "
          >
            {/* CLOSE */}
            <button
              onClick={onClose}
              className="
                absolute top-6 right-6
                w-12 h-12 rounded-full
                bg-white text-black
                flex items-center justify-center text-xl
                transition-all duration-300 hover:scale-105
              "
            >
              ×
            </button>

            {/* CONTENT */}
            <div className="flex-1 flex items-center px-8 lg:px-16">
              <div className="w-full max-w-xl">

                {/* STEP 1 */}
                {step === 1 && (
                  <>
                    <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-[0.95] tracking-tight font-normal">
                      Let&apos;s make
                      <br />something
                      <br />unapologetically
                      <br />awesome.
                    </h2>

                    <div className="mt-12 space-y-4">
                      {[
                        'I have a role with your name on it.',
                        'I want to team up and innovate.',
                      ].map((option) => (
                        <button
                          key={option}
                          onClick={() => setFormData({ ...formData, reason: option })}
                          className={`
                            w-full text-left px-6 py-5 rounded-2xl border
                            transition-all duration-300
                            ${formData.reason === option
                              ? 'border-white bg-white/5'
                              : 'border-white/10 hover:border-white/30'
                            }
                          `}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <>
                    <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-[0.95] tracking-tight font-normal mb-12">
                      Tell me
                      <br />about you.
                    </h2>

                    <div className="space-y-8">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 py-4 outline-none"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 py-4 outline-none"
                      />
                    </div>
                  </>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <>
                    <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-[0.95] tracking-tight font-normal mb-12">
                      What&apos;s
                      <br />on your
                      <br />mind?
                    </h2>

                    <textarea
                      rows={6}
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border border-white/20 rounded-2xl p-5 resize-none outline-none"
                    />
                  </>
                )}

              </div>
            </div>

            {/* FOOTER */}
            <div className="px-8 lg:px-16 pb-10">

              <div className="h-[2px] bg-white/10 overflow-hidden mb-8">
                <motion.div
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-white"
                />
              </div>

              <div className="flex justify-between items-center">

                <button
                  onClick={() => step > 1 && setStep(step - 1)}
                  className={step === 1 ? 'opacity-0 pointer-events-none' : ''}
                >
                  Previous
                </button>

                {step < 3 ? (
                  <button
                    disabled={step === 1 && !formData.reason}
                    onClick={() => setStep(step + 1)}
                    className="flex items-center gap-4 disabled:opacity-30"
                  >
                    <span>Next</span>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                      →
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="flex items-center gap-4 disabled:opacity-50"
                  >
                    <span>{loading ? 'Sending…' : 'Submit'}</span>
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                      →
                    </div>
                  </button>
                )}

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}