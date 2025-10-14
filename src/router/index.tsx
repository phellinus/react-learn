import { useRoutes } from 'react-router-dom';
import App from '../App';
import React from '../React';
import NotFound from '../NotFound';
import OrderPart from '../views/order/index';

function BaseRouter() {
    return useRoutes([
        { path: '/', element: <App /> },
        { path: '/react', element: <React /> },
        { path: '/order/:id', element: <OrderPart /> },
        { path: '*', element: <NotFound /> },
    ]);
}

export default BaseRouter;
