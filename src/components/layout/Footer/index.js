import React from "react";

import './Footer.css'

import FooterListItem from "./FooterListItem";
import FooterList from "./FooterList";

const Footer = () => {
    return(
        <footer className="footer">
            <p className="nome-desenvolvedor">Desenvolvido por Gabriel Soares Gomes</p>
            <FooterList texto="Contato">
                <FooterListItem texto="ZAP" />
            </FooterList>
        </footer>
    )
}

export default Footer