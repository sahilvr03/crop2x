import React from 'react'
import { solutions } from '@/utils/const'
import Link from 'next/link'
import Image from 'next/image'
function WeOffer() {
  return (
    <div>
          <section className="py-24 bg-white relative">
        {/* Clean gradient background instead of problematic SVG pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              End-to-End Ecosystem
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Integrated Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
             Design for Every Agriculture Stakeholders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {solutions.map((solution) => (
  <div
    key={solution.title}
    className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
  >
    {/* Image Container with Center Scale on Hover */}
    <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
      <Image
        src={solution.image}
        alt={solution.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
    <p className="text-gray-600 mb-5 leading-relaxed text-base">{solution.desc}</p>
    
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-green-700 bg-green-50 px-4 py-2 rounded-full">
        {solution.stat}
      </span>
      <Link 
        href="/solutions" 
        className="text-green-600 hover:text-green-800 transition-colors font-medium"
      >
        Learn More →
      </Link>
    </div>
  </div>
))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default WeOffer