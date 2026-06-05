import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { BookingFormData } from '@/types';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 characters'),
  deviceType: z.string().min(1, 'Please select a device type'),
  problemDescription: z.string().min(10, 'Please describe the issue (at least 10 characters)'),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
});

const BookingSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState<'form' | 'confirmation'>('form');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast.success('Booking request submitted!');
      setStep('confirmation');
      reset();

      // Reset form after 3 seconds
      setTimeout(() => {
        setStep('form');
      }, 3000);
    } catch (error) {
      toast.error('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-py premium-gradient" id="booking">
      <div className="container mx-auto section-px max-w-4xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary-400 font-semibold mb-2">QUICK BOOKING</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Book Your Repair
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            Schedule your repair in under 60 seconds. We'll confirm your booking immediately.
          </p>
        </motion.div>

        {/* Booking form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {step === 'form' ? (
            <Card className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      {...register('name')}
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-white/10 focus:border-primary-500 focus:outline-none transition-smooth"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-white/10 focus:border-primary-500 focus:outline-none transition-smooth"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-white/10 focus:border-primary-500 focus:outline-none transition-smooth"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Device Type */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Device Type</label>
                    <select
                      {...register('deviceType')}
                      className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-white/10 focus:border-primary-500 focus:outline-none transition-smooth"
                    >
                      <option value="">Select device type</option>
                      <option value="laptop">Laptop</option>
                      <option value="desktop">Desktop</option>
                      <option value="tablet">Tablet</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.deviceType && (
                      <p className="text-red-400 text-sm mt-1">{errors.deviceType.message}</p>
                    )}
                  </div>
                </div>

                {/* Problem Description */}
                <div>
                  <label className="block text-sm font-medium mb-2">Describe Your Issue</label>
                  <textarea
                    {...register('problemDescription')}
                    placeholder="Tell us what's wrong with your device..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-white/10 focus:border-primary-500 focus:outline-none transition-smooth resize-none"
                  />
                  {errors.problemDescription && (
                    <p className="text-red-400 text-sm mt-1">{errors.problemDescription.message}</p>
                  )}
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Date (Optional)</label>
                    <input
                      {...register('preferredDate')}
                      type="date"
                      className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-white/10 focus:border-primary-500 focus:outline-none transition-smooth"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Time (Optional)</label>
                    <input
                      {...register('preferredTime')}
                      type="time"
                      className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-white/10 focus:border-primary-500 focus:outline-none transition-smooth"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  isLoading={isSubmitting}
                >
                  Submit Booking Request
                </Button>

                <p className="text-center text-xs text-dark-400">
                  We'll contact you within 1 hour to confirm your booking.
                </p>
              </form>
            </Card>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="text-center py-12">
                <div className="text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold mb-2 text-green-400">Booking Confirmed!</h3>
                <p className="text-dark-300 mb-2">
                  We've received your repair request.
                </p>
                <p className="text-dark-400 text-sm">
                  Check your email for confirmation details. We'll call you within 1 hour.
                </p>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
