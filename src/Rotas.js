import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Estados from './pages/Estados'
import Navbar from "./components/layout/Navbar";

const Rotas = () => {
    return (

        <BrowserRouter>
            <Navbar />
            <Routes>

                <Route exact path="/" element={<Home/>} />
                <Route path="/estados" element={<Estados/>} />

            </Routes>
        </BrowserRouter>

    )
}

export default Rotas