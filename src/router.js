import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './Components/App';
import Error404 from './Components/Error/Error';
import Home from './Components/Home/Home';


const AppRoutes = () => (
    <App>
        <Routes>
            <Route path= "/" element={<Home/>} />
            <Route path= "*" element={<Error404/>} />
        </Routes>
    </App>
)

export default AppRoutes;