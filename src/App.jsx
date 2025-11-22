import { useState } from 'react'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'
import ReceiptScanner from './components/ReceiptScanner'

function App() {
  const [mode, setMode] = useState('home') // company|home|social

  const WorkspacePills = () => (
    <div className="flex items-center gap-2 text-slate-300">
      <span className="font-semibold shrink-0">Workspaces:</span>
      <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-1 px-1">
        <button
          onClick={() => setMode('company')}
          className={`px-3 py-2 rounded-lg text-sm border shrink-0 ${mode==='company' ? 'bg-blue-500/20 text-blue-200 border-blue-500/30':'bg-white/5 text-slate-300 border-white/10'}`}
          aria-pressed={mode==='company'}
        >Company</button>
        <button
          onClick={() => setMode('home')}
          className={`px-3 py-2 rounded-lg text-sm border shrink-0 ${mode==='home' ? 'bg-blue-500/20 text-blue-200 border-blue-500/30':'bg-white/5 text-slate-300 border-white/10'}`}
          aria-pressed={mode==='home'}
        >Home</button>
        <button
          onClick={() => setMode('social')}
          className={`px-3 py-2 rounded-lg text-sm border shrink-0 ${mode==='social' ? 'bg-blue-500/20 text-blue-200 border-blue-500/30':'bg-white/5 text-slate-300 border-white/10'}`}
          aria-pressed={mode==='social'}
        >Social</button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-24 md:pb-0">
      <Hero />
      <nav className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <WorkspacePills />
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-400"></span>
              <button className="px-3 py-2 rounded-lg bg-white/5 text-slate-300 border border-white/10">Notifications</button>
            </div>
            <button className="px-3 py-2 rounded-lg bg-white/5 text-slate-300 border border-white/10">Profile</button>
          </div>
        </div>
      </nav>
      <Dashboard mode={mode} />
      <ReceiptScanner />
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 py-10 text-slate-400 text-sm">
        Built with a hub-and-spoke navigation and AI fail-safes. Toggle workspace modes to see dynamic dashboards.
      </footer>

      {/* Mobile bottom nav */}
      <div className="fixed bottom-0 inset-x-0 md:hidden z-30">
        <div className="mx-auto max-w-6xl px-4 pb-[env(safe-area-inset-bottom)]">
          <div className="m-3 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 p-2 grid grid-cols-3 gap-2">
            <button
              onClick={() => setMode('company')}
              className={`py-2 rounded-xl text-sm border ${mode==='company' ? 'bg-blue-500/20 text-blue-200 border-blue-500/30':'bg-white/5 text-slate-300 border-white/10'}`}
              aria-label="Company"
            >Company</button>
            <button
              onClick={() => setMode('home')}
              className={`py-2 rounded-xl text-sm border ${mode==='home' ? 'bg-blue-500/20 text-blue-200 border-blue-500/30':'bg-white/5 text-slate-300 border-white/10'}`}
              aria-label="Home"
            >Home</button>
            <button
              onClick={() => setMode('social')}
              className={`py-2 rounded-xl text-sm border ${mode==='social' ? 'bg-blue-500/20 text-blue-200 border-blue-500/30':'bg-white/5 text-slate-300 border-white/10'}`}
              aria-label="Social"
            >Social</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
