import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import Container from "../../components/layout/Container";
import H1 from "../../components/layout/Headings/H1";

const Detalhes = (props) => {

    const [noticia, setNoticia ] = useState()

    let {id} = useParams()
    const getNoticia = (id) => {
        let noticias = require('../../assets/noticias/noticias.json')
        for (let noticia of noticias) {
            if (noticia.id == id) {
                return noticia
            }
        }

    }
    useEffect(() => {
        setNoticia(getNoticia(id))
    }, [])


    return (
        <Container>
            <H1 texto={"Detalhes"} />
        </Container>
    )
}

export default Detalhes