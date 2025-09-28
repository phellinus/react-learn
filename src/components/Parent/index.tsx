import {useState} from "react";
import Son from "../Son";
const Parent = () =>{
    const [val, setVal] = useState(0);

    const handleIncrement = (
        delta: number,
        onSuccess: () => void          // ③ 成功回调由父决定何时执行
    ): void => {
        if (delta <= 0) return;        // 失败就什么都不做
        setVal((v) => v + delta);
        onSuccess();                   // 成功后再调子层后续
    };
    return (
        <>
            <h2>父组件的值:{val}</h2>
            <Son onIncrement={handleIncrement}></Son>
        </>
    )
}

export default Parent