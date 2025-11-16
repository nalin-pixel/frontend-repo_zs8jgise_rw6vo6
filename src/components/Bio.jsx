import React from 'react'

export default function Bio() {
  return (
    <section id="about" className="relative w-full bg-black py-16 md:py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            I’m a developer focused on building delightful user experiences.
            I love blending utility with aesthetics — from micro-interactions
            to scalable design systems. Beyond code, I experiment with 3D scenes
            and motion to make interfaces feel alive.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            Recently, I’ve been exploring WebGL, performance optimizations,
            and design tooling to craft fast, immersive products.
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold">Highlights</h3>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/80">
              <li className="rounded-lg bg-black/40 p-4 ring-1 ring-white/10">5+ years building web apps</li>
              <li className="rounded-lg bg-black/40 p-4 ring-1 ring-white/10">Shipped products to 100k+ users</li>
              <li className="rounded-lg bg-black/40 p-4 ring-1 ring-white/10">Design systems & accessibility</li>
              <li className="rounded-lg bg-black/40 p-4 ring-1 ring-white/10">3D, motion, and performance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
