import "./index.css"
import React from 'react'
interface Props {
    title?:string;
    children?: React.ReactNode;
    num?:number;
    el?: React.ReactNode;
    isFlag?: boolean;
    empty?: null;
    obj?: {a:number,b:string};
    arr?: number[];
    fn?: (params:string) => void;
    unde?: undefined;
}

// export default function Card(props:Props) {
//     console.log("父子传参",props)
//     return (
//         <>
//             <div className="card">
//                 <header>
//                     <div>{ props.title }</div>
//                     <div>副标题</div>
//                 </header>
//                 <main>
//                     内容
//                 </main>
//                 <footer>
//                     <button>确定</button>
//                     <button>取消</button>
//                 </footer>
//             </div>
//         </>
//     )
// }

const Card: React.FC<Props> = ({title='标题',children}) => {
        return (
        <>
            <div className="card">
                <header>
                    <div>{ title }</div>
                    <div>副标题</div>
                </header>
                <main>
                    { children }
                </main>
                <footer>
                    <button>确定</button>
                    <button>取消</button>
                </footer>
            </div>
        </>
    )
}

export default Card