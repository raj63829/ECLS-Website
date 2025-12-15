"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Phone, Mail, MapPin, ChevronUp } from "lucide-react"

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Solutions", href: "/courses" },
      { name: "Portfolio", href: "/Projects" },
      { name: "Contact", href: "/contact" },
    ],
    "Our Solutions": [
      { name: "Cloud Solutions", href: "/courses" },
      { name: "AI & Machine Learning", href: "/courses" },
      { name: "Enterprise Software", href: "/courses" },
      { name: "Mobile Development", href: "/courses" },
      { name: "DevOps", href: "/courses" },
      { name: "Blockchain", href: "/courses" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ecode-learning-software-services-007972310/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/ecode_learning_software?igsh=NHR6MTF4ZDhpYjJs", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@ecodelearningsoftwareservices", label: "YouTube" },
  ]

  return (
    <>
      <footer className="bg-zinc-950 text-zinc-300 pt-12 pb-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">

            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-40 h-16 relative">
                  <Image
                    src="/logo.png"
                    alt="ECLS Logo"
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
              </div>

              <p className="text-zinc-500 mb-6 text-sm leading-relaxed">
                E-Code Software Solutions delivers enterprise-grade applications and cloud infrastructure that power
                businesses worldwide.
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center 
                    text-zinc-400 border border-zinc-800 hover:bg-brand-500 hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links + Solutions */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-semibold mb-6">{category}</h4>
                <ul className="space-y-3 text-sm">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-zinc-500 hover:text-brand-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm">

<li>
  <a
    href="https://maps.app.goo.gl/eXPNSpirjT3qnvgt6?g_st=aw"
    target="_blank"
    rel="noopener noreferrer"
    className="flex gap-3 text-zinc-500 hover:text-brand-400 transition-colors"
  >
    <MapPin className="w-5 h-5 text-brand-500 flex-shrink-0 mt-1" />
    <span>
      Flat No: T2, Sai Landmark Apartments, Kamala Nagar, Near HDFC Bank,
      Chaitanyapuri, Hyderabad 500060
    </span>
  </a>
</li>

                <li>
                  <a href="tel:+919160006006" className="flex gap-3 text-zinc-500 hover:text-brand-400 transition-colors">
                    <Phone className="w-5 h-5 text-brand-500" />
                    <span>+91 9160006006</span>
                  </a>
                </li>

                <li>
                  <a href="tel:+919182344936" className="flex gap-3 text-zinc-500 hover:text-brand-400 transition-colors">
                    <Phone className="w-5 h-5 text-brand-500" />
                    <span>+91 9182344936</span>
                  </a>
                </li>

                <li>
                  <a href="mailto:info@ecodelearning.com" className="flex gap-3 text-zinc-500 hover:text-brand-400 transition-colors">
                    <Mail className="w-5 h-5 text-brand-500" />
                    <span>info@ecodelearning.com</span>
                  </a>
                </li>

              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
            <p>© {new Date().getFullYear()} E-Code Software Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-sky-600 to-blue-600 
            rounded-full shadow-lg shadow-sky-500/20 flex items-center justify-center text-white 
            hover:from-sky-500 hover:to-blue-500 transition-all z-50"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
