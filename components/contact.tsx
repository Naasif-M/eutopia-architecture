"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, ArrowRight, Building } from "lucide-react"

interface ContactProps {
  onNavigate: (direction: "left" | "right") => void
}

export default function Contact({ onNavigate }: ContactProps) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="container mx-auto lg:px-16 lg:py-24 px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left side - Contact info */}
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            {/* Header with logo */}
            <div className="flex items-center space-x-4 lg:mb-12 mb-6">
            
              <h2 className="lg:text-6xl text-2xl font-bold tracking-wider">
                CONTACT <span className="text-violet-500">US</span>
              </h2>
            </div>

            <p className="lg:text-xl text-md opacity-80 lg:mb-16 mb-8 leading-relaxed">
              Ready to transform your space? Let's discuss your architectural vision and create something extraordinary
              together. Our team is here to guide you through every step of the design and construction process.
            </p>

            <div className="space-y-8 lg:mb-16 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-center lg:space-x-4  space-x-2 group cursor-pointer"
              >
                <div className="lg:w-12 lg:h-12 w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-bold lg:text-lg text-md text-violet-400">EMAIL</p>
                  <p className="lg:text-lg text-sm opacity-70">hello@eutopia-architecture.com</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex items-center space-x-4 group cursor-pointer"
              >
                <div className="lg:w-12 lg:h-12 w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-bold lg:text-lg text-md text-violet-400">PHONE</p>
                  <p className=" lg:text-lg text-sm opacity-70">+91 88386 63605</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex items-center space-x-4 group cursor-pointer"
              >
                <div className="lg:w-12 lg:h-12 w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-bold lg:text-lg text-md text-violet-400">OFFICE</p>
                  <p className=" lg:text-lg text-sm opacity-70">123 Design District, New York, NY 10001</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex items-center space-x-4 group cursor-pointer"
              >
                <div className="lg:w-12 lg:h-12 w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-bold lg:text-lg text-md text-violet-400">HOURS</p>
                  <p className="lg:text-lg text-sm opacity-70">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </motion.div>
            </div>

            {/* Services highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="bg-stone-100 text-black p-8 rounded-lg"
            >
              <h3 className="lg:text-2xl text-xl font-bold mb-4 text-violet-600">CONSULTATION SERVICES</h3>
              <div className="grid grid-cols-1 lg:gap-3 gap-1.5">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-violet-600 rounded-full" />
                  <span>Initial Design Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-violet-600 rounded-full" />
                  <span>Site Analysis & Planning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-violet-600 rounded-full" />
                  <span>Budget & Timeline Planning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-violet-600 rounded-full" />
                  <span>3D Visualization & Rendering</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-stone-100 text-black p-12 rounded-2xl lg:mt-20 mt-2">
              <h3 className="lg:text-3xl text-2xl font-bold lg:mb-8 mb-4 tracking-wider text-violet-600">START YOUR PROJECT</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold lg:mb-3 mb-1 tracking-wider">FIRST NAME *</label>
                    <input
                      type="text"
                      className="w-full border-b-2 border-black/20 focus:border-violet-600 bg-transparent py-3 outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold lg:mb-3 mb-1 tracking-wider">LAST NAME *</label>
                    <input
                      type="text"
                      className="w-full border-b-2 border-black/20 focus:border-violet-600 bg-transparent py-3 outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold lg:mb-3 mb-1 tracking-wider">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    className="w-full border-b-2 border-black/20 focus:border-violet-600 bg-transparent py-3 outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold lg:mb-3 mb-1 tracking-wider">PHONE NUMBER</label>
                  <input
                    type="tel"
                    className="w-full border-b-2 border-black/20 focus:border-violet-600 bg-transparent py-3 outline-none transition-colors"
                  />
                </div>

           

                <div>
                  <label className="block text-sm font-bold lg:mb-3 mb-1 tracking-wider">PROJECT DESCRIPTION *</label>
                  <textarea
                    rows={4}
                    className="w-full border-b-2 border-black/20 focus:border-violet-600 bg-transparent py-3 outline-none transition-colors resize-none"
                    placeholder="Tell us about your vision, requirements, and any specific details about your project..."
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-violet-600 text-white hover:bg-violet-700 transition-all duration-300 tracking-wider font-bold group"
                >
                  <span>SEND MESSAGE</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="lg:mt-32 mt-10 pt-10 border-t border-violet-600/30 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-4 mb-5 md:mb-0">
            <div className="w-14 h-14 lg:w-20 lg:h-20 flex items-center justify-center overflow-hidden">
  <img src="/eutophia_logo.png" alt="Studio Icon" className="w-full h-full object-cover" />
</div>

            <div>
              <p className="lg:text-3xl text-xl font-bold tracking-wider">EUTOPIA</p>
              <hr className="w-32 mb-1"></hr>
              <p className="opacity-60 text-sm">ARCHITECTS</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="opacity-60 text-sm mb-2">© 2024 Eutopia Architecture. All rights reserved.</p>
            <div className="flex space-x-6 justify-center md:justify-end">
             
               <a href="https://www.instagram.com/eutopia_architects?igsh=MTU5MjZicjNjMnFldA==" target="_blank" rel="noopener noreferrer">
    <button
      className="text-xs tracking-wider opacity-60 hover:opacity-100 hover:text-violet-500 transition-all"
    >
      INSTAGRAM
    </button>
  </a>
             
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
