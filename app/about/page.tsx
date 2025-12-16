"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, Lightbulb, Award, BookOpen, Briefcase, Heart, Star, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We are passionate about empowering students with industry-ready skills",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from curriculum to delivery",
  },
  { icon: Users, title: "Community", description: "Building a strong community of learners and professionals" },
  { icon: Zap, title: "Innovation", description: "Constantly updating our courses with the latest technologies" },
]

const team = [
  {
    name: "B. Prashanth Reddy",
    role: "Managing Director",
    image: "/team/prashanth-reddy.jpg",
  },
    {
    name: "Y. Badri",
    role: "Matlab & Embedded Systems Trainer",
    image: "/team/badri.jpg",
  },
  {
    name: "Priya Sabde",
    role: "ML Engineer",
    image: "/team/priya-sabde.jpg",
  },
  {
    name: "Raj Sharma",
    role: "AI Engineer & Researcher",
    image: "/team/raj-sharma.jpg",
    profileUrl: "https://rajsharma7.netlify.app/",
  },
  {
    name: "Sriram Posimsetti",
    role: "AI Engineer",
    image: "/team/sriram-posimsetti.jpg",
    profileUrl: "https://sriram-portfolio1.netlify.app/",
  },
  {
    name: "Malli Gowri Sankar",
    role: "Software Developer",
    image: "/team/malli-gowri-sankar.jpg",
  },
  {
    name: "Busagani Hari Krishna",
    role: "Full Stack Developer",
    image: "/team/busagani-hari-krishna.png",
  },
]


const milestones = [
  { year: "2012", title: "Founded", description: "Started with a vision to transform IT education" },
  { year: "2015", title: "1000+ Students", description: "Reached our first milestone of training students" },
  { year: "2018", title: "Expanded Services", description: "Added Ph.D assistance and paper publication services" },
  { year: "2021", title: "10,000+ Alumni", description: "Built a strong network of successful professionals" },
  { year: "2024", title: "Industry Leader", description: "Recognized as a leading IT training institute" },
]

export default function About() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-zinc-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')] bg-cover bg-center opacity-10" />
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
              ABOUT US
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Empowering Careers Through
              <span className="bg-gradient-to-r from-sky-400 to-blue-900 bg-clip-text text-transparent">
                {" "}
                Excellence
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Since 2012, E-Code Learning Software Services has been at the forefront of IT education, transforming
              thousands of careers through innovative training programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-zinc">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070"
                  alt="Our story"
                  width={800}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-8 -right-8 bg-gradient-to-r from-sky-400 to-blue-900 rounded-2xl p-6 shadow-xl"
                >
                  <p className="text-4xl font-bold text-white">10+</p>
                  <p className="text-white/80">Years of Excellence</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
                OUR STORY
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">
                A Journey of
                <span className="text-sky-500"> Transformation</span>
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                E-Code Learning Software Services was founded with a simple yet powerful vision: to bridge the gap
                between academic knowledge and industry requirements. We believe that every student deserves access to
                quality education and practical training.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Over the years, we have evolved into a comprehensive learning platform offering training in cutting-edge
                technologies like IoT, Embedded Systems, VLSI, Python, and Java, along with research assistance
                services.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, label: "ISO Certified" },
                  { icon: BookOpen, label: "Expert Faculty" },
                  { icon: Briefcase, label: "Placement Support" },
                  { icon: Star, label: "Industry Recognition" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-blue-900 border border-blue-800 rounded-xl">
                    <item.icon className="w-6 h-6 text-sky-500" />
                    <span className="font-medium text-white">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white"
            >
              <div className="w-16 h-16 bg-/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90 leading-relaxed">
                To provide world-class technical education and training that empowers individuals to achieve their
                career goals. We are committed to delivering practical, industry-relevant skills through innovative
                teaching methodologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-sky-500 to-blue-500 rounded-3xl p-8 text-white"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To become the most trusted and innovative IT training institute in India, recognized globally for
                producing skilled professionals who drive technological advancement and innovation across industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-zinc">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-sky-50 text-sky-600 rounded-full text-sm font-semibold mb-4">
              OUR VALUES
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              What We
              <span className="text-sky-500"> Stand For</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-zinc-900 rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-black/30 transition-all"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black-900 mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-semibold mb-4 border border-blue-500/20">
              OUR JOURNEY
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Milestones of
              <span className="text-sky-400"> Success</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-700 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="flex-1 hidden md:block" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg z-10 hidden md:flex">
                    <span className="text-white font-bold text-sm">{milestone.year.slice(2)}</span>
                  </div>
                  <div className="flex-1">
                    <div className={`bg-slate-800 rounded-2xl p-6 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                      <span className="text-sky-400 font-bold">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-white mt-2">{milestone.title}</h3>
                      <p className="text-slate-400 mt-2">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-zinc">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
              OUR TEAM
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Meet Our
              <span className="text-sky-400"> Leaders</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => {
  const Card = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
    >
      <div className="relative rounded-2xl overflow-hidden mb-4">
        <Image
          src={member.image}
          alt={member.name}
          width={400}
          height={400}
          className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="text-xl font-bold text-white">{member.name}</h3>
      <p className="text-zinc-400">{member.role}</p>
    </motion.div>
  )

  return member.profileUrl ? (
    <Link
      key={index}
      href={member.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {Card}
    </Link>
  ) : (
    <div key={index}>{Card}</div>
  )
})}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-sky-400 to-blue-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of successful professionals who transformed their careers with us.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-sky-400 hover:bg-slate-100 px-8 h-14 rounded-xl shadow-lg group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
