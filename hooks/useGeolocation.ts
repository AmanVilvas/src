import { useState, useEffect } from 'react';

interface GeolocationState {
  position: GeolocationPosition | null;
  error: GeolocationPositionError | null;
}

export const useGeolocation = () => {
  const [state, setState] = useState<GeolocationState>({
    position: null,
    error: null,
  });

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setState(prev => ({
        ...prev,
        error: {
          code: 0,
          message: "Geolocation not supported",
          PERMISSION_DENIED: 1,
          POSITION_UNAVAILABLE: 2,
          TIMEOUT: 3,
        },
      }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => setState(prev => ({ ...prev, position })),
      (error) => setState(prev => ({ ...prev, error }))
    );
  }, []);

  return state;
};