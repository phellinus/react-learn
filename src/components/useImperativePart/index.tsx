import TextInput, {type TextInputHandle} from "./components/text-input.tsx";
import {useRef} from "react";

const UseImperativePart = () => {
    const textInputRef = useRef<TextInputHandle>(null)

    return (
        <>
            <TextInput ref={textInputRef} initial="hello" />
            <button onClick={()=>textInputRef.current?.focus()}>聚焦</button>
            <button onClick={()=>textInputRef.current?.clear()}>清空</button>
            <button onClick={()=>alert(textInputRef.current?.getValue())}>获取值</button>
        </>
    )
}
export default UseImperativePart