"use client"

import { motion } from "framer-motion"
import { Home, Trees, Hammer, ArrowRight } from "lucide-react"
import { useMedia } from 'use-media'

interface ServicesProps {
  onNavigate: (direction: "left" | "right") => void
}



const services = [
  {
    icon: Home,
    title: "INTERIOR",
    subtitle: "DESIGN & ARCHITECTURE",
    description:
      "Transform your living and working spaces with our comprehensive interior design solutions. We create harmonious environments that blend functionality with aesthetic excellence.",
    features: [
      "Residential Interior Design",
      "Commercial Space Planning",
      "Custom Furniture Design",
      "Lighting Design",
      "Material Selection",
      "3D Visualization",
    ],
    image: "/interior.avif",
    color: "bg-violet-600",
    textColor: "text-white",
  },
  {
    icon: Trees,
    title: "LANDSCAPE",
    subtitle: "ARCHITECTURE & PLANNING",
    description:
      "Create stunning outdoor environments that seamlessly integrate with architectural design. Our landscape solutions enhance natural beauty while providing functional outdoor spaces.",
    features: [
      "Garden Design & Planning",
      "Sustainable Landscaping",
      "Outdoor Living Spaces",
      "Water Feature Design",
      "Plant Selection & Care",
      "Hardscape Integration",
    ],
    image: "/landscape.jpg",
    color: "bg-violet-700",
    textColor: "text-white",
  },
  {
    icon: Hammer,
    title: "CONSTRUCTION",
    subtitle: "MANAGEMENT & EXECUTION",
    description:
      "From concept to completion, our construction management ensures your architectural vision becomes reality. We oversee every detail with precision and quality craftsmanship.",
    features: [
      "Project Management",
      "Quality Control",
      "Timeline Coordination",
      "Budget Management",
      "Contractor Coordination",
      "Final Inspection",
    ],
    image: "/construction.jpg",
    color: "bg-violet-800",
    textColor: "text-white",
  },
]

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-8 lg:px-16 py-24"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:text-7xl text-5xl font-bold tracking-wider mb-6 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            OUR <span className="text-violet-500">SERVICES</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-l lg:text-xl opacity-70 max-w-3xl mx-auto text-white"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Comprehensive architectural solutions that bring your vision to life through expert design, sustainable
            practices, and exceptional craftsmanship.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.3 }}
              className={`${service.color} ${service.textColor} rounded-2xl overflow-hidden group cursor-pointer`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[900px] lg:min-h-[600px]">
                {/* Content Side */}
                <div className="lg:p-16 p-8 flex flex-col justify-center">
                  <div className="mb-8">
                    <service.icon  className="lg:mb-6  mb-4 opacity-80 w-9 h-9 lg:w-12 lg:h-12" />
                    <h3 className="text-2xl lg:text-5xl font-bold lg:mb-4 mb-2 tracking-wider">{service.title}</h3>
                    <h4 className="text-lg lg:text-xl opacity-80 mb-6 lg:mb-8">{service.subtitle}</h4>
                    <p className="text-lg leading-relaxed opacity-90 mb-4 lg:mb-12">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-12">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + index * 0.3 + featureIndex * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-current rounded-full opacity-60" />
                        <span className="text-sm tracking-wide">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  
                </div>

                {/* Image Side */}
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20" />

                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.3, duration: 0.5 }}
                    className="absolute top-8 right-8 bg-white text-violet-600 px-4 py-2 rounded-full text-sm font-bold"
                  >
                    PREMIUM SERVICE
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-center mt-32"
        >
          <h3 className="lg:text-4xl text-2xl font-bold mb-8 text-white">
            Ready to Start Your <span className="text-violet-500">Project</span>?
          </h3>
          <p className="lg:text-xl text-lg opacity-70 mb-12 max-w-2xl mx-auto text-white">
            Let's discuss how we can bring your architectural vision to life with our comprehensive design and
            construction services.
          </p>
          <button
            onClick={() => onNavigate(3)}
            className="px-12 py-4 bg-violet-600 text-white hover:bg-violet-700 transition-all duration-300 tracking-wider font-bold"
          >
            GET CONSULTATION
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}
