"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  CheckCircle2,
} from "lucide-react"

/* ================= SOCIAL LINKS ================= */
const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ecode-learning-software-services-007972310/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/ecode_learning_software?igsh=NHR6MTF4ZDhpYjJs",
    label: "Instagram",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@ecodelearningsoftwareservices",
    label: "YouTube",
  },
]

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9160006006", "+91 9182344936"],
    action: "tel:+919160006006",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@ecodelearning.com"],
    action: "mailto:info@ecodelearning.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Flat No:T2, Sai Landmark Apartments", "Kamala Nagar, Near HDFC Bank", "Chaitanyapuri, Hyderabad 500060"],
    action: "https://maps.app.goo.gl/eXPNSpirjT3qnvgt6?g_st=aw",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 5:00 PM"],
    action: "#",
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })

    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <main className="overflow-hidden bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-black-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')] bg-cover bg-center opacity-10" />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-semibold mb-4 border border-blue-500/20">
              CONTACT US
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In
              <span className="bg-gradient-to-r from-sky-400 to-blue-900 bg-clip-text text-transparent">
                {" "}
                Touch
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Have questions about our courses or services? We're here to help you on your journey to success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.action}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="block bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:shadow-lg hover:border-zinc-700 transition-all group"
                >
                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-sky-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-zinc-400">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
{/* ===== SOCIAL LINKS ===== */}
            <div className="bg-slate-900 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-zinc-900 rounded-3xl shadow-xl border border-zinc-800 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white-900 mb-2">Send Us a Message</h2>
                <p className="text-white-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <p className="text-green-700">Thank you! Your message has been sent successfully.</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white-700 mb-2">Full Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white-700 mb-2">Email Address *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white-700 mb-2">Phone Number</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9876543210"
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white-700 mb-2">Subject *</label>
                      <Input
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Course Inquiry"
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white-700 mb-2">Message *</label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us how we can help you..."
                      className="min-h-[150px] rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white rounded-xl shadow-lg shadow-sky-500/25 text-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="w-5 h-5" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white-900 mb-4">Visit Our Office</h2>
            <p className="text-white-600">Come visit us and see our training facilities</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.5861273544715!2d78.53298029999999!3d17.366188499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb992b568cc71f%3A0xf29cd9feff1f7fae!2sECODE%20LEARNING%20SOFTWARE%20SERVICES!5e1!3m2!1sen!2sin!4v1765780366802!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="grayscale hover:grayscale-0 transition-all duration-500 rounded-3xl"
/>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
