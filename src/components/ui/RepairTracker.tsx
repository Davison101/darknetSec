import React from 'react';
import { motion } from 'framer-motion';
import Badge from './Badge';
import { RepairJob } from '@/types';
import Progress from './Progress';

interface RepairTrackerProps {
  repair: RepairJob;
}

const RepairTracker: React.FC<RepairTrackerProps> = ({ repair }) => {
  const steps = [
    { title: 'Device Received', completed: repair.progress >= 16 },
    { title: 'Diagnostics', completed: repair.progress >= 32 },
    { title: 'Repair In Progress', completed: repair.progress >= 48 },
    { title: 'Testing', completed: repair.progress >= 64 },
    { title: 'Ready For Collection', completed: repair.progress >= 80 },
    { title: 'Completed', completed: repair.progress >= 100 },
  ];

  const statusVariants = {
    pending: 'info',
    diagnostics: 'warning',
    'in-progress': 'warning',
    testing: 'info',
    ready: 'success',
    completed: 'success',
  } as const;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">{repair.deviceType} Repair</h3>
          <Badge variant={statusVariants[repair.status]}>
            {repair.status.replace('-', ' ').toUpperCase()}
          </Badge>
        </div>
        <Progress value={repair.progress} showLabel variant="success" />
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-4">
            <div
              className={`w-3 h-3 rounded-full transition-smooth ${
                step.completed ? 'bg-green-500 scale-125' : 'bg-dark-600'
              }`}
            />
            <div className="flex-1">
              <p className={`font-medium ${step.completed ? 'text-dark-200' : 'text-dark-400'}`}>
                {step.title}
              </p>
            </div>
            {step.completed && (
              <span className="text-sm text-green-400">✓ Complete</span>
            )}
          </div>
        ))}
      </div>

      <div className="text-sm text-dark-400 mt-4 p-4 bg-dark-800/50 rounded-lg">
        <p>
          <strong>Estimated Time:</strong> {repair.estimatedTime}
        </p>
      </div>
    </motion.div>
  );
};

export default RepairTracker;
