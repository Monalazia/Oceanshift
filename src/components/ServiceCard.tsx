import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link,
  delay = 0,
}) => {
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="card card-hover p-6 group"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="mb-4 text-secondary-600 bg-secondary-50 p-3 rounded-lg inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
      >
        {t('services.learnMore')}{' '}
        <ArrowRight
          size={16}
          className={`${isRTL ? 'mr-1 rotate-180' : 'ml-1'} transition-transform group-hover:${
            isRTL ? '-translate-x-1' : 'translate-x-1'
          }`}
        />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;