import { useRoutes } from 'react-router-dom';
import App from '../App';
import React from '../React';
import NotFound from '../NotFound';
import OrderPart from '../views/order/index';
import Goods from '../views/goods/index';
import Detail from '../views/goods/detail';
import GoodsList from '../views/goods/list';

function BaseRouter() {
    return useRoutes([
        { path: '/', element: <App /> },
        { path: '/react', element: <React /> },
        { path: '/order/:id', element: <OrderPart /> },
        {
            path: '/goods',
            element: <Goods />,
            children: [
                { path: 'detail', element: <Detail /> },
                {
                    path: 'list',
                    element: <GoodsList />,
                },
            ],
        },
        { path: '*', element: <NotFound /> },
    ]);
}

export default BaseRouter;
