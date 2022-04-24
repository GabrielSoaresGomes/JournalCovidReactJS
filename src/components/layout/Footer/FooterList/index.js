import React from "react";

import './FooterList.css'

const FooterList = (props) => {
    return (
            <div className="container-footer-list">
                <p>{props.texto}</p>
                <ul className="footer-list">
                    {props.children}
                </ul>
            </div>
    )
}

export default FooterList