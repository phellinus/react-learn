const BotherOne = () =>{
    const event = new Event('BothOne');
    const clickBother = () =>{
        event.params = { name:'兄弟组件1号' }
        window.dispatchEvent(event);
    }
    return(
        <>
            <h3>我是BotherOne组件</h3>
            <button onClick={clickBother}>发送事件</button>
        </>
    )
}
//扩充event类型
declare global {
    interface Event {
        params?: {
            name: string;
        }
    }
}
export default BotherOne;