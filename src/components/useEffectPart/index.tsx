import {useEffect, useState} from "react";

interface Iuser {
    name: string;
    email: string;
    username: string;
    phone: string;
    website: string;
}
const Child = (props:{name:string})=>{
    useEffect(() => {
        //执行时机
        // Didmount,组件渲染完成立马执行 DidUpdate,组件更新时执行
        const timer = setTimeout(()=>{
            fetch('http://localhost:5173?name='+props.name)
        },500)

        console.log('init child');
        return () => {
            clearTimeout(timer);
            console.log('destroy child')
        }
    },[props.name]);
    return(
        <>
            <div>子组件</div>
        </>
    )
}
const UseEffectPart = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')
    const [show ,setShow] = useState(true);

    const [user,setUser] = useState<Iuser>({} as Iuser);
    const [loading,setLoading] = useState(true);
    const [userId,setUserId] = useState('1');
    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users/'+userId)
        .then(res => res.json())
        .then(data => {
            setUser(data);
            setLoading(false);
        })
    }, [userId]);
    return (
        <>
            <h2>----useEffect的用法----</h2>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            姓名:{name}
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setShow(!show)}>{show ? '隐藏' : '显示'}</button>
            {show && <Child name={name} />}
            <div>-----------------------------</div>
            <input value={userId} onChange={(e) => setUserId(e.target.value)}/>
            <div>
                {
                    loading ?(
                        <div>Loading......</div>
                    ) : (
                            <div>
                                <div>姓名:{user.name}</div>
                                <div>邮箱:{user.email}</div>
                                <div>用户名:{user.username}</div>
                                <div>手机号:{user.phone}</div>
                                <div>网站:{user.website}</div>
                            </div>
                    )
                }
            </div>
        </>
    )
}

export default UseEffectPart
