"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/courses" },
  { name: "Portfolio", href: "/Projects" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-white/5
        ${
          isScrolled
            ? "bg-[rgba(9,9,11,0.85)] backdrop-blur-xl shadow-lg shadow-black/20"
            : "bg-[rgba(9,9,11,0.65)] backdrop-blur-md"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-32 h-17 group-hover:scale-110 transition-transform">
              <Image
                src="/logo.png"
                alt="ECLS Logo"
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href))

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium transition-colors group
                    ${isActive ? "text-blue-400" : "text-white hover:text-blue-400"}`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white px-6 rounded-xl shadow-lg shadow-sky-500/25 group">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-zinc-900 border-t border-zinc-800"
          >
            <div className="px-6 py-4 space-y-2">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href))

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 px-4 rounded-lg font-medium transition-colors
                      ${
                        isActive
                          ? "bg-blue-500/10 text-blue-400"
                          : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                      }`}
                  >
                    {item.name}
                  </Link>
                )
              })}

              <Link href="/contact" className="block pt-2">
                <Button className="w-full bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-xl">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
