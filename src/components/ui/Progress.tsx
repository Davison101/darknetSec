import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  showLabel?: boolean;
  variant?: 'default' | 'success' | 'warning' | 'error';
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, max = 100, showLabel = false, variant = 'default', ...props }, ref) => {
    const percentage = Math.min((value / max) * 100, 100);

    const variants = {
      default: 'bg-primary-500',
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      error: 'bg-red-500',
    };

    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
          <div
            className={cn('h-full transition-smooth', variants[variant])}
            style={{ width: `${percentage}%` }}
          />
        </div>
        {showLabel && (
          <p className="text-sm text-dark-400 mt-2">
            {Math.round(percentage)}% Complete
          </p>
        )}
      </div>
    );
  }
);

Progress.displayName = 'Progress';

export default Progress;
