import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero with full-width Spline cover */}
      <Hero />

      {/* Showcase grid */}
      <Showcase />

      {/* Process section */}
      <Process />

      {/* Contact form */}
      <Contact />

      {/* Footer */}
      <footer className="bg-slate-950/95 border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-emerald-400" />
            <p className="text-white/80 text-sm">Cartoonist icons & character sketches for playful brands</p>
          </div>
          <nav className="flex items-center gap-6 text-white/70 text-sm">
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
