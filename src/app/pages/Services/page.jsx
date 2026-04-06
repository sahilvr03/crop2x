"use client";

import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Sparkles,
  FlaskConical,
  Bug,
  FileText,
  MapPin,
  UserCheck,
  CheckCircle,
  Zap,
  BarChart3,
  Recycle,
  Layers,
  TrendingUp,
  Droplet,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: UserCheck,
    title: "Agronomic Advisory",
    desc:
      "Get on-demand expert guidance from certified agronomists covering irrigation scheduling, fertilizer programs, and integrated pest management. Our advisors combine field experience with real-time sensor data to give recommendations that are both practical and precise.",
    tag: "Advisory",
    color: "from-green-600 to-emerald-500",
    bg: "bg-green-50",
    text: "text-green-700",
  },
  {
    icon: FlaskConical,
    title: "Soil Nutrient Analysis",
    desc:
      "Unlock what's happening beneath the surface. Our on-farm NPK testing uses a combination of probe sensors and lab validation to map soil fertility at a granular level — enabling precision fertilization that cuts waste and boosts crop health.",
    tag: "Lab & Sensor",
    color: "from-teal-600 to-cyan-500",
    bg: "bg-teal-50",
    text: "text-teal-700",
  },
  {
    icon: Bug,
    title: "Pest Attack Prediction & Advisory",
    desc:
      "Stay one step ahead of crop threats. Our AI engine analyzes historical pest patterns, weather data, and real-time field conditions to predict outbreaks before they occur — delivering targeted spray schedules and intervention plans.",
    tag: "AI-Powered",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    text: "text-amber-700",
  },
  {
    icon: FileText,
    title: "Weekly Farm Reports",
    desc:
      "Every week, receive a comprehensive farm health digest covering soil moisture, canopy health (via NDVI), water usage, and actionable next steps. Reports are auto-generated from live platform data and reviewed by our agronomic team.",
    tag: "Reporting",
    color: "from-blue-600 to-indigo-500",
    bg: "bg-blue-50",
    text: "text-blue-700",
  },
  {
    icon: MapPin,
    title: "Field Visits & Audits",
    desc:
      "Physical presence matters. Our agronomists conduct monthly on-site visits to visually inspect crop health, validate sensor readings, assess irrigation infrastructure, and align digital recommendations with actual ground conditions.",
    tag: "On-Ground",
    color: "from-violet-600 to-purple-500",
    bg: "bg-violet-50",
    text: "text-violet-700",
  },
];

const benefits = [
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    desc: "Accurate insights from sensors and satellites, not guesswork.",
  },
  {
    icon: Zap,
    title: "Actionable Insights",
    desc: "Agronomist-reviewed recommendations based on live field data.",
  },
  {
    icon: TrendingUp,
    title: "Efficiency & Productivity",
    desc: "Reduce water & fertilizer waste. Increase yields measurably.",
  },
  {
    icon: Recycle,
    title: "Sustainability",
    desc: "Eco-friendly practices that protect soil health long-term.",
  },
  {
    icon: Droplet,
    title: "Water Conservation",
    desc: "Smart irrigation scheduling cuts water usage by up to 30%.",
  },
  {
    icon: Layers,
    title: "End-to-End Solution",
    desc: "Hardware, software, and expert services — one unified platform.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-800 to-emerald-900" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-4 h-4 text-green-300" />
            <span className="text-sm font-medium tracking-wide">Expert Farm Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
            From real-time soil intelligence to on-ground agronomic visits — every service is designed to help your farm thrive smarter, not harder.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Full-Spectrum Farm Support
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Five core services that work together to cover every layer of your farm's needs
            </p>
          </div>

          {/* Top row — 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-7">
            {services.slice(0, 3).map((svc) => (
              <ServiceCard key={svc.title} svc={svc} />
            ))}
          </div>

          {/* Bottom row — 2 cards centered */}
          <div className="grid md:grid-cols-2 gap-7 max-w-3xl mx-auto">
            {services.slice(3).map((svc) => (
              <ServiceCard key={svc.title} svc={svc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY BENEFITS ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              The Crop2X Edge
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Crop2X Products & Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Purpose-built for the modern farmer — combining IoT, AI, and agronomic expertise
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-green-50/60 hover:border-green-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-600 to-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <b.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{b.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-green-900 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empower Your Farm With Crop2X
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            Whether you need a single advisory session or end-to-end farm management, our team is ready to build the right service plan for your operation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pages/Contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-500 hover:scale-105 transition-all shadow-lg"
            >
              Request Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pages/Contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Partner With Us
            </Link>
            <Link
              href="/pages/Solutions"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-gray-300 rounded-xl font-semibold hover:bg-white/5 transition-all"
            >
              Explore Solutions
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-200">
            {["No lock-in contracts", "Dedicated agronomist assigned", "Setup in under 48 hrs"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Service Card Sub-component ───────────────────────────────────────────────

function ServiceCard({ svc }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col">
      {/* Card header accent */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${svc.color}`} />

      <div className="p-7 flex flex-col flex-1">
        {/* Icon + tag row */}
        <div className="flex items-start justify-between mb-5">
          <div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
          >
            <svc.icon className="w-7 h-7" />
          </div>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${svc.bg} ${svc.text}`}>
            {svc.tag}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-3">{svc.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed flex-1">{svc.desc}</p>

        <Link
          href="/pages/Contact"
          className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${svc.text} hover:gap-3 transition-all group/link`}
        >
          Request Service
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}