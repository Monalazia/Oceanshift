import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.tracking': 'Tracking',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Get a Quote',

    // Hero Section
    'hero.title': 'Global Shipping & Logistics Solutions',
    'hero.subtitle': 'Streamlined shipping and supply chain solutions for businesses of all sizes. Connecting continents with reliability and precision.',
    'hero.cta': 'Get a Quote',
    'hero.trackShipment': 'Track Shipment',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive logistics solutions tailored to your business needs.',
    'services.oceanFreight': 'Ocean Freight',
    'services.airFreight': 'Air Freight',
    'services.roadTransport': 'Road Transportation',
    'services.warehousing': 'Warehousing',
    'services.supplyChain': 'Supply Chain Solutions',
    'services.specialized': 'Specialized Shipping',
    'services.learnMore': 'Learn More',

    // Service Descriptions
    'services.oceanFreight.desc': 'Reliable and cost-effective ocean shipping solutions for containers and bulk cargo.',
    'services.airFreight.desc': 'Express air freight services for time-sensitive shipments.',
    'services.roadTransport.desc': 'Comprehensive inland transportation services with tracking capabilities.',
    'services.warehousing.desc': 'State-of-the-art warehousing facilities with inventory management.',
    'services.supplyChain.desc': 'End-to-end supply chain management with optimization strategies.',
    'services.specialized.desc': 'Expert handling of hazardous materials and oversized cargo.',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our team for shipping inquiries, quotes, and support',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': '+1 (888) 123-4567',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.address': '123 Shipping Lane, Harbor District, San Francisco, CA 94111',

    // Footer
    'footer.description': 'Pioneering global logistics with cutting-edge solutions since 2010. We connect businesses across oceans with reliability and precision.',
    'footer.services': 'Our Services',
    'footer.quickLinks': 'Quick Links',
    'footer.rights': 'All rights reserved',
    'footer.terms': 'Terms',
    'footer.privacy': 'Privacy',
    'footer.cookies': 'Cookies',

    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Hear from businesses that trust us with their shipping needs',

    // Tracking
    'tracking.title': 'Track Your Shipment',
    'tracking.subtitle': 'Enter your tracking number to get real-time updates',
    'tracking.placeholder': 'Enter tracking number (e.g. OS-294073156)',
    'tracking.errorEmpty': 'Please enter a tracking number',
    'tracking.demoHint': 'For demonstration purposes, try tracking number: OS-294073156',
    'tracking.trackingLabel': 'Tracking Number',
    'tracking.origin': 'Shanghai, China',
    'tracking.destination': 'Los Angeles, USA',
    'tracking.estimatedArrival': 'Estimated Arrival',
    'tracking.lastUpdate': 'Jun 5, 2025 - 10:23 AM',
    'tracking.shipmentUpdates': 'Shipment Updates',
    'tracking.eta': 'Jun 15, 2025',
    'tracking.status.inTransit': 'In Transit',

    'tracking.updates.1.date': 'Jun 5, 2025 - 10:23 AM',
    'tracking.updates.1.location': 'Pacific Ocean',
    'tracking.updates.1.status': 'In Transit',
    'tracking.updates.1.details': 'Vessel MSC Aurora en route to destination',

    'tracking.updates.2.date': 'Jun 1, 2025 - 2:45 PM',
    'tracking.updates.2.location': 'Shanghai Port, China',
    'tracking.updates.2.status': 'Departed',
    'tracking.updates.2.details': 'Cargo loaded and vessel departed from port',

    'tracking.updates.3.date': 'May 30, 2025 - 11:30 AM',
    'tracking.updates.3.location': 'Shanghai Port, China',
    'tracking.updates.3.status': 'Customs Cleared',
    'tracking.updates.3.details': 'Shipment cleared customs inspection',

    'tracking.updates.4.date': 'May 29, 2025 - 9:12 AM',
    'tracking.updates.4.location': 'Shanghai Warehouse',
    'tracking.updates.4.status': 'Processing',
    'tracking.updates.4.details': 'Cargo consolidated and prepared for loading',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.tracking': 'تتبع الشحنة',
    'nav.contact': 'اتصل بنا',
    'nav.getQuote': 'احصل على عرض سعر',

    // Hero Section
    'hero.title': 'حلول الشحن والخدمات اللوجستية العالمية',
    'hero.subtitle': 'حلول شحن وسلسلة توريد مبسطة للشركات من جميع الأحجام. نربط القارات بموثوقية ودقة.',
    'hero.cta': 'احصل على عرض سعر',
    'hero.trackShipment': 'تتبع الشحنة',

    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول لوجستية شاملة مصممة لتلبية احتياجات عملك.',
    'services.oceanFreight': 'الشحن البحري',
    'services.airFreight': 'الشحن الجوي',
    'services.roadTransport': 'النقل البري',
    'services.warehousing': 'التخزين',
    'services.supplyChain': 'حلول سلسلة التوريد',
    'services.specialized': 'الشحن المتخصص',
    'services.learnMore': 'اعرف المزيد',

    // Service Descriptions
    'services.oceanFreight.desc': 'حلول الشحن البحري الموثوقة وفعالة التكلفة للحاويات والبضائع السائبة.',
    'services.airFreight.desc': 'خدمات الشحن الجوي السريع للشحنات العاجلة.',
    'services.roadTransport.desc': 'خدمات النقل البري الشاملة مع إمكانية التتبع.',
    'services.warehousing.desc': 'مرافق تخزين حديثة مع نظام إدارة المخزون.',
    'services.supplyChain.desc': 'إدارة سلسلة التوريد الشاملة مع استراتيجيات التحسين.',
    'services.specialized.desc': 'التعامل الخبير مع المواد الخطرة والشحنات الضخمة.',

    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل مع فريقنا للاستفسارات وعروض الأسعار والدعم',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': '+۱ (۸۸۸) ۱۲۳-٤٥٦۷',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.address': '١٢٣ شارع الشحن، حي الميناء، سان فرانسيسكو، كاليفورنيا ٩٤١١١',

    // Footer
    'footer.description': 'نقود الخدمات اللوجستية العالمية بحلول متطورة منذ عام 2010. نربط الشركات عبر المحيطات بموثوقية ودقة.',
    'footer.services': 'خدماتنا',
    'footer.quickLinks': 'روابط سريعة',
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.terms': 'الشروط',
    'footer.privacy': 'الخصوصية',
    'footer.cookies': 'ملفات تعريف الارتباط',

    // Testimonials
    'testimonials.title': 'ماذا يقول عملاؤنا',
    'testimonials.subtitle': 'اسمع من الشركات التي تثق بنا في احتياجات الشحن الخاصة بها',

    // Tracking
    'tracking.title': 'تتبع شحنتك',
    'tracking.subtitle': 'أدخل رقم التتبع للحصول على تحديثات فورية',
    'tracking.placeholder': 'أدخل رقم التتبع (مثال: OS-294073156)',
    'tracking.errorEmpty': 'الرجاء إدخال رقم التتبع',
    'tracking.demoHint': 'للتجربة، استخدم رقم التتبع: OS-294073156',
    'tracking.trackingLabel': 'رقم التتبع',
    'tracking.origin': 'شنغهاي، الصين',
    'tracking.destination': 'لوس أنجلوس، الولايات المتحدة',
    'tracking.estimatedArrival': 'موعد الوصول المتوقع',
    'tracking.lastUpdate': '٥ يونيو ٢٠٢٥ - ١٠:٢٣ صباحاً',
    'tracking.shipmentUpdates': 'تحديثات الشحنة',
    'tracking.eta': '١٥ يونيو ٢٠٢٥',
    'tracking.status.inTransit': 'قيد النقل',

    'tracking.updates.1.date': '٥ يونيو ٢٠٢٥ - ١٠:٢٣ صباحاً',
    'tracking.updates.1.location': 'المحيط الهادئ',
    'tracking.updates.1.status': 'قيد النقل',
    'tracking.updates.1.details': 'السفينة MSC Aurora في طريقها إلى الوجهة',

    'tracking.updates.2.date': '١ يونيو ٢٠٢٥ - ٢:٤٥ مساءً',
    'tracking.updates.2.location': 'ميناء شنغهاي، الصين',
    'tracking.updates.2.status': 'غادرت',
    'tracking.updates.2.details': 'تم تحميل البضائع ومغادرة السفينة من الميناء',

    'tracking.updates.3.date': '٣٠ مايو ٢٠٢٥ - ١١:٣٠ صباحاً',
    'tracking.updates.3.location': 'ميناء شنغهاي، الصين',
    'tracking.updates.3.status': 'تم التخليص الجمركي',
    'tracking.updates.3.details': 'تم تخليص الشحنة من الجمارك',

    'tracking.updates.4.date': '٢٩ مايو ٢٠٢٥ - ٩:١٢ صباحاً',
    'tracking.updates.4.location': 'مستودع شنغهاي',
    'tracking.updates.4.status': 'قيد المعالجة',
    'tracking.updates.4.details': 'تم تجميع البضائع وتجهيزها للتحميل',
  },
};
