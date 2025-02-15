import React from 'react';

interface SOSCountdownProps {
  countdown: number;
  onCancel: () => void;
}

export const SOSCountdown: React.FC<SOSCountdownProps> = ({ countdown, onCancel }) => {
  return (
    <div 
      onClick={onCancel}
      className="relative cursor-pointer hover:opacity-90 transition-opacity duration-200"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center animate-pulse">
          <span className="text-4xl font-bold text-red-500">{countdown}</span>
        </div>
        <p className="text-red-600 font-medium">
          Sending emergency alert in {countdown} seconds
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Click anywhere to cancel if this was a mistake
        </p>
      </div>
    </div>
  );
};