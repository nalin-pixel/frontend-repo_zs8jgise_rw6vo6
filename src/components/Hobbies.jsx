import React from 'react'

const hobbies = [
  { title: 'Gaming', desc: 'Strategy, story-driven adventures, and co-op fun.' },
  { title: '3D & Motion', desc: 'Experimenting with Spline scenes and motion design.' },
  { title: 'Music', desc: 'Synthwave, lo-fi beats, and occasional audio tinkering.' },
  { title: 'Photography', desc: 'Night shots, neon lights, and urban textures.' },
]

export default function Hobbies() {
  return (
    <section className="relative w-full bg-[#0b0b12] py-16 md:py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-bold">Hobbies</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((h) => (
            <div key={h.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <h3 className="text-lg font-semibold">{h.title}</h3>
              <p className="mt-2 text-white/70">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
