
'use client';

import { usePathname } from 'next/navigation';

const Footer: React.FC = () => {
  const pathname = usePathname();

  // Hide global footer on the immersive shader home page
  if (pathname === '/') return null;

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-[#253043] bg-white dark:bg-[#070a12] text-sm">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-y-8">
          <div>
            <div className="font-semibold tracking-tight text-[15px] text-zinc-900 dark:text-white mb-1.5">Davison Mapiza</div>
            <div className="text-xs text-zinc-500">IT &amp; Cybersecurity • Ndola, Zambia</div>
          </div>

          <div className="flex gap-x-10 text-sm text-zinc-500 dark:text-zinc-400">
            <div className="space-y-[3px]">
              <a href="https://wa.me/260976235760" target="_blank" className="block footer-link">WhatsApp</a>
              <a href="mailto:davisonmapiza@yahoo.com" className="block footer-link">Email</a>
            </div>
            <div className="space-y-[3px]">
              <a href="/about" className="block footer-link">About</a>
              <a href="/contact" className="block footer-link">Contact</a>
            </div>
            <div className="space-y-[3px]">
              <a href="https://github.com/Davison101" target="_blank" className="block footer-link">GitHub</a>
              <a href="https://zm.linkedin.com/in/davison-mapiza-1935221b0" target="_blank" className="block footer-link">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-100 dark:border-[#253043] flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
          <div>© {year} Davison Mapiza. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            Available for work
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
