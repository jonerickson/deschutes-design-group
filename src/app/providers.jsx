'use client';

import { createContext, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from 'next-themes';

function usePrevious(value) {
  let [current, setCurrent] = useState(value);
  let [previous, setPrevious] = useState(null);

  if (value !== current) {
    setPrevious(current);
    setCurrent(value);
  }

  return previous;
}

export const AppContext = createContext({});

export function Providers({ children }) {
  let pathname = usePathname();
  let previousPathname = usePrevious(pathname);

  return (
    <AppContext.Provider value={{ previousPathname }}>
      <ThemeProvider
        attribute='class'
        defaultTheme='dark'
        enableSystem={false}
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
}
