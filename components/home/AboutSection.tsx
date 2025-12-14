"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Users, Trophy, Target, Lightbulb } from "lucide-react"
import Link from "next/link"

const features = [
  "Agile development methodology",
  "24/7 technical support",
  "Scalable architecture design",
  "Security-first approach",
  "On-time delivery guarantee",
  "Post-launch maintenance",
]

const stats = [
  { icon: Users, value: "500+", label: "Enterprise Clients", color: "text-blue-600" },
  { icon: Trophy, value: "1,200+", label: "Projects Delivered", color: "text-cyan-600" },
  { icon: Target, value: "98%", label: "Client Satisfaction", color: "text-teal-600" },
  { icon: Lightbulb, value: "15+", label: "Years Experience", color: "text-indigo-600" },
]

export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black-50 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Background Decorations */}
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-100 rounded-full opacity-50 blur-3xl" />
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-orange-100 rounded-full opacity-50 blur-3xl" />

              {/* Main Image */}
              <div className="relative">
                <motion.img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                  alt="Team collaboration"
                  className="rounded-3xl shadow-2xl w-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-8 -right-8 bg-black rounded-2xl p-6 shadow-xl"
                >
<div className="flex items-center gap-4">
  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
    <span
      className="iconify text-white"
      data-icon="lucide:rocket"
      data-width="32"
    ></span>
  </div>

  <div>
    <p className="text-3xl font-bold text-white-900">10+</p>
    <p className="text-white-600">Years of Excellence</p>
  </div>
</div>
                </motion.div>
              </div>

              {/* Secondary Image */}
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070"
                alt="Training session"
                className="absolute -top-12 -right-12 w-48 h-48 object-cover rounded-2xl shadow-xl border-4 border-black hidden lg:block"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
              ABOUT E-CODE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Enterprise Software Solutions
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}
                Built for Scale
              </span>
            </h2>
            <p className="text-lg text-white-600 mb-8 leading-relaxed">
              E-Code is a leading software development company specializing in enterprise-grade applications, cloud
              infrastructure, and digital transformation. We partner with businesses worldwide to deliver innovative
              solutions that drive growth and operational excellence.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-white-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/about">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 h-14 rounded-xl shadow-lg shadow-blue-500/25 group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-black rounded-2xl p-6 shadow-lg border border-black-100 text-center"
            >
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-black-50 flex items-center justify-center ${stat.color}`}
              >
                <stat.icon className="w-7 h-7" />
              </div>
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="text-3xl font-bold text-white mb-1"
              >
                {stat.value}
              </motion.p>
              <p className="text-white">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
