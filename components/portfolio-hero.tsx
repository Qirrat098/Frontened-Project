"use client"

import { useEffect, useRef } from "react"

export function PortfolioHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      container.style.setProperty("--mouse-x", `${x}px`)
      container.style.setProperty("--mouse-y", `${y}px`)
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#1a1a1a]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Subtle noise overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Corner decorations - Top Left */}
      <div className="absolute left-6 top-6 flex items-center gap-2">
        <div className="h-4 w-4 rounded-full border border-[#e8e4d9]/40" />
        <div className="h-4 w-4 rounded-full bg-[#e8e4d9]" />
      </div>

      {/* Corner decorations - Top Right */}
      <div className="absolute right-6 top-6 flex items-center gap-2">
        <div className="h-4 w-4 rounded-full border border-[#e8e4d9]/40" />
        <div className="h-4 w-4 rounded-full bg-[#e8e4d9]" />
      </div>

      {/* Main content */}
      <div className="relative flex min-h-screen items-center justify-center px-4">
        <div className="relative">
          {/* 2025 Badge */}
          <div className="absolute -top-16 left-0 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full border border-[#e8e4d9]/50" />
            <div className="rounded-full border border-[#e8e4d9]/30 bg-transparent px-4 py-1.5">
              <span className="font-serif text-sm tracking-wider text-[#e8e4d9]">2025</span>
            </div>
          </div>

          {/* Main Typography */}
          <div className="relative">
            <h1 className="font-serif text-[clamp(4rem,15vw,12rem)] font-normal leading-[0.85] tracking-tight text-[#e8e4d9]">
              PORTFOLIO
            </h1>

            {/* Glassmorphism pill - Left/Bottom */}
            <div 
              className="absolute -bottom-4 left-0 h-20 w-[55%] rounded-full"
              style={{
                background: "linear-gradient(135deg, rgba(232, 228, 217, 0.08) 0%, rgba(232, 228, 217, 0.02) 100%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(232, 228, 217, 0.1)",
                boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 4px 24px rgba(0, 0, 0, 0.3)",
              }}
            />

            {/* Glassmorphism pill - Right/Top */}
            <div 
              className="absolute -top-2 right-0 h-24 w-[45%] rounded-full"
              style={{
                background: "linear-gradient(135deg, rgba(232, 228, 217, 0.1) 0%, rgba(232, 228, 217, 0.03) 100%)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(232, 228, 217, 0.12)",
                boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 4px 24px rgba(0, 0, 0, 0.3)",
              }}
            />
          </div>

          {/* Author Badge */}
          <div className="absolute -bottom-12 right-0 flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-full bg-[#e8e4d9] px-4 py-2">
              <div className="h-2.5 w-2.5 rounded-full border border-[#1a1a1a]/30" />
              <span className="font-serif text-sm italic tracking-wide text-[#1a1a1a]">Truong Khoi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
