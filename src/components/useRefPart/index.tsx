import {useEffect, useRef} from 'react';

const UseRefPart = () =>{
    const inputRef = useRef<HTMLInputElement>(null);
    const timeRef = useRef<NodeJS.Timeout|null>(null);
    const focus = () => inputRef.current?.focus();
    useEffect(() => {
        timeRef.current = setInterval(()=>console.log('tick'),100 )
        return () => {
            if (timeRef.current) clearInterval(timeRef.current);
        }
    }, []);

    const stop = () =>{
        if (timeRef.current){
            clearInterval(timeRef.current);
            timeRef.current = null;
        }
    }
    return (
        <>
            <input ref={inputRef} placeholder="我会被聚焦" />
            <button onClick={focus}>聚焦</button>

            <button onClick={stop}>停止计时器</button>
        </>
    );
}

export default UseRefPart