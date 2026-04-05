"use client";

import Link from "next/link";
import {
  Cpu,
  Satellite,
  Droplets,
  Leaf,
  Package,
  ArrowRight,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const solutions = [
  {
    icon: Cpu,
    title: "Sensor & IoT Solutions",
    desc: "Deploy advanced sensor probes and weather trackers for real-time monitoring of soil and weather conditions.",
    features: [
      "Real-time soil monitoring",
      "Hyper-local weather data",
      "Automated alerts",
      "Solar-powered operation",
    ],
    color: "from-green-600 to-emerald-500",
    stat: "24/7 Monitoring",
  },
  {
    icon: Satellite,
    title: "Satellite Intelligence (Ag5X)",
    desc: "AI-powered platform delivering NDVI, crop health maps, and predictive insights.",
    features: [
      "NDVI analysis",
      "Crop health mapping",
      "Change detection",
      "AI predictions",
    ],
    color: "from-blue-600 to-cyan-500",
    stat: "Satellite Revisit: 5 days",
  },
  {
    icon: Droplets,
    title: "Smart Water Management",
    desc: "Optimize irrigation using sensor + weather data to reduce water waste.",
    features: [
      "Automated scheduling",
      "Water optimization",
      "Deficit irrigation",
      "System integration",
    ],
    color: "from-cyan-600 to-teal-500",
    stat: "Save up to 30% water",
  },
  {
    icon: Leaf,
    title: "Farm as a Service (FaaS)",
    desc: "Complete farm management with advisory, reports, and crop recommendations.",
    features: [
      "Agronomic advisory",
      "Weekly reports",
      "Pest prediction",
      "Nutrient planning",
    ],
    color: "from-emerald-600 to-green-500",
    stat: "Dedicated agronomist",
  },
  {
    icon: Package,
    title: "Infarm Box",
    desc: "Farm-to-market delivery platform connecting producers with consumers.",
    features: [
      "Market connectivity",
      "Traceability",
      "Cold chain monitoring",
      "Direct sales",
    ],
    color: "from-amber-600 to-orange-500",
    stat: "Higher farmer margins",
  },
];

const ecosystemStats = [
  { value: "5+", label: "Integrated Solutions", icon: Zap },
  { value: "500+", label: "Farms Connected", icon: TrendingUp },
  { value: "30%", label: "Avg. Water Saved", icon: Droplets },
  { value: "24/7", label: "Real-time Support", icon: Sparkles },
];

export default function SolutionsPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-800 to-emerald-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-4 h-4 text-green-300" />
            <span className="text-sm font-medium tracking-wide">End-to-End Ecosystem</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Complete Precision Agriculture
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
            Integrated solutions that work together seamlessly — from soil sensors to market access.
          </p>
        </div>
      </section>

      {/* ECOSYSTEM STATS */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ecosystemStats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-700 mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS LIST */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          {solutions.map((solution, idx) => (
            <div
              key={solution.title}
              className={`flex flex-col ${
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center group`}
            >
              {/* Visual / Icon Box */}
              <div className="lg:w-1/2">
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-10 flex items-center justify-center h-80 shadow-lg group-hover:shadow-xl transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${solution.color} text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                    <solution.icon className="w-16 h-16" />
                  </div>
                  {/* Floating stat badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-md">
                    <span className="text-xs font-semibold text-green-700">{solution.stat}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 space-y-5">
                <div className="inline-flex items-center gap-2">
                  <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${solution.color}`} />
                  <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                    Solution
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {solution.title}
                </h2>

                <p className="text-gray-600 leading-relaxed text-lg">
                  {solution.desc}
                </p>

                {/* Features List */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {solution.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:border-green-500 hover:text-green-700 hover:bg-green-50 transition-all duration-300"
                  >
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTEGRATION CALLOUT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 text-center shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-md mb-6">
              <Package className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              All solutions work together seamlessly
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Our platform integrates sensor data, satellite imagery, and weather intelligence into one unified dashboard — giving you complete visibility and control.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all hover:scale-105"
            >
              Request a Demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <Leaf className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <h4 className="text-2xl font-bold mb-2">Ready to transform your farm?</h4>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Let our experts help you choose the right combination of solutions.
          </p>
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