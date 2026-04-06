"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Satellite,
  Sparkles,
  Leaf,
  CloudLightning,
  Droplets,
  Bug,
  ScanLine,
  BarChart3,
  Globe,
  ShieldCheck,
  TrendingUp,
  Zap,
  FileBarChart,
  CheckCircle,
  Activity,
  Layers,
  Eye,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: Activity,
    title: "Real-Time Crop Monitoring",
    desc: "Track crop health continuously using multi-spectral satellite imagery — NDVI, EVI, NDWI, NDRE, and NDMI indices rendered on interactive farm maps, updated every satellite pass.",
    tag: "Core Feature",
    color: "from-green-600 to-emerald-500",
    bg: "bg-green-50",
    text: "text-green-700",
  },
  {
    icon: Droplets,
    title: "Irrigation Forecasting",
    desc: "AI-assisted water scheduling that cross-references satellite NDWI readings, soil moisture sensor data, and weather forecasts to generate field-specific irrigation calendars.",
    tag: "AI-Powered",
    color: "from-blue-600 to-cyan-500",
    bg: "bg-blue-50",
    text: "text-blue-700",
  },
  {
    icon: Bug,
    title: "Pest & Disease Alerts",
    desc: "Early warning system powered by anomaly detection in vegetation indices. Identify stress patches, canopy discolouration, and disease spread before they escalate to yield loss.",
    tag: "Early Warning",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    text: "text-amber-700",
  },
  {
    icon: ScanLine,
    title: "Stage-Specific Insights",
    desc: "Receive crop-stage-aware recommendations on water requirements, nutrient scheduling, and expected biomass accumulation — calibrated to the exact growth phase of each field.",
    tag: "Precision",
    color: "from-violet-600 to-purple-500",
    bg: "bg-violet-50",
    text: "text-violet-700",
  },
  {
    icon: Globe,
    title: "Cloud-Based Analytics",
    desc: "Access your full farm dashboard from any device, anywhere. Live NDVI maps, historical trend charts, alert logs, and downloadable reports available 24/7 in the cloud.",
    tag: "Anytime Access",
    color: "from-teal-600 to-cyan-500",
    bg: "bg-teal-50",
    text: "text-teal-700",
  },
];

const indices = [
  { name: "NDVI", full: "Normalized Difference Vegetation Index", color: "bg-green-500", desc: "Crop health & biomass" },
  { name: "EVI",  full: "Enhanced Vegetation Index",             color: "bg-emerald-500", desc: "Canopy density & structure" },
  { name: "NDWI", full: "Normalized Difference Water Index",     color: "bg-blue-500",  desc: "Plant water content" },
  { name: "NDRE", full: "Normalized Difference Red Edge",        color: "bg-lime-500",  desc: "Chlorophyll & nitrogen" },
  { name: "NDMI", full: "Normalized Difference Moisture Index",  color: "bg-cyan-500",  desc: "Soil & leaf moisture" },
];

const benefits = [
  { icon: Eye, title: "Proactive Decision-Making", desc: "Detect crop stress, water deficit, and pest risk before issues escalate." },
  { icon: Droplets, title: "Reduce Water & Input Costs", desc: "Optimize irrigation and fertilizer use with data, not guesswork." },
  { icon: TrendingUp, title: "Increased Yield & Profitability", desc: "Better crop management at every growth stage lifts final harvest." },
  { icon: FileBarChart, title: "Data-Driven Reports", desc: "Visual insights and actionable weekly reports delivered to your device." },
  { icon: Zap, title: "Fast Anomaly Detection", desc: "AI flags underperforming zones within hours of a satellite pass." },
  { icon: ShieldCheck, title: "Risk Mitigation", desc: "Early warnings cut exposure to weather, pest, and market shocks." },
];

const stats = [
  { value: "5+", label: "Vegetation Indices", icon: BarChart3 },
  { value: "48h", label: "Update Cycle", icon: Satellite },
  { value: "30%", label: "Water Savings", icon: Droplets },
  { value: "500+", label: "Farms on Platform", icon: Leaf },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function SatellitePlatformPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-24 md:py-26 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-green-900 to-emerald-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-green-500/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Satellite className="w-4 h-4 text-emerald-300" />
            <span className="text-sm font-medium tracking-wide">Ag5X · Satellite Intelligence</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Precision Agriculture
            <br />
            <span className="bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent">
              From Above
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Crop2X Satellite Platform delivers AI-powered satellite imagery and actionable insights on crop health, water content, pest risk, and vegetation indices — helping farmers optimize yields and reduce losses.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pages/Contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white rounded-xl font-semibold hover:scale-105 transition-all shadow-lg shadow-green-900/40"
            >
              Request Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#overview"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Learn More
            </Link>
          </div>
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

      {/* INDICES SHOWCASE */}
      <section className="py-12 bg-gray-50 border-b border-gray-100" id="overview">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">
            Vegetation indices we track
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {indices.map((idx) => (
              <div
                key={idx.name}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm hover:shadow-md hover:border-green-300 transition-all group"
              >
                <div className={`w-3 h-3 rounded-full ${idx.color} shrink-0 group-hover:scale-125 transition-transform`} />
                <div>
                  <div className="text-sm font-bold text-gray-900">{idx.name}</div>
                  <div className="text-[10px] text-gray-500">{idx.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM FEATURES */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              Platform Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Satellite Platform Offers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Five intelligent modules working in unison to give you complete aerial visibility of your farm
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Satellite to Farm Decision in 3 Steps
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-200 to-transparent hidden md:block" />

            <div className="grid md:grid-cols-3 gap-8 relative">
              {[
                { step: "01", icon: Satellite, title: "Satellite Captures Imagery", desc: "Multi-spectral satellites pass over your farm every 48 hours, capturing raw band data across visible and infrared spectra." },
                { step: "02", icon: Sparkles, title: "Penta AI Processes Data", desc: "Our AI engine computes vegetation indices, detects anomalies, compares against historical baselines, and generates field-level risk scores." },
                { step: "03", icon: Layers, title: "You Get Actionable Insights", desc: "Insights are delivered as visual map overlays, alert notifications, and downloadable reports — ready to act on from any device." },
              ].map((step) => (
                <div key={step.step} className="text-center relative group">
                  <div className="relative inline-block mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                      <step.icon className="w-7 h-7" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-900 text-white text-[10px] font-bold flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              The Ag5X Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Farmers Choose Satellite Monitoring
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ground-level problems identified from 400 miles above
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:bg-green-50/40 hover:border-green-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-600 to-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATION CALLOUT */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-green-900 rounded-3xl p-8 md:p-12 text-white text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, backgroundSize: "30px 30px" }} />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm">
                <CloudLightning className="w-4 h-4 text-emerald-300" />
                <span>Seamless Platform Integration</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Works Alongside Your Crop2X Sensors
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">
                The Ag5X platform fuses satellite indices with ground-level sensor data — soil moisture, weather, and nutrient readings — for the most complete farm intelligence available anywhere.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
                {["Sensor Probe Data", "Weather Station Feed", "Irrigation Controls", "Advisory Reports"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Satellite className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Monitoring Your Farm from the Sky
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            Get satellite-powered insights on every field you manage — from crop health and water stress to pest risk and yield forecasts. See it live in a 30-minute demo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pages/Contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white rounded-xl font-semibold hover:scale-105 transition-all shadow-lg"
            >
              Request Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pages/Solutions"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Explore FaaS Integration
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            {["No hardware required", "48h setup", "Works on any device"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Feature Card Component
function FeatureCard({ feature }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col">
      <div className={`h-1.5 w-full bg-gradient-to-r ${feature.color}`} />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
            <feature.icon className="w-7 h-7" />
          </div>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${feature.bg} ${feature.text}`}>
            {feature.tag}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed flex-1">{feature.desc}</p>
        <Link
          href="/pages/Contact"
          className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${feature.text} hover:gap-3 transition-all group/link`}
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}