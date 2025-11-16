import React from 'react'
import Spline from '@splinetool/react-spline'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const handleScroll = () => {
    const el = document.getElementById('about')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-black" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UiMDkOJtlS5O5Vaz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient vignettes for contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6 md:px-10 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/70 backdrop-blur">
              Technology • Gaming • Futuristic • Cosmic
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Hello, I’m <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">Your Name</span>
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80">
              Frontend developer crafting immersive, high-performance interfaces with a love for 3D, motion, and clean design.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:from-cyan-400 hover:to-fuchsia-400 transition-colors">
                Get in touch
              </a>
              <a href="#skills" className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white/80 ring-1 ring-white/15 hover:bg-white/5 transition-colors">
                View skills
              </a>
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleScroll} aria-label="Scroll to About" className="relative z-10 group absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
        <ChevronDown className="h-6 w-6 group-hover:translate-y-0.5 transition-transform" />
        <span className="text-sm">Learn more</span>
      </button>
    </section>
  )
}
