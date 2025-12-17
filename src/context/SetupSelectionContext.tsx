import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

type SetupSelectionContextType = {
  selectedSetups: string[];
  toggleSetup: (name: string) => void;
  clearSelection: () => void;
};

const SetupSelectionContext = createContext<SetupSelectionContextType | undefined>(undefined);

const STORAGE_KEY = 'anytec-setup-selection';

export const SetupSelectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedSetups, setSelectedSetups] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const cached = sessionStorage.getItem(STORAGE_KEY);
      return cached ? JSON.parse(cached) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(selectedSetups));
    } catch {
      // ignore
    }
  }, [selectedSetups]);

  const value = useMemo(
    () => ({
      selectedSetups,
      toggleSetup: (name: string) => {
        setSelectedSetups((prev) =>
          prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
        );
      },
      clearSelection: () => setSelectedSetups([]),
    }),
    [selectedSetups]
  );

  return <SetupSelectionContext.Provider value={value}>{children}</SetupSelectionContext.Provider>;
};

export const useSetupSelection = () => {
  const ctx = useContext(SetupSelectionContext);
  if (!ctx) {
    throw new Error('useSetupSelection must be used within SetupSelectionProvider');
  }
  return ctx;
};
