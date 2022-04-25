import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import Container from "../../components/layout/Container";
import H1 from "../../components/layout/Headings/H1";

import "./Detalhes.css"

const Detalhes = (props) => {

    const [noticia, setNoticia ] = useState({})

    let {id} = useParams()
    const getNoticia = (id) => {
        let noticias = require('../../assets/noticias/noticias.json')
        for (let item of noticias) {
            if (item.id == id) {
                return item
            }
        }

    }
    useEffect(() => {
        setNoticia(getNoticia(id))
    }, [])


    return (
        <Container>
            <div className="img-container">
                <img className="imagem-capa" src={noticia.imagem} alt={`Capa sobre: ${noticia.titulo}`} />
            </div>
            <H1 texto={`${noticia.titulo}`} />
            <div className="info-container">
                <p>{noticia.data} <i className="bi bi-calendar"></i></p>
                <p>{noticia.likes} <i className="bi bi-hand-thumbs-up"></i></p>
                <p>{noticia.views} <i className="bi bi-eye"></i></p>
            </div>
            <div className="conteudo-container">
                <p>{noticia.conteudo}</p>
            </div>
        </Container>
    )
}

export default Detalhes