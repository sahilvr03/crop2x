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
        
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Testimonials

             
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
Here are some quotes from professionals in the farming industry. 80% of these farmers would recommend our services to others. Take a look at what people are saying about Crop2X.

            </p>
            
          </div>
        </div>
      </section>
{/* TESTIMONIAL SECTION */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* TOP TESTIMONIAL (BIG) */}
    <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

      {/* TEXT */}
      <div>
        <p className="text-gray-700 leading-relaxed text-lg mb-6">
        We at Genuine Delight Farms have utilized the services of Crop2X for more than a year now. We are very excited to receive real time reliable information from the field. In Pakistan it is a challenge developing this technology and making it workable on the field. Unlike businesses or industry where the deployments are in a controlled environment and not remote. 
        </p>

        <p className="text-gray-700 leading-relaxed text-lg mb-6">
We are hoping to continue our work with Crop2X and expand it beyond mangoes and banana where we are currently using the solar powered, GSM based probes of Crop2X.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg mb-6">
       We would like to wish Crop2X best of wishes and success, so that they continue to work in the provision of solutions based on smart technologies. We also feel that agriculture is deprived of technology use in Pakistan and that Crop2X becomes successful so that agriculture continues to benefit. 
        </p>

        <h4 className="font-semibold text-lg text-gray-900">
          Mr. Mahmood Nawaz Shah
        </h4>
        <span className="text-gray-500 text-sm">GDelight Farm</span>
      </div>

      {/* IMAGE */}
      <div className="flex justify-center">
        <img
          src="/assets/M-Nawaz-2.jpg" // replace with your image path
          alt="testimonial"
          className="rounded-2xl shadow-xl w-full max-w-md object-cover"
        />
      </div>
    </div>

    {/* SMALL TESTIMONIALS */}
<div className="grid md:grid-cols-2 gap-10">

  {/* CARD 1 */}
  <div className="relative bg-white border border-gray-200 p-10 rounded-2xl text-center shadow-sm hover:shadow-lg transition">

    {/* QUOTE ICON */}
    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-700 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl shadow-md">
      “
    </div>

    {/* PROFILE IMAGE */}
    <div className="flex justify-center -mt-6 mb-4">
      <img
        src="/assets/user1.jpg" // change image
        alt="user"
        className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
      />
    </div>

    {/* TEXT */}
    <p className="text-gray-700 leading-relaxed mb-6">
      I am using this device for about a year. It has contributed a lot in reducing the consumption of water
      for crops. I am looking forward to make use of this device further as it benefited me with higher
      productivity and in crop growth cycle.
    </p>

    {/* NAME */}
    <h4 className="font-semibold text-gray-900">
      Mr. Farooq Balouch
    </h4>
  </div>


  {/* CARD 2 */}
  <div className="relative bg-white border border-gray-200 p-10 rounded-2xl text-center shadow-sm hover:shadow-lg transition">

    {/* QUOTE ICON */}
    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-700 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl shadow-md">
      “
    </div>

    {/* PROFILE IMAGE */}
    <div className="flex justify-center -mt-6 mb-4">
      <img
        src="/assets/user2.jpg"
        alt="user"
        className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
      />
    </div>

    {/* TEXT */}
    <p className="text-gray-700 leading-relaxed mb-6">
      I am a small-scale farmer, this device not only scaled up productivity of my crops but also enriches
      the crop. Interested to invest more in expanded agricultural lands.
    </p>

    {/* NAME */}
    <h4 className="font-semibold text-gray-900">
      Mr. Liaquat Ali
    </h4>
  </div>


  {/* CARD 3 */}
  <div className="relative bg-white border border-gray-200 p-10 rounded-2xl text-center shadow-sm hover:shadow-lg transition">

    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-700 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl shadow-md">
      “
    </div>

    <div className="flex justify-center -mt-6 mb-4">
      <img
        src="/assets/user3.jpg"
        alt="user"
        className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
      />
    </div>

    <p className="text-gray-700 leading-relaxed mb-6">
      Although I have small agriculture, but after the implementation of this technology I can see the
      results clearly. I am willing to invest this technology on my larger farming lands.
    </p>

    <h4 className="font-semibold text-gray-900">
      Mr. Rafeeq
    </h4>
  </div>


  {/* CARD 4 */}
  <div className="relative bg-white border border-gray-200 p-10 rounded-2xl text-center shadow-sm hover:shadow-lg transition">

    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-700 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl shadow-md">
      “
    </div>

    <div className="flex justify-center -mt-6 mb-4">
      <img
        src="/assets/user4.jpg"
        alt="user"
        className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
      />
    </div>

    <p className="text-gray-700 leading-relaxed mb-6">
      I am very much satisfied by the use of this product. It plays a big role to increase annual profit
      and also saves cost. I would consider this device economically fair enough.
    </p>

    <h4 className="font-semibold text-gray-900">
      Mr. Pervaiz Baloch
    </h4>
  </div>

</div>
  </div>
</section>


{/* YOUTUBE VIDEO SECTION */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* HEADING */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Watch Our Impact
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Real stories from farmers using Crop2X technology to transform productivity and efficiency.
      </p>
    </div>

    {/* VIDEOS GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* VIDEO CARD */}
      {[
        {
          url: "https://www.youtube.com/embed/St9770RGHg4",
          title: "Satellite imagery By Crop2x",
          desc: "See how real-time data improves irrigation decisions."
        },
        {
          url: "https://www.youtube.com/embed/HgHE4aqNNq4",
          title: "Our Farmer from Vehari",
          desc: "productivity with Crop2X insights."
        },
        {
          url: "https://www.youtube.com/embed/OKC9PynEd6I",
          title: "Farmer From Rahim Yar Khan",
          desc: "Understand how sensors & analytics work together."
        },
        {
          url: "https://www.youtube.com/embed/HPHbbOL8R_4",
          title: "Farmer From Gadap Town",
          desc: "Live deployment and usage in agricultural fields."
        }
      ].map((video, index) => (
        <div
          key={index}
          className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2"
        >
          
          {/* VIDEO WRAPPER */}
          <div className="relative overflow-hidden">
            
            {/* IFRAME */}
            <iframe
              className="w-full h-52 group-hover:scale-105 transition duration-300"
              src={video.url}
              title={video.title}
              allowFullScreen
            ></iframe>

            {/* OVERLAY EFFECT */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div>
          </div>

          {/* TEXT */}
          <div className="p-5 text-center">
            <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-green-700 transition">
              {video.title}
            </h3>
          
          </div>

        </div>
      ))}

    </div>

  </div>
</section>

    </>
  );
}