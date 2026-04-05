"use client";

import Link from "next/link";
import Image from "next/image";
import {
  TrendingUp,
  Droplets,
  Leaf,
  BarChart3,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Award,
  Globe,
  Users,
} from "lucide-react";

const impactStats = [
  {
    icon: TrendingUp,
    value: "25%",
    label: "Average Yield Increase",
    desc: "Farmers using Crop2X see significant improvements in crop output.",
    color: "from-green-600 to-emerald-500",
  },
  {
    icon: Droplets,
    value: "30%",
    label: "Water Savings",
    desc: "Smart irrigation reduces water waste while maintaining optimal soil moisture.",
    color: "from-cyan-600 to-teal-500",
  },
  {
    icon: Leaf,
    value: "40%",
    label: "Reduced Chemical Use",
    desc: "Precision advisory minimizes unnecessary pesticide and fertilizer application.",
    color: "from-emerald-600 to-green-500",
  },
  {
    icon: BarChart3,
    value: "500+",
    label: "Farms Transformed",
    desc: "Growing network of technology-enabled farms across the region.",
    color: "from-blue-600 to-indigo-500",
  },
];

const caseStudies = [
  {
    title: "Cotton Farm Optimization",
    location: "Southern Punjab",
    result: "32% yield increase with 28% less water through sensor-driven irrigation scheduling.",
    metrics: { yield: "+32%", water: "-28%", roi: "+45%" },
    image: "/assets/cotton-farm.jpg",
  },
  {
    title: "Wheat Quality Improvement",
    location: "Central Punjab",
    result: "Satellite-guided nutrient management led to premium grade wheat and 20% higher market price.",
    metrics: { price: "+20%", quality: "Premium", waste: "-25%" },
    image: "/assets/wheat-field.jpg",
  },
  {
    title: "Rice Paddies Efficiency",
    location: "Sindh",
    result: "FaaS program delivered 45% water savings and eliminated 3 unnecessary pesticide applications.",
    metrics: { water: "-45%", pesticides: "-3 apps", yield: "+18%" },
    image: "/assets/rice-paddies.jpg",
  },
];

const sustainabilityMetrics = [
  { label: "Carbon Footprint Reduced", value: "35%", icon: Globe },
  { label: "Farmer Profitability Increase", value: "28%", icon: TrendingUp },
  { label: "Soil Health Improvement", value: "42%", icon: Leaf },
  { label: "Customer Satisfaction", value: "96%", icon: Users },
];

export default function ImpactPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-800 to-emerald-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-4 h-4 text-green-300" />
            <span className="text-sm font-medium tracking-wide">Measurable Results</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Real Impact,<br />Real Numbers
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
            See how Crop2X is transforming agriculture — one farm at a time.
          </p>
        </div>
      </section>

      {/* KEY IMPACT STATS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              Key Metrics
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transforming Agriculture
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Data-driven results across hundreds of partner farms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{stat.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY METRICS */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              Beyond Yields
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sustainability Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How we're helping farmers farm better for the planet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainabilityMetrics.map((metric) => (
              <div key={metric.label} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center hover:shadow-md transition">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto mb-3">
                  <metric.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-green-700 mb-1">{metric.value}</div>
                <p className="text-sm font-medium text-gray-800">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Farms, Real Results
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how farmers are achieving remarkable outcomes with Crop2X
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <div
                key={study.title}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for actual image - replace with <Image> when assets ready */}
                  <div className="text-center text-gray-400">
                    <Leaf className="w-12 h-12 mx-auto text-green-300" />
                    <p className="text-xs mt-2">Farm image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded-full">
                      {study.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {study.result}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
                    {Object.entries(study.metrics).map(([key, val]) => (
                      <span key={key} className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded-full">
                        {key}: {val}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Share Your Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / QUOTE SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-8xl text-green-200 opacity-50">"</div>
            <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6 relative z-10 pt-8">
              Crop2X transformed our family farm. We reduced water usage by 35% while increasing cotton yield by nearly 30%. 
              The satellite insights and sensor data give us confidence in every decision.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">MR</div>
              <div>
                <p className="font-semibold text-gray-900">Muhammad Raza</p>
                <p className="text-sm text-gray-500">Cotton Farmer, Punjab</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-800" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <Award className="w-16 h-16 text-green-300 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See the Impact Firsthand
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Schedule a visit to a partner farm or request a demo to see how Crop2X can transform your agricultural practice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-green-800 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Schedule a Visit <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}