import {useSyncExternalStore} from "react";

export const useHistory = () =>{
    const subscribe = (callback:()=>void) => {
        //订阅浏览器api
        //vue 三种路由结构 ssr 浏览器-hash history
        //hash 底层 监听hashchange事件
        //history 底层 监听popstate事件
        window.addEventListener('popstate',callback);
        window.addEventListener('hashchange',callback);
        return () => {
            //取消订阅
            window.removeEventListener('popstate',callback);
            window.removeEventListener('hashchange',callback);
        }
    }
    const getSnapshot = () =>{
        return window.location.href;
    }
    const url = useSyncExternalStore(subscribe, getSnapshot);
    const push = (url:string)=>{
        //跳转
        window.history.pushState({},'',url);
        window.dispatchEvent(new PopStateEvent('popstate'));
    }
    const replace = (url:string)=>{
        //替换
        window.history.replaceState({},'',url);
        window.dispatchEvent(new PopStateEvent('hashchange'));
    }
    return [url,push,replace] as const;
}