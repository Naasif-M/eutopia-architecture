"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Play, Users, Building } from "lucide-react"

const Home = ({ onNavigate }) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-pattern-geometric"
      />

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Brand and text */}
            <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              {/* Logo and Brand */}
              <div className="flex items-center space-x-6 mb-12">
                <motion.div
                  initial={{ rotate: 0, scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="w-20 h-20 border-4 border-violet-500 rounded-full flex items-center justify-center">
                    <Building size={32} className="text-violet-500" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-violet-500 rounded-full"
                  />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-7xl font-bold tracking-wider font-serif"
                  style={{
                    background: "linear-gradient(135deg, #ffffff 0%, #7c3aed 50%, #6d28d9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  EUTOPIA
                </motion.h1>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-4xl md:text-5xl font-light mb-8 leading-tight font-serif"
              >
                Crafting Architectural
                <span className="block text-violet-500 font-bold">Excellence</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="text-xl opacity-80 mb-12 leading-relaxed max-w-lg"
              >
                We transform spaces into extraordinary experiences through innovative design, sustainable practices, and
                meticulous attention to detail. From residential masterpieces to commercial landmarks.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="flex items-center space-x-6 mb-8"
              >
                <button
                  onClick={() => onNavigate("right")}
                  className="flex items-center space-x-3 px-8 py-4 bg-violet-600 hover:bg-violet-700 transition-all duration-300 group"
                >
                  <span className="tracking-wider">EXPLORE PROJECTS</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="flex items-center space-x-3 text-white hover:text-violet-500 transition-colors group">
                  <div className="w-12 h-12 border-2 border-current rounded-full flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-all">
                    <Play size={16} />
                  </div>
                  <span className="tracking-wider">WATCH SHOWREEL</span>
                </button>
              </motion.div>

              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.7 }}
                className="flex items-center space-x-8"
              >
                <div className="w-px h-12 bg-white/30"></div>
                <span className="text-lg opacity-60 tracking-wider font-light">FOLLOW US</span>
                <div className="flex space-x-6">
                  <a
                    href="https://instagram.com/eutopia_architecture"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 border-2 border-violet-500/50 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-violet-500 hover:bg-violet-500/20 transition-all duration-300 group"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="group-hover:scale-110 transition-transform"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Interactive showcase */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="relative"
            >
              {/* Main showcase image */}
              <div className="relative group cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-lg"
                >
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Modern Architecture Showcase"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Skyline Residence</h3>
                    <p className="opacity-80">Contemporary Living Redefined</p>
                  </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                  className="absolute -top-4 -right-4 bg-violet-600 text-white p-4 rounded-lg shadow-lg"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-white rounded-full" />
                    <span className="font-bold text-sm">PREMIUM DESIGN</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 2.1, duration: 0.8 }}
                  className="absolute -bottom-4 -left-4 bg-violet-600 text-white p-4 rounded-lg shadow-lg"
                >
                  <div className="flex items-center space-x-2">
                    <Users size={20} />
                    <span className="font-bold text-sm">150+ PROJECTS</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated geometric elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute top-20 right-20 w-32 h-32 border-2 border-violet-500 rotate-45"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 2.3, duration: 1 }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-violet-500 rounded-full"
        />
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="relative z-10 py-24 bg-violet-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { number: "150+", label: "PROJECTS COMPLETED", icon: Building },
              { number: "25+", label: "YEARS EXPERIENCE", icon: Building },
              { number: "50+", label: "HAPPY CLIENTS", icon: Users },
              { number: "98%", label: "CLIENT SATISFACTION", icon: Building },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.7 + index * 0.2, duration: 0.8 }}
                className="text-center group cursor-pointer"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon size={32} className="text-white group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-white">{stat.number}</h3>
                <p className="text-sm tracking-wider opacity-70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Minimal Social Links - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 right-8 flex flex-col space-y-4"
      >
        <a
          href="https://instagram.com/eutopia_architecture"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center text-white/50 hover:text-violet-500 transition-all duration-300 group"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="group-hover:scale-125 transition-transform"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>

        {/* Subtle divider line */}
        <div className="w-px h-8 bg-white/20 mx-auto"></div>
      </motion.div>

      {/* Company Info - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-8 text-white/40 text-xs font-light tracking-wide"
      >
        <p className="mb-1">EST. 2024</p>
        <p>NEW YORK</p>
      </motion.div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <p className="text-sm opacity-60 mb-2">SWIPE RIGHT TO EXPLORE</p>
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="text-violet-500"
        >
          <ArrowRight size={24} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home
