import type { Metadata } from 'next';
import '../styles/global.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Davison Mapiza | Professional IT & Cybersecurity | Ndola',
  description: 'University-level IT support and cybersecurity services for individuals and small businesses in Zambia. Transparent pricing from K100. Local, reliable, security-first.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Load modern fonts reliably via link (avoids build-time fetch aborts in some envs) */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Space+Grotesk:wght@500;600;700&amp;display=swap" />
      </head>
      <body className="min-h-screen bg-[#0a0c10] text-[#f1f3f5] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
