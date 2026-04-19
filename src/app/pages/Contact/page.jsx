"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles, Clock, Shield, Users, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // ✅ Fixed: added `e` parameter + real API call
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Show first validation error if available
        const msg = data.errors?.[0]?.msg || data.error || "Something went wrong.";
        setErrorMsg(msg);
        return;
      }

      // ✅ Success
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);

    } catch (err) {
      setErrorMsg("Could not connect to server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    { icon: Phone, label: "Phone", value: "+92 300 1234567", href: "tel:+923001234567", detail: "Mon-Fri, 9am-6pm PST" },
    { icon: Mail, label: "Email", value: "info@crop2x.com", href: "mailto:info@crop2x.com", detail: "Response within 24h" },
    { icon: MapPin, label: "Address", value: "Room # 001, ICCBS Technology Incubator and Industrial Park Center 2, Industrial Linkages Building, International Center for Chemical and Biological Sciences, University Of Karachi, Karachi, Karachi City, Sindh", href: "#", detail: "Main office, by appointment" },
  ];

  const supportOptions = [
    { icon: Clock, title: "Fast Response", desc: "Within 24 hours" },
    { icon: Shield, title: "Secure", desc: "Your data protected" },
    { icon: Users, title: "Expert Team", desc: "Agronomy & tech support" },
  ];

  return (
    <>
      {/* HERO SECTION */}
<section className="relative py-24 md:py-32 overflow-hidden">
  
  <div className="absolute inset-0">
    <img
      src="/assets/contact.png" // 👈 yahan ek wide farm + sunrise / data vibe image use karo
      alt="Agriculture Impact"
      className="w-full h-full object-cover scale-105"
    />
  </div>

  {/* Overlay (thoda strong for contrast) */}
  <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />


  {/* Content */}
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-4 h-4 text-green-300" />
            <span className="text-sm font-medium tracking-wide">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Let's Connect
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
            Ready to transform your farm? Our team is here to help with demos, partnerships, and support.
          </p>
        </div>
</section>


      {/* SUPPORT HIGHLIGHTS */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {supportOptions.map((item) => (
              <div key={item.title} className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* LEFT COLUMN - CONTACT INFO */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600 leading-relaxed">
                  We'd love to hear from you. Fill out the form or reach us directly.
                  Our team typically responds within 24 hours.
                </p>
              </div>

              <div className="space-y-5">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    className="flex gap-4 items-start group p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{method.label}</h3>
                      <p className="text-sm text-gray-700">{method.value}</p>
                      <p className="text-xs text-gray-400 mt-1">{method.detail}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-green-50 rounded-xl p-5 text-center">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-800">Trusted by 500+ farms</p>
                <p className="text-xs text-gray-600">Join the growing community</p>
              </div>
            </div>

            {/* RIGHT COLUMN - FORM */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 space-y-6"
              >
                <div className="text-center mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Send us a message</h3>
                  <p className="text-sm text-gray-500">We'll get back to you promptly</p>
                </div>

                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Phone + Subject */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      placeholder="Demo / Partnership / Support"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none"
                    placeholder="Tell us about your farm, needs, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                {/* Error Message */}
                {errorMsg && (
                  <p className="text-red-500 text-sm text-center bg-red-50 rounded-lg py-2 px-4">
                    ✗ {errorMsg}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                {submitted && (
                  <p className="text-green-600 text-sm text-center animate-pulse">
                    ✓ Message sent successfully! We'll contact you soon.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
            <p className="text-gray-600">Visit our head office (by appointment)</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-80 bg-gray-100 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <MapPin className="w-12 h-12 mx-auto mb-2 text-green-600" />
              <p className="text-sm">Interactive Map Preview</p>
              <p className="text-xs">University of Karachi, Sindh, Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h4 className="text-xl md:text-2xl font-bold mb-2">Prefer a call?</h4>
          <p className="text-gray-400 mb-4">Schedule a phone consultation with our agronomy team.</p>
          <a
            href="tel:+923001234567"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 rounded-xl hover:bg-green-700 transition"
          >
            <Phone size={16} />
            Call +92 346 7666791
          </a>
        </div>
      </section>
    </>
  );
}