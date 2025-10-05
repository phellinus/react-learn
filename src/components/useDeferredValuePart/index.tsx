import {memo, useDeferredValue, useState} from "react";


interface ListProps {
    query: string;
}
const LIST = Array.from({ length: 30000 }, (_, i) => `Item-${i}`);

// 重组件：memo + deferredValue
const List = memo(function List({ query }:ListProps) {
    console.log('[List] render', query);
    const filtered = LIST.filter(v => v.includes(query));
    return (
        <ul>
            {filtered.slice(0, 100).map(v => <li key={v}>{v}</li>)}
        </ul>
    );
});

const UseDeferredValuePart = () =>{
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);

    return (
        <>
            <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="type to search"
            />
            <span style={{ marginLeft: 8 }}>
                {deferredQuery !== query && '⏳'}
            </span>
            <List query={deferredQuery} />
        </>
    );
}
export default UseDeferredValuePart;