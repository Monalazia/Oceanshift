import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import StatsCounter from '../components/StatsCounter';
import { Shield, Target, Users, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Hero
        title="About OceanicShift"
        subtitle="Global shipping and logistics excellence since 2010"
        imageUrl="https://images.pexels.com/photos/2253210/pexels-photo-2253210.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, OceanicShift began with a simple mission: to transform global shipping through innovation and reliability. What started as a small operation in San Francisco has grown into a worldwide logistics network serving over 120 countries.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey has been defined by a relentless focus on creating seamless supply chain solutions that empower businesses of all sizes to reach global markets efficiently. Through strategic investments in technology and infrastructure, we've built a shipping ecosystem that combines the best of traditional logistics expertise with cutting-edge digital capabilities.
              </p>
              <p className="text-gray-600">
                Today, OceanicShift stands as an industry leader, trusted by thousands of companies worldwide for their most critical shipping needs. Our global team of over 1,200 logistics professionals continues to push boundaries, setting new standards for what's possible in international shipping and supply chain management.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="OceanicShift team"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-xl font-bold">Est. 2010</p>
                <p>San Francisco, CA</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-8 flex flex-col h-full"
            >
              <div className="mb-4 text-primary-600 bg-primary-50 p-3 rounded-lg inline-block">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability & Trust</h3>
              <p className="text-gray-600">
                We understand that businesses depend on consistent, trustworthy service. That's why we've built our entire operation around delivering on our promises, every time. From accurate ETAs to careful handling of your cargo, reliability is at the core of everything we do.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8 flex flex-col h-full"
            >
              <div className="mb-4 text-secondary-600 bg-secondary-50 p-3 rounded-lg inline-block">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation & Efficiency</h3>
              <p className="text-gray-600">
                We continuously seek better ways to serve our clients through technological innovation and process optimization. By investing in advanced tracking systems, AI-powered logistics planning, and sustainable shipping methods, we're creating more efficient solutions for global commerce.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-8 flex flex-col h-full"
            >
              <div className="mb-4 text-accent-600 bg-accent-50 p-3 rounded-lg inline-block">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Our clients' success is our success. We take the time to understand your unique shipping requirements and business goals, then tailor our services accordingly. Our dedicated account managers ensure you receive personalized support throughout your shipping journey.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-8 flex flex-col h-full"
            >
              <div className="mb-4 text-green-600 bg-green-50 p-3 rounded-lg inline-block">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence & Integrity</h3>
              <p className="text-gray-600">
                We hold ourselves to the highest standards in every aspect of our operations. From regulatory compliance to transparent pricing, we believe in doing business with integrity and pursuing excellence in all we do. This commitment has earned us industry recognition and long-term client relationships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="section-subtitle">
              Meet the experts leading our global shipping operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="CEO"
                  className="w-full h-auto transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">David Chen</h3>
              <p className="text-gray-600 mb-3">CEO & Co-Founder</p>
              <p className="text-gray-500 text-sm">
                20+ years in global logistics and supply chain management
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="COO"
                  className="w-full h-auto transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Maria Rodriguez</h3>
              <p className="text-gray-600 mb-3">Chief Operations Officer</p>
              <p className="text-gray-500 text-sm">
                Former logistics director at Fortune 500 company
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="CTO"
                  className="w-full h-auto transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">James Wilson</h3>
              <p className="text-gray-600 mb-3">Chief Technology Officer</p>
              <p className="text-gray-500 text-sm">
                Pioneered our innovative tracking and logistics platform
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/3782434/pexels-photo-3782434.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Global Director"
                  className="w-full h-auto transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
              <p className="text-gray-600 mb-3">Global Partnerships Director</p>
              <p className="text-gray-500 text-sm">
                Established our network across 120+ countries
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section bg-primary-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">OceanicShift by the Numbers</h2>
            <p className="text-lg md:text-xl text-primary-200 mb-10">
              Our global impact in shipping and logistics
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter value={1200} label="Team Members" suffix="+" />
            <StatsCounter value={35} label="Global Offices" />
            <StatsCounter value={2500} label="Business Clients" suffix="+" />
            <StatsCounter value={500} label="Shipping Vessels" suffix="+" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;