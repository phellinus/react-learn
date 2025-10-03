import {useReducer} from "react";

const initData =[{
    id:1,
    name:'张三',
    price:9.9,
    count: 1,
    isEdit:false,
},{
    id:2,
    name:'李四',
    price:8,
    count:1,
    isEdit: false
},{
    id:3,
    name:'王五',
    price:5,
    count:1,
    isEdit:false
}]
type State = typeof initData;
const reducer = (state: State,action:{type:string;id:number,newName?:string}) => {
    const item = state.find((v)=>v.id === action.id)!;
    switch (action.type) {
        case 'add':
            item.count++;
            return [...state];
        case 'sub':
            item.count--;
            return [...state];
        case 'del':
            return state.filter(v=>v.id!==action.id);
        case 'edit':
            item.isEdit = !item.isEdit;
             return [...state];
        case 'blur':
            item.isEdit = false;
            return [...state];
        case 'edit-name':
            if(action.newName){
                item.name = action.newName;
            }
            return [...state];
        default:
            return state;
    }
}
const ShoppingCart = () => {
    const [data,dispatch] = useReducer(reducer,initData);
    return(
        <>
            <h1>购物车</h1>
            <table cellSpacing={0} cellPadding={0} border={1} width={"100%"}>
                <thead>
                    <tr>
                        <th>商品名称</th>
                        <th>单价</th>
                        <th>数量</th>
                        <th>总价</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((item)=>{
                        return (
                            <tr key={item.id}>
                                <td align={"center"}>
                                    { item.isEdit ? <input onBlur={()=>dispatch({type:'blur',id:item.id})} onChange={(e)=>dispatch({type:'edit-name',id:item.id,newName:e.target.value})} value={item.name} type={'text'}/>:item.name }
                                </td>
                                <td align={"center"}>{item.price}</td>
                                <td align={"center"}>
                                    <button onClick={()=>dispatch({type:'sub',id:item.id})}>-</button>
                                    {item.count}
                                    <button onClick={()=>dispatch({type:'add',id:item.id})}>+</button>
                                </td>
                                <td align={"center"}>{item.price*item.count}</td>
                                <td align={"center"}>
                                    <button onClick={()=>dispatch({type:'edit',id:item.id})}>编辑</button>
                                    <button onClick={()=>dispatch({type:'del',id:item.id})}>删除</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>总价</td>
                        <td align={"center"}>
                            结算:{' '}
                            {
                                data.reduce((pre,cur)=>{
                                    return pre + cur.price * cur.count;
                                },0)
                            }
                        </td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default ShoppingCart;