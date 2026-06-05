import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { Service } from '@/types';

interface ServiceCardProps extends Service {
  index?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  price,
  duration,
  index = 0,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Card
        interactive
        className="h-full flex flex-col group cursor-pointer hover:border-primary-400/50"
      >
        {/* Icon */}
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-500/20 group-hover:bg-primary-500/30 transition-smooth">
          <span className="text-2xl">{icon}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-smooth">
          {title}
        </h3>

        {/* Description */}
        <p className="text-dark-300 text-sm mb-4 flex-grow">
          {description}
        </p>

        {/* Meta */}
        <div className="pt-4 border-t border-white/10 flex justify-between items-center text-sm text-dark-400">
          {price && <span className="font-semibold text-primary-400">{price}</span>}
          {duration && <span>{duration}</span>}
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
