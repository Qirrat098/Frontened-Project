"use client"

export default function DiagonalGallery() {
  // Phobia poster data
  const posters = [
    { id: 1, title: "ORNITHOPHILIA", subtitle: "FONDNESS OF BIRDS", code: "#072", color: "from-emerald-800 to-emerald-950" },
    { id: 2, title: "AICHAMOPHOBIA", subtitle: "FEAR OF NEEDLES OR POINTED OBJECTS", code: "#072", color: "from-olive-700 to-stone-800" },
    { id: 3, title: "COULROPHOBIA", subtitle: "SCARED OF CLOWNS ?", code: "", color: "from-amber-900 to-stone-900" },
    { id: 4, title: "NOMMO", subtitle: "PHOBIA PHOBIA PHOBIA", code: "", color: "from-red-800 to-stone-900" },
  ]

  // Create a large grid of repeating posters
  const createGrid = () => {
    const grid = []
    for (let row = 0; row < 4; row++) {
      const rowItems = []
      for (let col = 0; col < 6; col++) {
        const poster = posters[(row + col) % posters.length]
        rowItems.push(
          <div
            key={`${row}-${col}`}
            className="flex-shrink-0 w-64 h-80 rounded-lg overflow-hidden shadow-xl"
          >
            <div className={`w-full h-full bg-gradient-to-br ${poster.color} relative`}>
              {/* Poster content */}
              <div className="absolute inset-0 flex flex-col">
                {/* Top code */}
                {poster.code && (
                  <div className="absolute top-3 left-3 text-xs text-stone-400 font-mono">
                    {poster.code}
                  </div>
                )}
                
                {/* Decorative frame */}
                <div className="absolute inset-3 border border-stone-600/30 rounded-sm" />
                
                {/* Center image area */}
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-200/20 to-stone-600/20 flex items-center justify-center overflow-hidden">
                    {/* Halftone texture overlay */}
                    <div 
                      className="w-full h-full"
                      style={{
                        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)`,
                        backgroundSize: '4px 4px'
                      }}
                    />
                  </div>
                </div>
                
                {/* Title area */}
                <div className="p-4 text-center">
                  <p className="text-[10px] text-stone-400 tracking-widest mb-1">
                    {poster.subtitle}
                  </p>
                  <h3 className="text-xl font-serif text-stone-200 tracking-wide">
                    {poster.title}
                  </h3>
                </div>
              </div>
              
              {/* Noise texture */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }}
              />
            </div>
          </div>
        )
      }
      grid.push(
        <div 
          key={row} 
          className="flex gap-6"
          style={{ 
            marginLeft: row % 2 === 0 ? '0' : '-8rem',
          }}
        >
          {rowItems}
        </div>
      )
    }
    return grid
  }

  return (
    <section className="relative py-24 overflow-hidden bg-[#a8a590]">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Diagonal rotated gallery */}
      <div 
        className="relative flex flex-col gap-6 items-center justify-center"
        style={{
          transform: 'rotate(-12deg) scale(1.2)',
          transformOrigin: 'center center',
        }}
      >
        {createGrid()}
      </div>
      
      {/* Gradient overlays for fade effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#a8a590] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#a8a590] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#a8a590] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#a8a590] to-transparent pointer-events-none z-10" />
    </section>
  )
}
