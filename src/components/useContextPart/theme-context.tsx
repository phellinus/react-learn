import {createContext} from "react";

export type Theme = 'light' | 'dark'

type ThemeContextValue = {
    theme: Theme;
    setTheme: (t:Theme) => void;
};

//默认值用‘undefined’并在消费处做校验,可避免“没包Provider也能用”的隐形bug
export const ThemeConText = createContext<ThemeContextValue | undefined>(undefined);


