import type { Metadata } from "next"
import HeroSection from "@/components/home/HeroSection"
import TechExpertise from "@/components/home/TechExpertise"
import AboutSection from "@/components/home/AboutSection"
import ServicesSection from "@/components/home/ServicesSection"
import CTASection from "@/components/home/CTASection"

export const metadata: Metadata = {
  title: "E-Code | Enterprise Software Development Company",
  description:
    "Leading software development company specializing in enterprise solutions, cloud architecture, AI/ML, and digital transformation. Transform your business with E-Code.",
}

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <TechExpertise />
      <AboutSection />
      <ServicesSection />
      <CTASection />
    </main>
  )
}
