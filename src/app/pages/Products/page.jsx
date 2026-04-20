"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Sparkles, Cpu, CloudSun, Satellite, Droplet, Thermometer, Wind, BarChart3, Leaf } from "lucide-react";

const products = [
  {
    name: "AquaSave Pro",
    tagline: "Smart IoT Soil Monitoring",
    desc: "Advanced multi-parameter IoT sensor measuring soil moisture, temperature, pH, and EC for precision irrigation.",
    specs: ["6+ soil parameters", "Solar powered", "Cellular connectivity", "IP67 rated", "2-year battery"],
    icon: Cpu,
    image: "/assets/sensor-probe.png",
    color: "from-green-600 to-emerald-500",
  },
  {
    name: "Ag5x",
    tagline: "Satellite-Powered Crop Intelligence",
    desc: "AI-driven crop monitoring platform providing NDVI, crop health maps, stress detection, and yield predictions.",
    specs: ["NDVI", "Stress detection", "Historical data", "Yield prediction", "Dashboard"],
    icon: Satellite,
    image: "/assets/satellite-platform.jpg",
    color: "from-purple-600 to-indigo-500",
  },
  {
    name: "FaaS",
    tagline: "Farming as a Service",
    desc: "Intelligent crop advisory platform delivering actionable insights, recommendations, and alerts for better farm decisions.",
    specs: ["Crop advisory", "Disease alerts", "Irrigation planning", "Fertilizer guidance", "Multilingual support"],
    icon: CloudSun,
    image: "/assets/weather-tracker.png",
    color: "from-blue-600 to-cyan-500",
  },
];

const features = [
  "Real-time monitoring",
  "AI-powered analytics",
  "Seamless integration",
  "Enterprise security",
];

export default function ProductsPage() {
  return (
    <>
<section className="relative py-24 md:py-32 overflow-hidden">
  
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/assets/product.png" // 👈 jo image maine banayi usay yahan save karke use karo
      alt="Precision Agriculture"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Dark Overlay (important for text visibility) */}
  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />

  {/* Content */}
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
    
    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
      <Sparkles className="w-4 h-4 text-green-300" />
      <span className="text-sm font-medium tracking-wide">
        Precision Hardware & Software
      </span>
    </div>

    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
      Our Products
    </h1>

    <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
      Purpose-built solutions that combine rugged hardware with intelligent software for modern farming.
    </p>

  </div>
</section>

      {/* FEATURE HIGHLIGHTS */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS LIST */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          {products.map((product, idx) => (
            <div
              key={product.name}
              className={`flex flex-col ${
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center group`}
            >
              {/* Image Container */}
              <div className="lg:w-1/2">
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 flex items-center justify-center h-96 shadow-lg group-hover:shadow-xl transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Icon badge */}
                  <div className={`absolute top-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-br ${product.color} text-white flex items-center justify-center shadow-md`}>
                    <product.icon className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 space-y-5">
                <div className="inline-flex items-center gap-2">
                  <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${product.color}`} />
                  <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                    {product.tagline}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {product.name}
                </h2>

                <p className="text-gray-600 leading-relaxed text-lg">
                  {product.desc}
                </p>

                {/* Specs Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {product.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-full shadow-sm hover:border-green-300 hover:bg-green-50 transition-colors"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Request Info <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:border-green-500 hover:text-green-700 hover:bg-green-50 transition-all duration-300"
                  >
                    View Use Cases
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA (optional, but adds consistency) */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h4 className="text-xl font-medium mb-2">Ready to transform your farm?</h4>
          <p className="text-gray-400 mb-6">Join hundreds of farmers using Crop2X to increase yield and save resources.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 rounded-xl hover:bg-green-700 transition"
          >
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}