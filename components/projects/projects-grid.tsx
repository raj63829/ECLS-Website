"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, GitBranch, Star, Users, ArrowRight } from "lucide-react"

export function ProjectsGrid() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Next-generation shopping experience with AI recommendations and real-time inventory.",
      image: "/ecommerce-platform-modern-ui.jpg",
      category: "E-Commerce",
      stats: { stars: 1200, contributors: 45, branches: 28 },
      tags: ["Next.js", "AI/ML", "Payments"],
      gradient: "from-blue-500/20 to-blue-500/20",
    },
    {
      title: "Healthcare Dashboard",
      description: "HIPAA-compliant patient management system with real-time analytics and reporting.",
      image: "/healthcare-dashboard-medical-interface.jpg",
      category: "Healthcare",
      stats: { stars: 890, contributors: 32, branches: 19 },
      tags: ["React", "Security", "Analytics"],
      gradient: "from-purple-500/20 to-blue-500/10",
    },
    {
      title: "FinTech Mobile App",
      description: "Secure banking solution with biometric authentication and instant transactions.",
      image: "/fintech-mobile-app-banking-interface.jpg",
      category: "FinTech",
      stats: { stars: 2100, contributors: 67, branches: 42 },
      tags: ["Mobile", "Blockchain", "Banking"],
      gradient: "from-emerald-500/20 to-blue-500/20",
    },
    {
      title: "EdTech Learning Platform",
      description: "Interactive learning management system with video streaming and progress tracking.",
      image: "/education-platform-learning-dashboard.jpg",
      category: "Education",
      stats: { stars: 1450, contributors: 54, branches: 31 },
      tags: ["Video", "LMS", "Gamification"],
      gradient: "from-orange-500/20 to-blue-500/10",
    },
    {
      title: "SaaS Analytics Tool",
      description: "Business intelligence platform with custom dashboards and automated reporting.",
      image: "/analytics-dashboard-saas-interface.jpg",
      category: "SaaS",
      stats: { stars: 1780, contributors: 61, branches: 38 },
      tags: ["Analytics", "BI", "API"],
      gradient: "from-violet-500/20 to-blue-500/20",
    },
    {
      title: "Social Media Platform",
      description: "Real-time social networking app with live streaming and content moderation.",
      image: "/social-media-platform-modern-feed.jpg",
      category: "Social",
      stats: { stars: 3200, contributors: 89, branches: 56 },
      tags: ["Real-time", "WebSockets", "CDN"],
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
  ]

  return (
    <section id="projects" className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-900 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            See what innovative teams are building on our platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-zinc-900/50 border border-zinc-800
                         hover:border-blue-500/30 hover:-translate-y-1
                         transition-all duration-300
                         hover:shadow-[0_0_40px_-10px_rgba(45,212,191,0.15)]
                         group animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-zinc-900/80 border border-zinc-700 text-zinc-200 backdrop-blur-sm">
                  {project.category}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-zinc-400 mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-zinc-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{project.stats.contributors}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitBranch className="w-4 h-4" />
                    <span>{project.stats.branches}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent border-zinc-700 text-zinc-200
                             hover:bg-white hover:text-zinc-900 transition"
                >
                  View Project
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="px-8 bg-transparent border-zinc-700 text-zinc-200
                       hover:bg-white hover:text-zinc-900 transition"
          >
            Explore All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
