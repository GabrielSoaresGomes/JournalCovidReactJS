import React from "react";

import './Footer.css'

import FooterListItem from "./FooterListItem";
import FooterList from "./FooterList";

const Footer = () => {
    return(
        <footer className="footer">
            <p className="nome-desenvolvedor">Desenvolvido por: Gabriel Soares Gomes</p>
            <FooterList texto="Contatos:">
                <FooterListItem simbolo={<i className="bi bi-whatsapp"></i>} destino="https://api.whatsapp.com/send?phone=5524981536244" texto="WhatsApp" />
                <FooterListItem simbolo={<i className="bi bi-linkedin"></i>} destino="https://www.linkedin.com/in/gabriel-soares-70294717b/" texto={"Linkedin"} />
                <FooterListItem simbolo={<i className="bi bi-facebook"></i>} destino="https://www.facebook.com/profile.php?id=100005183915568" texto={"Facebook"} />
                <FooterListItem simbolo={<i className="bi bi-github"></i>} destino="https://github.com/GabrielSoaresGomes" texto="GitHub" />
            </FooterList>
        </footer>
    )
}

export default Footer