import React from 'react'

import './Card.css'
import CardLink from "./CardLink/CardLink";

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-header"><img src={props.imagem} alt="imagem do card" /></div>
            <div className="card-body">
                <h3>{props.title}</h3>
                <p>{props.previa}</p>
                <CardLink destino={`/noticia/${props.id}`} />
            </div>
            <div className="card-footer">
                <p>{props.data} <i className="bi bi-calendar"></i>  | {props.views} <i className="bi bi-eye"></i> | {props.like} <i className="bi bi-hand-thumbs-up"></i></p>
            </div>
        </div>
    )
}

export default Card