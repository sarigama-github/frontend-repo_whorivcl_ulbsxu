import { motion } from 'framer-motion'

const steps = [
  { n: '01', t: 'Brief & Mood', d: 'We sync on style, vibe, and use-case. Bring refs or we’ll source them.' },
  { n: '02', t: 'Sketch Sprint', d: 'Rapid thumbnails, shapes, and personality passes to lock the character.' },
  { n: '03', t: 'Ink & Polish', d: 'Clean lines, vector-ready outputs, and export sizes for your platform.' },
]

export default function Process() {
  return (
    <section className="py-20 bg-slate-950/95 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white">How We Work</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <span className="text-emerald-400 font-mono">{s.n}</span>
              <h3 className="text-xl font-semibold text-white mt-2">{s.t}</h3>
              <p className="text-white/75 mt-2 text-sm">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
