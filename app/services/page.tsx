"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  FileText,
  Search,
  GraduationCap,
  PenTool,
  BookOpen,
  Award,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Users,
  Target,
  Lightbulb,
} from "lucide-react"

const mainServices = [
  {
    icon: FileText,
    title: "Paper Publication",
    description:
      "Get your research published in reputed international journals with high impact factors. We assist in manuscript preparation, journal selection, and submission process.",
    features: [
      "Journal Selection Guidance",
      "Manuscript Formatting",
      "Peer Review Support",
      "Indexing Assistance",
      "Quick Publication",
    ],
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=2070",
  },
  {
    icon: Search,
    title: "Plagiarism Check",
    description:
      "Comprehensive plagiarism detection using industry-standard tools to ensure your work is 100% original and meets academic integrity standards.",
    features: [
      "Turnitin Report",
      "iThenticate Verification",
      "Detailed Analysis",
      "Similarity Index",
      "Rewriting Support",
    ],
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070",
  },
  {
    icon: GraduationCap,
    title: "Ph.D Assistance",
    description:
      "End-to-end support for doctoral candidates from topic selection to thesis defense. Expert guidance at every stage of your research journey.",
    features: ["Topic Selection", "Literature Review", "Methodology Design", "Data Analysis", "Thesis Writing"],
    color: "from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=2070",
  },
  {
    icon: PenTool,
    title: "Paper Write-Up",
    description:
      "Professional academic writing services for research papers, thesis, and dissertations. Quality content that meets international standards.",
    features: ["Research Papers", "Thesis Writing", "Technical Reports", "Case Studies", "Literature Survey"],
    color: "from-green-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073",
  },
]

const additionalServices = [
  {
    icon: Briefcase,
    title: "Industrial Training",
    description: "Hands-on training programs designed with industry requirements in mind.",
  },
  { icon: BookOpen, title: "Workshops", description: "Intensive workshops on latest technologies and methodologies." },
  {
    icon: Award,
    title: "Certifications",
    description: "Recognized certifications to boost your professional credentials.",
  },
  { icon: Users, title: "Placement Support", description: "Comprehensive placement assistance with top companies." },
  { icon: Target, title: "Project Guidance", description: "Expert mentorship for academic and industrial projects." },
  { icon: Lightbulb, title: "Research Consultation", description: "One-on-one consultation with research experts." },
]

export default function Services() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-black-900 via-purple-900 to-black-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070')] bg-cover bg-center opacity-10" />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-20 right-20 w-96 h-96 bg-black-500/20 rounded-full blur-3xl"
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
              OUR SERVICES
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive
              <span className="bg-gradient-to-r from-sky-400 to-blue-900 bg-clip-text text-transparent">
                {" "}
                Academic Support
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From research assistance to paper publication, we provide end-to-end support for your academic success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Image Side */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl blur-2xl opacity-30`}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="relative rounded-3xl shadow-2xl w-full"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className={`absolute -bottom-6 ${index % 2 === 1 ? "-left-6" : "-right-6"} bg-gradient-to-r ${service.color} rounded-2xl p-6 shadow-xl`}
                    >
                      <service.icon className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span
                    className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent border border-slate-200`}
                  >
                    SERVICE
                  </span>
                  <h2 className="text-4xl font-bold text-white-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-white-600 mb-8 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button
                      className={`bg-gradient-to-r ${service.color} text-white px-8 h-12 rounded-xl shadow-lg group`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
              MORE SERVICES
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Additional
              <span className="text-sky-500"> Support Services</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-zinc-800 hover:shadow-xl hover:border-zinc-600 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-sky-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white-900 mb-2">{service.title}</h3>
                <p className="text-white-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-semibold mb-4 border border-blue-500/20">
              OUR PROCESS
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              How We
              <span className="text-sky-400"> Work</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Discuss your requirements and goals with our experts",
              },
              { step: "02", title: "Planning", description: "Create a customized plan tailored to your needs" },
              { step: "03", title: "Execution", description: "Expert team works on delivering quality results" },
              { step: "04", title: "Delivery", description: "Timely delivery with ongoing support" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-slate-800 rounded-2xl p-6 text-center">
                  <span className="text-5xl font-bold bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-4 mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
                {index < 3 && <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-700" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-sky-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today and let us help you achieve your academic and professional goals.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-sky-600 hover:bg-slate-100 px-8 h-14 rounded-xl shadow-lg group"
              >
                Contact Us Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
