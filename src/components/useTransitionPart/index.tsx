import {useState, useTransition} from "react";
import {Input, List} from "antd";

interface Iitem{
    id: string;
    name: string;
    age: number;
    address: string;
}

const UseTransitionPart = () =>{
    const [inputValue, setInputValue] = useState('');
    const [list,setList] = useState<Iitem[]>([])
    const [isPending,startTransition] = useTransition();
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const resValue = e.target.value;
        setInputValue(resValue);
        fetch('/api/mock/list?key='+resValue)
            .then(res => res.json())
            .then(data => {
                startTransition(()=>{
                    setList(data.list)
                })
            });
    }
    return (
        <>
            <Input value={inputValue} onChange={handleChange} />
            {isPending && <div>加载中...</div>}
            <List dataSource={list}  renderItem={(item)=><List.Item>{item.address}</List.Item>}/>
        </>
    )
}

export default UseTransitionPart;