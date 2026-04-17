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
  Eye,
  Users,
  X,
  ChevronRight,
} from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Lemon Farm",
    farm: "Mr. Rafeeq's Lemon Farm, Gadaap",
    metric: "60% Revenue Increase",
    metricIcon: TrendingUp,
    summary:
      "Crop2X sensor probes delivered 50% water savings and 35% yield increase per lemon tree.",
    tags: ["IoT Sensors", "Smart Irrigation", "Lemon"],
    image: "/assets/case-lemon-rafeeq.jpg",
    highlights: [
      { label: "Water Saved", value: "50%", color: "blue" },
      { label: "Yield Increase", value: "35%", color: "green" },
      { label: "Revenue Increase", value: "60%", color: "emerald" },
      { label: "Fertilizer Saved", value: "44%", color: "lime" },
      { label: "Pesticide Saved", value: "38%", color: "teal" },
    ],
    comparison: {
      before: {
        label: "Without Crop2X",
        rows: [
          { key: "Crop Output", value: "800 crates = 8,000 Kg" },
          { key: "Revenue (100 PKR/kg)", value: "80,000 PKR" },
          { key: "Water Cost (4 acres)", value: "40,000 PKR" },
          { key: "Annual Fertilizer Cost", value: "3,60,000 PKR" },
          { key: "Annual Pesticide Cost", value: "2,40,000 PKR" },
        ],
      },
      after: {
        label: "With Crop2X",
        rows: [
          { key: "Crop Output", value: "2,000 crates = 20,000 Kg" },
          { key: "Revenue (100 PKR/kg)", value: "2,00,000 PKR" },
          { key: "Water Cost Saved", value: "20,000 PKR (also irrigated vegetables)" },
          { key: "Fertilizer Cost Saved", value: "1,60,000 PKR" },
          { key: "Pesticide Cost Saved", value: "92,000 PKR" },
        ],
      },
    },
  },
  {
    id: 2,
    title: "Crop2X Model Farm",
    farm: "Crop2X Lemon Farm, Gadaap",
    metric: "60% Revenue Increase",
    metricIcon: Leaf,
    summary:
      "Crop2X's own demonstration farm proving 50% water savings, 35% yield boost, and major input cost reductions.",
    tags: ["Model Farm", "Lemon", "Benchmark"],
    image: "/assets/case-crop2x-model.jpg",
    highlights: [
      { label: "Water Saved", value: "50%", color: "blue" },
      { label: "Yield Increase", value: "35%", color: "green" },
      { label: "Revenue Increase", value: "60%", color: "emerald" },
      { label: "Fertilizer Saved", value: "44%", color: "lime" },
      { label: "Pesticide Saved", value: "38%", color: "teal" },
    ],
    comparison: {
      before: {
        label: "Without Crop2X",
        rows: [
          { key: "Crop Output", value: "800 crates = 8,000 Kg" },
          { key: "Revenue (100 PKR/kg)", value: "80,000 PKR" },
          { key: "Water Cost (4 acres)", value: "40,000 PKR" },
          { key: "Annual Fertilizer Cost", value: "3,60,000 PKR" },
          { key: "Annual Pesticide Cost", value: "2,40,000 PKR" },
        ],
      },
      after: {
        label: "With Crop2X",
        rows: [
          { key: "Crop Output", value: "2,000 crates = 20,000 Kg" },
          { key: "Revenue (100 PKR/kg)", value: "2,00,000 PKR" },
          { key: "Water Cost Saved", value: "20,000 PKR (50% saved)" },
          { key: "Fertilizer Cost Saved", value: "1,60,000 PKR (44% saved)" },
          { key: "Pesticide Cost Saved", value: "92,000 PKR (38% saved)" },
        ],
      },
    },
  },
  {
    id: 3,
    title: "Papaya Farm",
    farm: "Umair Papaya Farm, Gadaap",
    metric: "25% Revenue Increase",
    metricIcon: TrendingUp,
    summary:
      "Crop2X services boosted papaya yield by 25% while cutting water, fertilizer, and pesticide costs significantly.",
    tags: ["Papaya", "IoT Sensors", "Cost Saving"],
    image: "/assets/case-papaya.jpg",
    highlights: [
      { label: "Water Saved", value: "50%", color: "blue" },
      { label: "Yield Increase", value: "25%", color: "green" },
      { label: "Revenue Increase", value: "25%", color: "emerald" },
      { label: "Fertilizer Saved", value: "28.3%", color: "lime" },
      { label: "Pesticide Saved", value: "20%", color: "teal" },
    ],
    comparison: {
      before: {
        label: "Without Crop2X",
        rows: [
          { key: "Crop Output", value: "80 crates = 4,000 Kg" },
          { key: "Revenue (2,500 PKR/crate)", value: "2,00,000 PKR" },
          { key: "Water Cost (2 acres)", value: "20,000 PKR" },
          { key: "Annual Fertilizer Cost", value: "55,000 PKR" },
          { key: "Annual Pesticide Cost", value: "20,000 PKR" },
        ],
      },
      after: {
        label: "With Crop2X",
        rows: [
          { key: "Crop Output", value: "100 crates = 5,000 Kg" },
          { key: "Revenue (2,500 PKR/crate)", value: "2,50,000 PKR" },
          { key: "Water Cost Saved", value: "10,000 PKR (50% saved)" },
          { key: "Fertilizer Cost Saved", value: "15,600 PKR (28.3% saved)" },
          { key: "Pesticide Cost Saved", value: "4,000 PKR (20% saved)" },
        ],
      },
    },
  },
  {
    id: 4,
    title: "Cotton Fields",
    farm: "Usman Cotton Fields, RYK",
    metric: "27% Revenue Increase",
    metricIcon: Zap,
    summary:
      "Large-scale cotton farm across 20 acres saw major yield and input cost improvements with Crop2X services.",
    tags: ["Cotton", "Large Scale", "20 Acres"],
    image: "/assets/case-cotton.jpg",
    highlights: [
      { label: "Water Saved", value: "37.5%", color: "blue" },
      { label: "Yield Increase", value: "27%", color: "green" },
      { label: "Revenue Increase", value: "27%", color: "emerald" },
      { label: "Fertilizer Saved", value: "27.7%", color: "lime" },
      { label: "Pesticide Saved", value: "34.4%", color: "teal" },
    ],
    comparison: {
      before: {
        label: "Without Crop2X",
        rows: [
          { key: "Crop Output", value: "18 Maund/acre = 360 Maund (20 acres)" },
          { key: "Revenue (10,000 PKR/Maund)", value: "36,00,000 PKR" },
          { key: "Water Cost (20 acres)", value: "1,60,000 PKR" },
          { key: "Annual Fertilizer Cost", value: "6,00,000 PKR" },
          { key: "Annual Pesticide Cost", value: "2,40,000 PKR" },
        ],
      },
      after: {
        label: "With Crop2X",
        rows: [
          { key: "Crop Output", value: "23 Maund/acre = 460 Maund (20 acres)" },
          { key: "Revenue (10,000 PKR/Maund)", value: "46,00,000 PKR" },
          { key: "Water Cost Saved", value: "60,000 PKR (37.5% saved)" },
          { key: "Fertilizer Cost Saved", value: "1,66,200 PKR (27.7% saved)" },
          { key: "Pesticide Cost Saved", value: "82,560 PKR (34.4% saved)" },
        ],
      },
    },
  },
  {
    id: 5,
    title: "Rice Fields",
    farm: "Ali Abbas Rice Fields, Hafizabad",
    metric: "11.7% Yield Increase",
    metricIcon: TrendingUp,
    summary:
      "Crop2X services improved key agronomic parameters — tiller count, grain weight, panicle size — for measurable rice yield gains.",
    tags: ["Rice", "Yield Improvement", "Hafizabad"],
    image: "/assets/ricefield.png",
    highlights: [
      { label: "Yield Increase", value: "11.7%", color: "green" },
      { label: "Revenue Increase", value: "11.7%", color: "emerald" },
      { label: "Tillers/Plant", value: "+7", color: "lime" },
      { label: "Grains/Panicle", value: "+1", color: "teal" },
      { label: "1000 Grain Weight", value: "+7g", color: "blue" },
    ],
    comparison: {
      before: {
        label: "Without Crop2X",
        rows: [
          { key: "Crop Output", value: "38.25 Maund/acre" },
          { key: "Revenue (3,750 PKR/Maund)", value: "1,43,437 PKR" },
          { key: "Tillers per Plant", value: "34" },
          { key: "Grains per Panicle", value: "40" },
          { key: "Panicle Size", value: "22.86 cm" },
          { key: "Plant Height", value: "141 cm" },
          { key: "1000 Grain Weight", value: "25 g" },
        ],
      },
      after: {
        label: "With Crop2X",
        rows: [
          { key: "Crop Output", value: "42.75 Maund/acre" },
          { key: "Revenue (3,750 PKR/Maund)", value: "1,60,312 PKR" },
          { key: "Tillers per Plant", value: "41" },
          { key: "Grains per Panicle", value: "41" },
          { key: "Panicle Size", value: "25.4 cm" },
          { key: "Plant Height", value: "152 cm" },
          { key: "1000 Grain Weight", value: "32 g" },
        ],
      },
    },
  },
];

const keyTakeaways = [
  {
    icon: Eye,
    title: "Data-Driven Decisions Work",
    desc: "Real-time insights optimize water, fertilizer, and pesticide use.",
  },
  {
    icon: Users,
    title: "Expert Guidance Matters",
    desc: "Agronomic advisory improves crop outcomes dramatically.",
  },
  {
    icon: Zap,
    title: "Technology Pays Off",
    desc: "IoT + AI integration reduces waste and boosts ROI.",
  },
  {
    icon: Leaf,
    title: "Scalable Solutions",
    desc: "Works for small family farms and large agribusinesses.",
  },
];

const highlightColorMap = {
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  green: "bg-green-50 text-green-700 border-green-100",
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
  lime: "bg-lime-50 text-lime-700 border-lime-100",
  teal: "bg-teal-50 text-teal-700 border-teal-100",
};

export default function CaseStudiesPage() {
  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-800 to-emerald-900" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-500/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-4 h-4 text-green-300" />
            <span className="text-sm font-medium tracking-wide">
              Real Stories, Real Impact
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Success Stories from
            <br />
            <span className="bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent">
              Smart Farmers
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Discover how Crop2X helps farmers increase yields, save resources,
            and make data-driven decisions using IoT, AI, and expert agronomic
            advisory.
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

      {/* ── CASE STUDIES GRID ── */}
      <section className="py-20 bg-white">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                onClick={() => setSelectedCase(study)}
              >
                {/* Image / Placeholder */}
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {/* Metric badge overlay */}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-sm">
                    <study.metricIcon className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-bold text-green-800">
                      {study.metric}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-1 text-lg">
                    {study.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">{study.farm}</p>

                  {/* Highlight pills */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {study.highlights.slice(0, 3).map((h) => (
                      <span
                        key={h.label}
                        className={`text-xs px-2.5 py-1 rounded-full border font-semibold ${highlightColorMap[h.color]}`}
                      >
                        {h.value} {h.label}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {study.summary}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="text-green-700 text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Read Full Story <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODAL ── */}
      {selectedCase && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex justify-between items-center z-10">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedCase.title}
                </h3>
                <p className="text-xs text-gray-500">{selectedCase.farm}</p>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                className="p-1.5 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Image */}
              <div className="relative h-52 rounded-xl overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100">
                <Image
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-2xl font-bold">{selectedCase.metric}</p>
                  <p className="text-sm opacity-80">{selectedCase.farm}</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {selectedCase.highlights.map((h) => (
                  <div
                    key={h.label}
                    className={`rounded-xl p-3 text-center border ${highlightColorMap[h.color]}`}
                  >
                    <p className="text-lg font-bold">{h.value}</p>
                    <p className="text-[10px] mt-0.5 opacity-80">{h.label}</p>
                  </div>
                ))}
              </div>

              {/* Before / After Comparison Table */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                  Before vs After Comparison
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Before */}
                  <div className="rounded-xl border border-red-100 overflow-hidden">
                    <div className="bg-red-50 px-4 py-2.5 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="text-sm font-bold text-red-700">
                        {selectedCase.comparison.before.label}
                      </span>
                    </div>
                    <div className="divide-y divide-gray-50">
                      {selectedCase.comparison.before.rows.map((row) => (
                        <div key={row.key} className="px-4 py-2.5">
                          <p className="text-[11px] text-gray-400 mb-0.5">
                            {row.key}
                          </p>
                          <p className="text-sm font-semibold text-gray-800">
                            {row.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* After */}
                  <div className="rounded-xl border border-green-100 overflow-hidden">
                    <div className="bg-green-50 px-4 py-2.5 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-sm font-bold text-green-700">
                        {selectedCase.comparison.after.label}
                      </span>
                    </div>
                    <div className="divide-y divide-gray-50">
                      {selectedCase.comparison.after.rows.map((row) => (
                        <div key={row.key} className="px-4 py-2.5">
                          <p className="text-[11px] text-gray-400 mb-0.5">
                            {row.key}
                          </p>
                          <p className="text-sm font-semibold text-green-700">
                            {row.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/pages/Contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-xl text-sm font-semibold hover:bg-green-700 transition-colors"
                >
                  Request Similar Solution <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── KEY TAKEAWAYS ── */}
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

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-800" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <Leaf className="w-16 h-16 text-green-300 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Success Story with Crop2X
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of farmers who have transformed their farms. Let's
            discuss how we can help you achieve similar results.
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
          <p className="text-sm text-green-200 mt-6">
            No obligation • Free consultation
          </p>
        </div>
      </section>
    </>
  );
}