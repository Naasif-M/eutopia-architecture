"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface HeroProps {
  onScroll: (direction: "up" | "down") => void
}

export default function Hero({ onScroll }: HeroProps) {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated dot pattern background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-wider text-transparent mb-8"
            style={{
              WebkitTextStroke: "2px white",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            SHAPE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white text-xl md:text-2xl font-light tracking-widest"
          >
            CREATIVE STUDIO
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16"
          >
            <button onClick={() => onScroll("down")} className="text-white hover:text-gray-300 transition-colors">
              <ChevronDown size={32} className="animate-bounce" />
            </button>
          </motion.div>
        </div>

        {/* Animated vertical lines */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "24rem" }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute right-8 md:right-16 lg:right-24 top-1/2 transform -translate-y-1/2 w-px bg-white opacity-60"
        />

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "16rem" }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="absolute left-8 md:left-16 lg:left-24 top-1/2 transform -translate-y-1/2 w-px bg-white opacity-40"
        />
      </div>

      {/* Footer info */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-8 text-white text-xs font-light tracking-wide opacity-60"
      >
        <p>EST. 2024</p>
        <p>LONDON, UK</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-8 right-8 text-white text-xs font-light tracking-wide opacity-60 text-right"
      >
        <p>SCROLL TO EXPLORE</p>
      </motion.div>
    </div>
  )
}
