import { PortfolioHero } from "@/components/portfolio-hero"
import AboutSection from "@/components/about-section"
import PostersSection from "@/components/posters-section"
import DiagonalGallery from "@/components/diagonal-gallery"
import FooterSection from "@/components/footer-section"

export default function Home() {
  return (
    <main>
      <PortfolioHero />
      <AboutSection />
      <PostersSection />
      <DiagonalGallery />
      <FooterSection />
    </main>
  )
}
