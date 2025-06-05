import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

interface StatsCounterProps {
  value: number;
  label: string;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const StatsCounter: React.FC<StatsCounterProps> = ({
  value,
  label,
  duration = 2000,
  suffix = '',
  prefix = '',
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    let start = 0;
    const end = value;
    
    if (!inView) return;
    
    // Get the animation duration proportional to the value
    const animationDuration = duration;
    const stepTime = animationDuration / end;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  // Format number based on language
  const formatNumber = (num: number) => {
    if (language === 'ar') {
      // Convert to Arabic numerals
      return num.toString().replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
    }
    return num;
  };

  return (
    <div ref={ref} className={`text-center ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
        {prefix}{formatNumber(inView ? count : 0)}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

export default StatsCounter;