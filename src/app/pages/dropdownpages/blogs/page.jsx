"use client";

import { blogs } from "../../../blog";
import BlogCard from "../../../components/BlogCard";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      {/* 🔥 HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/blogs/bg-blog.avif"
            alt="Blog Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20">
            <Sparkles className="w-4 h-4 text-green-300" />
            <span className="text-sm">Crop2X Insights</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Explore Our Latest Blogs & Insights
          </h1>

          <p className="text-lg md:text-xl text-gray-200">
            Discover innovations, agriculture trends, and real-world impact stories from Crop2X.
          </p>
        </div>
      </section>

      {/* 🔥 BLOG GRID */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Latest Articles
              </h2>
              <p className="text-gray-500 mt-1">
                Stay updated with agriculture innovation & insights
              </p>
            </div>

         
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}