import { cn } from '@/lib/utils';

export default function SectionTitle({ 
  title, 
  subtitle,
  align = 'center',
  className,
  ...props 
}) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn('mb-12', alignmentClasses[align], className)} {...props}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn(
        'mt-4 h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full',
        align === 'center' && 'mx-auto',
        align === 'right' && 'ml-auto'
      )} />
    </div>
  );
}
