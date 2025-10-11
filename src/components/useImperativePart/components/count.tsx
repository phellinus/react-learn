import {forwardRef, useImperativeHandle, useState} from "react";

export type CounterHandle = {
    logCount: () => void;
}

const Counter = forwardRef<CounterHandle>((_, ref) => {
    const [count,setCount ] = useState(0);
    useImperativeHandle(ref,()=>({
        //捕获这个count
        logCount:()=>{
            alert("count=>"+count)
        }
    }))
    return (
        <>
            <p>{count}</p>
            <button onClick={()=>setCount(count => count+1)}>增加</button>
        </>
    )
})

export default Counter