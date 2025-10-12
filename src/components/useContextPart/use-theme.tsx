import {useContext} from "react";
import {ThemeConText} from "./theme-context.tsx";

//推荐：封装成自定义Hook，集中做判空校验
export function useTheme() {
    const ctx = useContext(ThemeConText);
    if (!ctx) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return ctx;
}