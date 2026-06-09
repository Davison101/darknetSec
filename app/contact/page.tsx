"use client";

import React, { useState } from "react";
import { InteractiveGlobe } from "../components/InteractiveGlobe";

export default function ContactPage() {
  const [formData, setFormData] = useState({ 
    name: "", 
    phone: "", 
    service: "", 
    message: "" 
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name || "Client";
    const phone = formData.phone || "N/A";
    const service = formData.service || "General Inquiry";
    const msg = formData.message || "";

    const text = encodeURIComponent(
      `Hi Davison 👋\n\nMy name is ${name}.\nPhone: ${phone}\nService needed: ${service}\n\n${msg}`
    );

    window.open(`https://wa.me/260976235760?text=${text}`, "_blank");
  };

  return (
    <main className="pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="uppercase text-[var(--accent)] text-xs tracking-[3px] mb-3">
            GET IN TOUCH
          </div>
          <h1 className="section-title">Let’s solve it.</h1>
          <p className="section-subtitle mt-3 max-w-xl mx-auto">
            WhatsApp is the fastest way. For device drop-offs, message first to confirm time and location near ZUT, Ndola.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Graphical Globe - Interactive Canvas */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative">
              <InteractiveGlobe 
                size={520} 
                className="max-w-full" 
                dotColor="rgba(3, 105, 161, ALPHA)"
                arcColor="rgba(3, 105, 161, 0.45)"
                markerColor="rgba(59, 130, 246, 1)"
                autoRotateSpeed={0.0018}
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs text-[var(--text-secondary)] tracking-widest">
                DRAG TO ROTATE • SERVING NDOLA
              </div>
            </div>
          </div>

          {/* Contact Info + Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Methods */}
            <div className="space-y-3">
              <a
                href="https://wa.me/260976235760"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method group"
              >
                <span className="text-2xl mt-0.5">💬</span>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-[2px] text-[var(--accent)]">FASTEST</div>
                  <div className="font-semibold text-lg tracking-tight group-hover:text-[var(--accent)] transition-colors">
                    WhatsApp
                  </div>
                  <div className="text-sm text-[var(--text-secondary)]">+260 976 235 760</div>
                </div>
              </a>

              <a
                href="mailto:davisonmapiza@yahoo.com"
                className="contact-method group"
              >
                <span className="text-2xl mt-0.5">✉️</span>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-[2px] text-[var(--accent)]">EMAIL</div>
                  <div className="font-semibold text-lg tracking-tight group-hover:text-[var(--accent)] transition-colors">
                    davisonmapiza@yahoo.com
                  </div>
                </div>
              </a>

              <div className="contact-method">
                <span className="text-2xl mt-0.5">📍</span>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-[2px] text-[var(--accent)]">DEVICE DROP-OFF</div>
                  <div className="font-semibold text-lg tracking-tight">Near ZUT, Ndola</div>
                  <div className="text-sm text-[var(--text-secondary)]">Only available in Ndola (near ZUT)</div>
                </div>
              </div>
            </div>

            {/* How it works */}
            <div className="p-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
              <div className="font-semibold tracking-tight mb-4 text-[var(--accent)]">How it works</div>
              <ol className="space-y-3 text-sm text-[var(--text-secondary)]">
                <li className="flex gap-3"><span className="font-mono text-[var(--accent)] w-5">01</span> Send a WhatsApp message</li>
                <li className="flex gap-3"><span className="font-mono text-[var(--accent)] w-5">02</span> I confirm availability &amp; exact location</li>
                <li className="flex gap-3"><span className="font-mono text-[var(--accent)] w-5">03</span> Drop off your device — collect usually same day</li>
              </ol>
              <div className="mt-5 text-xs text-[var(--success)]">
                Cash or Mobile Money (Airtel / MTN) • Pay only after you’re satisfied
              </div>
            </div>

            {/* WhatsApp Form */}
            <div className="card p-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs tracking-widest text-[var(--text-secondary)] mb-1.5 block">YOUR NAME</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Banda"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs tracking-widest text-[var(--text-secondary)] mb-1.5 block">WHATSAPP / PHONE</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="0971 234 567"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs tracking-widest text-[var(--text-secondary)] mb-1.5 block">SERVICE NEEDED</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="">Select a service</option>
                    <option>Virus &amp; Malware Removal</option>
                    <option>Windows Reinstall / OS Setup</option>
                    <option>Software Installation</option>
                    <option>Phone Data Transfer &amp; Backup</option>
                    <option>Password Management Advice</option>
                    <option>Safe Online Practices Consultation</option>
                    <option>CV Typing &amp; Formatting</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs tracking-widest text-[var(--text-secondary)] mb-1.5 block">DESCRIBE YOUR ISSUE</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input min-h-[110px]"
                    placeholder="Briefly describe the problem or what you need help with..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full mt-2"
                >
                  Send message via WhatsApp →
                </button>

                <p className="text-center text-[11px] text-[var(--text-secondary)] pt-1">
                  Opens WhatsApp with your details pre-filled. Nothing is stored on this site.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
