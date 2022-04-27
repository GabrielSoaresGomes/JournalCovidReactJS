import React from 'react'
import H2 from "../../layout/Headings/H2";

import './CardContainer.css'
import Card from "../Card";

const CardContainer = (props) => {

    return (
        <div className="card-container-all">
            <H2 texto={props.containerName} />
            <div className="card-container">
                { props.noticias.map((noticia) => {
                    return(<Card key={noticia.id} imagem={noticia.imagem} title={noticia.titulo} data={noticia.data}
                                 previa={noticia.previa} views={noticia.views} like={noticia.likes} id={noticia.id}  />)
                }) }
            </div>
        </div>
    )
}

export default CardContainer