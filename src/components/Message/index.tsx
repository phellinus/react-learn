import ReactDOM from 'react-dom/client';
import './index.css';

const Message = () => {
    return <div>消息提示</div>;
};
interface Item {
    root: ReactDOM.Root;
    messageContent: HTMLElement;
}
const res: Item[] = [];
window.onShow = () => {
    const messageContent = document.createElement('div');
    messageContent.className = 'message';
    messageContent.style.top = `${res.length * 40}px`;
    document.body.appendChild(messageContent);
    //容器如何关联到根节点
    const root = ReactDOM.createRoot(messageContent);
    root.render(<Message />);
    res.push({
        root,
        messageContent,
    });
    setTimeout(() => {
        const item = res.find((item) => item.messageContent === messageContent)!;
        item.root.unmount();
        document.body.removeChild(messageContent);
        res.slice(res.indexOf(item), 1);
    }, 2000);
};

//申明扩容
declare global {
    interface Window {
        onShow: () => void;
    }
}

export default Message;
