import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-primary-100 p-4 rounded-full text-primary-600">
            <Compass size={64} />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-primary-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on course.
        </p>
        <div className="space-y-4">
          <Link
            to="/"
            className="btn-primary inline-flex items-center"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Homepage
          </Link>
          <div className="pt-4">
            <p className="text-gray-500">
              Need assistance? <Link to="/contact" className="text-primary-600 hover:underline">Contact our support team</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;