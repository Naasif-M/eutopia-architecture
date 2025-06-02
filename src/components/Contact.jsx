"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, ArrowRight, Building } from "lucide-react"

const Contact = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-16 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left side - Contact info */}
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            {/* Header with logo */}
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-16 h-16 border-4 border-violet-600 rounded-full flex items-center justify-center">
                <Building size={24} className="text-violet-600" />
              </div>
              <h2 className="text-6xl font-bold tracking-wider">
                CONTACT <span className="text-violet-500">US</span>
              </h2>
            </div>

            <p className="text-xl opacity-80 mb-16 leading-relaxed">
              Ready to transform your space? Let's discuss your architectural vision and create something extraordinary
              together. Our team is here to guide you through every step of the design and construction process.
            </p>

            <div className="space-y-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-center space-x-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg text-violet-400">EMAIL</p>
                  <p className="opacity-70">hello@eutopia-architecture.com</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex items-center space-x-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg text-violet-400">PHONE</p>
                  <p className="opacity-70">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex items-center space-x-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg text-violet-400">OFFICE</p>
                  <p className="opacity-70">123 Design District, New York, NY 10001</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex items-center space-x-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg text-violet-400">HOURS</p>
                  <p className="opacity-70">Mon - Fri: 9:00 AM - 6:00 PM</p>
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
              <h3 className="text-2xl font-bold mb-4 text-violet-600">CONSULTATION SERVICES</h3>
              <div className="grid grid-cols-1 gap-3">
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
            <div className="bg-stone-100 text-black p-12 rounded-2xl">
              <h3 className="text-3xl font-bold mb-8 tracking-wider text-violet-600">START YOUR PROJECT</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-3 tracking-wider">FIRST NAME *</label>
                    <input
                      type="text"
                      className="w-full border-b-2 border-black/20 focus:border-violet-600 bg-transparent py-3 outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-3 tracking-wider">LAST NAME *</label>
                    <input
                      type="text"
                      className="w-full border-b-2 border-black/20 focus:border-violet-600 bg-transparent py-3 outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 tracking-wider">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    className="w-full border-b-2 border-black/20 focus:border-violet-600 bg-transparent py-3 outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 tracking-wider">PHONE NUMBER</label>
                  <input
                    type="tel"
                    className="w-full border-b-2 border-black/20 focus:border-violet-600 bg-transparent py-3 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 tracking-wider">PROJECT TYPE *</label>
                  <select
                    className="w-full border-b-2 border-black/20 focus:border-violet-600 bg-transparent py-3 outline-none transition-colors"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Architecture</option>
                    <option value="commercial">Commercial Architecture</option>
                    <option value="interior">Interior Design</option>
                    <option value="landscape">Landscape Architecture</option>
                    <option value="renovation">Renovation & Restoration</option>
                    <option value="consultation">Design Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 tracking-wider">PROJECT BUDGET</label>
                  <select className="w-full border-b-2 border-black/20 focus:border-violet-600 bg-transparent py-3 outline-none transition-colors">
                    <option value="">Select budget range</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k-500k">$250,000 - $500,000</option>
                    <option value="500k-1m">$500,000 - $1,000,000</option>
                    <option value="1m+">$1,000,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 tracking-wider">PROJECT DESCRIPTION *</label>
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
          className="mt-32 pt-16 border-t border-violet-600/30 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-4 mb-8 md:mb-0">
            <div className="w-12 h-12 border-2 border-violet-600 rounded-full flex items-center justify-center">
              <Building size={20} className="text-violet-600" />
            </div>
            <div>
              <p className="text-3xl font-bold tracking-wider">EUTOPIA</p>
              <p className="opacity-60 text-sm">ARCHITECTURE & DESIGN</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="opacity-60 text-sm mb-2">© 2024 Eutopia Architecture. All rights reserved.</p>
            <div className="flex space-x-6 justify-center md:justify-end">
              {["INSTAGRAM", "LINKEDIN", "BEHANCE", "PINTEREST"].map((social) => (
                <button
                  key={social}
                  className="text-xs tracking-wider opacity-60 hover:opacity-100 hover:text-violet-500 transition-all"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
