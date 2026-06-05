import { useEffect, useRef } from 'react';

interface ObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (
  callback: (isVisible: boolean) => void,
  options: ObserverOptions = {}
) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (options.triggerOnce && hasTriggeredRef.current) {
        return;
      }

      if (entry.isIntersecting) {
        callback(true);
        hasTriggeredRef.current = true;
      } else if (!options.triggerOnce) {
        callback(false);
      }
    }, {
      threshold: options.threshold ?? 0.1,
      rootMargin: options.rootMargin ?? '0px',
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [callback, options]);

  return ref;
};

export const useScrollPosition = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll effects can be added here
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return ref;
};
