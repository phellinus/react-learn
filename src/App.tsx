import './App.css'
// import Card from "./components/Card";
// import Input from './components/Input'
// import {useRef, useState} from "react";
import Parent from "./components/Parent";
import Correspondence from "./components/Correspondence";
import UseStatePart from "./components/useStatePart";
import UseEffectPart from "./components/useEffectPart";
import UseLayoutPart from "./components/useLayoutPart";
import UseReducerPart from "./components/useReducerPart";
import FormPart from "./components/useReducerPart/FormPart.tsx";
function App() {
    // const test = 'react hello'
    // const obj  = { a:123,b:'abc' }
    // const num = 3.1415926
    // const value: string = '<section style="color:green;">Hello World</section>'
    // const fn = <T,>(params:T) =>{
    //     console.log("我被点击了",params)
    // }
    // const arr: string[] = ['a','b','c','d','e','f','g','h','i','j']
    // const flag:boolean = true

    // const [val,setVal] = useState(0);
    // const handleIncrement = (delta:number) => setVal((v)=>v+delta);
    //
    // const ref = useRef<HTMLInputElement>(null);
    //
    // const focus = () => ref.current?.focus();
    //
    // const fn = (params: string)=>{
    //     console.log('调用了父组件的参数',params)
    // }
    return (
        <>
            {/*<div>*/}
            {/*    {test}*/}
            {/*    { JSON.stringify(obj, null, 2) }*/}
            {/*    { num.toFixed(2) }*/}
            {/*</div>*/}
            {/*<div onClick={()=>fn(123)}>点击我</div>*/}
            {/*<div className='card'>12313</div>*/}
            {/*<div dangerouslySetInnerHTML={{__html:value}}></div>*/}
            {/*{*/}
            {/*    arr.map((item, i) =>{*/}
            {/*        return <div key={i}>{item}</div>*/}
            {/*    })*/}
            {/*}*/}
            {/*{*/}
            {/*    flag ? JSON.stringify(obj, null, 2) : '测试中'*/}
            {/*}*/}
            {/*<Card*/}
            {/*    title={'Hello Vue'}*/}
            {/*    num={1}*/}
            {/*    el={<div>12313</div>}*/}
            {/*    isFlag={true}*/}
            {/*    empty={null}*/}
            {/*    obj={{a:123,b:'abc'}}*/}
            {/*    arr={[1,2,3,4,5]}*/}
            {/*    fn={(params:string) => console.log(params)}*/}
            {/*    unde={undefined}*/}
            {/*    callBack={fn}*/}
            {/*/>*/}
            {/*<Card onIncrement={handleIncrement}>*/}
            {/*    <div>*/}
            {/*        <b>我是内容</b>*/}
            {/*        <h2>父组件计数:{val}</h2>*/}
            {/*    </div>*/}
            {/*</Card>*/}
            {/*<button onClick={()=>window.onShow()}>点击</button>*/}

            {/*<Input ref={ref} label="用户名" placeholder="请输入" />*/}
            {/*<button onClick={focus}>聚焦</button>*/}
            {/*<Parent></Parent>*/}
            {/*<Correspondence></Correspondence>*/}
            {/*<UseStatePart></UseStatePart>*/}
            {/*<UseEffectPart></UseEffectPart>*/}
            {/*<UseLayoutPart></UseLayoutPart>*/}
            <UseReducerPart></UseReducerPart>
            <FormPart></FormPart>
        </>
    )
}

export default App
