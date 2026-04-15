export default function FooterSection() {
  return (
    <section className="relative min-h-screen bg-[#1a1a1a] flex flex-col justify-center items-center overflow-hidden">
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Corner decorations - Top Left */}
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <div className="w-4 h-4 rounded-full border border-[#e8e4dc]" />
        <div className="w-4 h-4 rounded-full bg-[#e8e4dc]" />
      </div>

      {/* Corner decorations - Top Right */}
      <div className="absolute top-6 right-6 flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-[#e8e4dc]" />
        <div className="w-4 h-4 rounded-full border border-[#e8e4dc]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-8">
        {/* Large Typography with Glass Overlays */}
        <div className="relative">
          {/* Glass pill overlay - top right */}
          <div 
            className="absolute -top-4 right-0 w-72 h-16 rounded-full border border-white/20 z-20"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              backdropFilter: 'blur(8px)',
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1)',
            }}
          >
            {/* Halftone texture inside */}
            <div 
              className="absolute inset-0 rounded-full opacity-40"
              style={{
                backgroundImage: `radial-gradient(circle, #888 1px, transparent 1px)`,
                backgroundSize: '4px 4px',
              }}
            />
          </div>

          {/* Glass pill overlay - bottom left */}
          <div 
            className="absolute top-16 -left-16 w-80 h-14 rounded-full border border-white/20 z-20"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
              backdropFilter: 'blur(8px)',
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1)',
            }}
          >
            {/* Halftone texture inside */}
            <div 
              className="absolute inset-0 rounded-full opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle, #666 1px, transparent 1px)`,
                backgroundSize: '4px 4px',
              }}
            />
          </div>

          {/* Main text */}
          <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-[#e8e4dc] text-center leading-tight tracking-tight relative z-10">
            <span className="block">THANKS FOR</span>
            <span className="block">VISITING !!</span>
          </h2>
        </div>

        {/* Subtitle pill */}
        <div className="mt-12 flex items-center gap-3">
          <div className="w-5 h-5 rounded-full border border-[#e8e4dc]" />
          <div className="px-6 py-2 rounded-full border border-[#e8e4dc]">
            <p className="font-serif text-[#e8e4dc] text-sm md:text-base italic">
              {"Don't forget to contact me, Hope to see you later !"}
            </p>
          </div>
          <div className="w-5 h-5 rounded-full border border-[#e8e4dc]" />
        </div>
      </div>

      {/* Bottom contact bar */}
      <div className="relative z-10 w-full px-6 py-6 flex items-center justify-between">
        {/* Left chevrons */}
        <div className="flex items-center gap-0.5">
          <svg className="w-5 h-5 text-[#e8e4dc]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5l8 7-8 7V5z" />
          </svg>
          <svg className="w-5 h-5 text-[#e8e4dc]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5l8 7-8 7V5z" />
          </svg>
          <svg className="w-5 h-5 text-[#e8e4dc]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5l8 7-8 7V5z" />
          </svg>
          <svg className="w-4 h-4 text-[#e8e4dc] ml-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5l8 7-8 7V5z" />
          </svg>
        </div>

        {/* Contact info */}
        <div className="flex items-center gap-4">
          {/* Phone */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#e8e4dc]">
            <svg className="w-4 h-4 text-[#e8e4dc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            <span className="text-[#e8e4dc] text-sm font-medium">(+84) 909059327</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#e8e4dc]">
            <svg className="w-4 h-4 text-[#e8e4dc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            <span className="text-[#e8e4dc] text-sm font-medium">Design.truongkhoipham@gmail.com</span>
          </div>
        </div>

        {/* Right chevrons */}
        <div className="flex items-center gap-0.5">
          <svg className="w-4 h-4 text-[#e8e4dc] mr-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 5l-8 7 8 7V5z" />
          </svg>
          <svg className="w-5 h-5 text-[#e8e4dc]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 5l-8 7 8 7V5z" />
          </svg>
          <svg className="w-5 h-5 text-[#e8e4dc]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 5l-8 7 8 7V5z" />
          </svg>
          <svg className="w-5 h-5 text-[#e8e4dc]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 5l-8 7 8 7V5z" />
          </svg>
        </div>
      </div>
    </section>
  )
}
