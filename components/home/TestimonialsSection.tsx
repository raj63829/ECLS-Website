"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechVentures Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    content:
      "E-Code delivered our cloud migration project flawlessly. Their expertise in AWS and microservices architecture helped us scale 10x while reducing infrastructure costs by 40%.",
    rating: 5,
    course: "Cloud Migration",
  },
  {
    name: "Michael Chen",
    role: "VP Engineering, FinanceHub",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    content:
      "Outstanding development team. They built our enterprise platform from scratch with excellent code quality and on-time delivery. Highly recommended for mission-critical projects.",
    rating: 5,
    course: "Enterprise Software",
  },
  {
    name: "Priya Patel",
    role: "Director of IT, GlobalRetail",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    content:
      "The AI-powered recommendation system E-Code built for us increased our conversion rates by 35%. Their ML expertise is truly world-class.",
    rating: 5,
    course: "AI & ML Solutions",
  },
  {
    name: "David Martinez",
    role: "Head of Digital, MegaCorp",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    content:
      "E-Code's DevOps team transformed our deployment process. We went from monthly releases to daily deployments with zero downtime. Game changer for our business.",
    rating: 5,
    course: "DevOps Transformation",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {" "}
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Trusted by leading enterprises worldwide for mission-critical software projects
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[400px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Image */}
                    <div className="relative flex-shrink-0">
                      <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg">
                        <img
                          src={testimonials[current].image || "/placeholder.svg"}
                          alt={testimonials[current].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex gap-1 justify-center md:justify-start mb-4">
                        {[...Array(testimonials[current].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <p className="text-xl text-slate-700 leading-relaxed mb-6">"{testimonials[current].content}"</p>

                      <div>
                        <h4 className="text-xl font-bold text-slate-900">{testimonials[current].name}</h4>
                        <p className="text-slate-600">{testimonials[current].role}</p>
                        <span className="inline-block mt-2 px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full text-sm">
                          {testimonials[current].course}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="w-12 h-12 rounded-full border-slate-200 hover:bg-slate-100 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1)
                    setCurrent(index)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index ? "w-8 bg-blue-600" : "w-2 bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="w-12 h-12 rounded-full border-slate-200 hover:bg-slate-100 bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "95%", label: "Satisfaction Rate" },
            { value: "100%", label: "Recommend Us" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold text-slate-900">{item.value}</p>
              <p className="text-slate-600">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
