"use client"

import { TrendingUp, Users, Zap, Globe } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: "300%",
      label: "Faster deployment",
      company: "Enterprise clients",
    },
    {
      icon: Users,
      value: "20K+",
      label: "Active teams",
      company: "Global companies",
    },
    {
      icon: Zap,
      value: "98%",
      label: "Uptime guarantee",
      company: "SLA commitment",
    },
    {
      icon: Globe,
      value: "150+",
      label: "Countries served",
      company: "Worldwide reach",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold mb-2 gradient-text">{stat.value}</div>
              <div className="text-sm font-medium text-white mb-1">{stat.label}</div>
              <div className="text-xs text-zinc-400">{stat.company}</div>
            </div>
          ))}
        </div>
      </div>w
    </section>
  )
}

