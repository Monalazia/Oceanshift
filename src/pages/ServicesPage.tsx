import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { Ship, Truck, Plane, Package, BarChart3, GlassWater, ShieldCheck, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive shipping and logistics solutions for your business"
        imageUrl="https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="section-title">Comprehensive Logistics Solutions</h2>
            <p className="section-subtitle">
              From individual packages to full container loads, our range of services
              covers all your shipping and supply chain needs.
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Ocean Freight */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 text-primary-600 bg-primary-50 p-3 rounded-lg inline-block">
                  <Ship size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Ocean Freight</h3>
                <p className="text-gray-600 mb-6">
                  Our ocean freight services offer reliable and cost-effective solutions for shipping goods across major global routes. Whether you need full container load (FCL) or less than container load (LCL) shipping, we provide flexible options to meet your specific requirements.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>FCL and LCL shipping options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Regular departures on major trade lanes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Competitive rates and transit times</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Real-time tracking and visibility</span>
                  </li>
                </ul>
                <Link to="/contact" className="btn-primary">
                  Get Ocean Freight Quote
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Ocean Freight"
                  className="rounded-lg shadow-lg w-full"
                />
              </motion.div>
            </div>

            {/* Air Freight */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <img
                  src="https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Air Freight"
                  className="rounded-lg shadow-lg w-full"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="mb-4 text-primary-600 bg-primary-50 p-3 rounded-lg inline-block">
                  <Plane size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Air Freight</h3>
                <p className="text-gray-600 mb-6">
                  When speed is essential, our air freight services provide rapid transportation for time-sensitive shipments. With partnerships across major airlines, we offer express delivery options with priority handling and expedited customs clearance.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Express, standard, and economy air freight options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Door-to-door and airport-to-airport services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Customs clearance assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Handling of perishable and high-value goods</span>
                  </li>
                </ul>
                <Link to="/contact" className="btn-primary">
                  Get Air Freight Quote
                </Link>
              </motion.div>
            </div>

            {/* Road Transportation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 text-primary-600 bg-primary-50 p-3 rounded-lg inline-block">
                  <Truck size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Road Transportation</h3>
                <p className="text-gray-600 mb-6">
                  Our comprehensive inland transportation services connect ports, airports, and distribution centers with your final destination. With advanced tracking capabilities and flexible scheduling options, we ensure timely delivery of your cargo.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Full truckload (FTL) and less than truckload (LTL) options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>GPS tracking and real-time updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Flexible scheduling and expedited services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Cross-border transportation expertise</span>
                  </li>
                </ul>
                <Link to="/contact" className="btn-primary">
                  Get Road Transport Quote
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Road Transportation"
                  className="rounded-lg shadow-lg w-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="section-title">Specialized Services</h2>
            <p className="section-subtitle">
              Beyond standard shipping, we offer specialized solutions to address
              complex logistics challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="mb-4 text-secondary-600 bg-secondary-50 p-3 rounded-lg inline-block">
                <Package size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Warehousing & Distribution</h3>
              <p className="text-gray-600 mb-4">
                Our state-of-the-art warehousing facilities offer secure storage, inventory management, and distribution services. With strategic locations across key markets, we provide efficient fulfillment solutions that minimize transit times and costs.
              </p>
              <ul className="space-y-2 mb-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Short and long-term storage options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Inventory management systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Order fulfillment and distribution</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="mb-4 text-secondary-600 bg-secondary-50 p-3 rounded-lg inline-block">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Supply Chain Solutions</h3>
              <p className="text-gray-600 mb-4">
                Our end-to-end supply chain management services help optimize your logistics operations. From procurement to final delivery, we implement strategies that improve efficiency, reduce costs, and enhance visibility across your entire supply chain.
              </p>
              <ul className="space-y-2 mb-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Supply chain consulting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Optimization strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Real-time visibility platforms</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="mb-4 text-secondary-600 bg-secondary-50 p-3 rounded-lg inline-block">
                <GlassWater size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Specialized Shipping</h3>
              <p className="text-gray-600 mb-4">
                For cargo that requires special handling, our specialized shipping services provide expert solutions. We have extensive experience in transporting hazardous materials, oversized cargo, and temperature-controlled shipments with full compliance and safety.
              </p>
              <ul className="space-y-2 mb-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Hazardous materials handling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Temperature-controlled shipping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Oversized and project cargo</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="mb-4 text-secondary-600 bg-secondary-50 p-3 rounded-lg inline-block">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cargo Insurance</h3>
              <p className="text-gray-600 mb-4">
                Protect your shipments with our comprehensive cargo insurance options. Our policies provide coverage against loss, damage, and delays, giving you peace of mind throughout the shipping process.
              </p>
              <ul className="space-y-2 mb-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>All-risk coverage options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Door-to-door protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Quick claims processing</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="mb-4 text-secondary-600 bg-secondary-50 p-3 rounded-lg inline-block">
                <FileCheck size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customs Clearance</h3>
              <p className="text-gray-600 mb-4">
                Navigate the complexities of international trade with our customs clearance services. Our experienced team ensures compliance with regulatory requirements and facilitates smooth border crossings for your shipments.
              </p>
              <ul className="space-y-2 mb-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Documentation preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Tariff classification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Regulatory compliance</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-800 to-secondary-800 text-white">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Streamline Your Shipping?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Contact our team today to discuss your logistics needs and get a customized solution.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="btn bg-white text-primary-800 hover:bg-gray-100 py-3 px-8 rounded-md text-lg font-medium"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;