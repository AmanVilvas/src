import React from 'react';
import { AlertCircle } from 'lucide-react';

interface SOSButtonProps {
  onClick?: () => void; 
}

export const SOSButton: React.FC<SOSButtonProps> = ({ onClick }) => {
  const handleClick = async () => {
    if (onClick) onClick(); // Call the existing onClick function if provided

    try {
      const response = await fetch(
        'API key',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ value1: 'SOS Button Pressed!' }),
        }
      );

      if (response.ok) {
        alert('SOS notification sent!');
      } else {
        // alert('Failed to send SOS notification.');
      }
    } catch (error) {
      console.error('Error:', error);
      // alert('Error sending SOS notification.');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full py-4 bg-red-500 text-white rounded-2xl text-xl font-bold
                hover:bg-red-600 transition-colors duration-200 relative overflow-hidden
                shadow-md hover:shadow-lg flex items-center justify-center gap-2"
    >
      <AlertCircle className="w-6 h-6" />
      SOS
    </button>
  );
};
