import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import React from './React.tsx';
import './components/Message/index.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/react' element={<React />} />
        </Routes>
    </BrowserRouter>,
);
