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

  const handleSubmit = async () => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Replace with actual API endpoint
    alert("Message sent! We will get back to you within 24 hours.");
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    { icon: Phone, label: "Phone", value: "+92 300 1234567", href: "tel:+923001234567", detail: "Mon-Fri, 9am-6pm PST" },
    { icon: Mail, label: "Email", value: "info@crop2x.com", href: "mailto:info@crop2x.com", detail: "Response within 24h" },
    { icon: MapPin, label: "Address", value: "Lahore, Punjab, Pakistan", href: "#", detail: "Main office, by appointment" },
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-800 to-emerald-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
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

              {/* Contact Methods */}
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

              {/* Trust Badge */}
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

      {/* MAP SECTION (Optional) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
            <p className="text-gray-600">Visit our head office (by appointment)</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-80 bg-gray-100 flex items-center justify-center">
            {/* Replace with actual Google Maps embed or static image */}
            <div className="text-center text-gray-400">
              <MapPin className="w-12 h-12 mx-auto mb-2 text-green-600" />
              <p className="text-sm">Interactive Map Preview</p>
              <p className="text-xs">Lahore, Punjab, Pakistan</p>
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
            Call +92 300 1234567
          </a>
        </div>
      </section>
    </>
  );
}