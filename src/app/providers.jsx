'use client';
import { useEffect, useState } from 'react';

import { Provider } from 'react-redux';
import store from '../store/store';
import { StateContext } from '../context/StateContext.js';
import { ThemeProvider } from '../context/ThemeContext';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';

import dynamic from 'next/dynamic';

const SyncCart = dynamic(() => import('../components/SyncCart.js'), {
  ssr: false,
});

function Providers({ children, session }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Toaster
          toastOptions={{
            style: {
              direction: 'rtl',
            },
          }}
        />
        <SyncCart />
        <StateContext>
          <ThemeProvider>{children}</ThemeProvider>
        </StateContext>
      </SessionProvider>
    </Provider>
  );
}

export default Providers;
