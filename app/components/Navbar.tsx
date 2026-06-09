'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageCircle } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/experience', label: 'Experience' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0c10]/90 backdrop-blur-xl border-b border-[#253043]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Brand - modern */}
          <Link href="/" className="font-semibold tracking-[-0.03em] text-[17px] text-white flex items-center gap-1">
            Davison<span className="text-[var(--accent)]">.</span>Mapiza
          </Link>

          {/* Desktop Ribbon Tabs - graphical premium */}
          <div className="hidden md:flex items-center bg-[#111418] border border-[#253043] rounded-2xl p-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`ribbon-tab text-sm ${isActive(item.href) ? 'active' : 'text-zinc-400 hover:text-white'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* WhatsApp quick CTA - graphical */}
            <a
              href="https://wa.me/260976235760"
              target="_blank"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-all active:scale-[0.985]"
            >
              💬 WhatsApp
            </a>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-2xl border border-[#253043] text-zinc-400"
              aria-label="Toggle menu"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - graphical */}
      {isOpen && (
        <div className="md:hidden border-t border-[#253043] bg-[#0a0c10] px-6 py-6">
          <div className="flex flex-col gap-1 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`py-3 px-2 rounded-xl ${isActive(item.href) ? 'font-semibold text-[var(--accent)]' : 'text-zinc-400'}`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/260976235760"
              target="_blank"
              className="mt-3 flex items-center justify-center gap-2 py-3 rounded-2xl bg-[var(--accent)] text-white font-medium"
            >
              <MessageCircle className="w-4 h-4" /> Message on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
