import React from 'react'
import Hero from './components/Hero'
import Bio from './components/Bio'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 md:px-10 flex h-14 items-center justify-between">
          <a href="#" className="text-sm font-semibold tracking-wide text-white/80">Your Name</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-md bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20 md:hidden">Contact</a>
        </div>
      </header>

      {/* Hero with Spline */}
      <Hero />

      {/* Sections */}
      <Bio />
      <Skills />
      <Hobbies />
      <Contact />

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-black py-8 text-center text-white/60">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
