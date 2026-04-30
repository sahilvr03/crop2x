"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Eye,
  Award,
  Users,
  ArrowRight,
  Leaf,
  Sparkles,
  TrendingUp,
  Droplet,
  BarChart3,
  CheckCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

function CountUp({ end, duration = 3200, suffix = "" }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime;
    let frame;
    const finalValue = parseInt(String(end).replace(/\D/g, ""));
    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const current = Math.floor(progress * finalValue);
      setCount(current);
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);
  return <span>{count}{suffix}</span>;
}

/* ================= DATA ================= */

const timeline = [
  {
    year: "2018",
    title: "Water Management Solution",
    desc: "Started as an irrigation water management solution to optimize water usage in agriculture.",
    highlight: "Foundation Stage",
  },
  {
    year: "2019",
    title: "Sensor-Based Crop Monitoring",
    desc: "Expanded into crop monitoring with on-ground sensor probes for real-time soil data.",
    highlight: "Precision Farming Begins",
  },
  {
    year: "2020–2022",
    title: "AI & Satellite Integration",
    desc: "Integrated satellite imagery and AI analytics for large-scale farm intelligence.",
    highlight: "Tech Expansion",
  },
  {
    year: "2023",
    title: "FaaS Model Launch",
    desc: "Introduced Farm as a Service (FaaS) providing complete farm management solutions.",
    highlight: "Service Innovation",
  },
  {
    year: "2024–2025",
    title: "Ecosystem Expansion",
    desc: "Expanded into agronomist advisory, software services, and Infarm Box produce delivery.",
    highlight: "Full Ecosystem",
  },
];

const differentiators = [
  {
    icon: Target,
    title: "End-to-End Ecosystem",
    desc: "Hardware, software, advisory, and value chain — all integrated into one platform.",
  },
  {
    icon: Eye,
    title: "Data-Driven Decisions",
    desc: "Real-time monitoring via IoT sensors and satellite intelligence.",
  },
  {
    icon: Users,
    title: "Expert Agronomists",
    desc: "Field-level recommendations from experienced professionals.",
  },
  {
    icon: Leaf,
    title: "Built for Pakistan",
    desc: "Designed for local crops, climate, and farming challenges.",
  },
  {
    icon: Award,
    title: "Sustainable Impact",
    desc: "Water savings, climate-smart practices, reduced losses.",
  },
];

const stats = [
  { value: 100, suffix: "K+", label: "Acres Monitored", icon: TrendingUp },
  { value: 500, suffix: "+", label: "Farmers Empowered", icon: Users },
  { value: 30, suffix: "%", label: "Water Saved", icon: Droplet },
  { value: 25, suffix: "%", label: "Yield Improvement", icon: BarChart3 },
];

const teamMembers = [
  {
    name: "Ayesha Alam Khurram",
    role: "Director & CEO",
    bio: "Leading Crop2X with a vision to digitize agriculture in Pakistan.",
    image: "/assets/director-1.jpg",
  },
  {
    name: "Wamiq Hamid",
    role: "Director",
    bio: "Co-driving Crop2X's mission to transform Pakistan's agricultural landscape.",
    image: "/assets/wamiq.jpg",
  },
];

const advisoryBoard = [
  {
    name: "Mahmood Nawaz Shah",
    role: "Director – Trade Development Authority of Pakistan (TDAP)",
    image: "/assets/nawaz.jpg",
  },
  {
    name: "Aamer Hayat Bhandara",
    role: "Co-Founder Agriculture Republic & Digital Dera | Farmer | Ex Member District Council",
    image: "/assets/aamer.jpeg",
  },
  {
    name: "Tauseef Rab",
    role: "Director of Engineering – Luminous Computing | Founder – Feeling Blessed",
    image: "/assets/rab.jpeg",
  },
  {
    name: "Mazhar Ali",
    role: "Founder – IR Farms",
    image: "/assets/mazhar.jpeg",
  },
  {
    name: "Virender Kumar",
    role: "Project Manager – Dalda",
    image: "/assets/kumar.jpg",
  },
  {
    name: "Laeeq Uz Zaman",
    role: "Technical Advisor",
    image: "/assets/laeeq.png",
  },
    {
    name: "Huma Zia",
    role: "Assistant Professor at Abu Dhabi University",
    image: "/assets/huma.jpeg",
  },
];

const achievements = [
  { emoji: "📈", value: "100K+", label: "Acres Monitored" },
  { emoji: "🌾", value: "500+", label: "Farmers Empowered" },
  { emoji: "🏆", value: "Awards", label: "Incubation Programs & Grants" },
  { emoji: "💡", value: "Research", label: "Publications & Innovations" },
];

/* ================= PAGE ================= */

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/about.jpg"
            alt="Agriculture Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20">
            <Sparkles className="w-4 h-4 text-green-300" />
            <span className="text-sm">About Crop2X</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforming Agriculture Through Technology and Expertise
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Crop2X empowers farmers, agribusinesses, and governments with AI-driven insights, IoT solutions, and expert advisory — creating a climate-resilient, high-yield agriculture ecosystem in Pakistan.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#our-story");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition"
          >
            Learn About Our Journey <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 p-6 text-center transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-gradient-to-br from-green-100 to-green-200 text-green-700 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <stat.icon className="w-7 h-7" />
                </div>
                <h3 className="relative text-3xl font-extrabold text-gray-900 tracking-tight">
                  <CountUp end={stat.value} suffix={stat.suffix || ""} />
                </h3>
                <p className="relative mt-2 text-sm font-medium text-gray-500 group-hover:text-gray-700 transition">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow">
            <Target className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Mission</h3>
            <p className="text-gray-600">
              To empower every farmer with precise, real-time agriculture insights, reducing risks and improving yields.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow">
            <Eye className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Vision</h3>
            <p className="text-gray-600">
              To build a fully digitized, sustainable agriculture ecosystem in Pakistan ensuring food security and climate resilience.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="our-story" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-600 text-sm font-semibold uppercase tracking-wide">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              How Crop2X Came to Life
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              From a simple idea to a complete agriculture ecosystem — here's how we evolved over time.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 w-1 h-full bg-green-100" />
            {timeline.map((item, i) => (
              <div key={i} className="relative flex items-start gap-6 mb-12 group">
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-white text-xs font-bold shadow-md group-hover:scale-110 transition text-center leading-tight px-1">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1 bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      {item.highlight}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CROP2X */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-green-600 text-sm font-semibold uppercase tracking-wide">
            Our Edge
          </span>
          <h2 className="text-3xl font-bold mt-3 mb-12">Why Crop2X?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {differentiators.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition hover:-translate-y-1">
                <item.icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-14">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
              Achievements
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Driving Impact, Backed by Results
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our growth is measured not just in numbers, but in the real impact we create for farmers and agriculture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-4xl mb-3">{a.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-900">{a.value}</h3>
                <p className="text-gray-600 text-sm mt-1">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
<section className="py-28 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 text-center">
    
    <span className="text-green-600 text-base font-semibold uppercase tracking-wider">
      Leadership
    </span>

    <h2 className="text-4xl font-bold mt-4 mb-16">
      Meet the Minds Behind Crop2X
    </h2>

    {/* Directors */}
    <div className="flex flex-wrap justify-center gap-14 mb-24">
      {teamMembers.map((member, i) => (
        <div key={i} className="flex flex-col items-center group max-w-xs">
          
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mb-5 group-hover:scale-105 transition duration-300">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentNode.classList.add(
                  "bg-green-100",
                  "flex",
                  "items-center",
                  "justify-center"
                );
              }}
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-900">
            {member.name}
          </h3>

          <p className="text-green-600 text-sm font-medium mt-1 mb-2">
            {member.role}
          </p>

          <p className="text-gray-500 text-sm leading-relaxed">
            {member.bio}
          </p>
        </div>
      ))}
    </div>

    {/* Advisory Board */}
    <div className="border-t border-gray-200 pt-20">
      
      <span className="text-green-600 text-base font-semibold uppercase tracking-wider">
        Advisors
      </span>

      <h3 className="text-3xl font-bold text-gray-900 mt-4 mb-12">
        Advisory Board
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {advisoryBoard.map((advisor, i) => (
          <div
            key={i}
            className="flex items-center gap-5 bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition hover:-translate-y-1"
          >
            
            <div className="w-20 h-20 rounded-full overflow-hidden bg-green-100 flex-shrink-0 border-2 border-green-50 shadow">
              <img
                src={advisor.image}
                alt={advisor.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>

            <div className="text-left">
              <h4 className="font-semibold text-gray-900 text-base">
                {advisor.name}
              </h4>

              <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                {advisor.role}
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  </div>
</section>

      {/* CTA */}
      <section className="relative py-24 bg-gray-900 text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/about.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="inline-block text-green-400 text-sm font-semibold uppercase tracking-wide mb-4">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Journey in Transforming Agriculture
          </h2>
          <p className="mb-8 text-gray-300 text-lg">
            Partner with Crop2X to build a smarter, more sustainable future for farming.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pages/Contact"
              className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-xl font-medium transition flex items-center gap-2"
            >
              Request Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pages/Contact"
              className="border border-white/40 hover:bg-white/10 px-8 py-3 rounded-xl font-medium transition"
            >
              Partner With Us
            </Link>
            <Link
              href="/pages/Solutions"
              className="border border-white/40 hover:bg-white/10 px-8 py-3 rounded-xl font-medium transition"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}