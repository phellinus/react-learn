import './App.css'
import Card from "./components/Card";
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
            <Card
                title={'Hello Vue'}
                num={1}
                el={<div>12313</div>}
                isFlag={true}
                empty={null}
                obj={{a:123,b:'abc'}}
                arr={[1,2,3,4,5]}
                fn={(params:string) => console.log(params)}
                unde={undefined}
            />
            <Card>
                <div>
                    <b>我是内容</b>
                </div>
            </Card>
            <button onClick={()=>window.onShow()}>点击</button>
        </>
    )
}

export default App
