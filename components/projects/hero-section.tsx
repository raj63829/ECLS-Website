"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />

      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Announcement badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white">New: AI-Powered Project Analytics</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </motion.div>

          {/* Hero heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance"
          >
            The complete platform to <span className="gradient-text">build the future</span>
          </motion.h1>

          {/* Hero description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Your team's toolkit to stop configuring and start innovating. Securely build, deploy, and scale the best
            project experiences with EduFlow.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 h-12">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 h-12 group bg-transparent">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Hero image/video placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-border"
          >
            <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10">
              <img
                src="/modern-software-dashboard-interface-dark-theme.jpg"
                alt="EduFlow Dashboard Interface"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating UI elements */}
            <div className="absolute top-6 left-6 glass rounded-lg p-4 animate-fadeInUp">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-foreground">12 Projects Active</span>
              </div>
            </div>
            <div
              className="absolute bottom-6 right-6 glass rounded-lg p-4 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-sm font-medium text-foreground">98% Uptime</div>
              <div className="text-xs text-muted-foreground">Last 30 days</div>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-sm text-muted-foreground mt-12"
          >
            Trusted by over 20,000 teams worldwide
          </motion.p>
        </div>
      </div>
    </section>
  )
}
