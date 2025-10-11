import {forwardRef, useImperativeHandle, useRef} from "react";

export type TextInputHandle = {
    focus:()=> void;
    clear:()=> void;
    getValue:()=> string;
}
type Props = {
    initial?: string;
}
const TextInput = forwardRef<TextInputHandle,Props>(({ initial='' },ref)=>{

    const inputRef = useRef<HTMLInputElement>(null);

    const clear = () =>{
        if (inputRef.current){
            inputRef.current.value = '';
        }
    }
    const getValue = () => inputRef.current?.value ?? ''
    useImperativeHandle(
        ref,
        ()=>({
            focus:() => inputRef.current?.focus(),
            clear,
            getValue
        }),
        []
    )
    return (
        <>
            <input ref={inputRef} defaultValue={initial} />
        </>
    )
})

export default TextInput;