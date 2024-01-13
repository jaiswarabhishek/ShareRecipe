import '@/styles/globals.css';

// _app.tsx
// _app.tsx
import { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Preloader from '@/components/Preloaders';
function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
	  setShowPopup(true);
    }, 3000); // Simulate a 3-second loading time, replace with your actual data fetching logic
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;


