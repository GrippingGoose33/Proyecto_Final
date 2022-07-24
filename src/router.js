import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './Components/App';
import Calculadora from './Components/Calculadora/Calculadora';
import Error404 from './Components/Error/Error';
import Home from './Components/Home/Home';
import Cronometro from './Components/Cronometro/Cronometro';
import Calendar from './Components/Calendar/Calendar';


const AppRoutes = () => (
    <App>
        <Routes>
            <Route path= "/" element={<Home/>} />
            <Route path= "/calculadora" element={<Calculadora/>} />
            <Route path= "/cronometro" element={<Cronometro/>} />
            <Route path= "/calendar" element={<Calendar/>} />
            <Route path= "*" element={<Error404/>} />
        </Routes>
    </App>
)

export default AppRoutes;