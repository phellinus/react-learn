import TextInput, {type TextInputHandle} from "./components/text-input.tsx";
import {useRef} from "react";
import Counter,{ type CounterHandle } from "./components/count.tsx";

const UseImperativePart = () => {
    const textInputRef = useRef<TextInputHandle>(null)
    const counterRef = useRef<CounterHandle>(null)
    return (
        <>
            <TextInput ref={textInputRef} initial="hello" />
            <button onClick={()=>textInputRef.current?.focus()}>聚焦</button>
            <button onClick={()=>textInputRef.current?.clear()}>清空</button>
            <button onClick={()=>alert(textInputRef.current?.getValue())}>获取值</button>
            <br />
            <Counter ref={counterRef}/>
            <button onClick={() => counterRef.current?.logCount()}>
                打印 count
            </button>
        </>
    )
}
export default UseImperativePart