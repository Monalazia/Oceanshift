import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team for shipping inquiries, quotes, and support"
        imageUrl="https://images.pexels.com/photos/1917579/pexels-photo-1917579.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our shipping services or need a quote? Our team is here to help.
                Fill out the form, and we'll get back to you promptly.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Headquarters</h3>
                    <p className="text-gray-600">
                      123 Shipping Lane, Harbor District<br />
                      San Francisco, CA 94111<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Main: +1 (888) 123-4567<br />
                      Support: +1 (888) 765-4321
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      General Inquiries: info@oceanicshift.com<br />
                      Customer Support: support@oceanicshift.com<br />
                      Quotes: quotes@oceanicshift.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Hours of Operation</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM PST<br />
                      Saturday: 9:00 AM - 1:00 PM PST<br />
                      Sunday: Closed
                    </p>
                    <p className="text-gray-600 mt-2">
                      24/7 Emergency Support Available
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Global Offices</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-primary-700">New York</h4>
                    <p className="text-gray-600">456 Trade Center, Manhattan</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-700">London</h4>
                    <p className="text-gray-600">78 Shipping Street, Greenwich</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-700">Singapore</h4>
                    <p className="text-gray-600">23 Marina Bay, Business District</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-700">Shanghai</h4>
                    <p className="text-gray-600">101 Cargo Avenue, Pudong</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="section-title">Find Us</h2>
            <p className="section-subtitle">
              Visit our headquarters in San Francisco or one of our global offices
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <div className="h-[450px] bg-gray-200 flex items-center justify-center">
              {/* This would normally be a Google Maps embed */}
              <div className="text-center">
                <p className="text-gray-500 mb-4">Interactive map would be displayed here</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about our shipping and logistics services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-2">How do I request a shipping quote?</h3>
                <p className="text-gray-600">
                  You can request a shipping quote by filling out the contact form on this page, 
                  calling our customer service team, or emailing quotes@oceanicshift.com. Please 
                  include details about your shipment such as origin, destination, cargo type, 
                  and approximate weight/dimensions for the most accurate quote.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-2">How can I track my shipment?</h3>
                <p className="text-gray-600">
                  You can track your shipment by entering your tracking number on our tracking page. 
                  Alternatively, you can contact our customer support team with your tracking number 
                  for assistance. We provide real-time updates on all shipments through our advanced 
                  tracking system.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-2">What shipping documents do I need?</h3>
                <p className="text-gray-600">
                  Required documents typically include a commercial invoice, packing list, and 
                  bill of lading or airway bill. Depending on the shipment, you may also need 
                  certificates of origin, dangerous goods declarations, or customs forms. Our 
                  team can guide you through the specific documentation required for your shipment.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-2">How long will my shipment take?</h3>
                <p className="text-gray-600">
                  Transit times vary depending on the shipping method, origin, destination, and 
                  customs clearance processes. Ocean freight typically takes 15-45 days for 
                  international routes, while air freight can take 1-7 days. Road transportation 
                  transit times depend on distance. We provide estimated delivery times with every quote.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-2">Do you offer cargo insurance?</h3>
                <p className="text-gray-600">
                  Yes, we offer comprehensive cargo insurance options to protect your shipments 
                  against loss, damage, or delays. Our insurance coverage is available for all 
                  shipping methods and can be customized based on your specific needs and the 
                  value of your cargo. We recommend insuring all high-value shipments.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;