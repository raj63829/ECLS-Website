"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Clock,
  Users,
  Star,
  ArrowRight,
  Cpu,
  Code,
  Database,
  Cog,
  Layers,
  Terminal,
  Wrench,
  Building2,
  CheckCircle2,
} from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Internet of Things (IoT)",
    icon: Cpu,
    category: "Technology",
    duration: "3 Months",
    students: 1250,
    rating: 4.9,
    price: "₹25,000",
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070",
    description: "Learn to build smart connected devices and IoT solutions from scratch.",
    topics: [
      "Arduino & Raspberry Pi",
      "Sensors & Actuators",
      "Cloud Integration",
      "MQTT Protocol",
      "Real-time Data Processing",
    ],
    level: "Beginner to Advanced",
  },
  {
    id: 2,
    title: "Embedded Systems",
    icon: Layers,
    category: "Hardware",
    duration: "4 Months",
    students: 980,
    rating: 4.8,
    price: "₹30,000",
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
    description: "Master microcontroller programming and hardware-software integration.",
    topics: ["8051 & ARM Programming", "RTOS Concepts", "Device Drivers", "PCB Design", "Debugging Techniques"],
    level: "Intermediate",
  },
  {
    id: 3,
    title: "VLSI Design",
    icon: Database,
    category: "Hardware",
    duration: "6 Months",
    students: 750,
    rating: 4.9,
    price: "₹45,000",
    color: "from-green-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=2074",
    description: "Design and verify integrated circuits using industry-standard tools.",
    topics: ["Verilog/VHDL", "Digital Design", "ASIC/FPGA", "Physical Design", "Verification"],
    level: "Advanced",
  },
  {
    id: 4,
    title: "MATLAB Programming",
    icon: Cog,
    category: "Software",
    duration: "2 Months",
    students: 1500,
    rating: 4.7,
    price: "₹15,000",
    color: "from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    description: "Master mathematical computing, simulation, and data visualization.",
    topics: ["Matrix Operations", "Signal Processing", "Image Processing", "Simulink", "GUI Development"],
    level: "Beginner",
  },
  {
    id: 5,
    title: "Python Full Stack",
    icon: Code,
    category: "Software",
    duration: "4 Months",
    students: 2100,
    rating: 4.9,
    price: "₹35,000",
    color: "from-yellow-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=2074",
    description: "Comprehensive Python training from basics to web development and ML.",
    topics: ["Core Python", "Django/Flask", "Machine Learning", "Data Science", "API Development"],
    level: "Beginner to Advanced",
  },
  {
    id: 6,
    title: "Java Development",
    icon: Terminal,
    category: "Software",
    duration: "4 Months",
    students: 1800,
    rating: 4.8,
    price: "₹32,000",
    color: "from-red-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070",
    description: "Enterprise Java development with Spring Boot and microservices.",
    topics: ["Core Java", "Spring Framework", "Hibernate", "Microservices", "REST APIs"],
    level: "Intermediate",
  },
  {
    id: 7,
    title: "Mechanical CAD/CAM",
    icon: Wrench,
    category: "Engineering",
    duration: "3 Months",
    students: 650,
    rating: 4.6,
    price: "₹22,000",
    color: "from-slate-500 to-slate-700",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070",
    description: "Master AutoCAD, SolidWorks, and CNC programming.",
    topics: ["2D/3D Modeling", "Assembly Design", "CNC Programming", "Sheet Metal", "Rendering"],
    level: "Beginner",
  },
  {
    id: 8,
    title: "Civil Engineering",
    icon: Building2,
    category: "Engineering",
    duration: "3 Months",
    students: 520,
    rating: 4.7,
    price: "₹20,000",
    color: "from-amber-500 to-yellow-600",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070",
    description: "Structural design and analysis using modern tools.",
    topics: ["AutoCAD Civil 3D", "STAAD Pro", "ETABS", "Primavera", "Quantity Estimation"],
    level: "Intermediate",
  },
]

const categories = ["All", "Technology", "Hardware", "Software", "Engineering"]

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedCourse, setSelectedCourse] = useState<(typeof courses)[0] | null>(null)

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070')] bg-cover bg-center opacity-10" />
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
              OUR COURSES
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Industry-Ready
              <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                Training Programs
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Choose from our comprehensive courses designed to give you practical skills and accelerate your career.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses..."
                className="h-14 pl-12 pr-4 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-lg shadow-orange-500/25"
                    : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Courses Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedCourse(course)}
                  className="group cursor-pointer"
                >
                  <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg border border-zinc-800 hover:border-zinc-600 hover:shadow-xl transition-all h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      <div
                        className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-r ${course.color} flex items-center justify-center shadow-lg`}
                      >
                        <course.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge className="absolute top-4 right-4 bg-white/90 text-slate-700">{course.category}</Badge>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-white-900 mb-2 group-hover:text-sky-500 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-white-600 text-sm mb-4 line-clamp-2 flex-1">{course.description}</p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-white-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {course.students}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          {course.rating}
                        </span>
                      </div>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-xl font-bold text-white-900">{course.price}</span>
                        <Button size="sm" className={`bg-gradient-to-r ${course.color} text-white rounded-lg`}>
                          Enroll Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">No courses found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Course Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="relative h-64">
                <img
                  src={selectedCourse.image || "/placeholder.svg"}
                  alt={selectedCourse.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${selectedCourse.color} text-white text-sm mb-3`}
                  >
                    <selectedCourse.icon className="w-4 h-4" />
                    {selectedCourse.category}
                  </div>
                  <h2 className="text-3xl font-bold text-white">{selectedCourse.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <p className="text-slate-600 mb-6">{selectedCourse.description}</p>

                {/* Course Details */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-50 rounded-xl p-4 text-center">
                    <Clock className="w-6 h-6 mx-auto text-slate-400 mb-2" />
                    <p className="font-semibold text-slate-900">{selectedCourse.duration}</p>
                    <p className="text-sm text-slate-500">Duration</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 text-center">
                    <Users className="w-6 h-6 mx-auto text-slate-400 mb-2" />
                    <p className="font-semibold text-slate-900">{selectedCourse.students}+</p>
                    <p className="text-sm text-slate-500">Students</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 text-center">
                    <Star className="w-6 h-6 mx-auto text-yellow-400 fill-yellow-400 mb-2" />
                    <p className="font-semibold text-slate-900">{selectedCourse.rating}</p>
                    <p className="text-sm text-slate-500">Rating</p>
                  </div>
                </div>

                {/* Topics */}
                <h3 className="text-lg font-bold text-slate-900 mb-4">What You'll Learn</h3>
                <ul className="space-y-3 mb-6">
                  {selectedCourse.topics.map((topic, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-slate-700">{topic}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center justify-between pt-6 border-t">
                  <div>
                    <p className="text-sm text-slate-500">Course Fee</p>
                    <p className="text-3xl font-bold text-slate-900">{selectedCourse.price}</p>
                  </div>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className={`bg-gradient-to-r ${selectedCourse.color} text-white px-8 rounded-xl shadow-lg group`}
                    >
                      Enroll Now
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-sky-400 to-blue-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Not Sure Which Course to Choose?</h2>
            <p className="text-xl text-white/90 mb-8">
              Talk to our counselors and get personalized guidance based on your career goals.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-sky-600 hover:bg-slate-100 px-8 h-14 rounded-xl shadow-lg group"
              >
                Get Free Counseling
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
