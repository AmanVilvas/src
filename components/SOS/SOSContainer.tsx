import React from 'react';

interface SOSContainerProps {
  isActive: boolean;
  children: React.ReactNode;
}

export const SOSContainer: React.FC<SOSContainerProps> = ({ isActive, children }) => {
  return (
    <div className={`bg-white rounded-3xl shadow-lg p-8 w-full max-w-md transition-all duration-300
                    ${isActive ? 'bg-red-50 border-2 border-red-200' : ''}`}>
      {children}
    </div>
  );
};