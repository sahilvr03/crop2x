import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import TelenorLogo from '@/../public/assets/telenor-logo-white.png'
import GSMAlogo from '@/../public/assets/gsma-logo.png'
import IClogo from '@/../public/assets/ic-logo.png'
import SmartCityLabLogo from '@/../public/assets/smart-city-logo.png'
import P1 from '@/../public/assets/p1.png'
import P2 from '@/../public/assets/p2.png'
import P3 from '@/../public/assets/p3.png'
import P4 from '@/../public/assets/p4.png'
import P5 from '@/../public/assets/p5.png'
import P6 from '@/../public/assets/p6.png'
import C1 from '@/../public/assets/c1.png'
import C2 from '@/../public/assets/c2.png'
import C3 from '@/../public/assets/c3.png'
import C4 from '@/../public/assets/c4.png'
import C5 from '@/../public/assets/c5.png'
function TrustedPartners() {
  // Partner logos data
const partners = [

  {
    id: 2,
    name: "GSMA",
    logo: GSMAlogo
  },
  {
    id: 3,
    name: "dalda",
    logo: P1
  },
   {
    id: 4,
    name: "Smart City Lab",
    logo: SmartCityLabLogo
  },
  {
    id: 5,
    name: "Ir Farms",
    logo: P2
  },
  {
    id: 6,
    name: "Telenor Pakistan ",
    logo: P3
  },
  {
    id: 7,
    name: "Pakistan Agriculture Research (PAR) ",
    logo: P6},
  {
    id: 8,
    name: "ORI ",
    logo: P4
  },
  { id: 9,
    name: "Agro Focus",    logo: P5
  },

  
];

const acceleration = [

  {
    id: 2,
    name: "Acumen Academy",
    logo: C1
  },
  {
    id: 3,
    name: "Village Capital",
    logo: C2
  },
   {
    id: 4,
    name: "Shell tameer",
    logo: C3
  },
  {
    id: 5,
    name: "GSMA",
    logo: C4
  },
  {
    id: 6,
    name: "Pasha ICT Award",
    logo: C5
  },
 

  
];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners]

  return (
    <div>
      {/* Original CTA Section with Trusted Partners Below Paragraph */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-800" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className=" mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-xl text-green-100 mb-10">
              Join thousands of farmers who are increasing yield, saving water, and growing smarter with Ag5X.
            </p>
            
            {/* Trusted Partners - Logo Slider Below Paragraph */}
            <div className="mb-12">
              <h3 className="text-sm uppercase tracking-wider text-green-200 font-semibold mb-6">
                Trusted By Industry Leaders
              </h3>
              
              <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20  z-10"></div>
                
                <div className="logo-slider">
                  <div className="logo-slider-track">
                    {duplicatedPartners.map((partner, index) => (
                      <div
                        key={`${partner.id}-${index}`}
                        className="logo-slide group"
                      >
                        <div className="relative w-24 h-16 md:w-32 md:h-20  transition-all duration-300  ">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <p className="text-xs text-green-200 mt-2 text-center group-hover:text-white transition-colors">
                          {partner.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* PARTNERS & ASPIRATIONS SECTION */}
<section className="py-24 ">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Backed By & Recognized By
      </h2>
      <p className="text-lg text-green-100">
        Supported by leading accelerators and award platforms driving innovation in agriculture and technology.
      </p>
    </div>

    {/* Logos Layout (Centered + Balanced for 5 logos) */}
<div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
  {acceleration.map((item) => (
    <div key={item.id} className="group flex flex-col items-center">

      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:bg-white/20 transition">
        <Image
          src={item.logo}
          alt={item.name}
          width={140}
          height={80}
          className="object-contain opacity-80 group-hover:opacity-100 transition"
        />
      </div>

      <p className="text-sm text-green-100 mt-3 text-center">
        {item.name}
      </p>
    </div>
  ))}
</div>
  </div>
</section>

            <div className="flex flex-wrap justify-center gap-5">
              <Link
                href="/pages/Contact"
                className="group px-8 py-4 bg-white text-green-800 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Request Demo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/pages/Contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .logo-slider {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        
        .logo-slider-track {
          display: flex;
          animation: scroll 30s linear infinite;
          width: fit-content;
        }
        
        .logo-slide {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 1.5rem;
          transition: all 0.3s ease;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Pause animation on hover */
        .logo-slider:hover .logo-slider-track {
          animation-play-state: paused;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .logo-slide {
            margin: 0 1rem;
          }
        }
      `}</style>
    </div>
  )
}

export default TrustedPartners