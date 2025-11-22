import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

function useAdvisor(workspaceId) {
  const [data, setData] = useState({ loading: true, advice: '', demo: false })
  useEffect(() => {
    let mounted = true
    fetch(`${API_BASE}/api/ai/advisor?workspace_id=${workspaceId || ''}`)
      .then(r => r.json())
      .then(json => { if(mounted) setData({ loading:false, advice: json.advice, demo: !!json.demo }) })
      .catch(() => { if(mounted) setData({ loading:false, advice: 'Limit Reached: Try to save 20% of your income this month.', demo: true }) })
    return () => { mounted = false }
  }, [workspaceId])
  return data
}

export default function Dashboard({ mode = 'home', workspaceId }) {
  const advisor = useAdvisor(workspaceId)
  const [summary, setSummary] = useState(null)

  useEffect(() => {
    let mounted = true
    fetch(`${API_BASE}/api/workspaces/${workspaceId || 'demo'}/summary?mode=${mode}`)
      .then(r => r.json()).then(j => { if(mounted) setSummary(j) })
      .catch(() => { if(mounted) setSummary({ mode: 'home', budget: { income: 0, expense: 0, net: 0 } }) })
    return () => { mounted = false }
  }, [mode, workspaceId])

  return (
    <section className="relative max-w-6xl mx-auto px-6 -mt-12">
      <div className="flex items-center gap-3 mb-4">
        {advisor.demo && (
          <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs bg-amber-500/10 text-amber-300 border border-amber-500/20">
            Demo Mode
          </span>
        )}
        <span className="text-slate-300 text-sm">Mode: {mode.charAt(0).toUpperCase()+mode.slice(1)}</span>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="col-span-2 bg-slate-900/60 rounded-xl border border-white/10 p-5">
          <h3 className="text-white font-semibold mb-2">Overview</h3>
          {summary ? (
            <pre className="text-slate-300 text-sm whitespace-pre-wrap">{JSON.stringify(summary, null, 2)}</pre>
          ) : (
            <div className="text-slate-400">Loading...</div>
          )}
        </div>
        <div className="bg-slate-900/60 rounded-xl border border-white/10 p-5">
          <h3 className="text-white font-semibold mb-2">Financial Advisor</h3>
          <p className="text-slate-300 text-sm">{advisor.loading ? 'Analyzing...' : advisor.advice}</p>
        </div>
      </div>
    </section>
  )
}
