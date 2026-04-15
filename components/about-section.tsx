"use client"

import { Phone, Mail, Linkedin, Instagram } from "lucide-react"

function SkillLevel({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${i <= level ? "bg-[#1a1a1a]" : "bg-[#1a1a1a]/30"}`}
        />
      ))}
    </div>
  )
}

export default function AboutSection() {
  const education = [
    { year: "2019", title: "University of Architecture (UAH)", subtitle: "Fashion Design Major" },
    { year: "2023", title: "IELTS Certificate", subtitle: "Total Score : 6.5" },
  ]

  const experience = [
    { year: "2022", title: "IMAGI.NATION Musical Show", subtitle: "Costume Designer" },
    { year: "2023", title: "Space Fintech Joint Stock Company", subtitle: "Internship in Designing Department" },
    { year: "2024", title: "Design Freelance", subtitle: "Graphic Designer ( Posters, Social Post, Magazine,...)" },
  ]

  const designSoftwares = [
    { icon: "Ai", name: "ILLUSTRATOR", level: 4, bg: "bg-[#330000]", text: "text-[#ff9a00]" },
    { icon: "Id", name: "INDESIGN", level: 5, bg: "bg-[#49021f]", text: "text-[#ff3366]" },
    { icon: "Ps", name: "PHOTOSHOP", level: 5, bg: "bg-[#001e36]", text: "text-[#31a8ff]" },
    { icon: "Ae", name: "AFTER EFFECT", level: 2, bg: "bg-[#1d1d4d]", text: "text-[#9999ff]" },
    { icon: "Lr", name: "LIGHTROOM", level: 3, bg: "bg-[#001d26]", text: "text-[#add5eb]" },
    { icon: "Fg", name: "FIGMA", level: 4, bg: "bg-[#1e1e1e]", isFigma: true },
  ]

  const personalSkills = ["Typography", "Creativity", "Diligent", "Time Management", "Layout", "Team work", "Adaptive"]

  return (
    <section className="bg-[#1a1a1a] min-h-screen px-3 py-6 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid - 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_340px] gap-1">
          
          {/* LEFT COLUMN - Profile Photo Card */}
          <div className="flex flex-col gap-1">
            <div className="bg-[#1a1a1a] rounded-tl-[2rem] overflow-hidden relative">
              {/* Photo Container */}
              <div className="relative aspect-[3/4]">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V6WrGGWuOSxCOH652CYNI1lI6equhu.png"
                  alt="Pham Truong Khoi"
                  className="w-full h-full object-cover object-top grayscale"
                />
                {/* Glass circle overlay */}
                <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20" />
                
                {/* Name and Tags overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h3 className="font-serif text-[#e8e4dc] text-xl tracking-wider font-medium mb-3">
                    PHAM TRUONG KHOI
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Graphic Design", "2D Illustration", "Social Media"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs text-[#e8e4dc]/90 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 italic"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#e8e4dc]" />
                    <span className="w-2 h-2 rounded-full bg-[#e8e4dc]/50" />
                    <span className="w-2 h-2 rounded-full bg-[#1a1a1a] border border-[#e8e4dc]/30" />
                  </div>
                </div>
              </div>
            </div>

            {/* ABOUT ME Card */}
            <div className="bg-[#d8d4cc] rounded-bl-[2rem] p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <h2 className="font-serif text-3xl text-[#1a1a1a] tracking-wide font-bold">ABOUT ME</h2>
                <div className="flex flex-col gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#1a1a1a]/30" />
                  <span className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
                </div>
              </div>
              <p className="italic text-[#1a1a1a] mb-3">Hello,</p>
              <p className="text-[#1a1a1a]/80 text-sm leading-relaxed mb-4">
                {"I'm Truong Khoi, a graphic designer specializing in brand development. My portfolio demonstrates a diverse range of impactful designs, seamlessly integrating aesthetics and functionality. I collaborate closely with clients to understand their unique vision, values, and goals, ensuring that every project delivers a strong brand identity and achieves its objectives. I am dedicated to creating visually captivating and highly effective work that leaves a lasting impression."}
              </p>
              <p className="text-[#1a1a1a]/80 text-sm leading-relaxed">
                {"Let's collaborate to foster our development together."}
              </p>
            </div>
          </div>

          {/* MIDDLE COLUMN - Education & Experience */}
          <div className="bg-[#d8d4cc] p-6 lg:p-8 flex flex-col">
            {/* Education */}
            <div className="mb-8">
              <h2 className="font-serif text-3xl text-[#1a1a1a] tracking-wide font-bold mb-6">EDUCATION</h2>
              <div className="space-y-5">
                {education.map((item, idx) => (
                  <div key={idx}>
                    <span className="inline-block px-4 py-1 text-sm border border-[#1a1a1a] rounded-full mb-2">
                      {item.year}
                    </span>
                    <h4 className="font-semibold text-[#1a1a1a]">{item.title}</h4>
                    <p className="text-sm text-[#1a1a1a]/70">{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="flex-1">
              <h2 className="font-serif text-3xl text-[#1a1a1a] tracking-wide font-bold mb-6">EXPERIENCE</h2>
              <div className="space-y-5">
                {experience.map((item, idx) => (
                  <div key={idx}>
                    <span className="inline-block px-4 py-1 text-sm border border-[#1a1a1a] rounded-full mb-2">
                      {item.year}
                    </span>
                    <h4 className="font-semibold text-[#1a1a1a]">{item.title}</h4>
                    <p className="text-sm text-[#1a1a1a]/70">{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3D Mouse Element */}
            <div className="relative mt-8 flex justify-center">
              <div className="relative w-72 h-28">
                {/* Mouse body */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#f0f0f0] via-[#e0e0e0] to-[#b0b0b0] rounded-full shadow-2xl border border-white/60 overflow-hidden">
                  {/* Top highlight line */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-white/60 rounded-full" />
                  {/* Scroll wheel */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-4 bg-gradient-to-b from-[#999] to-[#777] rounded-full shadow-inner" />
                  {/* Right side texture dots */}
                  <div 
                    className="absolute right-4 bottom-2 w-20 h-20 rounded-full opacity-40"
                    style={{
                      backgroundImage: 'radial-gradient(circle, #555 1.5px, transparent 1.5px)',
                      backgroundSize: '5px 5px'
                    }}
                  />
                  {/* Side button lines */}
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 space-y-1">
                    <div className="w-0.5 h-3 bg-[#999] rounded-full" />
                  </div>
                </div>
                {/* Left side dots */}
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
                  <span className="w-2 h-2 rounded-full bg-[#1a1a1a]/40" />
                </div>
              </div>
              {/* Right side dots */}
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1">
                <span className="w-2 h-2 rounded-full bg-[#1a1a1a]/30" />
                <span className="w-2 h-2 rounded-full bg-[#1a1a1a]/30" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Design Softwares & Personal Skills */}
          <div className="bg-[#d8d4cc] p-6 lg:p-8 rounded-tr-[2rem]">
            {/* Design Softwares */}
            <div className="mb-8">
              <h2 className="font-serif text-2xl text-[#1a1a1a] tracking-wide font-bold mb-6">DESIGN SOFTWARES</h2>
              <div className="grid grid-cols-2 gap-4">
                {designSoftwares.map((soft) => (
                  <div key={soft.name} className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${soft.bg} rounded-xl flex items-center justify-center shrink-0`}>
                      {soft.isFigma ? (
                        <svg width="18" height="26" viewBox="0 0 38 57" fill="none">
                          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                        </svg>
                      ) : (
                        <span className={`${soft.text} font-semibold text-xl`}>{soft.icon}</span>
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#1a1a1a] tracking-wide">{soft.name}</p>
                      <SkillLevel level={soft.level} />
                      <div className="w-6 h-0.5 bg-[#1a1a1a] mt-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Skills */}
            <div>
              <h2 className="font-serif text-2xl text-[#1a1a1a] tracking-wide font-bold mb-4">PERSONAL SKILLS</h2>
              <div className="flex flex-wrap gap-2">
                {personalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 text-sm border border-[#1a1a1a] rounded-full italic text-[#1a1a1a]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT Section */}
        <div className="bg-[#d8d4cc] mt-1 p-6 lg:p-8 rounded-b-[2rem]">
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
            {/* Title */}
            <h2 className="font-serif text-4xl text-[#1a1a1a] tracking-wide font-bold">CONTACT</h2>

            {/* QR Code */}
            <div className="flex items-end gap-3">
              <div className="w-24 h-24 bg-white p-2 rounded">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="0" y="0" width="30" height="30" fill="#000"/>
                  <rect x="5" y="5" width="20" height="20" fill="#fff"/>
                  <rect x="10" y="10" width="10" height="10" fill="#000"/>
                  <rect x="70" y="0" width="30" height="30" fill="#000"/>
                  <rect x="75" y="5" width="20" height="20" fill="#fff"/>
                  <rect x="80" y="10" width="10" height="10" fill="#000"/>
                  <rect x="0" y="70" width="30" height="30" fill="#000"/>
                  <rect x="5" y="75" width="20" height="20" fill="#fff"/>
                  <rect x="10" y="80" width="10" height="10" fill="#000"/>
                  <rect x="35" y="5" width="5" height="5" fill="#000"/>
                  <rect x="45" y="5" width="5" height="5" fill="#000"/>
                  <rect x="55" y="5" width="5" height="5" fill="#000"/>
                  <rect x="35" y="15" width="5" height="5" fill="#000"/>
                  <rect x="50" y="15" width="5" height="5" fill="#000"/>
                  <rect x="35" y="35" width="5" height="5" fill="#000"/>
                  <rect x="45" y="35" width="5" height="5" fill="#000"/>
                  <rect x="55" y="35" width="5" height="5" fill="#000"/>
                  <rect x="35" y="45" width="5" height="5" fill="#000"/>
                  <rect x="45" y="45" width="5" height="5" fill="#000"/>
                  <rect x="55" y="45" width="5" height="5" fill="#000"/>
                  <rect x="35" y="55" width="5" height="5" fill="#000"/>
                  <rect x="50" y="55" width="5" height="5" fill="#000"/>
                  <rect x="70" y="40" width="5" height="5" fill="#000"/>
                  <rect x="80" y="40" width="5" height="5" fill="#000"/>
                  <rect x="90" y="40" width="5" height="5" fill="#000"/>
                  <rect x="70" y="50" width="5" height="5" fill="#000"/>
                  <rect x="85" y="50" width="5" height="5" fill="#000"/>
                  <rect x="70" y="70" width="10" height="10" fill="#000"/>
                  <rect x="85" y="70" width="10" height="10" fill="#000"/>
                  <rect x="70" y="85" width="10" height="10" fill="#000"/>
                  <rect x="85" y="85" width="10" height="10" fill="#000"/>
                </svg>
              </div>
              <div className="text-xs text-[#1a1a1a]/70 pb-1">
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                  Scan to
                </span>
                <span className="font-semibold text-[#1a1a1a]">view CV</span>
              </div>
            </div>

            {/* Contact Links Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#1a1a1a]" />
                <span className="text-sm text-[#1a1a1a]">(+84) 0909059327</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-[#1a1a1a]" />
                <span className="text-sm text-[#1a1a1a]">instagram.com/jozillio</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#1a1a1a]" />
                <span className="text-sm text-[#1a1a1a]">Design.truongkhoipham@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#1a1a1a]" fill="currentColor">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="4" fill="#d8d4cc"/>
                </svg>
                <span className="text-sm text-[#1a1a1a]">dribbble.com/Joe_Pham</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 bg-[#1769ff] rounded text-white text-[10px] font-bold flex items-center justify-center">Be</span>
                <span className="text-sm text-[#1a1a1a]">behance.net/khoipham5</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-[#1a1a1a]" />
                <span className="text-sm text-[#1a1a1a]">linkedin.com/in/khoi-pham</span>
              </div>
            </div>

            {/* Bottom right dots */}
            <div className="hidden lg:flex gap-1.5 self-end">
              <span className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
              <span className="w-2 h-2 rounded-full bg-[#1a1a1a]/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
