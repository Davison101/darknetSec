import React, { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useAnimation';

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ value, suffix = '', prefix = '', duration = 1000 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useIntersectionObserver(() => setIsVisible(true), { triggerOnce: true });

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setDisplayValue(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className="text-4xl font-bold tabular-nums">
      <span className="text-primary-400">{prefix}</span>
      {displayValue.toLocaleString()}
      <span className="text-primary-400">{suffix}</span>
    </div>
  );
};

export default AnimatedCounter;
