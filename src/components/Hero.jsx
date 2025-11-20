import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-slate-950/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-3 py-1 border border-white/10 mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-white/80">Gaming • Entertainment • Character Design</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
              Cartoonist Icon Sketches for Playful Brands
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl">
              We craft expressive mascots, avatar packs, and UI icon sets with a hand‑drawn, game‑ready vibe. From quick sketches to polished packs — we’ve got your character.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-400 text-slate-900 font-semibold shadow-[0_10px_30px_rgba(16,185,129,0.45)] hover:brightness-110 transition">Get a Quote</a>
              <a href="#work" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 text-white/90 hover:bg-white/10 transition">View Work</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
