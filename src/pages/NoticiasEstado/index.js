import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

import CardContainer from '../../components/card-all/CardContainer';

import Container from '../../components/layout/Container';

const NoticiasEstado = () => {

    const estado_json = require("../../assets/estados/estados.json")
    const noticia_json = require("../../assets/noticias/noticias.json")
    const [state, setState] = useState([])
    const [noticias, setNoticias] = useState([])

    const {sigla} = useParams()

    function getState () {
        let estado = ( estado_json.find(estado => estado.sigla === sigla) )
        setState(estado)
        console.log(state)
    }

    useEffect(() => {
        getState()
        
    })

    useEffect(() => {
        console.log(state)
        setNoticias(noticia_json.find(noticia => noticia.estado === state.nome))
        
    }, [noticia_json, sigla, noticias, state])

    return(
        <Container>
             {noticias.length && (
                 <CardContainer noticias={noticias} />
             )}
        </Container>
    )
}

export default NoticiasEstado