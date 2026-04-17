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
  { q: "What crops does Crop2X support?", a: "Crop2X solutions work across major crops including wheat, cotton, rice, sugarcane, maize, and vegetables. Our platform adapts to both row crops and orchards." },
  { q: "Do I need internet connectivity in my farm?", a: "Sensors use cellular connectivity and work in remote areas. Data is stored locally and synced when connection is available. The platform works on any internet-enabled device." },
  { q: "How long does sensor installation take?", a: "Deployment typically takes 1–2 days with immediate data availability. Our team provides on-site training and remote support." },
  { q: "What is the cost structure?", a: "Flexible subscription and FaaS models are available, starting from affordable monthly plans. Contact our sales team for customized pricing based on farm size and needs." },
  { q: "Is my data secure?", a: "Yes, we use enterprise-grade encryption and comply with data protection regulations. You own your farm data completely." },
  { q: "Can I integrate with existing farm equipment?", a: "Our platform supports API integration with major irrigation controllers, weather stations, and farm management software." },
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-800 to-emerald-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
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
              },
              {
                icon: FileText,
                title: "Whitepapers & Reports",
                desc: "Deep research on precision agriculture technologies.",
                color: "from-blue-600 to-cyan-500",
                count: "5 reports",
              },
              {
                icon: HelpCircle,
                title: "Guides & FAQs",
                desc: "Step-by-step guides and answers to common questions.",
                color: "from-amber-600 to-orange-500",
                count: "24+ guides",
              },
            ].map((resource) => (
              <div
                key={resource.title}
                className="group p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center bg-gradient-to-br from-white to-gray-50"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.color} text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <resource.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{resource.desc}</p>
                <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded-full">
                  {resource.count}
                </span>
              </div>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our collection of articles, guides, and research</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <div
                key={article.title}
                className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500 mb-4">{article.readTime}</p>
                <Link
                  href="/resources/article"
                  className="inline-flex items-center gap-2 text-green-700 font-medium text-sm group-hover:gap-3 transition-all"
                >
                  Read <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          {regularArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ SECTION - Accordion Style */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all hover:scale-105"
            >
              Contact Support <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

  
    </>
  );
}