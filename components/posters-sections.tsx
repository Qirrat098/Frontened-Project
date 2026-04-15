"use client"

const albumCovers = [
  { id: 1, title: "Elvis Presley", color: "from-amber-900 to-amber-700" },
  { id: 2, title: "Killer Queen", color: "from-yellow-600 to-amber-800" },
  { id: 3, title: "Green Grass", color: "from-pink-500 to-fuchsia-600" },
  { id: 4, title: "The Beatles", color: "from-gray-300 to-gray-500" },
  { id: 5, title: "Scary Monsters", color: "from-red-600 to-red-800" },
  { id: 6, title: "Chocolate Disco", color: "from-pink-400 to-rose-500" },
  { id: 7, title: "Flying High", color: "from-cyan-400 to-blue-500" },
  { id: 8, title: "Pearl Jam", color: "from-teal-600 to-emerald-700" },
  { id: 9, title: "Green Day", color: "from-lime-500 to-green-600" },
  { id: 10, title: "New Horror", color: "from-red-500 to-orange-600" },
  { id: 11, title: "Les Mortes", color: "from-emerald-800 to-teal-900" },
  { id: 12, title: "85-92", color: "from-violet-600 to-purple-800" },
  { id: 13, title: "The Music", color: "from-slate-700 to-slate-900" },
  { id: 14, title: "Moon", color: "from-indigo-600 to-violet-800" },
  { id: 15, title: "I Am A Rock", color: "from-orange-500 to-red-600" },
]

function StarIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  )
}

export default function PostersSection() {
  return (
    <section className="bg-[#1a1a1a] py-16 px-6 md:px-12">
      {/* POSTERS Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="relative flex items-center justify-center py-12">
          {/* Left pill border */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 md:w-24 h-32 border-2 border-[#d8d4cc]/30 rounded-full" />
          
          {/* Center content */}
          <div className="text-center z-10">
            <h2 className="font-serif text-6xl md:text-8xl text-[#d8d4cc] tracking-wider mb-4">
              POSTERS
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-[#d8d4cc]/50" />
              <StarIcon className="w-3 h-3 text-[#d8d4cc]/70" />
              <span className="text-[#d8d4cc]/70 text-sm italic font-serif">Personal Projects</span>
              <StarIcon className="w-3 h-3 text-[#d8d4cc]/70" />
              <div className="w-8 h-px bg-[#d8d4cc]/50" />
            </div>
          </div>
          
          {/* Right pill border */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 md:w-24 h-32 border-2 border-[#d8d4cc]/30 rounded-full" />
        </div>
      </div>

      {/* ALBUM COVERS Section */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#0d0d0d] rounded-3xl p-6 md:p-10 relative overflow-hidden">
          {/* Left decorative pill */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-48 bg-[#d8d4cc]/10 rounded-full hidden md:block" />
          
          {/* Right decorative pill */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-48 bg-[#d8d4cc]/10 rounded-full hidden md:block" />

          {/* Header */}
          <div className="flex items-center justify-between mb-8 px-4 md:px-8">
            <div className="flex items-center gap-3">
              <StarIcon className="w-4 h-4 text-[#d8d4cc]" />
              <h3 className="font-serif text-2xl md:text-3xl text-[#d8d4cc] tracking-wide">
                ALBUM COVERS
              </h3>
            </div>
            <span className="text-[#d8d4cc]/60 text-sm italic font-serif hidden sm:block">
              Of various songs and albums
            </span>
          </div>

          {/* Album Grid */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 px-4 md:px-8">
            {/* Row 1 - 5 items */}
            {albumCovers.slice(0, 5).map((album) => (
              <div
                key={album.id}
                className={`aspect-[3/4] rounded-lg bg-gradient-to-br ${album.color} relative overflow-hidden group cursor-pointer`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex items-end p-2">
                  <span className="text-white/80 text-xs font-medium truncate">{album.title}</span>
                </div>
                {/* Halftone texture overlay */}
                <div 
                  className="absolute inset-0 opacity-30 mix-blend-overlay"
                  style={{
                    backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                    backgroundSize: '4px 4px'
                  }}
                />
              </div>
            ))}

            {/* Row 2 - 5 items */}
            {albumCovers.slice(5, 10).map((album) => (
              <div
                key={album.id}
                className={`aspect-[3/4] rounded-lg bg-gradient-to-br ${album.color} relative overflow-hidden group cursor-pointer`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex items-end p-2">
                  <span className="text-white/80 text-xs font-medium truncate">{album.title}</span>
                </div>
                <div 
                  className="absolute inset-0 opacity-30 mix-blend-overlay"
                  style={{
                    backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                    backgroundSize: '4px 4px'
                  }}
                />
              </div>
            ))}

            {/* Row 3 - 5 items */}
            {albumCovers.slice(10, 15).map((album) => (
              <div
                key={album.id}
                className={`aspect-[3/4] rounded-lg bg-gradient-to-br ${album.color} relative overflow-hidden group cursor-pointer`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex items-end p-2">
                  <span className="text-white/80 text-xs font-medium truncate">{album.title}</span>
                </div>
                <div 
                  className="absolute inset-0 opacity-30 mix-blend-overlay"
                  style={{
                    backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                    backgroundSize: '4px 4px'
                  }}
                />
              </div>
            ))}
          </div>

          {/* Bottom indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <StarIcon className="w-3 h-3 text-[#d8d4cc]/50" />
            <span className="text-[#d8d4cc]/40 text-xs uppercase tracking-widest">Album Covers</span>
            <StarIcon className="w-3 h-3 text-[#d8d4cc]/50" />
          </div>
        </div>
      </div>
    </section>
  )
}
