import { createRoot } from 'react-dom/client';
import './index.css';
import './components/Message/index.tsx';
import { BrowserRouter } from 'react-router-dom';
import BaseRouter from './router/index.tsx';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        {/*<Route path='/' element={<App />} />*/}
        {/*<Route path='/react' element={<React />} />*/}
        <BaseRouter />
    </BrowserRouter>,
);
