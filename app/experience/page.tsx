'use client';

import React from 'react';
import { MeshGradient } from "@paper-design/shaders-react";

const projects = [
  {
    tag: 'Penetration Testing',
    title: 'University SMS Portal Pentest',
    desc: 'Conducted authorised penetration testing on a university SMS web portal. Produced a formal findings report covering SQL injection vulnerabilities, access control weaknesses, and remediation recommendations.',
    stack: ['Burp Suite', 'SQLMap', 'OWASP Top 10'],
    status: 'Completed',
    statusClass: 'completed',
  },
  {
    tag: 'Network Security',
    title: 'Cisco ASA 5505 Defence-in-Depth Lab',
    desc: 'Designed and simulated a segmented enterprise network architecture with ASA firewall, VLAN segregation, DMZ zone, ACLs, and inter-VLAN routing. Built as part of SEC3301 coursework.',
    stack: ['Cisco Packet Tracer', 'ASA 5505'],
    status: 'Completed',
    statusClass: 'completed',
  },
  {
    tag: 'Blockchain',
    title: 'VaxChain Zambia — Pharma Supply Chain',
    desc: 'Built a pharmaceutical supply chain traceability system using Solana (on-chain) and PostgreSQL (off-chain) with AES-256-GCM encryption, PII sanitisation middleware, and a Django compliance layer.',
    stack: ['Solana', 'PostgreSQL', 'Django', 'Docker'],
    status: 'In Progress',
    statusClass: 'in-progress',
  },
  {
    tag: 'CTF / Research',
    title: 'Capture The Flag Challenges',
    desc: 'Active CTF competitor covering RSA factorisation, buffer overflow / ret2libc exploitation, BMP/PNG steganography, Morse code decoding, and server log forensics.',
    stack: ['GDB', 'Ghidra', 'Python', 'Wireshark'],
    status: 'Ongoing',
    statusClass: 'in-progress',
  },
  {
    tag: 'Web Development',
    title: 'DarkNetSec Technologies Website',
    desc: 'Designed and developed this professional multi-page website from scratch — premium graphical UI/UX with immersive shader hero, WhatsApp-integrated contact, fully responsive with Tailwind.',
    stack: ['Next.js', 'Tailwind', 'React', 'TypeScript'],
    status: 'Live',
    statusClass: 'completed',
  },
];

export default function ExperiencePage() {
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
        <div className="max-w-2xl mb-12">
          <div className="text-xs tracking-[2px] text-[var(--accent)] mb-3">SELECTED WORK</div>
          <h1 className="section-title">Projects &amp; Experience</h1>
          <p className="section-subtitle">A selection of technical projects and real-world engagements demonstrating university-level capability and practical delivery.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <div key={i} className="exp-card">
              <div className="text-[10px] tracking-widest font-medium text-[var(--accent)] mb-3">{p.tag}</div>
              <h3 className="font-semibold text-2xl tracking-tight mb-4">{p.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-zinc-500 dark:text-zinc-400 flex-1">{p.desc}</p>

              <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-[#253043] flex items-center justify-between text-sm">
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 text-[11px] rounded-lg border border-zinc-200 dark:border-[#253043] bg-white dark:bg-[#0a0c10]">{tech}</span>
                  ))}
                </div>
                <span className={`status-pill ${p.statusClass}`}>{p.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
