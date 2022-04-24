import React from 'react'
import H2 from "../../layout/Headings/H2";

import './CardContainer.css'

const CardContainer = (props) => {
    return (
        <div className="card-container-all">
            <H2 texto={props.containerName} />
            <div className="card-container">
                {props.children}
            </div>
        </div>
    )
}

export default CardContainer