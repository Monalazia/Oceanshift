import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageUrl: string;
  overlay?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink = '/',
  secondaryCtaText,
  secondaryCtaLink = '/',
  imageUrl,
  overlay = true,
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section className="relative h-screen min-h-[600px] max-h-[800px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-900/40" />
      )}

      <div className="container-custom relative h-full flex items-center">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-100 mb-8"
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            {ctaText && (
              <Link
                to={ctaLink}
                className="btn bg-secondary-600 hover:bg-secondary-700 text-white py-3 px-6 rounded-md text-lg flex items-center gap-2 group"
              >
                {ctaText}
                <ArrowRight 
                  size={20} 
                  className={`transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                />
              </Link>
            )}
            
            {secondaryCtaText && (
              <Link
                to={secondaryCtaLink}
                className="btn border-2 border-white text-white hover:bg-white/10 py-3 px-6 rounded-md text-lg"
              >
                {secondaryCtaText}
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;