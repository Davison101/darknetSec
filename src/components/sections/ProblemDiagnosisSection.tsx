import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { DiagnosisResult } from '@/types';

const DIAGNOSIS_OPTIONS = [
  {
    id: 'slow',
    label: 'Slow Computer',
    emoji: '🐢',
    results: {
      issue: 'Slow Computer',
      causes: ['Hard drive fragmentation', 'Insufficient RAM', 'Malware or viruses', 'Background processes'],
      estimatedTime: '1-2 hours',
      recommendedService: 'System Optimization & Diagnostics',
    },
  },
  {
    id: 'heat',
    label: 'Overheating',
    emoji: '🔥',
    results: {
      issue: 'Overheating Device',
      causes: ['Dust buildup in cooling system', 'Faulty cooling fan', 'Thermal paste degradation'],
      estimatedTime: '1-3 hours',
      recommendedService: 'Cooling System Cleaning & Repair',
    },
  },
  {
    id: 'bsod',
    label: 'Blue Screen Errors',
    emoji: '💙',
    results: {
      issue: 'Blue Screen of Death (BSOD)',
      causes: ['Driver conflicts', 'Hardware failure', 'Corrupted system files', 'Incompatible software'],
      estimatedTime: '2-4 hours',
      recommendedService: 'System Repair & Driver Update',
    },
  },
  {
    id: 'virus',
    label: 'Virus Infection',
    emoji: '🦠',
    results: {
      issue: 'Virus/Malware Infection',
      causes: ['Downloaded infected files', 'Phishing emails', 'Unprotected browsing', 'Outdated antivirus'],
      estimatedTime: '1-2 hours',
      recommendedService: 'Complete Virus Removal & Protection',
    },
  },
];

const ProblemDiagnosisSection: React.FC = () => {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const diagnosis = DIAGNOSIS_OPTIONS.find(opt => opt.id === selectedIssue);

  return (
    <section className="section-py premium-gradient" id="diagnosis">
      <div className="container mx-auto section-px">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 font-semibold mb-2">AI-POWERED DIAGNOSTICS</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Problem Diagnosis Wizard
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            Tell us what's wrong with your device and get instant diagnosis with recommended solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Issue selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Select your issue:</h3>
            <div className="space-y-4">
              {DIAGNOSIS_OPTIONS.map(option => (
                <motion.button
                  key={option.id}
                  onClick={() => setSelectedIssue(option.id)}
                  className={`w-full text-left p-4 rounded-lg transition-smooth cursor-pointer ${
                    selectedIssue === option.id
                      ? 'glass border-primary-400/50 bg-primary-500/20'
                      : 'glass hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{option.emoji}</span>
                    <span className="font-medium">{option.label}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Diagnosis result */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {diagnosis ? (
                <motion.div
                  key={diagnosis.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-4xl">{DIAGNOSIS_OPTIONS.find(o => o.id === selectedIssue)?.emoji}</span>
                      <h3 className="text-2xl font-bold">{diagnosis.issue}</h3>
                    </div>

                    <div className="space-y-6">
                      {/* Possible causes */}
                      <div>
                        <h4 className="font-semibold mb-3 text-primary-400">Possible Causes:</h4>
                        <ul className="space-y-2">
                          {diagnosis.causes.map((cause, index) => (
                            <li key={index} className="flex items-start gap-3 text-dark-300">
                              <span className="text-primary-400 font-bold mt-1">•</span>
                              <span>{cause}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Recommended action */}
                      <div>
                        <h4 className="font-semibold mb-3 text-primary-400">Recommended Action:</h4>
                        <Badge variant="info">{diagnosis.recommendedService}</Badge>
                      </div>

                      {/* Estimated time */}
                      <div className="p-3 bg-dark-800/50 rounded-lg">
                        <p className="text-sm text-dark-400">
                          <strong>Estimated Repair Time:</strong> {diagnosis.estimatedTime}
                        </p>
                      </div>

                      <Button
                        className="w-full"
                        onClick={() => {
                          const element = document.getElementById('booking');
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Book Repair Now
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Card className="h-full flex items-center justify-center text-center">
                    <div>
                      <p className="text-2xl text-dark-400 mb-2">🔍</p>
                      <p className="text-dark-300">Select an issue to see diagnosis</p>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemDiagnosisSection;
