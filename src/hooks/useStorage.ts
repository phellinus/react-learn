import {useSyncExternalStore} from "react";

export const useStorage = (key:string,initValue:any) => {
    const subscrible = (callback:()=> void)=>{
        //订阅浏览器的api
        window.addEventListener('storage',callback);
        return ()=>{
            //取消订阅
            window.removeEventListener('storage',callback);
        }
    }
    const getSnapshot = () => {
        return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : initValue;
    }
    const res = useSyncExternalStore(subscrible,getSnapshot);
    const updateStorage = (value:any)=>{
        localStorage.setItem(key,JSON.stringify(value))
        //通知订阅者
        window.dispatchEvent(new StorageEvent('storage'));
    }
    return [res,updateStorage]
}