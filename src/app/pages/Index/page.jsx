"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Cpu, Satellite, Droplets, Leaf, CheckCircle, Sparkles, TrendingUp, Droplet, CloudSun, BarChart3 } from "lucide-react";

const products = [
  {
    name: "Crop2X Sensor Probes",
    desc: "Advanced soil monitoring probes measuring moisture, temperature, pH, EC, and nutrient levels in real-time.",
    image: "/assets/sensor-probe.png",
    highlight: "Real-time data",
  },
  {
    name: "Weather Tracker",
    desc: "Solar-powered micro weather stations providing hyper-local weather data for precise farm planning.",
    image: "/assets/weather-tracker.png",
    highlight: "Hyper-local forecasts",
  },
  {
    name: "Satellite Intelligence Platform",
    desc: "AI-powered Ag5X platform delivering NDVI analysis and predictive insights.",
    image: "/assets/satellite-platform.jpg",
    highlight: "AI-driven insights",
  },
];

const solutions = [
  {
    icon: Cpu,
    title: "Sensor & IoT Solutions",
    desc: "Real-time soil, weather, and crop monitoring.",
    stat: "24/7 Monitoring",
  },
  {
    icon: Satellite,
    title: "Satellite Intelligence",
    desc: "AI-powered crop health monitoring and NDVI mapping.",
    stat: "Precision Analytics",
  },
  {
    icon: Droplets,
    title: "Smart Irrigation",
    desc: "Reduce water waste by up to 30% with automated controls.",
    stat: "Save up to 30%",
  },
  {
    icon: Leaf,
    title: "Farm as a Service",
    desc: "End-to-end agronomic advisory and support.",
    stat: "Expert Support",
  },
];

const stats = [
  { value: "500+", label: "Farms Managed", icon: TrendingUp },
  { value: "50K+", label: "Acres Monitored", icon: CloudSun },
  { value: "30%", label: "Water Saved", icon: Droplet },
  { value: "25%", label: "Yield Increase", icon: BarChart3 },
];

const features = [
  "AI-powered predictive analytics",
  "Real-time soil & crop health data",
  "Automated irrigation scheduling",
  "Weather forecasting & alerts",
];

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero-farm.jpg"
            alt="Smart farming landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-green-900/30" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium tracking-wide">Precision Agriculture Ecosystem</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              Grow Smarter{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                Farm Better
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              IoT sensors, satellite intelligence & AI insights to maximize yield, reduce waste, and transform your agricultural practice.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105"
              >
                Request Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
              >
                <Play size={18} /> Learn More
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap gap-6 text-sm text-gray-300">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
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

      {/* PRODUCTS SECTION */}
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
      </section>

      {/* SOLUTIONS SECTION */}
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
              From sensors to strategy — everything you need for precision agriculture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-600 to-emerald-500 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <solution.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{solution.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full">
                    {solution.stat}
                  </span>
                  <Link href="/solutions" className="text-green-600 hover:text-green-800 transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-800" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-xl text-green-100 mb-10">
              Join thousands of farmers who are increasing yield, saving water, and growing smarter with Ag5X.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-white text-green-800 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Request Demo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}