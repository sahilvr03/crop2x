"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Cpu, Satellite, Droplets, Leaf, CheckCircle, Sparkles, TrendingUp, Droplet, CloudSun, BarChart3 } from "lucide-react";
import Impact from "@/app/components/Impact";
import WeOffer from "@/app/components/WeOffer";
import Products from "@/app/components/Products";
import TrustedPartners from "@/app/components/TrustedPartners";
import WhatAgriFaced from "@/app/components/WhatAgriFaced";






const features = [
  "AI-powered predictive analytics",
  "Real-time soil & crop health data",
  "Automated irrigation scheduling",
  "Weather forecasting & alerts",
];

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero-farm.jpg"
            alt="Smart farming landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-green-900/30" />
        </div>

        {/* Hero Content */}
        <div className="container flex items-center justify-center  mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <div className="max-w-8xl ">
            <div className="inline-flex items-center mt-4 gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium tracking-wide">Precision Agriculture Ecosystem</span>
            </div>

            <h1 className="text-4xl md:text-2xl lg:text-7xl font-bold leading-tight mb-6">
              Digitizing Agriculture for a
              
            </h1>
            <h1 className="text-transparent text-4xl sm:text-6xl md:text-2xl  lg:text-7xl font-bold leading-tight mb-6 bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                Climate-Resilient Future
             </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              AI-powered sensors, satellite monitoring, and expert advisory all integrated into one platform to help farmers, agribusinesses, and governments increase productivity, reduce risks, and conserve resources.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r  from-green-600 to-emerald-600 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105"
              >
                Request Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
              >
                <Play size={18} /> Explore More
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap  mb-4 lg:text-xl gap-6 text-md text-gray-300">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhatAgriFaced/>
    
      {/* PRODUCTS SECTION */}
   <Products/>

      {/* SOLUTIONS SECTION */}
    <WeOffer/>
     {/* IMPACT SECTION */}
     <Impact  />


      {/* CTA SECTION */}
    <TrustedPartners/>


    </>
  );
}