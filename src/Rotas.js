import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Estados from './pages/Estados'

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Detalhes from "./pages/Detalhes";

const Rotas = () => {
    return (

        <BrowserRouter>
            <Navbar />
            <Routes>

                <Route exact path="/" element={<Home/>} />
                <Route path="/estados" element={<Estados/>} />
                <Route path="/noticia/:id" element={<Detalhes/>} />

            </Routes>
            <Footer />
        </BrowserRouter>

    )
}

export default Rotas