import React from 'react'

import './Card.css'
import CardLink from "./CardLink/CardLink";

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-header"><img src={props.imagem} /></div>
            <div className="card-body">
                <h3>{props.title}</h3>
                <p>{props.previa}</p>
                <CardLink destino="/" />
            </div>
            <div className="card-footer">
                <p>{props.views}(view) | {props.like}(like)</p>
            </div>
        </div>
    )
}

export default Card