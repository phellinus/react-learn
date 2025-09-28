const BotherTwo = () =>{
    window.addEventListener('BothOne',(e)=>{
        console.log("我接收到了这个参数",e.params)
    })
    return(
        <>
            <h3>我是BotherTwo组件</h3>

        </>
    )
}
export default BotherTwo;