import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
  children?: ReactNode;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = false, 
  light = false, 
  className = '',
  children 
}: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-montserrat font-bold relative inline-block ${light ? 'text-white' : 'text-neutral-800'}`}>
        {title}
        <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary-500"></span>
      </h2>
      {subtitle && (
        <p className={`mt-6 text-lg ${light ? 'text-neutral-200' : 'text-neutral-600'}`}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export default SectionTitle;