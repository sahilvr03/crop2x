"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown, Leaf, Phone, Mail,
  Home, Info, Layers, Package, Briefcase, BarChart2,
  BookOpen, Users, MessageSquare
} from "lucide-react";
import Crop2xLogo from "@/../public/assets/crop2x-logo.png"; 
import Image from "next/image";
// ─── Mega-menu data ──────────────────────────────────────────────────────────

const megaMenus = {
  Home: {
    icon: Home,
    sections: [
      
      {
        title: "Quick Links",
        items: [
          { name: "Our Products", href: "/pages/Products", desc: "Explore what we build" },
          { name: "Our Solutions", href: "/pages/Solutions", desc: "End-to-end farm solutions" },
          { name: "Partner With Us", href: "/pages/Contact", desc: "Grow together" },
          { name: "Request a Demo", href: "/pages/Contact", desc: "See it live" },
        ],
      },
    ],
  },

  About: {
    icon: Info,
    sections: [
      {
        title: "Company",
        items: [
          { name: "Our Story & Evolution", href: "/pages/About", desc: "How Crop2X was born" },
          { name: "Mission & Vision", href: "/pages/About", desc: "Why we do what we do" },
          { name: "Key Differentiators", href: "/pages/About", desc: "Why choose Crop2X" },
        ],
      },
      {
        title: "People & Recognition",
        items: [
          { name: "Achievements & Awards", href: "/pages/About", desc: "Milestones we're proud of" },
          { name: "Team Overview", href: "/pages/About", desc: "The minds behind the mission" },
          { name: "Join Our Journey", href: "/pages/Contact", desc: "Careers & partnerships" },
        ],
      },
    ],
  },

  Solutions: {
    icon: Layers,
    sections: [
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
        title: "Farm as a Service (FaaS)",
        items: [
          { name: "Agronomic Advisory", href: "/pages/Solutions", desc: "Expert crop guidance" },
          { name: "Farm Management Support", href: "/pages/Solutions", desc: "End-to-end operations" },
          { name: "Platform Monitoring", href: "/pages/Solutions", desc: "Live field dashboards" },
        ],
      },
      {
        title: "Value Chain & Delivery",
        items: [
          { name: "Infarm Box", href: "/pages/Products", desc: "Farm-to-fork traceability" },
        ],
      },
    ],
  },

  Products: {
    icon: Package,
    sections: [
      {
        title: "Hardware",
        items: [
          { name: "Crop2X Sensor Probes", href: "/pages/Products", desc: "Soil intelligence probes" },
          { name: "Weather Tracker", href: "/pages/Products", desc: "Field-level weather stations" },
        ],
      },
      {
        title: "Software",
        items: [
          { name: "Satellite Platform (Ag5X)", href: "/pages/dropdownpages/agri5x", desc: "AI crop analytics" },
          { name: "Infarm Box", href: "/pages/dropdownpages/InfarmBox", desc: "Supply chain tracking" },
        ],
      },
      {
        title: "Services",
        items: [
          { name: "Farm as a Service", href: "/pages/dropdownpages/Faas", desc: "Managed farm operations" },
        ],
      },
    ],
  },

  Services: {
    icon: Briefcase,
    sections: [
      {
        title: "Advisory",
        items: [
          { name: "Soil Nutrient Analysis", href: "/pages/Solutions", desc: "Lab & sensor-based reports" },
          { name: "Pest Attack Prediction", href: "/pages/Solutions", desc: "AI-powered early warnings" },
        ],
      },
      {
        title: "Field Support",
        items: [
          { name: "Weekly Crop Reports", href: "/pages/Solutions", desc: "Regular insights delivered" },
          { name: "Field Visits & Audits", href: "/pages/Solutions", desc: "On-ground expert reviews" },
        ],
      },
    ],
  },

  Impact: {
    icon: BarChart2,
    sections: [
      {
        title: "Outcomes",
        items: [
          { name: "Measurable Stats", href: "/pages/Impact", desc: "Yield, water, cost savings" },
          { name: "Case Studies", href: "/pages/dropdownpages/casestudy", desc: "Real farm success stories" },
        ],
      },
      {
        title: "Environment",
        items: [
          { name: "Sustainability Report", href: "/pages/Impact", desc: "Our ecological footprint" },
        ],
      },
    ],
  },

  Resources: {
    icon: BookOpen,
    sections: [
      {
        title: "Learn",
        items: [
          { name: "Blog & Articles", href: "/pages/Resources", desc: "AgriTech insights" },
          { name: "Whitepapers & Research", href: "/pages/Resources", desc: "Deep-dive publications" },
          { name: "Guides & eBooks", href: "/pages/Resources", desc: "Practical farming guides" },
        ],
      },
      {
        title: "Support",
        items: [
          { name: "FAQs", href: "/pages/Resources", desc: "Common questions answered" },
        ],
      },
    ],
  },

  Partners: {
    icon: Users,
    sections: [
      {
        title: "Ecosystem",
        items: [
          { name: "Partner Ecosystem", href: "/pages/Contact", desc: "Our network of collaborators" },
          { name: "Technology Partners", href: "/pages/Contact", desc: "Integrations & alliances" },
        ],
      },
      {
        title: "Collaborations",
        items: [
          { name: "Government & NGO", href: "/pages/Contact", desc: "Public sector programs" },
        ],
      },
    ],
  },

  Contact: {
    icon: MessageSquare,
    sections: [
      {
        title: "Get in Touch",
        items: [
          { name: "Contact Form", href: "/pages/Contact", desc: "Send us a message" },
          { name: "Request Demo", href: "/pages/Contact", desc: "See the platform live" },
        ],
      },
      {
        title: "Work Together",
        items: [
          { name: "Partner With Us", href: "/pages/Contact", desc: "Grow with Crop2X" },
          { name: "Support / Helpdesk", href: "/pages/Contact", desc: "Technical assistance" },
        ],
      },
    ],
  },
};

const navLinks = [
  { name: "Home",      href: "/",               dropdown: true },
  { name: "About",     href: "/pages/About",     dropdown: true },
  { name: "Solutions", href: "/pages/Solutions", dropdown: true },
  { name: "Products",  href: "/pages/Products",  dropdown: true },
  { name: "Services",  href: "/pages/Services", dropdown: true },
  { name: "Impact",    href: "/pages/Impact",    dropdown: true },
  { name: "Resources", href: "/pages/Resources", dropdown: true },
  { name: "Partners",  href: "/pages/Contact",   dropdown: true },
  { name: "Contact",   href: "/pages/Contact",   dropdown: true },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Header() {
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [activeMenu, setActiveMenu]         = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const [scrolled, setScrolled]             = useState(false);
  const pathname  = usePathname();
  const leaveTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
    setMobileExpanded({});
  }, [pathname]);

  const handleMouseEnter = (name) => {
    clearTimeout(leaveTimer.current);
    setActiveMenu(name);
  };

  const handleMouseLeave = () => {
    leaveTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const toggleMobileSection = (name) =>
    setMobileExpanded((prev) => ({ ...prev, [name]: !prev[name] }));

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
        <Link href="/" className="flex items-center gap-2 group shrink-0">
        
        <Image src={Crop2xLogo} alt="Crop2X Logo" className="w-40" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const menu    = megaMenus[link.name];
            const isActive = pathname === link.href;
            const isOpen   = activeMenu === link.name;

            return (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg flex items-center gap-1 transition-all duration-200 ${
                    isActive
                      ? "text-green-700 bg-green-50"
                      : "text-gray-700 hover:text-green-700 hover:bg-green-50/60"
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {/* Mega-dropdown */}
                {link.dropdown && menu && isOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                    style={{ minWidth: menu.sections.length > 2 ? 580 : 360 }}
                    onMouseEnter={() => handleMouseEnter(link.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Header bar */}
                    <div className="flex items-center gap-2 px-5 pt-4 pb-3 border-b border-gray-100">
                      {menu.icon && <menu.icon className="w-4 h-4 text-green-600" />}
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {link.name}
                      </span>
                    </div>

                    {/* Sections grid */}
                    <div
                      className="p-5 grid gap-6"
                      style={{
                        gridTemplateColumns: `repeat(${Math.min(menu.sections.length, 2)}, 1fr)`,
                      }}
                    >
                      {menu.sections.map((section) => (
                        <div key={section.title}>
                          <h4 className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2.5">
                            {section.title}
                          </h4>
                          <ul className="space-y-2">
                            {section.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="block group/link rounded-lg px-2 py-1.5 -mx-2 hover:bg-green-50/70 transition-colors duration-150"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  <div className="text-sm font-medium text-gray-800 group-hover/link:text-green-700 transition-colors">
                                    {item.name}
                                  </div>
                                  {item.desc && (
                                    <div className="text-xs text-gray-400 group-hover/link:text-green-600/70 transition-colors mt-0.5">
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

                    {/* Footer CTA */}
                    {/* <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-5 py-3 border-t border-green-100/60">
                      <Link
                        href={link.href}
                        className="text-sm text-green-700 font-medium hover:text-green-800 transition-colors"
                        onClick={() => setActiveMenu(null)}
                      >
                        View all {link.name.toLowerCase()} →
                      </Link>
                    </div> */}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <Link
            href="/pages/Contact"
            className="px-4 py-2 text-sm font-medium border border-green-600 rounded-xl text-green-700 hover:bg-green-50 hover:shadow-sm transition-all duration-200"
          >
            Request Demo
          </Link>
          <Link
            href="/pages/Contact"
            className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
          >
            Partner With Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-black/20 backdrop-blur-sm">
          <div className="bg-white border-t border-gray-100 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const menu       = megaMenus[link.name];
                const isExpanded = !!mobileExpanded[link.name];
                const isActive   = pathname === link.href;

                return (
                  <div key={link.name}>
                    <div className="flex items-center">
                      <Link
                        href={link.href}
                        className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "text-green-700 bg-green-50"
                            : "text-gray-700 hover:text-green-700 hover:bg-green-50/50"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.name}
                      </Link>
                      {link.dropdown && menu && (
                        <button
                          className="p-3 text-gray-500 hover:text-green-700 transition-colors"
                          onClick={() => toggleMobileSection(link.name)}
                          aria-label={`Toggle ${link.name}`}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {isExpanded && menu && (
                      <div className="ml-4 mt-1 mb-2 border-l-2 border-green-100 pl-4 space-y-4">
                        {menu.sections.map((section) => (
                          <div key={section.title}>
                            <p className="text-[10px] uppercase tracking-widest font-semibold text-gray-400 mb-2">
                              {section.title}
                            </p>
                            <ul className="space-y-1">
                              {section.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className="flex flex-col px-3 py-2 rounded-lg hover:bg-green-50 transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    <span className="text-sm font-medium text-gray-800">
                                      {item.name}
                                    </span>
                                    {item.desc && (
                                      <span className="text-xs text-gray-400 mt-0.5">
                                        {item.desc}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* CTAs */}
              <div className="pt-5 mt-2 border-t border-gray-100 space-y-3">
                <Link
                  href="/pages/Contact"
                  className="block w-full px-4 py-3 text-center text-sm font-medium border border-green-600 rounded-xl text-green-700 hover:bg-green-50 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Request Demo
                </Link>
                <Link
                  href="/pages/Contact"
                  className="block w-full px-4 py-3 text-center text-sm font-medium bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl shadow-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Partner With Us
                </Link>
              </div>

              {/* Contact info */}
              <div className="pt-5 mt-2 border-t border-gray-100 space-y-2 text-sm text-gray-500">
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