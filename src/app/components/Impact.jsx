import React from 'react'
import { stats } from '@/utils/const'

function Impact() {
  return (
    <div  >
                {/* STATS SECTION */}
        <div className='flex flex-col items-center justify-center'>
             <h2 className="text-4xl  mx-auto md:text-5xl font-bold text-gray-900 mb-4">Driving Measureable Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              From problems to strategy — everything you need for precision agriculture
            </p>   </div>
      <section className="py-16 bg-white relative">
       
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-700 mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Impact