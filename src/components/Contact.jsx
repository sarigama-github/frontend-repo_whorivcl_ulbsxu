import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      // No backend needed for now. Simulate success.
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! We’ll get back to you ASAP.')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Start a Project</h2>
        <p className="text-white/70 mt-2 text-center">Tell us about your icon pack or character idea.</p>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4">
          <input
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
            placeholder="Your name"
            name="name"
            value={form.name}
            onChange={onChange}
            required
          />
          <input
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
            placeholder="Email address"
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
          />
          <textarea
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 min-h-[140px]"
            placeholder="What are you looking to create?"
            name="message"
            value={form.message}
            onChange={onChange}
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-400 text-slate-900 font-semibold shadow-[0_10px_30px_rgba(16,185,129,0.45)] hover:brightness-110 transition"
          >
            Send Request
          </button>
          {status && <p className="text-white/80 text-center">{status}</p>}
        </form>
      </div>
    </section>
  )
}
