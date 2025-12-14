"use client"

import { Rocket, Shield, Workflow, Code, Database, Cloud } from "lucide-react"
import { Card } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: Rocket,
      title: "Lightning Fast Deployment",
      description: "Deploy your projects in seconds with our optimized build pipeline and global CDN distribution.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption, SOC 2 compliance, and advanced threat protection for your data.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Workflow,
      title: "Seamless Collaboration",
      description: "Real-time collaboration tools, version control, and integrated communication for your team.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Code,
      title: "Developer Experience",
      description: "Modern tooling, comprehensive APIs, and extensive documentation for developers who love to build.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Database,
      title: "Scalable Infrastructure",
      description: "Auto-scaling resources, serverless functions, and edge computing for peak performance.",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Cloud,
      title: "Multi-Cloud Support",
      description: "Deploy across AWS, Azure, and GCP with unified management and monitoring dashboards.",
      color: "from-cyan-500 to-blue-500",
    },
  ]

  return (
    <section id="features" className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white text-balance">
            Everything you need to <span className="gradient-text">build amazing projects</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Powerful features that empower your team to ship faster and scale effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
               className="p-6 lg:p-8 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} mb-6`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
