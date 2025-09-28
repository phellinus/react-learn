import {useState} from "react";

const UseStatePart = () =>{

    const [state,setState] = useState<number>(0)
    const [list, setList] = useState<number[]>([1,2,3,4,5,7,6,7,5,5]);
    const [user, setUser] = useState({ name: 'Tom', age: 18 });
    const [config, setConfig] = useState({
        ui: { theme: 'light', lang: 'zh' },
        api: { timeout: 5000 },
    });

    const add = () => setList(prev => [...prev,5]);
    const remove = (index: number) =>
        setList(prev => prev.filter(i => i !== index));
    const update = (index: number, newVal: number) =>
        setList(prev => prev.map((v, i) => (i === index ? newVal : v)));
    const reset = () => setList([]);
    // 对对象的处理
    const updateName = (name: string) =>
        setUser(prev => ({ ...prev, name }));
    const setTheme = (theme: string) =>{
        setState(c => c + 1)
        setConfig(prev => ({
            ...prev,
            ui: { ...prev.ui, theme },
        }));
    }
    return(
        <>
            <h2>----useState的用法----</h2>
            <p>{state}</p>
            <button onClick={() => setState(state + 1)}>+1</button>
            {/* 推荐写法：函数式更新 */}
            <button onClick={() => setState(c => c + 1)}>+1 (函数式)</button>
            <h2>----useSate对数组的处理----</h2>
             数组:{list}<button onClick={add}>添加元素</button>
            <button onClick={() => remove(5)}>删除数字5</button>
            <button onClick={() => update(5, 100)}>将第6个数字更新为100</button>
            <button onClick={reset}>重置数组</button>
            <h2>----useSate对对象的处理----</h2>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <button onClick={() => updateName('Jerry')}>更新姓名</button>
            <pre>{JSON.stringify(config, null, 2)}</pre>
            <button onClick={() => setTheme('dark')}>更新主题</button>
        </>
    )
}

export default UseStatePart