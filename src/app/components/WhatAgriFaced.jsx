"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Droplet,
  CloudRain,
  Bug,
  Database,
  Satellite,
  Brain,
  LineChart,
  Leaf,
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const problems = [
  {
    icon: Droplet,
    title: "Water Scarcity",
    description: "Declining water resources and inefficient irrigation methods reduce crop yields across the region.",
    stat: { value: "70%", label: "of global water is used by agriculture" },
    accent: "border-blue-200 hover:border-blue-400",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    statColor: "text-blue-600",
  },
  {
    icon: CloudRain,
    title: "Climate Variability",
    description: "Unpredictable rainfall patterns and extreme temperature swings make planning nearly impossible.",
    stat: { value: "2×", label: "more weather events than a decade ago" },
    accent: "border-slate-200 hover:border-slate-400",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    statColor: "text-slate-600",
  },
  {
    icon: Bug,
    title: "Pest & Disease Risks",
    description: "Late detection of outbreaks causes massive, irreversible crop losses before intervention is possible.",
    stat: { value: "40%", label: "average crop loss due to pests" },
    accent: "border-red-200 hover:border-red-400",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    statColor: "text-red-600",
  },
  {
    icon: Database,
    title: "Lack of Real-Time Data",
    description: "Farmers rely on intuition rather than data, leading to delayed decisions that cost yield and money.",
    stat: { value: "85%", label: "of farms have no digital monitoring" },
    accent: "border-amber-200 hover:border-amber-400",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    statColor: "text-amber-600",
  },
];

const solutions = [
  {
    icon: Satellite,
    title: "IoT Sensors & Satellites",
    description: "Continuous field-to-space monitoring — soil moisture, canopy health, and micro-weather in real time.",
    accent: "border-green-200 hover:border-green-500",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
  },
  {
    icon: Brain,
    title: "Penta AI Analytics",
    description: "Our AI engine fuses satellite indices with sensor data to predict threats and recommend actions.",
    accent: "border-emerald-200 hover:border-emerald-500",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
  },
  {
    icon: LineChart,
    title: "Data Insights & Reports",
    description: "Weekly visual reports with field-level intelligence — actionable, clear, and always up to date.",
    accent: "border-teal-200 hover:border-teal-500",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-700",
  },
  {
    icon: Leaf,
    title: "Expert Agronomic Advisory",
    description: "Certified agronomists translate platform data into fertilizer plans, spray schedules, and field visits.",
    accent: "border-lime-200 hover:border-lime-500",
    iconBg: "bg-lime-100",
    iconColor: "text-lime-700",
  },
];

const workflowSteps = [
  { title: "Data Collection",  icon: Satellite,  color: "from-blue-600 to-blue-400",    ring: "ring-blue-200"    },
  { title: "AI Analysis",      icon: Brain,       color: "from-violet-600 to-violet-400", ring: "ring-violet-200"  },
  { title: "Smart Insights",   icon: LineChart,   color: "from-amber-500 to-yellow-400",  ring: "ring-amber-200"   },
  { title: "Better Yield",     icon: TrendingUp,  color: "from-green-600 to-emerald-400", ring: "ring-green-200"   },
];

const metrics = [
  { value: "24/7",  label: "Real-time Monitoring", color: "text-green-600"   },
  { value: "30%",   label: "Water Savings",         color: "text-blue-600"    },
  { value: "95%",   label: "Prediction Accuracy",   color: "text-violet-600"  },
  { value: "500+",  label: "Farms Empowered",        color: "text-emerald-600" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function WhatAgriFaced() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1800&q=80')",
        }}
      />

      {/* Light white-green wash over the image so content stays readable */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-green-50/68 to-white/60" />

      {/* Soft blurred orbs for depth (sit on top of the overlay) */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-green-200/40 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-emerald-200/40 blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── HEADING ─────────────────────────────────────────────────────── */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-5">
            <AlertTriangle className="w-3.5 h-3.5" />
            The Challenge & Our Answer
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Agriculture Faces Growing Challenges
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Climate change, resource scarcity, and data gaps threaten global food security — Crop2X was built to solve every one of them.
          </p>
        </div>

        {/* ── PROBLEMS / SOLUTIONS GRID ───────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">

          {/* LEFT — Problems */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-1 h-10 rounded-full bg-gradient-to-b from-red-500 to-orange-400" />
              <h3 className="text-xl font-bold text-white">
                Current <span className="text-red-500">Challenges</span>
              </h3>
            </div>

            <div className="space-y-4">
              {problems.map((p) => (
                <div
                  key={p.title}
                  className={`group bg-white rounded-2xl border-2 ${p.accent} shadow-sm hover:shadow-lg transition-all duration-300 p-5`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${p.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <p.icon className={`w-6 h-6 ${p.iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-gray-900 mb-1">{p.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed mb-2">{p.description}</p>
                      <div className={`text-xs font-semibold ${p.statColor}`}>
                        {p.stat.value} — <span className="font-normal text-gray-400">{p.stat.label}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Solutions */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-1 h-10 rounded-full bg-gradient-to-b from-green-600 to-emerald-400" />
              <h3 className="text-xl font-bold text-white">
                Crop2X <span className="text-green-600">Solutions</span>
              </h3>
            </div>

            <div className="space-y-4">
              {solutions.map((s) => (
                <div
                  key={s.title}
                  className={`group bg-white rounded-2xl border-2 ${s.accent} shadow-sm hover:shadow-lg transition-all duration-300 p-5`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <s.icon className={`w-6 h-6 ${s.iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-gray-900 mb-1">{s.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{s.description}</p>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </div>
              ))}
            </div>

            {/* Impact badge */}
            <div className="mt-5 bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl p-5 text-white flex items-center justify-between shadow-lg shadow-green-200">
              <div>
                <div className="text-xs font-semibold opacity-80 uppercase tracking-wider mb-1">Proven Impact</div>
                <div className="text-3xl font-extrabold">30% Increase</div>
                <div className="text-sm opacity-80 mt-0.5">in crop yield with Crop2X</div>
              </div>
              <Shield className="w-14 h-14 text-white/30" />
            </div>
          </div>
        </div>

        {/* ── HOW IT WORKS ────────────────────────────────────────────────── */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              <Zap className="w-3.5 h-3.5" />
              How It Works
            </span>
            <h3 className="text-3xl font-bold text-gray-900">From Data to Harvest</h3>
          </div>

          {/* Workflow steps */}
          <div className="relative flex flex-wrap justify-center items-center gap-4 md:gap-0 mb-16">
            {/* Connecting line — desktop only */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-blue-200 via-violet-200 via-amber-200 to-green-200 hidden md:block pointer-events-none" />

            {workflowSteps.map((step, idx) => (
              <div key={step.title} className="flex items-center">
                <div className="flex flex-col items-center gap-3 relative z-10 md:px-6 lg:px-10">
                  {/* Step number badge */}
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg ring-4 ${step.ring} bg-white`}
                    >
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-900 text-white text-[9px] font-bold flex items-center justify-center shadow">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-gray-600 whitespace-nowrap">{step.title}</span>
                </div>

                {/* Arrow between steps */}
                {idx < workflowSteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-gray-300 hidden md:block shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* ── METRICS BAND ──────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-5 text-center group"
              >
                <div className={`text-3xl font-extrabold ${m.color} mb-1 group-hover:scale-110 transition-transform inline-block`}>
                  {m.value}
                </div>
                <div className="text-xs text-gray-400 font-medium">{m.label}</div>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/pages/Contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-semibold hover:scale-105 transition-all shadow-md shadow-green-200"
            >
              Request Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pages/Solutions"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-green-300 transition-all"
            >
              Explore Solutions
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}