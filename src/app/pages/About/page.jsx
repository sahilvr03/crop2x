"use client";

import Link from "next/link";
import Image from "next/image";
import { Target, Eye, Award, Users, ArrowRight, Calendar, Leaf, Sparkles, TrendingUp, Droplet, BarChart3, CheckCircle } from "lucide-react";

const timeline = [
  { year: "2018", title: "Founded", desc: "Crop2X was born from the vision of making precision agriculture accessible to every farmer.", highlight: "From vision to reality" },
  { year: "2019", title: "First Sensor Deployed", desc: "Launched our proprietary soil sensor probes across pilot farms in Punjab.", highlight: "Real-world validation" },
  { year: "2020", title: "Platform Launch", desc: "Released the Ag5X satellite intelligence platform with AI-powered analytics.", highlight: "AI meets agriculture" },
  { year: "2021", title: "FaaS Launch", desc: "Introduced Farm as a Service, providing end-to-end farm management.", highlight: "Full-stack solution" },
  { year: "2022", title: "500+ Farms", desc: "Expanded operations to manage over 500 farms.", highlight: "Rapid scaling" },
  { year: "2023", title: "Global Recognition", desc: "Recognized among top agritech innovators in South Asia.", highlight: "Industry leadership" },
];

const differentiators = [
  { icon: Target, title: "End-to-End Ecosystem", desc: "From sensors to satellites, full farm coverage in one unified platform." },
  { icon: Eye, title: "AI-Driven Insights", desc: "Penta AI engine delivers actionable recommendations, not just raw data." },
  { icon: Award, title: "Proven Results", desc: "30% water savings & 25% yield increase across 500+ farms." },
  { icon: Users, title: "Farmer-First Design", desc: "Simple, intuitive interface built with direct farmer feedback." },
];

const stats = [
  { value: "6+", label: "Years of Innovation", icon: TrendingUp },
  { value: "500+", label: "Farms Managed", icon: Leaf },
  { value: "30%", label: "Average Water Saved", icon: Droplet },
  { value: "25%", label: "Yield Increase", icon: BarChart3 },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-800 to-emerald-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-4 h-4 text-green-300" />
            <span className="text-sm font-medium tracking-wide">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Growing a Smarter Future
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
            Building the future of agriculture through innovation, data, and unwavering commitment to farmers.
          </p>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
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

      {/* MISSION & VISION */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              Our Guiding Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Mission & Vision</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-600 to-emerald-500 text-white flex items-center justify-center mb-5">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To democratize precision agriculture with affordable, scalable solutions that empower farmers worldwide with data-driven decisions, increasing both profitability and sustainability.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-600 to-emerald-500 text-white flex items-center justify-center mb-5">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where every farmer — regardless of scale or location — has access to cutting-edge technology to sustainably feed the growing global population.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Crop2X Story</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">From a bold idea to a growing movement</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, idx) => (
              <div key={item.year} className="flex gap-5 mb-8 last:mb-0 group">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-600 to-emerald-500 text-white flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
                    {item.year}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-green-300 to-green-100 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 hover:shadow-md transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                      <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full">
                        {item.highlight}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CROP2X (DIFFERENTIATORS) */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Crop2X Advantage</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">What makes our approach different and effective</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, idx) => (
              <div
                key={item.title}
                className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-600 to-emerald-500 text-white flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform shadow-md">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEASER / IMPACT HIGHLIGHT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-700 to-emerald-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12 text-white">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Proven Impact</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Transforming agriculture, one farm at a time
                </h3>
                <p className="text-green-100 mb-6 leading-relaxed">
                  Our technology has helped farmers reduce water usage by 30% while increasing yields by 25% — thats more food with fewer resources.
                </p>
                <Link
                  href="/impact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-green-800 rounded-xl font-medium hover:bg-gray-100 transition-colors"
                >
                  See our impact <ArrowRight size={16} />
                </Link>
              </div>
              <div className="relative h-64 md:h-full min-h-[250px]">
                <Image
                  src="/assets/hero-farm.jpg"
                  alt="Farm impact"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Leaf className="w-12 h-12 text-green-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the agricultural revolution. Whether youre a farmer, investor, or partner, lets grow together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all hover:scale-105"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}