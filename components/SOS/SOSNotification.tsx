import React from 'react';
import { AlertCircle } from 'lucide-react';

interface SOSNotificationProps {
  onCancel: () => void;
}

export const SOSNotification: React.FC<SOSNotificationProps> = ({ onCancel }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
        <AlertCircle className="w-8 h-8 text-red-500" />
      </div>
      <h2 className="text-2xl font-bold text-red-500">SOS Signal Active</h2>
      <p className="text-gray-600">Emergency services have been notified</p>
      <p className="text-sm text-gray-500">
        This emergency system will alert users within a 5km radius and notify emergency services of your location
      </p>
      <button
        onClick={onCancel}
        className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 
                 transition-colors duration-200"
      >
        Cancel Emergency Alert
      </button>
    </div>
  );
};