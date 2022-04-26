import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Estados from './pages/Estados'
import Detalhes from "./pages/Detalhes";
import NoticiasEstado from "./pages/NoticiasEstado";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const Rotas = () => {
    return (

        <BrowserRouter>
            <Navbar />
            <Routes>

                <Route exact path="/" element={<Home/>} />
                <Route exact path="/estados" element={<Estados/>} />
                <Route path="/estados/:sigla" element={<NoticiasEstado/>} />
                <Route path="/noticia/:id" element={<Detalhes/>} />

            </Routes>
            <Footer />
        </BrowserRouter>

    )
}

export default Rotas