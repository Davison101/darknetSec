'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { MeshGradient } from "@paper-design/shaders-react";

const services = [
  { tag: 'Security', title: 'Virus & Malware Removal', price: 'K100 – K200', unit: 'per device', desc: 'Full system scan and removal of malicious software, spyware, and ransomware. Device left clean, safe, and optimised.' },
  { tag: 'System', title: 'Windows Reinstall / OS Setup', price: 'K100 – K200', unit: 'per device', desc: 'Fresh Windows installation, driver setup, and essential software configuration. Bring your slow or broken PC back to life.' },
  { tag: 'Software', title: 'Software Installation', price: 'K100 – K150', unit: 'per session', desc: 'Installation and configuration of productivity tools, antivirus, office suites, and any software you need up and running.' },
  { tag: 'Data', title: 'Phone Data Transfer & Backup', price: 'K100 – K150', unit: 'per session', desc: 'Safely move contacts, photos, and files between phones or to a computer. Full backup setup so you never lose data again.' },
  { tag: 'Advisory', title: 'Password Management Advice', price: 'K100', unit: 'per consultation', desc: 'Consultation on securing your accounts, setting up password managers, and building a strong personal security routine.' },
  { tag: 'Advisory', title: 'Safe Online Practices', price: 'K100', unit: 'per consultation', desc: 'Learn how to spot scams, phishing, and online fraud before they cost you. Ideal for individuals, families, and staff.' },
  { tag: 'Document', title: 'CV Typing & Formatting', price: 'K100 – K150', unit: 'per document', desc: 'Professional CV design that gets you noticed. Clean, structured, and tailored to the role you are applying for.' },
];

export default function ServicesPage() {
  // Fixed dark theme colors for mesh gradients
  const meshColors = ["#000000", "#06b6d4", "#0891b2", "#164e63", "#f97316"];

  return (
    <main className="pt-20 relative min-h-screen">
      {/* Graphical background - MeshGradient (dark theme) */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <MeshGradient
          colors={meshColors}
          speed={0.2}
        />
      </div>
      <div className="absolute inset-0 w-full h-full opacity-50 -z-10">
        <MeshGradient
          colors={["#000000", "#ffffff", "#06b6d4", "#f97316"]}
          speed={0.15}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="max-w-2xl">
          <div className="text-xs tracking-[2px] text-[var(--accent)] mb-3">SERVICES &amp; PRICING</div>
          <h1 className="section-title">Straight-up, affordable IT services.<br />No hidden fees. No jargon.</h1>
          <p className="section-subtitle mt-4">Just results. Most jobs are completed the same day or within 24 hours.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="text-[10px] font-semibold tracking-widest text-[var(--accent)] bg-[rgba(3,105,161,0.1)] inline-block px-3 py-0.5 rounded-full mb-5">{service.tag}</div>
              <h3 className="font-semibold text-2xl tracking-tight mb-3">{service.title}</h3>
              <p className="text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400 mb-8">{service.desc}</p>
              <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-[#253043]">
                <div className="text-xl font-semibold text-[var(--accent)] tracking-tight">{service.price} <span className="text-sm font-normal text-zinc-400">/ {service.unit}</span></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-primary text-base">Book a session via WhatsApp <ArrowRight className="w-4 h-4" /></Link>
          <p className="text-xs text-zinc-400 mt-4">Cash or mobile money (Airtel / MTN). Payment after job is complete to your satisfaction.</p>
        </div>
      </div>
    </main>
  );
}
