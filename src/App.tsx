import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import HomePage from './pages/HomePage/HomePage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<HomePage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
