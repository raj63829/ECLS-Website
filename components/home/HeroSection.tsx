"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  { title: "Enterprise Software", subtitle: "Scalable solutions for businesses" },
  { title: "Cloud Architecture", subtitle: "Modern cloud-native applications" },
  { title: "AI & Machine Learning", subtitle: "Intelligent automation solutions" },
  { title: "Custom Development", subtitle: "Tailored software for your needs" },
  { title: "Digital Transformation", subtitle: "Modernize your technology stack" },
]

const FloatingParticle = ({ delay, duration, x, y }: { delay: number; duration: number; x: number; y: number }) => (
  <motion.div
    className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      x: [x, x + 50, x],
      y: [y, y - 100, y],
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    }}
    style={{ left: `${x}%`, top: `${y}%` }}
  />
)

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const particles = Array.from({ length: 20 }, (_, i) => ({
    delay: i * 0.3,
    duration: 4 + Math.random() * 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }))

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-black-900 via-black-800 to-black-900 overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black-900 via-black-900/95 to-black-900/80" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Floating Particles */}
        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">Software Development Excellence</span>
            </motion.div>

            <div className="relative h-36 mb-6 overflow-hidden">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    y: currentSlide === index ? 0 : 50,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
  <span className="bg-gradient-to-r from-sky-400 to-blue-900 bg-clip-text text-transparent">
    {service.title}
  </span>
</h1>
                  <p className="text-xl text-slate-400 mt-2">{service.subtitle}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-300 mb-8 max-w-xl"
            >
              We build cutting-edge software solutions that drive business growth. From cloud infrastructure to
              AI-powered applications, we deliver excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 h-14 rounded-xl shadow-lg shadow-blue-500/25 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-white hover:bg-slate-800 px-8 h-14 rounded-xl bg-transparent"
                >
                  View Services
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Slide Indicators */}
            <div className="flex gap-2 mt-10">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "w-8 bg-sky-500" : "w-4 bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Content - Tech Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070"
                alt="Tech Training"
                className="relative rounded-3xl shadow-2xl"
              />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
              >
<div className="flex items-center gap-3">
  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
    <span
      className="iconify text-green-600"
      data-icon="lucide:graduation-cap"
      data-width="28"
    ></span>
  </div>
  <div>
    <p className="text-2xl font-bold text-slate-900">500+</p>
    <p className="text-sm text-slate-500">Enterprise Clients</p>
  </div>
</div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
              >
<div className="flex items-center gap-3">
  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
    <span
      className="iconify text-blue-600"
      data-icon="lucide:briefcase"
      data-width="28"
    ></span>
  </div>
  <div>
    <p className="text-2xl font-bold text-slate-900">1,200+</p>
    <p className="text-sm text-slate-500">Projects Delivered</p>
  </div>
</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="black"
          />
        </svg>
      </div>
    </section>
  )
}
