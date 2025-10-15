import { Outlet } from 'react-router-dom';

const goods = () => {
    return (
        <>
            <div>商品列表</div>
            <Outlet />
        </>
    );
};

export default goods;
