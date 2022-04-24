import React from "react";

import './FooterListItem.css'

const FooterListItem = ({texto, simbolo="", destino="#/"}) => {
    return (
        <a href={destino} target="_blank" className="link-footer"><li className="footer-list-item">{simbolo} {texto}</li></a>
    )
}

export default FooterListItem