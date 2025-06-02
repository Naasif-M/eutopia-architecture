"use client"

import { motion } from "framer-motion"
import { Building } from "lucide-react"

const Navigation = ({ currentSection, setCurrentSection }) => {
  const navItems = [
    { name: "HOME", index: 0 },
    { name: "SERVICES", index: 1 },
    { name: "ABOUT", index: 2 },
    { name: "CONTACT", index: 3 },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-black/50 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 border-2 border-violet-500 rounded-full flex items-center justify-center bg-violet-500/20">
            <Building size={18} className="text-violet-500" />
          </div>
          <div className="text-white text-xl font-bold tracking-wider font-serif">EUTOPIA</div>
        </div>

        {/* Navigation items */}
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setCurrentSection(item.index)}
              className={`text-sm tracking-wider transition-all duration-300 relative px-4 py-2 font-medium ${
                currentSection === item.index ? "text-violet-500" : "text-white/80 hover:text-white"
              }`}
            >
              {item.name}
              {currentSection === item.index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-violet-500"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
