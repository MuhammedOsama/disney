import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// components
import Login from './Layout/components/Login';
import Navbar from './Layout/components/Navbar';

export default function App() {
    return <div className="App">
        <Navbar/>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </div>
}
