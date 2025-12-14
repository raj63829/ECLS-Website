"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FileText, Search, GraduationCap, PenTool, ArrowRight } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Cloud Architecture",
    description:
      "Design and deploy scalable cloud infrastructure on AWS, Azure, and GCP. Optimize performance, security, and cost-efficiency for your enterprise applications.",
    color: "from-blue-500 to-cyan-500",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
  },
  {
    icon: Search,
    title: "AI & Machine Learning",
    description:
      "Leverage artificial intelligence and machine learning to automate processes, gain insights, and create intelligent applications that learn and adapt.",
    color: "from-indigo-500 to-purple-500",
    bgImage: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2070",
  },
  {
    icon: GraduationCap,
    title: "Enterprise Software",
    description:
      "Custom enterprise applications built with modern frameworks. Scalable, secure, and designed to integrate seamlessly with your existing systems.",
    color: "from-cyan-500 to-teal-500",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070",
  },
  {
    icon: PenTool,
    title: "DevOps & Automation",
    description:
      "Streamline your development lifecycle with CI/CD pipelines, infrastructure as code, and automated testing for faster, reliable deployments.",
    color: "from-teal-500 to-emerald-500",
    bgImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088",
  },
]

export default function ServicesSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070')] bg-cover bg-center opacity-5" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900" />
      </div>

      {/* Animated Shapes */}
      <motion.div style={{ y }} className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-semibold mb-4 border border-blue-500/20">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Enterprise Solutions
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              That Scale
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive software development services designed to accelerate your digital transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 h-full">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <img src={service.bgImage} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="relative p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>

                  <button className="flex items-center gap-2 text-white font-semibold group/btn">
                    <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      Learn More
                    </span>
                    <ArrowRight className={`w-4 h-4 text-white group-hover/btn:translate-x-2 transition-transform`} />
                  </button>
                </div>

                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
