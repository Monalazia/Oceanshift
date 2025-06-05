import React, { useState } from 'react';
import { Search, Loader } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TrackingBox: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showDemo, setShowDemo] = useState(false);
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!trackingNumber.trim()) {
      setError(t('tracking.errorEmpty'));
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
    status: t('tracking.status.inTransit'),
    origin: t('tracking.origin'),
    destination: t('tracking.destination'),
    eta: t('tracking.eta'),
    lastUpdate: t('tracking.lastUpdate'),
    progress: 65,
    updates: [
      {
        date: t('tracking.updates.1.date'),
        location: t('tracking.updates.1.location'),
        status: t('tracking.updates.1.status'),
        details: t('tracking.updates.1.details')
      },
      {
        date: t('tracking.updates.2.date'),
        location: t('tracking.updates.2.location'),
        status: t('tracking.updates.2.status'),
        details: t('tracking.updates.2.details')
      },
      {
        date: t('tracking.updates.3.date'),
        location: t('tracking.updates.3.location'),
        status: t('tracking.updates.3.status'),
        details: t('tracking.updates.3.details')
      },
      {
        date: t('tracking.updates.4.date'),
        location: t('tracking.updates.4.location'),
        status: t('tracking.updates.4.status'),
        details: t('tracking.updates.4.details')
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-primary-900 p-6">
        <h3 className={`text-2xl font-bold text-white mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
          {t('tracking.title')}
        </h3>
        <p className={`text-primary-100 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
          {t('tracking.subtitle')}
        </p>
        
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            placeholder={t('tracking.placeholder')}
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className={`w-full px-4 py-3 ${isRTL ? 'pr-4 pl-12' : 'pl-4 pr-12'} rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500`}
            dir={isRTL ? 'rtl' : 'ltr'}
          />
          <button
            type="submit"
            className={`absolute ${isRTL ? 'left-1.5' : 'right-1.5'} top-1/2 -translate-y-1/2 bg-secondary-600 hover:bg-secondary-700 text-white p-2 rounded-md`}
            disabled={isLoading}
          >
            {isLoading ? <Loader size={20} className="animate-spin" /> : <Search size={20} />}
          </button>
        </form>
        
        {error && <p className={`text-red-400 mt-2 text-sm ${isRTL ? 'text-right' : 'text-left'}`}>{error}</p>}
        
        <p className={`text-primary-200 mt-3 text-sm ${isRTL ? 'text-right' : 'text-left'}`}>
          {t('tracking.demoHint')}
        </p>
      </div>
      
      {showDemo && (
        <div className="p-6">
          <div className="mb-6">
            <div className={`flex justify-between items-center mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <h4 className="font-semibold text-gray-800">
                {t('tracking.trackingLabel')}: {demoTracking.number}
              </h4>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {demoTracking.status}
              </span>
            </div>
            
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
              <div
                className="absolute h-full bg-secondary-500 left-0 top-0 rounded-full"
                style={{ width: `${demoTracking.progress}%` }}
              ></div>
            </div>
            
            <div className={`grid grid-cols-2 gap-4 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div>
                <p className="text-sm text-gray-500">{t('tracking.origin')}</p>
                <p className="font-medium">{demoTracking.origin}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">{t('tracking.destination')}</p>
                <p className="font-medium">{demoTracking.destination}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">{t('tracking.estimatedArrival')}</p>
                <p className="font-medium">{demoTracking.eta}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">{t('tracking.lastUpdate')}</p>
                <p className="font-medium">{demoTracking.lastUpdate}</p>
              </div>
            </div>
          </div>
          
          <h5 className={`font-semibold text-gray-800 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('tracking.shipmentUpdates')}
          </h5>
          <div className="space-y-4">
            {demoTracking.updates.map((update, index) => (
              <div key={index} className={`relative pl-6 pb-4 border-l-2 border-gray-200 ${isRTL ? 'mr-6 border-r-2 border-l-0 pr-6 pl-0' : ''}`}>
                <div className={`absolute ${isRTL ? 'right-[-8px]' : 'left-[-8px]'} top-0 w-4 h-4 rounded-full bg-primary-600`}></div>
                <p className={`text-sm text-gray-500 ${isRTL ? 'text-right' : 'text-left'}`}>{update.date}</p>
                <p className={`font-medium ${isRTL ? 'text-right' : 'text-left'}`}>{update.status}</p>
                <p className={`text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>{update.location}</p>
                <p className={`text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>{update.details}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackingBox;