import { useState } from 'react'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'
import ReceiptScanner from './components/ReceiptScanner'

function App() {
  const [mode, setMode] = useState('home') // company|home|social

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <nav className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="font-semibold">Workspaces:</span>
            <button onClick={() => setMode('company')} className={`px-3 py-1.5 rounded-lg text-sm border ${mode==='company' ? 'bg-blue-500/20 text-blue-200 border-blue-500/30':'bg-white/5 text-slate-300 border-white/10'}`}>Company</button>
            <button onClick={() => setMode('home')} className={`px-3 py-1.5 rounded-lg text-sm border ${mode==='home' ? 'bg-blue-500/20 text-blue-200 border-blue-500/30':'bg-white/5 text-slate-300 border-white/10'}`}>Home</button>
            <button onClick={() => setMode('social')} className={`px-3 py-1.5 rounded-lg text-sm border ${mode==='social' ? 'bg-blue-500/20 text-blue-200 border-blue-500/30':'bg-white/5 text-slate-300 border-white/10'}`}>Social</button>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-400"></span>
              <button className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 border border-white/10">Notifications</button>
            </div>
            <button className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 border border-white/10">Profile</button>
          </div>
        </div>
      </nav>
      <Dashboard mode={mode} />
      <ReceiptScanner />
      <footer className="max-w-6xl mx-auto px-6 py-10 text-slate-400 text-sm">
        Built with a hub-and-spoke navigation and AI fail-safes. Toggle workspace modes to see dynamic dashboards.
      </footer>
    </div>
  )
}

export default App
