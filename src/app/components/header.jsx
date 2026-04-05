"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Leaf, Phone, Mail } from "lucide-react";

const solutionsDropdown = [
  {
    title: "Sensor & IoT Solutions",
    items: [
      { name: "Crop2X Sensor Probes", href: "/pages/Products", desc: "Real-time soil monitoring" },
      { name: "Weather Tracker", href: "/pages/Products", desc: "Hyper-local weather data" },
    ],
  },
  {
    title: "Software & Platforms",
    items: [
      { name: "Satellite Intelligence (Ag5X)", href: "/pages/Products", desc: "AI-powered NDVI analysis" },
      { name: "Water Scheduling Platform", href: "/pages/Products", desc: "Smart irrigation control" },
    ],
  },
  {
    title: "Farm as a Service",
    items: [
      { name: "Agronomic Advisory", href: "/pages/Solutions", desc: "Expert crop guidance" },
      { name: "Farm Management Support", href: "/pages/Solutions", desc: "End-to-end operations" },
    ],
  },
  {
    title: "Value Chain & Delivery",
    items: [{ name: "Infarm Box", href: "/pages/Products", desc: "Farm-to-fork traceability" }],
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/pages/About" },
  { name: "Solutions", href: "/pages/Solutions", dropdown: true },
  { name: "Products", href: "/pages/Products" },
  { name: "Impact", href: "/pages/Impact" },
  { name: "Resources", href: "/pages/Resources" },
  { name: "Contact", href: "/pages/Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (dropdownRef.current && !dropdownRef.current.contains(document.activeElement)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100/50"
          : "bg-white/80 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="text-gray-900">Crop</span>
            <span className="text-green-600">2X</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.dropdown && setSolutionsOpen(true)}
              onMouseLeave={() => link.dropdown && setSolutionsOpen(false)}
            >
              <Link
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg flex items-center gap-1 transition-all duration-200 ${
                  pathname === link.href
                    ? "text-green-700 bg-green-50"
                    : "text-gray-700 hover:text-green-700 hover:bg-green-50/50"
                }`}
              >
                {link.name}
                {link.dropdown && (
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      solutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Mega Menu Dropdown */}
              {link.dropdown && solutionsOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="p-5 grid grid-cols-2 gap-5">
                    {solutionsDropdown.map((section) => (
                      <div key={section.title}>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                          {section.title}
                        </h4>
                        <ul className="space-y-2">
                          {section.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="block group/link"
                                onClick={() => setSolutionsOpen(false)}
                              >
                                <div className="text-sm font-medium text-gray-800 group-hover/link:text-green-700 transition-colors">
                                  {item.name}
                                </div>
                                {item.desc && (
                                  <div className="text-xs text-gray-500 group-hover/link:text-green-600/70 transition-colors">
                                    {item.desc}
                                  </div>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 px-5 py-3 border-t border-gray-100">
                    <Link
                      href="/pages/Solutions"
                      className="text-sm text-green-700 font-medium hover:text-green-800 flex items-center gap-1"
                      onClick={() => setSolutionsOpen(false)}
                    >
                      View all solutions →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Action Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/pages/Contact"
            className="px-5 py-2 text-sm font-medium border border-green-600 rounded-xl text-green-700 hover:bg-green-50 hover:shadow-sm transition-all duration-200"
          >
            Request Demo
          </Link>
          <Link
            href="/pages/Contact"
            className="px-5 py-2 text-sm font-medium bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
          >
            Partner With Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-black/20 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border-t border-gray-100 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            <nav className="container mx-auto px-4 py-5 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                      pathname === link.href
                        ? "text-green-700 bg-green-50 font-medium"
                        : "text-gray-700 hover:text-green-700 hover:bg-green-50/50"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
                  </Link>
                  {/* Optional: expandable submenu for Solutions on mobile */}
                </div>
              ))}

              <div className="pt-6 mt-2 border-t border-gray-100 space-y-3">
                <Link
                  href="/pages/Contact"
                  className="block w-full px-4 py-3 text-center font-medium border border-green-600 rounded-xl text-green-700 hover:bg-green-50 transition-all duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  Request Demo
                </Link>
                <Link
                  href="/pages/Contact"
                  className="block w-full px-4 py-3 text-center font-medium bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  Partner With Us
                </Link>
              </div>

              {/* Contact info on mobile */}
              <div className="pt-6 mt-4 border-t border-gray-100 space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-green-600" />
                  <span>+92 300 1234567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-green-600" />
                  <span>info@crop2x.com</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}