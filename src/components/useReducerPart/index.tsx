import {useReducer, useState} from "react";

type Action = { type: 'inc' } | { type: 'dec' } | {type:'add';payload:number}

const reducer = (state:number, action: Action)=>{
    switch (action.type){
        case'inc':
            return state + 1;
        case 'dec':
            return state - 1;
        case 'add':
            return state + action.payload;
        default:
            throw new Error('Unknown action');
    }
}
const UseReducerPart = () => {

    const [count,setCount]=useState(0)

    const [countData,dispatch] = useReducer(reducer,0);
    return (
        <>
            <h2>
                ----------useReducer的用法--------
            </h2>
            <p>当前计数：{count}</p>
            <button onClick={()=>setCount(count+1)}>+1</button>
            <button onClick={()=>setCount(count-1)}>-1</button>

            <h2>使用useReducer实现计数器</h2>
            <p>当前计数：{countData}</p>
            <button onClick={()=>dispatch({type:'inc'})}>+1</button>
            <button onClick={()=>dispatch({type:'dec'})}>-1</button>
            <button onClick={()=>dispatch({type:'add',payload:count})}>+{count}</button>
        </>
    )
}

export default UseReducerPart