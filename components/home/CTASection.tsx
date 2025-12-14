"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070')] bg-cover bg-center opacity-10" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                Transform
              </span>
              <br />
              Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Partner with E-Code to build innovative software solutions that scale. Let's discuss how we can accelerate
              your digital transformation.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 h-14 rounded-xl shadow-lg shadow-blue-500/30 group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 h-14 rounded-xl bg-transparent"
                >
                  View Our Services
                </Button>
              </Link>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-wrap gap-6">
              <a
                href="tel:+919160006006"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+91 9160006006</span>
              </a>
              <a
                href="mailto:info@ecodelearning.com"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span>info@ecodelearning.com</span>
              </a>
            </div>
          </motion.div>

          {/* Right Content - Video/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                  alt="Team meeting"
                  className="rounded-3xl shadow-2xl"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl"
                  >
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-blue-600 border-b-[12px] border-b-transparent ml-1" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="font-semibold text-slate-900">Hyderabad, India</p>
                    <p className="text-sm text-slate-500">Visit our office</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
