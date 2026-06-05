import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import RepairTracker from '@/components/ui/RepairTracker';
import { RepairJob } from '@/types';

// Mock data for demo
const MOCK_REPAIRS: RepairJob[] = [
  {
    id: 'REPAIR-001',
    deviceType: 'MacBook Pro',
    status: 'in-progress',
    progress: 65,
    estimatedTime: '1-2 hours',
    steps: [
      { id: 1, title: 'Device Received', description: 'Laptop received at service center', completed: true },
      { id: 2, title: 'Diagnostics', description: 'Initial diagnostics completed', completed: true },
      { id: 3, title: 'Repair In Progress', description: 'Screen replacement in progress', completed: true },
      { id: 4, title: 'Testing', description: 'Pending quality assurance', completed: false },
      { id: 5, title: 'Ready For Collection', description: 'Will be completed soon', completed: false },
      { id: 6, title: 'Completed', description: 'Ready for pickup', completed: false },
    ],
  },
  {
    id: 'REPAIR-002',
    deviceType: 'Dell Desktop',
    status: 'completed',
    progress: 100,
    estimatedTime: 'Completed',
    steps: [
      { id: 1, title: 'Device Received', description: '', completed: true },
      { id: 2, title: 'Diagnostics', description: '', completed: true },
      { id: 3, title: 'Repair In Progress', description: '', completed: true },
      { id: 4, title: 'Testing', description: '', completed: true },
      { id: 5, title: 'Ready For Collection', description: '', completed: true },
      { id: 6, title: 'Completed', description: '', completed: true },
    ],
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'active' | 'completed'>('active');

  const activeRepairs = MOCK_REPAIRS.filter(r => r.status !== 'completed');
  const completedRepairs = MOCK_REPAIRS.filter(r => r.status === 'completed');

  return (
    <>
      <Head>
        <title>Customer Dashboard - RepairPro</title>
        <meta name="description" content="Track your computer repairs in real-time" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-dark-800 pt-20">
        <div className="container mx-auto section-px section-py max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold mb-2">Your Repairs</h1>
            <p className="text-dark-300">Track your device repairs in real-time</p>
          </motion.div>

          {/* Welcome card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <Card className="bg-gradient-to-r from-primary-500/20 to-accent-500/20 border-primary-500/30">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Welcome to RepairPro!</h2>
                  <p className="text-dark-300">
                    Track your repairs, view technician notes, and download invoices all in one place.
                  </p>
                </div>
                <Button className="mt-4 md:mt-0">New Repair Request</Button>
              </div>
            </Card>
          </motion.div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-white/10">
            <button
              onClick={() => setActiveTab('active')}
              className={`px-4 py-2 font-medium transition-smooth border-b-2 ${
                activeTab === 'active'
                  ? 'text-primary-400 border-primary-400'
                  : 'text-dark-400 border-transparent hover:text-dark-300'
              }`}
            >
              Active Repairs ({activeRepairs.length})
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-4 py-2 font-medium transition-smooth border-b-2 ${
                activeTab === 'completed'
                  ? 'text-primary-400 border-primary-400'
                  : 'text-dark-400 border-transparent hover:text-dark-300'
              }`}
            >
              Completed ({completedRepairs.length})
            </button>
          </div>

          {/* Repairs list */}
          <div className="space-y-6">
            {(activeTab === 'active' ? activeRepairs : completedRepairs).map((repair, index) => (
              <motion.div
                key={repair.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{repair.deviceType}</h3>
                        <Badge
                          variant={
                            repair.status === 'completed'
                              ? 'success'
                              : repair.status === 'in-progress'
                                ? 'warning'
                                : 'info'
                          }
                        >
                          {repair.status.replace('-', ' ').toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-dark-400 text-sm">Repair ID: {repair.id}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>

                  <RepairTracker repair={repair} />

                  {/* Action buttons */}
                  <div className="mt-6 pt-6 border-t border-white/10 flex gap-3">
                    {repair.status === 'completed' && (
                      <>
                        <Button variant="ghost" size="sm">
                          Download Invoice
                        </Button>
                        <Button variant="ghost" size="sm">
                          Leave Review
                        </Button>
                      </>
                    )}
                    {repair.status === 'ready' && (
                      <Button size="sm">Schedule Pickup</Button>
                    )}
                    <Button variant="ghost" size="sm">
                      Contact Technician
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Empty state */}
          {(activeTab === 'active' ? activeRepairs : completedRepairs).length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Card className="text-center py-12">
                <p className="text-4xl mb-4">📦</p>
                <h3 className="text-xl font-bold mb-2">
                  {activeTab === 'active' ? 'No Active Repairs' : 'No Completed Repairs'}
                </h3>
                <p className="text-dark-400 mb-6">
                  {activeTab === 'active'
                    ? 'You have no repairs in progress. Start a new repair request.'
                    : 'You have no completed repairs yet.'}
                </p>
                <Button>
                  {activeTab === 'active' ? 'Schedule Repair' : 'View Services'}
                </Button>
              </Card>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
