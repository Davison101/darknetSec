import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { Testimonial } from '@/types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Incredible service! My laptop was fixed in just 2 hours. The technician was professional and explained everything clearly. Highly recommended!',
    verified: true,
    date: new Date('2024-05-15'),
  },
  {
    id: '2',
    name: 'Michael Chen',
    rating: 5,
    text: 'Best computer repair service I\'ve used. Fast, reliable, and honest pricing. No upselling, just quality work.',
    verified: true,
    date: new Date('2024-05-10'),
  },
  {
    id: '3',
    name: 'Emily Davis',
    rating: 5,
    text: 'Had a virus issue that was causing major slowdowns. They fixed it completely and installed protection software. Very professional!',
    verified: true,
    date: new Date('2024-05-05'),
  },
  {
    id: '4',
    name: 'David Wilson',
    rating: 5,
    text: 'Upgraded my old desktop with an SSD and extra RAM. Performance is night and day. Great service and fair pricing.',
    verified: true,
    date: new Date('2024-04-28'),
  },
];

const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(TESTIMONIALS[(currentIndex + i) % TESTIMONIALS.length]);
    }
    return items;
  };

  return (
    <section className="section-py bg-dark-800" id="reviews">
      <div className="container mx-auto section-px">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 font-semibold mb-2">CUSTOMER REVIEWS</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            Read what our satisfied customers have to say about our service.
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full flex flex-col">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-dark-200 mb-4 flex-grow italic">"{testimonial.text}"</p>

                    {/* Author */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-dark-100">{testimonial.name}</p>
                          {testimonial.verified && (
                            <Badge variant="success" className="mt-1">✓ Verified</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <motion.button
                key={index}
                className={`h-2 rounded-full transition-smooth ${
                  index === currentIndex ? 'bg-primary-400 w-8' : 'bg-dark-600 w-2'
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
