"use client";

import Link from "next/link";
import { Leaf, Mail, Phone, MapPin,  Send } from "lucide-react";
import Crop2xLogo from "@/../public/assets/crop2x-logo.png"; 
import Image from "next/image";
const footerLinks = {
  company: [
    { name: "About Us", href: "/pages/About" },
    { name: "Our Impact", href: "/pages/Impact" },
    { name: "Blog", href: "/pages/Blog" },
  ],
  solutions: [
    { name: "Sensor & IoT", href: "/pages/Solutions" },
    { name: "Satellite Intelligence", href: "/pages/Solutions" },
    { name: "Smart Irrigation", href: "/pages/Solutions" },
    { name: "Farm as a Service", href: "/pages/Solutions" },
  ],
  products: [
    { name: "Crop2X Sensor Probes", href: "/pages/Products" },
    { name: "Weather Tracker", href: "/pages/Products" },
    { name: "Ag5X Platform", href: "/pages/Products" },
    { name: "Infarm Box", href: "/pages/Products" },
  ],
  support: [
    { name: "Contact Us", href: "/pages/Contact" },
    { name: "FAQs", href: "/pages/Resources#faq" },
    { name: "Resource Center", href: "/pages/Resources" },
    { name: "Privacy Policy", href: "/pages/Privacy" },
  ],
};

// const socialLinks = [
//   { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
//   { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
// ];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
             <Image src={Crop2xLogo} alt="Crop2X Logo" className="w-40" />
            </Link>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              Precision agriculture ecosystem — IoT sensors, satellite intelligence, and AI insights for modern farming.
            </p>
            {/* <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 hover:text-green-600 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 hover:text-green-600 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 hover:text-green-600 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 hover:text-green-600 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Newsletter Row */}
        <div className="grid md:grid-cols-2 gap-8 py-8 border-t border-gray-100">
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Get in Touch</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-500 hover:animate-bounce hover:cursor-pointer">
                <Phone className="w-4 h-4 text-green-600" />
                <span>+92 346 7666791</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 hover:animate-bounce hover:cursor-pointer">
                <Mail className="w-4 h-4 text-green-600" />
                <span>info@crop2x.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 hover:animate-bounce hover:cursor-pointer">
                <MapPin className="w-8 h-8 text-green-600" />
                <span>Room # 001, ICCBS Technology Incubator and Industrial Park Center 2, Industrial Linkages Building, International Center for Chemical and Biological Sciences, University Of Karachi, Karachi, Karachi City, Sindh
</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
    
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Crop2X. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}