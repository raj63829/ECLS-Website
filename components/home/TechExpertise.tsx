"use client"
import { motion } from "framer-motion"
import { Cpu, Code, Database, Cog, Layers, Terminal, Wrench, Building2 } from "lucide-react"

const technologies = [
  {
    name: "Cloud Solutions",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    description: "AWS, Azure, and GCP cloud infrastructure",
  },
  {
    name: "Microservices",
    icon: Layers,
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    description: "Scalable distributed system architecture",
  },
  {
    name: "AI & ML",
    icon: Database,
    color: "from-cyan-500 to-teal-500",
    bgColor: "bg-cyan-50",
    description: "Machine learning and data analytics",
  },
  {
    name: "DevOps",
    icon: Cog,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    description: "CI/CD and infrastructure automation",
  },
  {
    name: "Full Stack",
    icon: Code,
    color: "from-blue-600 to-cyan-600",
    bgColor: "bg-blue-50",
    description: "Modern web and mobile applications",
  },
  {
    name: "Enterprise Java",
    icon: Terminal,
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
    description: "Spring Boot and enterprise solutions",
  },
  {
    name: "Blockchain",
    icon: Wrench,
    color: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-50",
    description: "Decentralized applications and smart contracts",
  },
  {
    name: "Mobile Apps",
    icon: Building2,
    color: "from-sky-500 to-blue-600",
    bgColor: "bg-sky-50",
    description: "Native and cross-platform development",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function TechExpertise() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
            OUR TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text- mb-4">
            Building with
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {" "}
              Modern Technologies
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Leveraging industry-leading technologies to build scalable, secure, and performant solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div
                className="bg-zinc-950 rounded-2xl p-6 h-full transition-all duration-300 group-hover:shadow-xl border border-zinc-800 group-hover:border-zinc-600"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <tech.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-white">{tech.description}</p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90 rounded-2xl p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <tech.icon className="w-10 h-10 text-white mb-3" />
                  <span className="text-white font-bold text-lg mb-2">{tech.name}</span>
                  <button className="px-4 py-2 bg-white text-slate-900 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-colors">
                    View More
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
