import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Truck, Plane, Package, BarChart3, GlassWater, Clock, Globe2 } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import StatsCounter from '../components/StatsCounter';
import TrackingBox from '../components/TrackingBox';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <>
      <Hero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        ctaText={t('hero.cta')}
        ctaLink="/contact"
        secondaryCtaText={t('hero.trackShipment')}
        secondaryCtaLink="/tracking"
        imageUrl="https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      {/* Services Section */}
      <section className="section bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="section-title">{t('services.title')}</h2>
            <p className="section-subtitle">{t('services.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Ship size={28} />}
              title={t('services.oceanFreight')}
              description={t('services.oceanFreight.desc')}
              link="/services"
              delay={0.1}
            />
            <ServiceCard
              icon={<Plane size={28} />}
              title={t('services.airFreight')}
              description={t('services.airFreight.desc')}
              link="/services"
              delay={0.2}
            />
            <ServiceCard
              icon={<Truck size={28} />}
              title={t('services.roadTransport')}
              description={t('services.roadTransport.desc')}
              link="/services"
              delay={0.3}
            />
            <ServiceCard
              icon={<Package size={28} />}
              title={t('services.warehousing')}
              description={t('services.warehousing.desc')}
              link="/services"
              delay={0.4}
            />
            <ServiceCard
              icon={<BarChart3 size={28} />}
              title={t('services.supplyChain')}
              description={t('services.supplyChain.desc')}
              link="/services"
              delay={0.5}
            />
            <ServiceCard
              icon={<GlassWater size={28} />}
              title={t('services.specialized')}
              description={t('services.specialized.desc')}
              link="/services"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section className="section bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">{t('tracking.title')}</h2>
              <p className="section-subtitle">
                {t('tracking.subtitle')}
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className={`bg-primary-100 p-2 rounded-full text-primary-600 ${isRTL ? 'ml-4' : 'mr-4'} mt-1`}>
                    <Globe2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{t('tracking.globalCoverage')}</h3>
                    <p className="text-gray-600">{t('tracking.globalCoverageDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className={`bg-primary-100 p-2 rounded-full text-primary-600 ${isRTL ? 'ml-4' : 'mr-4'} mt-1`}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{t('tracking.realTime')}</h3>
                    <p className="text-gray-600">{t('tracking.realTimeDesc')}</p>
                  </div>
                </div>
              </div>
              <Link to="/tracking" className="btn-primary">
                {t('tracking.advanced')}
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TrackingBox />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section bg-primary-900 text-white" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('stats.title')}</h2>
            <p className="text-lg md:text-xl text-primary-200 mb-10">
              {t('stats.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter value={15} label={t('stats.experience')} suffix="+" />
            <StatsCounter value={120} label={t('stats.countries')} suffix="+" />
            <StatsCounter value={2} label={t('stats.shipments')} suffix="M+" />
            <StatsCounter value={98} label={t('stats.satisfaction')} suffix="%" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="section-title">{t('testimonials.title')}</h2>
            <p className="section-subtitle">{t('testimonials.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote={t('testimonials.quote1')}
              author={t('testimonials.author1')}
              company={t('testimonials.company1')}
              imageUrl="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600"
              delay={0.1}
            />
            <TestimonialCard
              quote={t('testimonials.quote2')}
              author={t('testimonials.author2')}
              company={t('testimonials.company2')}
              imageUrl="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1600"
              delay={0.2}
            />
            <TestimonialCard
              quote={t('testimonials.quote3')}
              author={t('testimonials.author3')}
              company={t('testimonials.company3')}
              imageUrl="https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg?auto=compress&cs=tinysrgb&w=1600"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-800 to-secondary-800 text-white" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {t('cta.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            {t('cta.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="btn bg-white text-primary-800 hover:bg-gray-100 py-3 px-8 rounded-md text-lg font-medium"
            >
              {t('cta.getStarted')}
            </Link>
            <Link
              to="/services"
              className="btn border-2 border-white text-white hover:bg-white/10 py-3 px-8 rounded-md text-lg font-medium"
            >
              {t('cta.learnMore')}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;