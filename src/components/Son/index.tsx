import { useState } from 'react';

interface CounterProps {
    onIncrement: (delta: number, onSuccess: () => void) => void;
}

const Son = ({ onIncrement }: CounterProps) => {
    const doNext = () => {
        setVal(val + 2);
    };
    const [val, setVal] = useState(0);
    return (
        <>
            <h2>子组件的值{val}</h2>
            <button onClick={() => onIncrement(1, doNext)}>点击子组件按钮</button>
        </>
    );
};

export default Son;
