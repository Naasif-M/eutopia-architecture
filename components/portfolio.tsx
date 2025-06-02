"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"

interface PortfolioProps {
  onScroll: (direction: "up" | "down") => void
}

const projects = [
  {
    id: 1,
    title: "BRAND IDENTITY",
    subtitle: "LUXURY FASHION",
    description:
      "Complete brand identity design for a luxury fashion house including logo, typography, and visual guidelines.",
    image: "/placeholder.svg?height=600&width=800",
    year: "2024",
    category: "BRANDING",
  },
  {
    id: 2,
    title: "DIGITAL EXPERIENCE",
    subtitle: "TECH STARTUP",
    description: "User experience design and development for a cutting-edge technology platform.",
    image: "/placeholder.svg?height=600&width=800",
    year: "2024",
    category: "UX/UI",
  },
  {
    id: 3,
    title: "PACKAGING DESIGN",
    subtitle: "PREMIUM COSMETICS",
    description: "Elegant packaging design system for a premium cosmetics brand launch.",
    image: "/placeholder.svg?height=600&width=800",
    year: "2023",
    category: "PACKAGING",
  },
  {
    id: 4,
    title: "MOTION GRAPHICS",
    subtitle: "FILM PRODUCTION",
    description: "Dynamic motion graphics and title sequences for independent film production.",
    image: "/placeholder.svg?height=600&width=800",
    year: "2023",
    category: "MOTION",
  },
]

export default function Portfolio({ onScroll }: PortfolioProps) {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 min-h-screen flex">
        {/* Left side - Project info */}
        <div className="w-1/2 flex flex-col justify-center p-16">
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-8">
              <span className="text-sm tracking-widest opacity-60">
                {String(currentProject + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-6xl font-bold mb-4 tracking-wider">{projects[currentProject].title}</h2>
                <h3 className="text-2xl font-light mb-8 opacity-80">{projects[currentProject].subtitle}</h3>
                <p className="text-lg leading-relaxed mb-8 opacity-70 max-w-md">
                  {projects[currentProject].description}
                </p>

                <div className="flex items-center space-x-8 mb-12">
                  <div>
                    <span className="text-sm opacity-60">YEAR</span>
                    <p className="text-lg">{projects[currentProject].year}</p>
                  </div>
                  <div>
                    <span className="text-sm opacity-60">CATEGORY</span>
                    <p className="text-lg">{projects[currentProject].category}</p>
                  </div>
                </div>

                <button className="flex items-center space-x-2 text-white hover:opacity-70 transition-opacity">
                  <span className="tracking-wider">VIEW PROJECT</span>
                  <ExternalLink size={16} />
                </button>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center space-x-8 mt-16">
            <button
              onClick={prevProject}
              className="p-3 border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={nextProject}
              className="p-3 border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Right side - Project image */}
        <div className="w-1/2 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-gray-800"
            >
              <img
                src={projects[currentProject].image || "/placeholder.svg"}
                alt={projects[currentProject].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Project indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`w-12 h-1 transition-all duration-300 ${index === currentProject ? "bg-white" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  )
}
