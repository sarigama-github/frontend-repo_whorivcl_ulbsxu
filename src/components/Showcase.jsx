import { motion } from 'framer-motion'

const items = [
  { title: 'Mascot Avatars', desc: 'Character-driven icons for apps and streams', color: 'from-pink-500 to-rose-500' },
  { title: 'UI Icon Packs', desc: 'Playful, readable, and hand-inked', color: 'from-indigo-500 to-sky-500' },
  { title: 'Twitch & Discord', desc: 'Emotes, badges, and roles with personality', color: 'from-emerald-500 to-lime-500' },
  { title: 'Brand Characters', desc: 'Signature figures that speak for your brand', color: 'from-amber-500 to-orange-500' },
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-20 bg-slate-950">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What We Sketch</h2>
          <p className="text-white/70 mt-2 max-w-2xl">Quick explorations to full sets — our process keeps the playful energy while staying crisp for product UI and streaming overlays.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${it.color} opacity-20 group-hover:opacity-30 transition`} />
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold text-white">{it.title}</h3>
                <p className="text-white/75 mt-2 text-sm">{it.desc}</p>
              </div>
              <div className="h-28" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
