import React from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import LiveStatisticsSection from '@/components/sections/LiveStatisticsSection';
import ProblemDiagnosisSection from '@/components/sections/ProblemDiagnosisSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import BookingSection from '@/components/sections/BookingSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>RepairPro - Professional Computer Repair Services</title>
        <meta
          name="description"
          content="Professional computer repair services. Fast diagnostics, repairs, upgrades, and support. Same-day service available."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="w-full">
        <HeroSection />
        <ServicesSection />
        <LiveStatisticsSection />
        <ProblemDiagnosisSection />
        <ReviewsSection />
        <BookingSection />
      </main>

      <Footer />
    </>
  );
}
