import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Diagnostics', href: '#diagnosis' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Book Repair', href: '#booking' },
  ];

  const contactInfo = [
    { label: 'Phone', value: '(555) 123-4567' },
    { label: 'Email', value: 'support@repairservices.com' },
    { label: 'Hours', value: 'Mon-Sat 9AM-6PM, Sun 12PM-4PM' },
  ];

  return (
    <footer className="bg-dark-900 border-t border-white/10">
      <div className="container mx-auto section-px section-py">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary-400">RepairPro</h3>
            <p className="text-dark-400 text-sm">
              Professional computer repair services you can trust. Same-day repairs available.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-dark-400 hover:text-primary-400 transition-smooth text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-dark-400 hover:text-primary-400 transition-smooth">Laptop Repair</a></li>
              <li><a href="#services" className="text-dark-400 hover:text-primary-400 transition-smooth">Virus Removal</a></li>
              <li><a href="#services" className="text-dark-400 hover:text-primary-400 transition-smooth">Hardware Upgrades</a></li>
              <li><a href="#services" className="text-dark-400 hover:text-primary-400 transition-smooth">Software Installation</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              {contactInfo.map((info) => (
                <li key={info.label}>
                  <p className="text-dark-400">{info.label}</p>
                  <p className="text-dark-200 font-medium">{info.value}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-dark-400 text-sm">
          <p>&copy; {currentYear} RepairPro. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-400 transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-smooth">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
