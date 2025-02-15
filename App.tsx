import React, { useState, useCallback } from 'react';
import { SOSButton } from './components/SOS/SOSButton';
import { SOSCountdown } from './components/SOS/SOSCountdown';
import { SOSNotification } from './components/SOS/SOSNotification';
import { SOSContainer } from './components/SOS/SOSContainer';
import { useGeolocation } from './hooks/useGeolocation';

function App() {
  const [isSOSActive, setIsSOSActive] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [showNotification, setShowNotification] = useState(false);
  const { position, error } = useGeolocation();

  const handleSOS = useCallback(() => {
    setIsSOSActive(true);
    setCountdown(5);
  }, []);

  const cancelSOS = useCallback(() => {
    setIsSOSActive(false);
    setCountdown(5);
    setShowNotification(false);
  }, []);

  // Countdown effect
  React.useEffect(() => {
    let timer: number;
    if (isSOSActive && countdown > 0) {
      timer = window.setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      // Send SOS alert
      if (position) {
        const { latitude, longitude } = position.coords;
        console.log("SOS Alert sent!", { latitude, longitude });
        setShowNotification(true);
        setIsSOSActive(false);
        // Here you would integrate with a backend service to send notifications
        // to users within 5km radius
      }
    }
    return () => clearInterval(timer);
  }, [isSOSActive, countdown, position]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      {showNotification ? (
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 w-full max-w-md 
                      border border-red-100 animate-fade-in">
          <SOSNotification onCancel={cancelSOS} />
        </div>
      ) : (
        <SOSContainer isActive={isSOSActive}>
          {isSOSActive ? (
            <SOSCountdown countdown={countdown} onCancel={cancelSOS} />
          ) : (
            <>
              <SOSButton onClick={handleSOS} />
              <p className="mt-4 text-center text-gray-600">
                Click to send emergency alert
              </p>
            </>
          )}

          {error && (
            <p className="mt-4 text-center text-red-600 text-sm">
              Please enable location services to use the SOS feature
            </p>
          )}
        </SOSContainer>
      )}
    </div>
  );
}

export default App;