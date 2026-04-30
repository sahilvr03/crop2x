"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, FileText, HelpCircle, Sparkles, ChevronDown, ArrowRight, Calendar, Tag } from "lucide-react";

const articles = [
  { title: "Understanding NDVI: A Farmer's Guide", category: "Guide", date: "Mar 2026", readTime: "8 min read", featured: true },
  { title: "How IoT Sensors Are Revolutionizing Irrigation", category: "Article", date: "Feb 2026", readTime: "5 min read", featured: false },
  { title: "The Role of AI in Modern Agriculture", category: "Whitepaper", date: "Jan 2026", readTime: "12 min read", featured: false },
  { title: "Soil Health Monitoring Best Practices", category: "Guide", date: "Dec 2025", readTime: "6 min read", featured: false },
  { title: "Climate-Smart Agriculture with Satellite Data", category: "Article", date: "Nov 2025", readTime: "7 min read", featured: false },
  { title: "Crop2X Annual Impact Report 2025", category: "Report", date: "Oct 2025", readTime: "15 min read", featured: true },
];

const faqs = [
  {
    category: "General",
    q: "What is Crop2X?",
    a: "We integrate IoT hardware and satellite-driven AI to optimize farm resources, maximize crop yield, and provide real-time agronomic advisory."
  },
  {
    category: "General",
    q: "Do I need a massive corporate farm to use Crop2X?",
    a: "No. Our solutions scale from independent commercial plots (e.g., 15-acre sites) to massive corporate agriculture operations."
  },
  {
    category: "Ag5x Platform",
    q: "What is Ag5x?",
    a: "Ag5x is our flagship platform that creates a \"digital twin\" of your farm. It uses satellite imagery to monitor crop health (NDVI), predict pest outbreaks, digitize farm logs, and forecast yield."
  },
  {
    category: "AquaSave Pro",
    q: "What does the AquaSave Pro device measure?",
    a: "It features multi-depth IoT sensor probes that track soil moisture, temperature, and salinity (EC) in real time to prescribe exact water requirements."
  },
  {
    category: "AquaSave Pro",
    q: "How does it help during the rainfall season?",
    a: "The system includes localized weather intelligence and predictive rain forecasts, allowing you to optimize or halt irrigation schedules ahead of monsoon conditions to prevent over-watering."
  },
  {
    category: "AquaSave Pro",
    q: "Is the device dependent on grid electricity?",
    a: "No. AquaSave Pro is entirely solar-powered and designed for remote operation."
  },
  {
    category: "AquaSave Pro",
    q: "Do I need a strong internet connection in the middle of my field?",
    a: "The AquaSave Pro relies on low-bandwidth IoT connectivity (cellular/GSM), allowing it to transmit critical soil and weather data even in areas with weak standard network coverage."
  },
  {
    category: "FAAS",
    q: "What is Farming as a Service (FAAS)?",
    a: "FAAS is our consulting-led model where Crop2X acts as your \"Remote Agronomist.\" You receive actionable agronomic advisory, soil lab analysis (pH, EC, NPK), and structured bi-weekly performance reports."
  },
  {
    category: "FAAS",
    q: "What is the onboarding process?",
    a: "We follow a rapid deployment workflow: map your pain points → propose a service plan → collect your farm's KML boundaries for satellite tracking → deploy hardware and begin monitoring."
  },
  {
    category: "FAAS",
    q: "Who handles the physical soil testing?",
    a: "Under our FAAS model, our team collects physical soil samples from your farm and runs them through lab analysis for essential metrics like pH, EC, and NPK to establish a baseline."
  },
  {
    category: "Support",
    q: "What kind of support do I get after installation?",
    a: "You are assigned a dedicated technical team and agronomist. They provide ongoing troubleshooting, help interpret the Ag5x dashboard, and deliver structured bi-weekly performance reports."
  },
];
const categories = ["All", "Guide", "Article", "Whitepaper", "Report"];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState(null);

  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  const featuredArticles = articles.filter(a => a.featured);
  const regularArticles = filteredArticles.filter(a => !a.featured);

  return (
    <>
      {/* HERO SECTION */}
<section className="relative py-24 md:py-32 overflow-hidden">
  
  <div className="absolute inset-0">
    <img
      src="/assets/recources.png" // 👈 yahan ek wide farm + sunrise / data vibe image use karo
      alt="Agriculture Impact"
      className="w-full h-full object-cover scale-105"
    />
  </div>

  {/* Overlay (thoda strong for contrast) */}
  <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />

  {/* Pattern (optional, rakhna ho to) */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

  {/* Content */}
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
      <Sparkles className="w-4 h-4 text-green-300" />
      <span className="text-sm font-medium tracking-wide">Knowledge Center</span>
    </div>
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
      Resources & Insights
    </h1>
    <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
      Guides, research, and expert knowledge to help you succeed with precision agriculture.
    </p>
  </div>
</section>

      {/* RESOURCE TYPE CARDS */}


<section className="py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          icon: BookOpen,
          title: "Blog & Articles",
          desc: "Latest agritech insights and farming best practices.",
          color: "from-green-600 to-emerald-500",
          count: "12+ articles",
          href: "/pages/dropdownpages/blogs",
        },
        {
          icon: FileText,
          title: "Whitepapers & Reports",
          desc: "Deep research on precision agriculture technologies.",
          color: "from-blue-600 to-cyan-500",
          count: "5 reports",
          href: "/pages/whitepaper",
        },
        {
          icon: HelpCircle,
          title: "Guides & FAQs",
          desc: "Step-by-step guides and answers to common questions.",
          color: "from-amber-600 to-orange-500",
          count: "24+ guides",
          href: "#faqs",
        },
      ].map((resource) => (
        resource.href.startsWith("#") ? (
          <button
            key={resource.title}
            onClick={() => {
              const el = document.querySelector(resource.href);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center bg-gradient-to-br from-white to-gray-50 w-full cursor-pointer"
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.color} text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
              <resource.icon className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{resource.desc}</p>
            <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded-full">
              {resource.count}
            </span>
          </button>
        ) : (
          <Link
            key={resource.title}
            href={resource.href}
            className="group p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center bg-gradient-to-br from-white to-gray-50 block no-underline"
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.color} text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
              <resource.icon className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{resource.desc}</p>
            <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded-full">
              {resource.count}
            </span>
          </Link>
        )
      ))}
    </div>
  </div>
</section>
      {/* FEATURED ARTICLE */}
      {featuredArticles.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-3">
                Featured
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Must-Read Resources</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {featuredArticles.map((article) => (
                <div key={article.title} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {article.date}
                      </span>
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                      {article.title}
                    </h3>
                    <Link
                      href="/resources/article"
                      className="inline-flex items-center gap-2 text-green-700 font-medium text-sm group-hover:gap-3 transition-all"
                    >
                      Read More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ARTICLES GRID WITH FILTER */}


      {/* FAQ SECTION - Accordion Style */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="faqs">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-3">
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Everything you need to know about Crop2X</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-gray-900 hover:text-green-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFaq === idx ? "pb-4 max-h-40" : "max-h-0 pb-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm border-t border-gray-100 pt-3">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

       
        </div>
      </section>

  
    </>
  );
}