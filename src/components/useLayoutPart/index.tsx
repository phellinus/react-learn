import React, {useEffect, useLayoutEffect, useRef, useState} from "react";

const UseLayoutPart = () => {
    const [ count,setCount ] = useState(0)
    const [left,setLeft] = useState(0)
    const btnRef= useRef<HTMLButtonElement>(null)

    const [height, setHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);


    const scrollHandle = (e:React.UIEvent<HTMLElement>) =>{
        const scrolltop = e.currentTarget.scrollTop;
        window.history.replaceState(null,'',`?top=${scrolltop}`)
    }
    //不阻塞DOM
    useEffect(() => {
        for (let i=0;i<30000;i++){
            setCount(i=>i+1)
        }
    }, []);
    useLayoutEffect(() => {
        const top = window.location.search.split('=')[1]
        if (top){
            const container = document.getElementById('container')
            if (container){
                container.scrollTop = Number(top);
            }
        }

        //Dom操作 已生成，但浏览器还没画出来
        const btn = btnRef.current!;
        const tooltipWidth = 150;
        const rightEdge = btn.getBoundingClientRect().right + tooltipWidth;
        const viewportWidth = window.innerWidth;

        if (rightEdge > viewportWidth){
            setLeft(btn.offsetLeft - tooltipWidth)//移到左边
        }else{
            setLeft(btn.offsetLeft)//默认右边
        }
    }, []);

    useLayoutEffect(() => {
        // 浏览器绘制前拿到“真实内容高度”
        const fullHeight = contentRef.current?.scrollHeight ?? 0;
        setHeight(open ? fullHeight : 0);
    }, [open]); // 开关变化就重新测量

    return(
        <>
            <h2>
                ----------useLayoutEffect的用法--------
            </h2>
            <div>
                <div>root</div>
                {count}
                {/*{Array.from({length:count},(_,index) => <div key={index}>{index}</div>)}*/}
            </div>
            <div onScroll={scrollHandle} id="container" style={{height:'400px',overflow:'auto'}}>
                {Array(1000)
                .fill(0)
                    .map((_,index)=>{
                        return <div key={index}>{index}</div>;
                    })
                }
            </div>
            <h2>---------tooltip 自动定位（防止跳动）-------</h2>
            <button ref={btnRef} style={{marginLeft:200}}>悬停测试</button>
            <div
                style={{
                    position:'absolute',
                    top:btnRef.current?.offsetTop,
                    left,
                    width:150,
                    background:'#333',
                    color:'#fff'
                }}
            >
                提示文字
            </div>
            <h2>动态获取元素高度做平滑展开（accordion）</h2>
            <button onClick={() => setOpen(v => !v)}>Toggle</button>
            <div
                style={{
                    height,
                    overflow: 'hidden',
                    transition: 'height 300ms',
                    background: '#f5f5f5',
                }}
            >
                <div ref={contentRef}>
                    <p>任意内容</p>
                    <p>高度不确定</p>
                </div>
            </div>
        </>
    )
}

export default UseLayoutPart;