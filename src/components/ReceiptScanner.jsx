import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function ReceiptScanner() {
  const [file, setFile] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const onUpload = async (e) => {
    const f = e.target.files?.[0]
    setFile(f)
    if (!f) return
    setLoading(true)
    try {
      const fd = new FormData()
      fd.append('file', f)
      const res = await fetch(`${API_BASE}/api/ai/receipt-scan`, { method: 'POST', body: fd })
      const json = await res.json()
      setResult(json)
    } catch (e) {
      setResult({ merchant: 'Demo Store', amount: 50.00, date: new Date().toISOString().slice(0,10), demo: true })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-6">
      <div className="bg-slate-900/60 rounded-xl border border-white/10 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="min-w-0">
            <h3 className="text-white font-semibold">Receipt Scanner</h3>
            <p className="text-slate-400 text-xs sm:text-sm">Upload a receipt image to extract details. Falls back to demo if AI is unavailable.</p>
          </div>
          <label className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20 cursor-pointer">
            <input type="file" accept="image/*" onChange={onUpload} className="hidden" />
            Upload Receipt
          </label>
        </div>
        {loading && <div className="text-slate-400 mt-3 text-sm">Processing...</div>}
        {result && (
          <div className="mt-3 text-slate-300 text-xs sm:text-sm">
            <pre className="whitespace-pre-wrap break-words">{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </section>
  )
}
