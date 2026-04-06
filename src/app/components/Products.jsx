import React from 'react'
import { products } from '@/utils/const'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
function Products() {
  return (
    <div>   
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              Cutting-Edge Technology
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Innovative solutions that grow with you, from soil to satellite</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div
                key={product.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.highlight}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{product.desc}</p>
                  <Link
                    href="/products"
                    className="inline-flex items-center text-green-700 font-semibold hover:text-green-800 transition-colors group/link"
                  >
                    Learn more <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border-2 border-green-600 text-green-700 font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
            >
              View All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section></div>
  )
}

export default Products