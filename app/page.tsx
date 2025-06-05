"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Home from "@/components/home"
import Services from "@/components/services"
import About from "@/components/about"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import Cursor from "@/components/cursor"
import { useIsMobile } from "@/hooks/use-mobile"


export default function HomePage() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const sections = [
    { id: "home", component: Home },
    { id: "services", component: Services },
    { id: "about", component: About },
    { id: "contact", component: Contact },
  ]
const isMobile = useIsMobile()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  // Reset scroll position when section changes
  useEffect(() => {
   window.scrollTo(0, 0)
  setTimeout(()=>{
       
      window.scrollTo(0, 0)
  },1000)
  }, [currentSection])

 const handleNavigation = (direction: "left" | "right" | number) => {
  if (direction === "right" && currentSection < sections.length - 1) {
    setCurrentSection(currentSection + 1)
  } else if (direction === "left" && currentSection > 0) {
    setCurrentSection(currentSection - 1)
  } else if (typeof direction === "number" && direction >= 0 && direction < sections.length) {
    setCurrentSection(direction)
  }
}

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="flex items-center space-x-6"
        >
          {/* Logo */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="w-16 h-16 border-4 border-violet-500 border-t-transparent rounded-full"
          />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white text-6xl font-bold tracking-wider"
            style={{
              WebkitTextStroke: "2px white",
              color: "transparent",
            }}
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
       {!isMobile && <Cursor />}

      {/* Background Logo - Fixed positioning with more space above the text */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="text-[20rem] font-bold tracking-wider text-violet-500 select-none"
          style={{
            paddingTop: "30px", // Added 30px padding above the EUTOPIA text
            WebkitTextStroke: "2px currentColor",
            color: "transparent",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          EUTOPIA
        </motion.div>
      </div>

      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
          className="min-h-screen relative z-10"
        >
          <CurrentComponent onNavigate={handleNavigation} />
        </motion.div>
      </AnimatePresence>

      {/* Section indicators */}
      <div className="hidden md:fixed md:bottom-8 md:left-1/2 md:transform md:-translate-x-1/2 md:z-40">
  <div className="flex space-x-4">
    {sections.map((section, index) => (
      <button
        key={index}
        onClick={() => setCurrentSection(index)}
        className={`w-12 h-2 transition-all duration-300 ${
          index === currentSection ? "bg-violet-600" : "bg-black/40 border border-violet-600"
        }`}
      />
    ))}
  </div>
</div>


      {/* Navigation arrows - Better visibility with adaptive colors */}
     {!isMobile && currentSection > 0 && (
  <button
    onClick={() => handleNavigation("left")}
    className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 w-20 h-20 bg-violet-600 hover:bg-violet-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-white/20"
  >
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  </button>
)}

{!isMobile && currentSection < sections.length - 1 && (
  <button
    onClick={() => handleNavigation("right")}
    className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 w-20 h-20 bg-violet-600 hover:bg-violet-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-white/20"
  >
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
    </svg>
  </button>
)}

    </div>
  )
}
