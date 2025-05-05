import React, { useState } from 'react'

type ThemeContextType = {
    theme: 'dark' | 'purple-dark',
    toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextType>({
    theme: 'purple-dark',
    toggleTheme: () => null
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const storedTheme = localStorage.getItem('theme')
    const currentTheme = storedTheme ? storedTheme as 'dark' | 'purple-dark' : 'purple-dark'

    const [theme, setTheme] = useState(currentTheme)

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'purple-dark' ? 'dark' : 'purple-dark'
            localStorage.setItem('theme', newTheme)

            return newTheme
        })
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <main
                className={`
                    ${theme}
                    transition-colors
                    duration-500
                    text-foreground bg-background
                    min-h-screen
                `}
            >
                {children}
            </main>

        </ThemeContext.Provider>
    )
}
