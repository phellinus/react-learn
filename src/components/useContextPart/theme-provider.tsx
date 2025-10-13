import { type ReactNode, useState } from 'react';
import { type Theme, ThemeConText } from './theme-context.tsx';

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light');
    const value = { theme, setTheme };
    return <ThemeConText.Provider value={value}>{children}</ThemeConText.Provider>;
}
