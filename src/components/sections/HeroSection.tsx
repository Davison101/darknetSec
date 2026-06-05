import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-3xl" />
        </div>
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium">
            ⚡ Professional Diagnostics & Repairs
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          Your Device Fixed{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
            Faster Than You Expect
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-dark-300 mb-8 max-w-2xl mx-auto"
        >
          Professional diagnostics, repairs, upgrades, and support. Same-day service available for most repairs.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => {
              const element = document.getElementById('booking');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book Repair Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => {
              const element = document.getElementById('diagnosis');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Diagnose Your Issue
          </Button>
        </motion.div>

        {/* Stats preview */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-3 gap-4 sm:gap-8"
        >
          {[
            { label: 'Repairs Completed', value: '5000+' },
            { label: 'Customer Satisfaction', value: '4.9★' },
            { label: 'Average Repair Time', value: '2-4 hrs' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-primary-400">{stat.value}</p>
              <p className="text-xs sm:text-sm text-dark-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
