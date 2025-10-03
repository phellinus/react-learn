import {useStorage} from "../../hooks/useStorage.ts";
import {useHistory} from "../../hooks/useHistory.ts";

const UseSyncExternalPart = () => {
    const [count,setCount] = useStorage('count',0);
    const [url,push,replace] = useHistory();
    return(
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>+</button>
            <button onClick={() => setCount(count-1)}>-</button>
            <h1>当前的url：{url}</h1>
            <button onClick={() => push('/X')}>跳转到home</button>
            <button onClick={() => replace('/Y')}>替换到replace</button>
        </>
    )
}
export default UseSyncExternalPart