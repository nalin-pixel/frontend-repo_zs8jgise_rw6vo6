import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const form = new FormData(e.currentTarget)
    const data = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    }

    try {
      // This demo just simulates a send. In a real app, post to your backend.
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Message sent! I will get back to you soon.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative w-full bg-black py-16 md:py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
          <p className="mt-4 text-white/70">Have a project in mind or just want to say hi? Drop a message — I’d love to chat.</p>
          <p className="mt-2 text-sm text-white/50">I typically respond within 1-2 business days.</p>
        </div>
        <div className="md:col-span-3">
          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur space-y-4">
            <div>
              <label className="block text-sm text-white/70">Name</label>
              <input name="name" required className="mt-1 w-full rounded-md bg-black/40 px-3 py-2 text-white placeholder:text-white/40 ring-1 ring-white/10 focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm text-white/70">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-md bg:black/40 bg-black/40 px-3 py-2 text-white placeholder:text-white/40 ring-1 ring-white/10 focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm text-white/70">Message</label>
              <textarea name="message" rows={4} required className="mt-1 w-full rounded-md bg-black/40 px-3 py-2 text-white placeholder:text-white/40 ring-1 ring-white/10 focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="Tell me about your idea..." />
            </div>
            <div className="flex items-center justify-between gap-4">
              <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:from-cyan-400 hover:to-fuchsia-400 transition-colors">
                Send message
              </button>
              <p className="text-sm text-white/70">{status}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
