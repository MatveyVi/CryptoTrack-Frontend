    import React, { useEffect, useState } from 'react'

    type ThemeContextType = {
        theme: 'blue' | 'emerald',
        toggleTheme: () => void;
    }

    export const ThemeContext = React.createContext<ThemeContextType>({
        theme: 'blue',
        toggleTheme: () => null
    })

    export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
        const storedTheme = localStorage.getItem('theme')
        const currentTheme = storedTheme ? storedTheme as 'emerald' | 'blue' : 'emerald'

        const [theme, setTheme] = useState(currentTheme)

        const toggleTheme = () => {
            setTheme((prevTheme) => {
                const newTheme = prevTheme === 'blue' ? 'emerald' : 'blue'
                localStorage.setItem('theme', newTheme)

                return newTheme
            })
        }
        useEffect(() => {
            document.documentElement.className = theme; // 'blue-dark', 'dark', 'light'
        }, [theme]);
        return (
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <main className="bg-background text-foreground transition-colors duration-500 min-h-screen">
                {children}
            </main>
            </ThemeContext.Provider>
        )
    }
