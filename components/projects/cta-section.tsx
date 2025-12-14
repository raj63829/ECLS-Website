"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Join 20,000+ teams already building</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
            Ready to transform your <span className="gradient-text">project workflow?</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Start building amazing projects today. No credit card required. Free for 14 days.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 h-12 shadow-lg shadow-primary/20">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 h-12 bg-transparent">
              Schedule Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Trusted by industry leaders • SOC 2 Certified • 24/7 Support
          </p>
        </motion.div>
      </div>
    </section>
  )
}
