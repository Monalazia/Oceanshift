import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  rating?: number;
  imageUrl: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  company,
  rating = 5,
  imageUrl,
  delay = 0,
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`bg-white rounded-lg shadow-md p-6 flex flex-col h-full`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className={`flex space-x-1 mb-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className="text-yellow-400 fill-current"
          />
        ))}
      </div>
      <blockquote className="text-gray-600 italic mb-6 flex-grow">
        "{quote}"
      </blockquote>
      <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
        <img
          src={imageUrl}
          alt={author}
          className={`w-12 h-12 rounded-full object-cover ${isRTL ? 'ml-4' : 'mr-4'}`}
        />
        <div>
          <div className="font-semibold text-gray-800">{author}</div>
          <div className="text-sm text-gray-500">{company}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;