"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Leaf,
  Users,
  BarChart3,
  Cloud,
  Calendar,
  Droplet,
  FlaskConical,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Target,
  Phone,
  MapPin,
  Clock,
  FileText,
  Activity,
  Eye,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Agronomic Advisory",
    desc: "Expert recommendations for irrigation, fertilizers, and crop health — delivered by certified agronomists.",
    color: "from-green-600 to-emerald-500",
    bg: "bg-green-50",
    text: "text-green-700",
  },
  {
    icon: Calendar,
    title: "Farm Management Support",
    desc: "Crop scheduling, irrigation planning, nutrient management — we handle the operational complexity.",
    color: "from-blue-600 to-cyan-500",
    bg: "bg-blue-50",
    text: "text-blue-700",
  },
  {
    icon: Cloud,
    title: "Monitoring Through Platform",
    desc: "Real-time updates from IoT sensors and satellite imagery — all in one intuitive dashboard.",
    color: "from-amber-600 to-orange-500",
    bg: "bg-amber-50",
    text: "text-amber-700",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Insights on soil, weather, pest risks, and yield predictions — actionable, not just numbers.",
    color: "from-violet-600 to-purple-500",
    bg: "bg-violet-50",
    text: "text-violet-700",
  },
];

const benefits = [
  {
    icon: Target,
    title: "Simplified Farm Operations",
    points: ["One platform for all farm management tasks", "Reduce time spent on daily coordination", "Clear task lists and reminders"],
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Decisions",
    points: ["Analytics-backed guidance for better yield", "Real-time alerts on crop health", "Historical trends for planning"],
  },
  {
    icon: Users,
    title: "Expert Support",
    points: ["Access to certified agronomists", "Regular field visits", "24/7 remote assistance"],
  },
  {
    icon: DollarSign,
    title: "Optimized Resources",
    points: ["Reduce water usage by up to 30%", "Lower fertilizer and pesticide costs", "Labor efficiency gains"],
  },
  {
    icon: Leaf,
    title: "Scalable Model",
    points: ["Works for small farms and large agribusinesses", "Pay for what you use", "Easy to expand to new fields"],
  },
];

const workflowSteps = [
  { step: "01", title: "Sensor Deployment & Registration", desc: "Our team installs IoT sensors and registers your farm on the Ag5X platform." },
  { step: "02", title: "Data Collection", desc: "Sensors + satellites gather real-time soil, weather, and crop data continuously." },
  { step: "03", title: "Expert Advisory", desc: "Agronomists analyze data and provide weekly recommendations." },
  { step: "04", title: "Actionable Reports", desc: "Get visual reports and alerts, then act with confidence." },
];

const stats = [
  { value: "30%", label: "Average Water Saved", icon: Droplet },
  { value: "25%", label: "Yield Increase", icon: TrendingUp },
  { value: "500+", label: "Farms Under FaaS", icon: Leaf },
  { value: "96%", label: "Farmer Satisfaction", icon: Users },
];

export default function FaasPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-24 md:py-26 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-800 to-emerald-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-500/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-6 relative z-10 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Sparkles className="w-4 h-4 text-green-300" />
              <span className="text-sm font-medium tracking-wide">Farm as a Service (FaaS)</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Complete Farm Management,
              <br />
              <span className="bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent">
                Delivered as a Service
              </span>
            </h1>
            <p className="text-lg md:text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Crop2X Farm as a Service combines IoT sensors, AI analytics, and expert agronomist guidance to provide end-to-end farm management support — so you can maximize productivity without managing every detail manually.
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

      {/* FaaS OVERVIEW SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="overview">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              What's Included
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Manage Your Farm
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A complete ecosystem of services — from hardware to human expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${service.color}`} />
                <div className="p-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Integration note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Fully integrated with Crop2X sensor probes, weather trackers, and Ag5X satellite platform
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              Why Choose Crop2X FaaS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Smarter Way to Farm
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unlock the full potential of your land with less stress and more certainty
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                </div>
                <ul className="space-y-2">
                  {benefit.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW SECTION (How FaaS Works) */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How FaaS Works for You
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From deployment to daily insights — we've simplified every step
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Desktop connector line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-200 to-transparent hidden md:block" />

            <div className="grid md:grid-cols-4 gap-6 relative">
              {workflowSteps.map((step, idx) => (
                <div key={step.step} className="text-center relative group">
                  <div className="relative inline-block mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 text-white flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform">
                      <span className="text-lg font-bold">{step.step}</span>
                    </div>
                    {idx < workflowSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-green-200 -translate-y-1/2" style={{ width: "calc(100% - 1rem)" }} />
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 italic">
              "From signup to actionable insights — typically under 7 days."
            </p>
          </div>
        </div>
      </section>

      {/* INTEGRATION + ECOSYSTEM CALLOUT */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 text-center shadow-sm border border-green-100">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-white border border-green-200 text-sm">
              <Activity className="w-4 h-4 text-green-600" />
              <span>Part of the Crop2X Ecosystem</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Seamlessly Integrated with Our Full Suite
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
              FaaS works hand-in-hand with Crop2X sensors, weather trackers, and the Ag5X satellite platform — giving you a unified view of your entire operation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Crop2X Sensor Probes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Weather Tracker</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span>Ag5X Satellite Platform</span>
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
          <Leaf className="w-16 h-16 text-green-300 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let Crop2X Manage Your Farm Smarter
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of farmers who have switched to FaaS — and see the difference expert management makes.
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
          <div className="mt-8 text-sm text-green-200 flex justify-center gap-6">
            <span>✓ No long-term commitment</span>
            <span>✓ Flexible pricing per acre</span>
          </div>
        </div>
      </section>
    </>
  );
}