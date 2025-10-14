import { useRoutes } from 'react-router-dom';
import App from '../App';
import React from '../React';
import NotFound from '../NotFound';

function BaseRouter() {
    return useRoutes([
        { path: '/', element: <App /> },
        { path: '/react', element: <React /> },
        { path: '*', element: <NotFound /> },
    ]);
}

export default BaseRouter;
