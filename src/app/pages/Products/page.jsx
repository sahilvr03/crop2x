"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Sparkles, Cpu, CloudSun, Satellite, Droplet, Thermometer, Wind, BarChart3, Leaf } from "lucide-react";

const products = [
  {
    name: "Crop2X Sensor Probes",
    tagline: "Eyes in the Soil",
    desc: "Advanced multi-parameter soil monitoring probes measuring moisture, temperature, pH, EC, and nutrients in real-time.",
    specs: ["6+ soil parameters", "Solar powered", "Cellular connectivity", "IP67 rated", "2-year battery"],
    icon: Cpu,
    image: "/assets/sensor-probe.png",
    color: "from-green-600 to-emerald-500",
  },
  {
    name: "Weather Tracker",
    tagline: "Hyper-Local Weather Intelligence",
    desc: "Micro weather stations providing field-level data like temperature, humidity, rainfall, wind, and pressure.",
    specs: ["8 parameters", "Solar powered", "5-min intervals", "Alerts", "API integration"],
    icon: CloudSun,
    image: "/assets/weather-tracker.png",
    color: "from-blue-600 to-cyan-500",
  },
  {
    name: "Satellite Intelligence Platform",
    tagline: "Farm Insights from Space",
    desc: "Ag5X AI platform delivering NDVI, crop health maps, stress detection, and yield predictions.",
    specs: ["NDVI", "Stress detection", "Historical data", "Yield prediction", "Dashboard"],
    icon: Satellite,
    image: "/assets/satellite-platform.jpg",
    color: "from-purple-600 to-indigo-500",
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
      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-800 to-emerald-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-4 h-4 text-green-300" />
            <span className="text-sm font-medium tracking-wide">Precision Hardware & Software</span>
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

      {/* COMPARISON / CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 text-center shadow-sm">
            <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Not sure which product fits your farm?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Our agronomy experts will help you design the perfect solution tailored to your crops, climate, and goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all hover:scale-105"
            >
              Talk to an Expert <ArrowRight size={16} />
            </Link>
          </div>
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