"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Home from "./components/Home"
import Services from "./components/Services"
import About from "./components/About"
import Contact from "./components/Contact"
import Navigation from "./components/Navigation"
import Cursor from "./components/Cursor"

function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const sections = [
    { id: "home", component: Home },
    { id: "services", component: Services },
    { id: "about", component: About },
    { id: "contact", component: Contact },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentSection])

  const handleNavigation = (direction) => {
    if (direction === "right" && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
    } else if (direction === "left" && currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="loading-content"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="loading-spinner"
          />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="loading-text"
          >
            EUTOPIA
          </motion.div>
        </motion.div>
      </div>
    )
  }

  const CurrentComponent = sections[currentSection].component

  return (
    <div className="relative overflow-hidden bg-black">
      <Cursor />
   

      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="min-h-screen relative z-10 bg-black"
        >
          <CurrentComponent onNavigate={handleNavigation} />
        </motion.div>
      </AnimatePresence>

      {/* Section indicators */}
      <div className="section-indicators">
        <div className="indicators-container">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={`indicator ${index === currentSection ? "active" : ""}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      {currentSection > 0 && (
        <button onClick={() => handleNavigation("left")} className="nav-arrow nav-arrow-left">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
      )}

      {currentSection < sections.length - 1 && (
        <button onClick={() => handleNavigation("right")} className="nav-arrow nav-arrow-right">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default App
