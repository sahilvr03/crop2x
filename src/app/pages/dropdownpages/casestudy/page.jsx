"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Leaf,
  Droplets,
  TrendingUp,
  Bug,
  Zap,
  BarChart3,
  Eye,
  CheckCircle,
  X,
  Users,
} from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Water Optimization Success",
    farm: "Green Acres Farm, Punjab",
    metric: "30% water reduction",
    metricIcon: Droplets,
    summary: "Smart irrigation scheduling reduced water waste while improving crop health.",
    challenge: "Over-irrigation led to waterlogging, increased salinity, and higher pumping costs. Traditional methods wasted 40% of water.",
    solution: "Deployed Crop2X Sensor Probes + Weather Tracker + FaaS advisory. Real-time soil moisture data and weather forecasts enabled precise irrigation scheduling.",
    results: "30% reduction in water usage, 20% increase in yield, $5,000 annual savings on electricity.",
    image: "/assets/case-farm-a.jpg",
    tags: ["IoT Sensors", "Smart Irrigation"],
  },
  {
    id: 2,
    title: "Crop Yield Transformation",
    farm: "Sunrise Farms, Sindh",
    metric: "25% yield increase",
    metricIcon: TrendingUp,
    summary: "Satellite insights and agronomic advice boosted wheat production significantly.",
    challenge: "Low yields due to delayed nutrient application and undetected pest stress.",
    solution: "Ag5X satellite platform with NDVI monitoring + weekly agronomic reports.",
    results: "25% higher yield, 15% reduction in fertilizer costs, premium grade wheat.",
    image: "/assets/case-farm-b.jpg",
    tags: ["Satellite Intelligence", "Agronomy"],
  },
  {
    id: 3,
    title: "Pest Prevention with AI",
    farm: "Fresh Harvest, Punjab",
    metric: "40% pest damage reduction",
    metricIcon: Bug,
    summary: "Early alerts from Penta AI prevented pest outbreak and saved the crop.",
    challenge: "Frequent pest attacks (armyworm, aphids) causing 30-50% crop loss annually.",
    solution: "AI-powered pest risk alerts via Ag5X + sensor-based microclimate monitoring.",
    results: "40% reduction in pest damage, 60% less pesticide use, healthier crop.",
    image: "/assets/case-farm-c.jpg",
    tags: ["AI Alerts", "Pest Management"],
  },
  {
    id: 4,
    title: "FaaS Full Farm Optimization",
    farm: "United Agribusiness, Multiple Locations",
    metric: "35% operational efficiency",
    metricIcon: Zap,
    summary: "End-to-end FaaS managed 5,000+ acres with fewer resources.",
    challenge: "Coordinating irrigation, fertilization, and harvesting across large acreage was inefficient.",
    solution: "Full FaaS package: sensors, satellite, agronomists, and centralized dashboard.",
    results: "35% labor efficiency gain, 25% input cost reduction, 20% yield increase.",
    image: "/assets/case-farm-d.jpg",
    tags: ["FaaS", "Farm Management"],
  },
];

const keyTakeaways = [
  { icon: Eye, title: "Data-Driven Decisions Work", desc: "Real-time insights optimize water, fertilizer, and pesticide use." },
  { icon: Users, title: "Expert Guidance Matters", desc: "Agronomic advisory improves crop outcomes dramatically." },
  { icon: Zap, title: "Technology Pays Off", desc: "IoT + AI integration reduces waste and boosts ROI." },
  { icon: Leaf, title: "Scalable Solutions", desc: "Works for small family farms and large agribusinesses." },
];

export default function CaseStudiesPage() {
  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-800 to-emerald-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-500/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-4 h-4 text-green-300" />
            <span className="text-sm font-medium tracking-wide">Real Stories, Real Impact</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Success Stories from
            <br />
            <span className="bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent">
              Smart Farmers
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Discover how Crop2X helps farmers increase yields, save resources, and make data-driven decisions using IoT, AI, and expert agronomic advisory.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pages/Solutions"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white rounded-xl font-semibold hover:scale-105 transition-all shadow-lg shadow-green-900/40"
            >
              Explore Solutions <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pages/Contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              Proven Results
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Farms, Real Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how farmers are transforming their operations with Crop2X
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                onClick={() => setSelectedCase(study)}
              >
                <div className="h-40 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <div className="text-center">
                    <study.metricIcon className="w-10 h-10 text-green-600 mx-auto mb-2" />
                    <p className="text-xs font-bold text-green-800">{study.metric}</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">{study.title}</h3>
                  <p className="text-xs text-gray-500 mb-2">{study.farm}</p>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{study.summary}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {study.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-green-700 text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Read Full Story <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDIVIDUAL CASE STUDY MODAL */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedCase(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">{selectedCase.title}</h3>
              <button onClick={() => setSelectedCase(null)} className="p-1 rounded-full hover:bg-gray-100">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-5">
              <div className="h-40 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                <selectedCase.metricIcon className="w-12 h-12 text-green-700" />
              </div>
              <div>
                <h4 className="font-semibold text-red-600 mb-1">Challenge</h4>
                <p className="text-gray-700 text-sm">{selectedCase.challenge}</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-1">Solution</h4>
                <p className="text-gray-700 text-sm">{selectedCase.solution}</p>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-600 mb-1">Results</h4>
                <p className="text-gray-700 text-sm">{selectedCase.results}</p>
              </div>
              <div className="pt-2">
                <Link href="/pages/Contact" className="inline-flex items-center gap-2 px-5 py-2 bg-green-600 text-white rounded-xl text-sm font-semibold hover:bg-green-700">
                  Request Similar Solution <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BENEFITS / KEY TAKEAWAYS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              Lessons Learned
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Farmers Teach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key takeaways from hundreds of successful deployments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyTakeaways.map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-800" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <Leaf className="w-16 h-16 text-green-300 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Success Story with Crop2X</h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of farmers who have transformed their farms. Let's discuss how we can help you achieve similar results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pages/Contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-green-800 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Request Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pages/Contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all"
            >
              Partner With Us
            </Link>
          </div>
          <p className="text-sm text-green-200 mt-6">No obligation • Free consultation</p>
        </div>
      </section>
    </>
  );
}