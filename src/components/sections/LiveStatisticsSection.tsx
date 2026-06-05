import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import AnimatedCounter from '../ui/AnimatedCounter';
import { StatisticItem } from '@/types';

const STATISTICS: StatisticItem[] = [
  { label: 'Repairs Completed Today', value: 24, icon: '✓' },
  { label: 'Currently Being Repaired', value: 7, icon: '🔧' },
  { label: 'Customer Satisfaction', value: 98, suffix: '%', icon: '⭐' },
  { label: 'Average Repair Time', value: '2.5', suffix: ' hrs', icon: '⏱️' },
];

const LiveStatisticsSection: React.FC = () => {
  const [stats, setStats] = useState(STATISTICS);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats =>
        prevStats.map(stat => {
          if (stat.label === 'Repairs Completed Today') {
            return { ...stat, value: (stat.value as number) + Math.floor(Math.random() * 3) };
          }
          if (stat.label === 'Currently Being Repaired') {
            return {
              ...stat,
              value: Math.max(1, (stat.value as number) + (Math.random() > 0.5 ? 1 : -1)),
            };
          }
          return stat;
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="section-py bg-dark-800" id="statistics">
      <div className="container mx-auto section-px">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 font-semibold mb-2">LIVE UPDATES</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Real-Time Repair Statistics
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            See what's happening right now in our repair centers.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="text-center p-8 h-full flex flex-col justify-center items-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <AnimatedCounter
                  value={stat.value as number}
                  suffix={stat.suffix}
                  duration={500}
                />
                <p className="text-dark-300 text-sm mt-4">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LiveStatisticsSection;
