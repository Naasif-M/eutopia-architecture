"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

interface NavigationProps {
  currentSection: number
  setCurrentSection: (index: number) => void
}

const navItems = [
  { name: "HOME", index: 0 },
  { name: "SERVICES", index: 1 },
  { name: "ABOUT", index: 2 },
  { name: "CONTACT", index: 3 },
]

export default function Navigation({ currentSection, setCurrentSection }: NavigationProps) {
  const isMobile = useIsMobile()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigate = (index: number) => {
    setCurrentSection(index)
    setMenuOpen(false)
  }

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <>
      {/* Top Desktop Navigation */}
      {!isMobile && (
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="fixed backdrop-blur-sm bg-black/85 top-0 left-0 right-0 z-50 px-8 py-5"
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="/eutophia_logo.png"
                  alt="Logo"
                  className="w-28 h-28 object-contain"
                />
              </div>
              <div
                className="text-white text-xl font-bold tracking-wider"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                EUTOPIA
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setCurrentSection(item.index)}
                  className={`text-sm tracking-wider transition-all duration-300 relative px-4 py-2 font-medium ${
                    currentSection === item.index ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: currentSection === item.index ? "#6366F1" : undefined,
                  }}
                >
                  {item.name}
                  {currentSection === item.index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5"
                      style={{ backgroundColor: "#6366F1" }}
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.nav>
      )}

      {/* Desktop Section Dots and Arrows */}
      {!isMobile && (
        <>
          {/* Navigation Dots */}
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 hidden md:flex">
            <div className="flex space-x-4">
              {navItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSection(index)}
                  className={`w-12 h-2 transition-all duration-300 ${
                    index === currentSection
                      ? "bg-violet-600"
                      : "bg-black/40 border border-violet-600"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Arrows */}
          {currentSection > 0 && (
            <button
              onClick={() => setCurrentSection(currentSection - 1)}
              className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 w-20 h-20 bg-violet-600 hover:bg-violet-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-white/20"
            >
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
          )}

          {currentSection < navItems.length - 1 && (
            <button
              onClick={() => setCurrentSection(currentSection + 1)}
              className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 w-20 h-20 bg-violet-600 hover:bg-violet-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-white/20"
            >
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
              </svg>
            </button>
          )}
        </>
      )}

      {/* Mobile Top Bar */}
      {isMobile && (
        <div className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-[9999] bg-black">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src="/eutophia_logo.png"
                alt="Logo"
                className="w-28 h-28 object-contain"
              />
            </div>
            <h1 className="text-white font-bold text-xl tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
              EUTOPIA
            </h1>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="w-8 h-8 flex flex-col justify-center items-center space-y-[5px]"
            aria-label="Toggle menu"
          >
            <span className={`block h-1 w-8 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-0.5 w-8 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-1 w-8 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      )}

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center space-y-10 z-[9998] text-white text-3xl tracking-wider"
          >
            {navItems.map((item) => (
              <button
                key={item.index}
                onClick={() => handleNavigate(item.index)}
                className="text-2xl tracking-widest border-b-4 border-white/30"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: currentSection === item.index ? "#7d52db" : undefined,
                }}
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
