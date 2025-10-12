import {useTheme} from "./use-theme.tsx";

const UseContextPart = () => {
    const { theme, setTheme } = useTheme();

    return(
        <>
            <h2>useContext</h2>
            <span>Theme: {theme}</span>
            <button onClick={()=>setTheme(theme==='light'?'dark':'light')}>切换主题</button>
        </>
    )
}

export default UseContextPart