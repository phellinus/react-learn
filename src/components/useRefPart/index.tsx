import { useRef } from 'react';

const UseRefPart = () =>{
    const inputRef = useRef<HTMLInputElement>(null);

    const focus = () => inputRef.current?.focus();

    return (
        <>
            <input ref={inputRef} placeholder="我会被聚焦" />
            <button onClick={focus}>聚焦</button>
        </>
    );
}

export default UseRefPart