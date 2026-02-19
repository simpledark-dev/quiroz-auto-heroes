'use client';

import { createContext, useContext, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { messages } from '@/lib/i18n/messages';

type Locale = 'en' | 'es';

type LocaleContextValue = {
  locale: Locale;
  toggle: () => void;
  t: (key: string) => string;
  dict: typeof messages[Locale];
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

const STORAGE_KEY = 'qah-locale';
const FADE_MS = 180;

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');
  const [opacity, setOpacity] = useState(1);
  const busy = useRef(false);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? (localStorage.getItem(STORAGE_KEY) as Locale | null) : null;
    if (stored && (stored === 'en' || stored === 'es')) {
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, locale);
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const toggle = useCallback(() => {
    if (busy.current) return;
    busy.current = true;
    setOpacity(0);
    setTimeout(() => {
      setLocale((prev) => (prev === 'en' ? 'es' : 'en'));
      requestAnimationFrame(() => {
        setOpacity(1);
        setTimeout(() => { busy.current = false; }, FADE_MS);
      });
    }, FADE_MS);
  }, []);

  const dict = useMemo(() => messages[locale], [locale]);
  const t = useMemo(() => {
    return (key: string) => {
      const value = key.split('.').reduce<any>((acc, part) => (acc ? acc[part] : undefined), dict);
      if (typeof value === 'string') return value;
      return key;
    };
  }, [dict]);

  const value = useMemo(() => ({ locale, toggle, t, dict }), [locale, toggle, t, dict]);

  return (
    <LocaleContext.Provider value={value}>
      <div
        style={{
          opacity,
          transition: `opacity ${FADE_MS}ms ease`,
        }}
      >
        {children}
      </div>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
