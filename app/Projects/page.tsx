import type { Metadata } from "next"
import { HeroSection } from "@/components/projects/hero-section"
import { StatsSection } from "@/components/projects/stats-section"
import { FeaturesSection } from "@/components/projects/features-section"
import { ProjectsGrid } from "@/components/projects/projects-grid"
import { CTASection } from "@/components/projects/cta-section"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Projects - E-Code | Enterprise Software Solutions",
  description:
    "Explore our portfolio of successful enterprise software projects across cloud architecture, AI/ML, and digital transformation.",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <ProjectsGrid />
        <CTASection />
      </main>
    </div>
  )
}
