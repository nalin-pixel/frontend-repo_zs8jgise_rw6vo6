import React from 'react'
import { Code2, Zap, Cpu, Layers, Rocket, TerminalSquare } from 'lucide-react'

const skills = [
  { icon: Code2, label: 'React + TypeScript' },
  { icon: Layers, label: 'Design Systems' },
  { icon: Cpu, label: 'WebGL / Three.js basics' },
  { icon: Zap, label: 'Performance & DX' },
  { icon: Rocket, label: 'Framer Motion' },
  { icon: TerminalSquare, label: 'Node.js APIs' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-gradient-to-b from-black to-[#0b0b12] py-16 md:py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-2xl md:text-3xl font-bold">Skills</h2>
          <p className="text-sm text-white/60 max-w-md">
            A blend of engineering and design, with a focus on building resilient, accessible, and immersive interfaces.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ icon: Icon, label }) => (
            <div key={label} className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/[0.08] transition">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>
                <p className="font-medium">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
