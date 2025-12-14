import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ECLS - E-Code Learning Software Services",
  description:
    "Enterprise software solutions, cloud architecture, AI & ML development, and digital transformation services",
  generator: "raj.app",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Iconify Script for Lucide Icons */}
        <script
          src="https://code.iconify.design/3/3.1.0/iconify.min.js"
          async
        ></script>
      </head>

      <body className="font-sans antialiased">
        {/* Global Header */}
        <Header />

        {/* Page Content */}
        {children}

        {/* Global Footer */}
        <Footer />

        {/* Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
