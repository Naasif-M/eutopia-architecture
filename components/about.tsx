"use client"

import { motion } from "framer-motion"
import { Users, Target, Lightbulb, Building } from "lucide-react"

interface AboutProps {
  onNavigate: (direction: "left" | "right") => void
}

const team = [
  {
    name: "ALEXANDRA STONE",
    role: "PRINCIPAL ARCHITECT",
    experience: "15+ Years",
    image: "/placeholder.svg?height=400&width=300",
    specialization: "Sustainable Design",
  },
  {
    name: "MICHAEL CHEN",
    role: "DESIGN DIRECTOR",
    experience: "12+ Years",
    image: "/placeholder.svg?height=400&width=300",
    specialization: "Commercial Architecture",
  },
  {
    name: "SARAH WILLIAMS",
    role: "LANDSCAPE ARCHITECT",
    experience: "10+ Years",
    image: "/placeholder.svg?height=400&width=300",
    specialization: "Environmental Design",
  },
  {
    name: "DAVID MARTINEZ",
    role: "PROJECT MANAGER",
    experience: "8+ Years",
    image: "/placeholder.svg?height=400&width=300",
    specialization: "Construction Management",
  },
]

const values = [
  {
    icon: Target,
    title: "PRECISION",
    description: "Every detail matters in creating architectural excellence that stands the test of time.",
  },
  {
    icon: Lightbulb,
    title: "INNOVATION",
    description: "We embrace cutting-edge design technologies and sustainable building practices.",
  },
  {
    icon: Users,
    title: "COLLABORATION",
    description: "Working closely with clients to transform their vision into extraordinary reality.",
  },
  {
    icon: Building,
    title: "EXCELLENCE",
    description: "Committed to delivering exceptional architectural solutions that exceed expectations.",
  },
]

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="container lg:px-16 px-8 py-24 mx-auto  ">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32"
        >
          <div>
            <h2
              className="lg:text-7xl text-3xl font-bold tracking-wider mb-12 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ABOUT <span className="text-violet-500">EUTOPIA</span>
            </h2>
            <div className="space-y-8 text-lg leading-relaxed text-white">
              <p>
                Founded in 2008, <span className="text-violet-400 font-semibold">Eutopia Architecture</span> has been at
                the forefront of innovative design, creating spaces that harmoniously blend form, function, and
                environmental consciousness. Our multidisciplinary approach encompasses architecture, interior design,
                landscape architecture, and construction management.
              </p>
              <p>
                We believe that exceptional architecture has the power to transform communities, enhance lives, and
                create lasting legacies. Our team of passionate architects, designers, and engineers work
                collaboratively to deliver projects that exceed expectations and stand as testaments to design
                excellence.
              </p>
              <p>
                From residential masterpieces to commercial landmarks, from sustainable housing developments to
                cutting-edge office complexes, we approach each project with fresh perspective, innovative solutions,
                and unwavering commitment to quality.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <img
              src="/design.webp"
              alt="Eutopia Architecture Studio"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Our Design Studio</h3>
              <p className="opacity-90">Where Innovation Meets Creativity</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-32"
        >
          <h3 className="lg:text-4xl text-3xl font-bold lg:mb-16 mb-10 text-center text-white">
            OUR CORE <span className="text-violet-500">VALUES</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-20 h-20 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4 tracking-wider text-violet-400">{value.title}</h4>
                <p className="opacity-70 leading-relaxed text-white">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        

        {/* Company Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-violet-600 text-white p-16 rounded-2xl"
        >
          <h3 className="text-4xl font-bold mb-12 text-center">OUR PHILOSOPHY</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Building size={48} className="mx-auto mb-4 opacity-80" />
              <h4 className="text-xl font-bold mb-2">SUSTAINABLE DESIGN</h4>
              <p className="opacity-80">Creating environmentally conscious architecture for future generations</p>
            </div>
            <div className="text-center">
              <Users size={48} className="mx-auto mb-4 opacity-80" />
              <h4 className="text-xl font-bold mb-2">CLIENT-CENTERED</h4>
              <p className="opacity-80">Every project begins with understanding our client's unique vision</p>
            </div>
            <div className="text-center">
              <Target size={48} className="mx-auto mb-4 opacity-80" />
              <h4 className="text-xl font-bold mb-2">TIMELESS QUALITY</h4>
              <p className="opacity-80">Designing spaces that remain beautiful and functional for decades</p>
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "50+", label: "PROJECTS COMPLETED" },
            { number: "5+", label: "YEARS OF EXPERIENCE" },
            { number: "23+", label: "SATISFIED CLIENTS" },
            { number: "98%", label: "CLIENT SATISFACTION" },
          ].map((stat, index) => (
            <div key={stat.label}>
              <h4 className="text-4xl font-bold text-violet-400 mb-2">{stat.number}</h4>
              <p className="text-sm tracking-wider opacity-70 text-white">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
