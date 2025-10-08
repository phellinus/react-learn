import {forwardRef, useEffect, useLayoutEffect, useRef, useState} from 'react';


function usePrevious<T>(value:T):T | undefined{
    const prevRef = useRef<T>(undefined);
    useEffect(() => {
        prevRef.current = value;//渲染完成后记录
    });
    return prevRef.current;
}

const FancyInput = forwardRef<HTMLInputElement>((props,ref)=>(
    <input {...props} ref={ref} className="fancy"/>
))

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

    //使用
    const [count,setCount] = useState(0);
    const prevCount = usePrevious(count);

    //测量dom尺寸
    const divRef = useRef<HTMLDivElement>(null);
    const sizeRef = useRef({width:0,height:0});

    useLayoutEffect(() => {
        //浏览器绘前测量 ，不会闪
        const el = divRef.current!;
        sizeRef.current = { width:el.offsetWidth ,height: el.offsetHeight };
        console.log('尺寸',sizeRef.current);
    });
    //forwardRef透传
    const inputForRef = useRef<HTMLInputElement>(null);
    return (
        <>
            <input ref={inputRef} placeholder="我会被聚焦" />
            <button onClick={focus}>聚焦</button>

            <button onClick={stop}>停止计时器</button>
            <br/>
            <p>当前：{count},上一次：{prevCount ?? '无'}</p>
            <button onClick={()=>setCount(c => c+1)}>+1</button>
            <br />
            <div ref={divRef} style={{ resize:'both',overflow:'scroll',border:'1px solid' }}>拖动右下角改变大小</div>
            <h2>forward透传</h2>
            <FancyInput ref={inputForRef}/>
            <button onClick={()=> inputForRef.current?.focus()}>聚焦</button>
        </>
    );
}

export default UseRefPart