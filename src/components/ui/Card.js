import { cn } from '@/lib/utils';

export default function Card({ 
  children, 
  className,
  hover = false,
  ...props 
}) {
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden';
  const hoverStyles = hover ? 'transition-all duration-300 hover:shadow-2xl hover:-translate-y-1' : '';

  return (
    <div
      className={cn(
        baseStyles,
        hoverStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }) {
  return (
    <div className={cn('p-6 border-b border-gray-200 dark:border-gray-700', className)} {...props}>
      {children}
    </div>
  );
}

export function CardBody({ children, className, ...props }) {
  return (
    <div className={cn('p-6', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ...props }) {
  return (
    <div className={cn('p-6 border-t border-gray-200 dark:border-gray-700', className)} {...props}>
      {children}
    </div>
  );
}
