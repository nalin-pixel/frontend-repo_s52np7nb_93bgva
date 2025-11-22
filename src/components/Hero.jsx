import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[65vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-10">
        <div className="backdrop-blur-sm bg-slate-900/30 rounded-2xl p-6 border border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-300 text-sm border border-emerald-400/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                PWA Ready • Dark Mode • Multi-workspace
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
                Elitemoney Pro Manager
              </h1>
              <p className="mt-3 text-slate-300 max-w-2xl">
                Personal and Business finance, in one place. Workspaces for Company, Home, and Social with AI insights and a solid demo fallback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
