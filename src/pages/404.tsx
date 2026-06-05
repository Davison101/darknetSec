import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found - RepairPro</title>
        <meta name="description" content="Page not found" />
      </Head>

      <main className="min-h-screen bg-dark-900 flex items-center justify-center">
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-6xl font-bold text-primary-400 mb-4">404</div>
          <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
          <p className="text-dark-300 mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button>Go Home</Button>
            </Link>
            <Link href="/#services">
              <Button variant="outline">View Services</Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  );
}
