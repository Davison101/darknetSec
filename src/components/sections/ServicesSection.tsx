import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../ui/ServiceCard';
import { Service } from '@/types';

const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Laptop Repair',
    description: 'Screen replacement, keyboard repair, logic board diagnostics, and more.',
    icon: '💻',
    price: 'From $49',
    duration: '1-3 hours',
  },
  {
    id: '2',
    title: 'Desktop Repair',
    description: 'Component replacement, power supply issues, cooling problems, diagnostics.',
    icon: '🖥️',
    price: 'From $59',
    duration: '2-4 hours',
  },
  {
    id: '3',
    title: 'Virus Removal',
    description: 'Malware detection, system cleaning, antivirus setup, and protection.',
    icon: '🛡️',
    price: '$79',
    duration: '1-2 hours',
  },
  {
    id: '4',
    title: 'Hardware Upgrades',
    description: 'RAM upgrade, SSD installation, GPU upgrade, component optimization.',
    icon: '⚙️',
    price: 'From $99',
    duration: 'Same day',
  },
  {
    id: '5',
    title: 'Network Issues',
    description: 'WiFi problems, connection diagnostics, driver updates, setup optimization.',
    icon: '📡',
    price: 'From $49',
    duration: '30-60 mins',
  },
  {
    id: '6',
    title: 'Software Installation',
    description: 'OS installation, software setup, driver installation, system optimization.',
    icon: '📦',
    price: 'From $39',
    duration: '1-2 hours',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="section-py premium-gradient" id="services">
      <div className="container mx-auto section-px">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 font-semibold mb-2">OUR SERVICES</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Professional Repair Services
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            From simple maintenance to complex repairs, we handle all your device needs with expert precision.
          </p>
        </motion.div>

        {/* Service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
