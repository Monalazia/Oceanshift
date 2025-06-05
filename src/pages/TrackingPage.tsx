import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { Search, Loader, CheckCircle, TruckIcon, Ship, Plane, Package } from 'lucide-react';

const TrackingPage: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showDemo, setShowDemo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }
    
    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowDemo(true);
    }, 1500);
  };

  const demoTracking = {
    number: 'OS-294073156',
    status: 'In Transit',
    origin: 'Shanghai, China',
    destination: 'Los Angeles, USA',
    eta: 'Jun 15, 2025',
    lastUpdate: 'Jun 5, 2025 - 10:23 AM',
    progress: 65,
    method: 'Ocean Freight',
    updates: [
      {
        date: 'Jun 5, 2025 - 10:23 AM',
        location: 'Pacific Ocean',
        status: 'In Transit',
        details: 'Vessel MSC Aurora en route to destination',
        icon: <Ship size={18} />,
      },
      {
        date: 'Jun 1, 2025 - 2:45 PM',
        location: 'Shanghai Port, China',
        status: 'Departed',
        details: 'Cargo loaded and vessel departed from port',
        icon: <Ship size={18} />,
      },
      {
        date: 'May 30, 2025 - 11:30 AM',
        location: 'Shanghai Port, China',
        status: 'Customs Cleared',
        details: 'Shipment cleared customs inspection',
        icon: <CheckCircle size={18} />,
      },
      {
        date: 'May 29, 2025 - 9:12 AM',
        location: 'Shanghai Warehouse',
        status: 'Processing',
        details: 'Cargo consolidated and prepared for loading',
        icon: <Package size={18} />,
      },
      {
        date: 'May 28, 2025 - 3:30 PM',
        location: 'Shanghai, China',
        status: 'Order Received',
        details: 'Shipping order processed and confirmed',
        icon: <CheckCircle size={18} />,
      },
    ],
  };

  return (
    <>
      <Hero
        title="Track Your Shipment"
        subtitle="Get real-time updates on your cargo's location and status"
        imageUrl="https://images.pexels.com/photos/3850212/pexels-photo-3850212.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      {/* Tracking Form */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="section-title">Track & Trace</h2>
            <p className="section-subtitle">
              Enter your tracking number to get detailed information about your shipment's status and location.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-50 rounded-lg p-8 shadow-md"
            >
              <form onSubmit={handleSubmit} className="mb-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-grow relative">
                    <input
                      type="text"
                      placeholder="Enter tracking number (e.g. OS-294073156)"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    {error && (
                      <p className="absolute text-red-500 text-sm mt-1">{error}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn-primary flex items-center justify-center px-6"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader size={20} className="animate-spin mr-2" />
                        <span>Tracking...</span>
                      </>
                    ) : (
                      <>
                        <Search size={20} className="mr-2" />
                        <span>Track Shipment</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
              <p className="text-gray-600 text-sm">
                For demonstration purposes, try tracking number: OS-294073156
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tracking Results */}
      {showDemo && (
        <section className="section bg-gray-50 pt-0">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="bg-primary-900 p-6 text-white">
                <div className="flex flex-wrap justify-between items-center">
                  <div>
                    <p className="text-primary-100">Tracking Number</p>
                    <h3 className="text-2xl font-bold">{demoTracking.number}</h3>
                  </div>
                  <div className="px-4 py-2 bg-blue-500 rounded-full text-sm font-medium mt-2 md:mt-0">
                    {demoTracking.status}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-gray-500">SHIPMENT DETAILS</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Shipment Method</p>
                        <div className="flex items-center">
                          <Ship size={18} className="text-primary-600 mr-2" />
                          <p className="font-medium">{demoTracking.method}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Origin</p>
                        <p className="font-medium">{demoTracking.origin}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Destination</p>
                        <p className="font-medium">{demoTracking.destination}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-gray-500">SHIPPING TIMELINE</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Estimated Delivery</p>
                        <p className="font-medium">{demoTracking.eta}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Last Update</p>
                        <p className="font-medium">{demoTracking.lastUpdate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Shipment Progress</p>
                        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
                          <div
                            className="absolute h-full bg-primary-600 left-0 top-0 rounded-full transition-all duration-1000"
                            style={{ width: `${demoTracking.progress}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>Order Placed</span>
                          <span>In Transit</span>
                          <span>Delivered</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold text-lg mb-4">Detailed Tracking History</h4>
                <div className="space-y-0">
                  {demoTracking.updates.map((update, index) => (
                    <div
                      key={index}
                      className={`relative pl-8 pb-8 ${
                        index === demoTracking.updates.length - 1 ? '' : 'border-l-2 border-gray-200 ml-2'
                      }`}
                    >
                      <div className="absolute left-[-9px] top-0 w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center text-white">
                        {update.icon}
                      </div>

                      <div className={`bg-gray-50 p-4 rounded-lg ${index === 0 ? 'border-l-4 border-primary-600' : ''}`}>
                        <div className="flex justify-between mb-1">
                          <p className="font-medium">{update.status}</p>
                          <p className="text-sm text-gray-500">{update.date}</p>
                        </div>
                        <p className="text-gray-600 mb-1">{update.location}</p>
                        <p className="text-sm text-gray-500">{update.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 border-t border-gray-200">
                <div className="flex flex-wrap justify-between items-center">
                  <p className="text-gray-600 text-sm mb-4 md:mb-0">
                    Need assistance with this shipment? <a href="/contact" className="text-primary-600 hover:underline">Contact our support team</a>
                  </p>
                  <button className="btn-primary" onClick={() => window.print()}>
                    Print Tracking Details
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Tracking Guide */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="section-title">Tracking Guide</h2>
            <p className="section-subtitle">
              Understanding your shipment tracking information
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
              <div className="mb-4 text-primary-600 bg-primary-50 p-3 rounded-lg inline-block">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Finding Your Tracking Number</h3>
              <p className="text-gray-600">
                Your tracking number is provided in your shipping confirmation email and documents.
                It typically starts with "OS-" followed by 9 digits. For containerized shipments,
                you can also track using your container number or bill of lading number.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="mb-4 text-primary-600 bg-primary-50 p-3 rounded-lg inline-block">
                <TruckIcon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Shipment Statuses Explained</h3>
              <p className="text-gray-600">
                <span className="font-medium">Order Received:</span> Your shipping request has been processed.<br />
                <span className="font-medium">Processing:</span> Cargo is being prepared for shipment.<br />
                <span className="font-medium">In Transit:</span> Your shipment is on the move.<br />
                <span className="font-medium">Customs:</span> Shipment is undergoing customs clearance.<br />
                <span className="font-medium">Out for Delivery:</span> Final delivery is in progress.<br />
                <span className="font-medium">Delivered:</span> Shipment has reached its destination.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="mb-4 text-primary-600 bg-primary-50 p-3 rounded-lg inline-block">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tracking Notifications</h3>
              <p className="text-gray-600">
                Stay updated on your shipment's progress by signing up for automated tracking notifications.
                You can receive updates via email or SMS at key milestones during the shipping process.
                Configure your notification preferences in your account settings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="section-title">Tracking FAQs</h2>
            <p className="section-subtitle">
              Common questions about tracking your shipments
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-2">What if my tracking number isn't working?</h3>
                <p className="text-gray-600">
                  If your tracking number isn't working, it may be because the shipment was recently
                  created and hasn't been processed in our system yet. Please allow 24-48 hours after
                  booking for tracking information to become available. If the issue persists, contact
                  our customer support team for assistance.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-2">How often is tracking information updated?</h3>
                <p className="text-gray-600">
                  Tracking information is typically updated at key milestones in the shipping process.
                  For ocean freight, updates may occur every few days as the vessel progresses. Air freight
                  updates more frequently, often multiple times per day. Road transportation updates
                  occur at departure, key checkpoints, and delivery.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-2">Can I track multiple shipments at once?</h3>
                <p className="text-gray-600">
                  Yes, business account users can track multiple shipments simultaneously through our
                  dashboard. You can save frequently tracked shipments, create custom views, and
                  export tracking data for your records. Contact our sales team to set up a business
                  account with advanced tracking features.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-2">Why is my shipment's status not changing?</h3>
                <p className="text-gray-600">
                  For long-distance shipments, especially ocean freight, there may be periods where
                  the status remains unchanged as the vessel is in transit. This is normal and doesn't
                  indicate an issue with your shipment. For ocean shipments, updates may be less
                  frequent during the sea transit phase compared to the initial and final stages.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrackingPage;