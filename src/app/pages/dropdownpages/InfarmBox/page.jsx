"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Leaf,
  Heart,
  Calendar,
  Truck,
  Package,
  Star,
  CheckCircle,
  Apple,
  Carrot,
  Citrus,
  Coffee,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Farm Fresh",
    desc: "Harvested at peak ripeness and delivered within 24 hours for maximum freshness.",
    color: "from-green-600 to-emerald-500",
  },
  {
    icon: Calendar,
    title: "Flexible Delivery",
    desc: "Weekly boxes or purpose baskets delivered on your schedule — skip or pause anytime.",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Health-Focused",
    desc: "Curated for wellness: energy, immunity, heart health, and more — nutritionist-approved.",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: Leaf,
    title: "Support Local",
    desc: "Direct partnerships with farmers, ensuring fair prices and sustainable farming practices.",
    color: "from-emerald-600 to-teal-500",
  },
  {
    icon: Package,
    title: "Sustainable Packaging",
    desc: "Eco-friendly, compostable materials used in every box — zero plastic waste.",
    color: "from-amber-600 to-orange-500",
  },
];

const boxOptions = [
  {
    name: "Weekly Seasonal Box",
    price: "$24.99",
    period: "per week",
    desc: "A curated selection of the season's freshest produce — changes weekly based on harvest.",
    features: ["6-8 varieties", "Seasonal fruits & veggies", "Recipe cards included"],
    popular: true,
    image: "/assets/seasonal-box.jpg",
  },
  {
    name: "Immunity Booster Basket",
    price: "$19.99",
    period: "per box",
    desc: "Packed with vitamin C, antioxidants, and immune-supporting superfoods.",
    features: ["Citrus fruits", "Ginger & turmeric", "Leafy greens"],
    popular: false,
    image: "/assets/immunity-box.jpg",
  },
  {
    name: "Energy & Vitality Basket",
    price: "$21.99",
    period: "per box",
    desc: "Natural energy boosters for active lifestyles — perfect for pre-workout nutrition.",
    features: ["Bananas & dates", "Nuts & seeds", "High-fiber veggies"],
    popular: false,
    image: "/assets/energy-box.jpg",
  },
];

const benefits = [
  { icon: CheckCircle, text: "Freshness Guaranteed — 24hr farm-to-table" },
  { icon: CheckCircle, text: "Convenient & Flexible scheduling" },
  { icon: CheckCircle, text: "Health-Focused, nutritionally curated" },
  { icon: CheckCircle, text: "Support Local Farmers directly" },
  { icon: CheckCircle, text: "Eco-Friendly, compostable packaging" },
];

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Lahore, Weekly Subscriber",
    quote: "The Infarm Box changed how my family eats. Fresh, delicious, and I love knowing we're supporting local farmers.",
    rating: 5,
    image: "/assets/testimonial-1.jpg",
  },
  {
    name: "Imran Ali",
    role: "Farmer Partner",
    quote: "Working with Infarm Box gives us a stable market and fair prices. We're proud to grow for this community.",
    rating: 5,
    image: "/assets/testimonial-2.jpg",
  },
  {
    name: "Sana Tariq",
    role: "Karachi, Health Enthusiast",
    quote: "The Immunity Basket is a game-changer. I feel more energetic and my seasonal allergies have improved!",
    rating: 5,
    image: "/assets/testimonial-3.jpg",
  },
];

export default function InfarmBoxPage() {
  const [selectedBox, setSelectedBox] = useState(null);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-green-800 via-green-900 to-emerald-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%234caf50%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-green-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-800 tracking-wide">Infarm Box · Farm to Table</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Farm Fresh,
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Purpose-Packed
              </span>
              <br />
              Delivered to Your Door
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
              Infarm Box delivers seasonal, farm-fresh produce curated for your wellness goals. Every box supports local farmers, ensures freshness, and helps you make healthier choices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#order"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-semibold hover:scale-105 transition-all shadow-lg shadow-green-900/30"
              >
                Order Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#benefits"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-green-600 text-green-700 rounded-xl font-semibold hover:bg-green-50 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              Why Infarm Box
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Freshness, Wellness & Community
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every box is crafted with care for you and the planet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSCRIPTION / ORDERING SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="order">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              Choose Your Box
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Select Your Infarm Box
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible plans and wellness-focused baskets — delivered when you need them
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {boxOptions.map((box) => (
              <div
                key={box.name}
                className={`relative bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  box.popular ? "border-green-500 shadow-lg" : "border-gray-100"
                }`}
              >
                {box.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <div className="h-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-center">
                      {box.name.includes("Seasonal") && <Apple className="w-12 h-12 text-green-600 mx-auto" />}
                      {box.name.includes("Immunity") && <Citrus className="w-12 h-12 text-orange-500 mx-auto" />}
                      {box.name.includes("Energy") && <Coffee className="w-12 h-12 text-amber-600 mx-auto" />}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{box.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{box.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {box.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-gray-900">{box.price}</span>
                    <span className="text-sm text-gray-500"> / {box.period}</span>
                  </div>
                  <button
                    onClick={() => setSelectedBox(box.name)}
                    className={`w-full py-2.5 rounded-xl font-semibold transition-all ${
                      box.popular
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:scale-105 shadow-md"
                        : "border border-green-600 text-green-700 hover:bg-green-50"
                    }`}
                  >
                    {selectedBox === box.name ? "✓ Selected" : "Subscribe Now"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/pages/Contact"
              className="inline-flex items-center gap-2 text-green-700 font-semibold hover:gap-3 transition-all"
            >
              Customize Your Box <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION (horizontal icons) */}
      <section className="py-20 bg-white" id="benefits">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Infarm Box?</h2>
            <p className="text-xl text-gray-600">Simple reasons to make the switch</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-full shadow-sm">
                <benefit.icon className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide mb-4">
              Loved by Customers & Farmers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-green-900 to-emerald-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <Carrot className="w-16 h-16 text-green-300 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Infarm Box Today</h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of happy households enjoying the freshest produce while supporting local farmers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#order"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-green-800 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Order Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pages/Contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all"
            >
              Learn More
            </Link>
          </div>
          <p className="text-sm text-green-200 mt-6">Free delivery on first order • Cancel anytime</p>
        </div>
      </section>
    </>
  );
}