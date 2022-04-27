import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Container from "../../components/layout/Container";

import H1 from '../../components/layout/Headings/H1'

import './Estado.css'

const Estados = () => {
    const jsonEstados = require('../../assets/estados/estados.json')
    const [estados, setEstados] = useState([])

    useEffect(() => {
        setEstados(jsonEstados)
    }, [jsonEstados])


    return (
        <Container>
            <H1 texto="ESTADOS" />
            <div className="container-bandeiras">
                {estados.map((estado) => {
                    return(
                        <Link to={`/estados/${estado.sigla}`}>
                            <div key={estado.id} className="div-bandeira">
                                <img className="imagem-bandeira" src={estado.bandeira} alt={`Bandeira ${estado.nome} `} />
                                <p>{estado.nome}({estado.sigla})</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </Container>
    )
}

export default Estados