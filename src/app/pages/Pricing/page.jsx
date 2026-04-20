"use client";
import { useState } from "react";

const plans = [
  {
    name: "AquaSave Core Plan",
    sub: "AquaSave Pro IoT Device",
    badge: "Most Popular",
    featured: true,
    priceMain: "60,000 PKR",
    priceNote: "One-time hardware + 3,000 PKR/month",
    features: [
      "AquaSave Pro IoT Device",
      "7 Real-Time Sensors: Soil Moisture, Temp, Humidity, EC, pH, Salinity",
      "AI-Powered Water Conservation & Smart Irrigation Advisory",
      "Comprehensive Lab Testing: Physical Soil & Water (pH, EC, NPK, TDS)",
      "AI Soil Analysis per plot",
      "14-Day Daily Weather Forecast",
      "Rain Forecast for Irrigation Management",
      "Cropwise Weather Data AI Analysis",
      "Spray Time with Efficiency Suggestion",
    ],
    details: `Standard Plan: 60,000 PKR hardware + 3,000 PKR/month\nCorporate Plan (Sugar Mills / Banks / Contract Farming): 0 PKR hardware (waived) + 5,000 PKR/month/device — requires 2-year minimum contract\nCorporate Promotion: Buy 2 devices, get 1 free`,
  },
  {
    name: "Ag5x Vision Plan",
    sub: "Satellite Monitoring",
    badge: "Satellite AI",
    featured: false,
    priceMain: "300 PKR/acre/month",
    priceNote: "Seasonal plan (6 months) · Min 1 acre",
    features: [
      "Satellite Monitored via Ag5x",
      "Bi-Weekly Satellite Imagery Reports (NDVI & NDMI)",
      "14-Day Daily Weather Forecast",
      "Rain Forecast for Irrigation Management",
      "AI Disease & Pest Prediction Alerts",
      "Yield Forecasting & Optimal Harvest Date Prediction",
      "Fertilizer Optimization Tracking (canopy analysis)",
    ],
    details: `Seasonal: 300 PKR/acre/month (6 months, min 1 acre)\nAnnual: 450 PKR/acre/month (12 months, includes 25% discount)\nPremium: Pay 6 months, get 6 free — 100+ acres only, 12-month duration\nEnterprise: Custom pricing + API integration — 1,000+ acres only`,
  },
  {
    name: "Precision Synergy Plan",
    sub: "AquaSave Pro + Ag5x",
    badge: "Best Value",
    featured: true,
    priceMain: "60,000 PKR",
    priceNote: "One-time hardware + 4,000 PKR/month",
    features: [
      "Satellite Monitored via Ag5x (NDVI & NDMI)",
      "Bi-Weekly Satellite Imagery Reports",
      "AquaSave Pro IoT Device",
      "7 Real-Time Sensors (Moisture, Temp, Humidity, EC, pH, Salinity)",
      "AI Water Conservation & Irrigation Advisory",
      "Comprehensive Lab Testing (pH, EC, NPK, TDS)",
      "14-Day Weather Forecast & Rain Forecast",
      "Cropwise Weather AI Analysis",
      "AI Disease & Pest Prediction Alerts",
      "Yield Forecasting & Harvest Date Prediction",
      "Spray Time with Efficiency Suggestion",
    ],
    details: `Standard Plan: 60,000 PKR hardware + 4,000 PKR/month\nCorporate Plan: 0 PKR hardware (waived) + 6,000 PKR/month/device — requires 2-year contract\nCorporate Promotion: Buy 2 devices, get 1 free`,
  },
  {
    name: "Complete Farm Mastery Plan",
    sub: "AquaSave Pro + Ag5x + FAAS",
    badge: "Ultimate",
    featured: false,
    priceMain: "60,000 PKR",
    priceNote: "One-time hardware + 7,000 PKR/month · Max 25 acres/device",
    features: [
      "All Precision Synergy features included",
      "Dedicated FAAS Agronomist (end-to-end crop stage guidance)",
      "Priority Access & Direct Line for Troubleshooting",
      "AI Soil Analysis per sensor data",
      "Yield Forecasting & Optimal Harvest Date",
    ],
    details: `Standard Plan: 60,000 PKR hardware + 7,000 PKR/month (max 25 acres/device)\nStandard Promotion: 2 months free when full sum paid upfront\nCorporate Plan: 0 PKR hardware (waived) + 9,000 PKR/month/device — 2-year contract required\nCorporate Promotion: Buy 2 devices, get 1 free`,
  },
  {
    name: "Agronomy Advisory Plan",
    sub: "FAAS — Expert Consulting",
    badge: "Expert-Led",
    featured: false,
    priceMain: "15,000 PKR/crop",
    priceNote: "6-month duration · Unlimited acres",
    features: [
      "Dedicated FAAS Agronomist Assigned",
      "Crop Stage-wise Fertilization Advisory",
      "Pest & Disease Information & Management",
      "Traditional Irrigation Scheduling Guidance",
      "Rain Forecast for Irrigation Management",
      "On-Call Expert Troubleshooting throughout crop cycle",
    ],
    details: `Standard Plan: 15,000 PKR per crop\nCovers 1 crop for a strict 6-month duration across unlimited acres. No hardware or software required.`,
  },
  {
    name: "Organic Transition Plan",
    sub: "FAAS Organic Specialist",
    badge: "Chemical-Free",
    featured: false,
    priceMain: "25,000 PKR/crop",
    priceNote: "6-month duration · Unlimited acres",
    features: [
      "Dedicated FAAS Agronomist (Organic Specialist)",
      "Chemical-Free & Organic Crop Operations Guidance",
      "Organic Pest & Disease Management Protocols",
      "Soil Health Restoration Advisory",
      "Rain Forecast for Irrigation Management",
      "End-to-End Organic Compliance Support",
    ],
    details: `Standard Plan: 25,000 PKR per crop\nCovers 1 crop for 6 months across unlimited acres. Includes biological controls, natural deterrents, compost guidance, and support for chemical-free food yield certification.`,
  },
  {
    name: "Advanced Climate Plan",
    sub: "AquaSave Pro + Weather Tracker",
    badge: "Microclimate",
    featured: false,
    priceMain: "75,000 PKR",
    priceNote: "One-time hardware + 4,500 PKR/month",
    features: [
      "AquaSave Pro IoT + On-Field Weather Tracker",
      "7 Real-Time Sensors (Moisture, Temp, Humidity, EC, pH, Salinity)",
      "Hyper-Local Weather Tracking (wind speed, temperature, humidity)",
      "AI Water Conservation & Irrigation Advisory",
      "Comprehensive Lab Testing (pH, EC, NPK, TDS)",
      "Rain Forecast for Irrigation Management",
      "Smart Spraying Advisories (synced with local wind & temp)",
    ],
    details: `Standard Plan: 75,000 PKR hardware + 4,500 PKR/month\nCorporate Plan: 0 PKR hardware (waived) + 6,500 PKR/month/device — 2-year contract required\nCorporate Promotion: Buy 2 devices, get 1 free`,
  },
  {
    name: "Soil Lab Testing",
    sub: "One-time lab analysis",
    badge: "Standalone",
    featured: false,
    priceMain: "2,500 PKR/sample",
    priceNote: "One-time fee per physical sample",
    features: [
      "Comprehensive Physical Lab Testing",
      "NPK Profiling (Nitrogen, Phosphorus, Potassium)",
      "Soil pH & EC (Electrical Conductivity / Salinity) Testing",
      "Actionable Digital Report with fast turnaround",
      "No subscription required",
    ],
    details: `Standard Testing Fee: 2,500 PKR per sample (one-time, per physical sample submitted).\nNo software subscription needed. Ideal for farmers wanting a precise soil health baseline before choosing a plan.`,
  },
];

export default function PricingPage() {
  const [active, setActive] = useState(null);

  return (
    <>
      {/* ── Hero ── */}
<section className="relative py-24 md:py-32 overflow-hidden">
  
  <div className="absolute inset-0">
    <img
      src="/assets/pricing.png" // 👈 yahan ek wide farm + sunrise / data vibe image use karo
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Pricing plans
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
            Purpose-built solutions that combine rugged hardware with intelligent
            software for modern farming.
          </p>
        </div>
</section>

      {/* ── Plans Grid ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-20">
            <span className="text-green-600 font-semibold tracking-wide uppercase text-sm">
              Choose Your Solution
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
              Built for Every Type of Farmer
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              From precision irrigation to satellite intelligence — select the
              plan that matches your farm size, goals, and growth stage.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 bg-white border border-gray-200 shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 flex flex-col ${
                  plan.featured ? "ring-2 ring-green-500 scale-[1.02]" : ""
                }`}
              >
                {/* Badge */}
                <span className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                  {plan.badge}
                </span>

                {/* Name */}
                <h3 className="text-xl font-semibold mb-1 text-gray-900 pr-20">
                  {plan.name}
                </h3>
                <p className="text-xs text-gray-500 mb-4">{plan.sub}</p>

                {/* Price */}
                <div className="mb-6">
                  <p className="text-2xl font-bold text-gray-900">
                    {plan.priceMain}
                  </p>
                  <span className="text-sm text-gray-500">{plan.priceNote}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6 text-sm text-gray-600 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✔</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Button + Details */}
                <div className="mt-auto">
                  <button
                    onClick={() =>
                      setActive(active === index ? null : index)
                    }
                    className="w-full py-2.5 rounded-lg bg-green-600 text-white hover:bg-green-700 transition font-medium"
                  >
                    {active === index ? "Hide Details" : "View Details"}
                  </button>

                  {active === index && (
                    <div className="mt-4 text-sm text-gray-600 border-t pt-4 whitespace-pre-line">
                      {plan.details}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}