import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  hoverable?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, interactive = false, hoverable = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'glass rounded-xl p-6',
        hoverable && 'hover:shadow-lg hover:bg-white/10 transition-smooth',
        interactive && 'cursor-pointer active:scale-98',
        className
      )}
      {...props}
    />
  )
);

Card.displayName = 'Card';

export default Card;
