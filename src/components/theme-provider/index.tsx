// ThemeContext.tsx
import React, { useEffect, useState } from 'react';

export type ThemeType = 'blue' | 'emerald';

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'blue',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const storedTheme = localStorage.getItem('theme');
  const currentTheme = (storedTheme as ThemeType) || 'blue';

  const [theme, setTheme] = useState<ThemeType>(currentTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'emerald' ? 'blue' : 'emerald';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className="bg-background text-foreground transition-colors duration-500 min-h-screen">
        {children}
      </main>
    </ThemeContext.Provider>
  );
};
