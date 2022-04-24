import React, {useState} from 'react'


import Container from "../../components/layout/Container";
import H1 from '../../components/layout/Headings/H1'
import CardContainer from "../../components/card-all/CardContainer";
import Card from "../../components/card-all/Card";

const Home = () => {

    const noticias = require('../../assets/noticias/noticias.json')
    const [maisVistas, setMaisVistas] = useState([])

    const definirMaisVistas = () => {
        let noticiasArray = []
        for (let c = 0; c < 4; c++) {

        }
    }
    console.log(noticias)

    return (
        <Container>
            <H1 texto="HOME" />
            <CardContainer containerName="Mais Vistas: ">
                <Card imagem="https://via.placeholder.com/128x48"
                title="Titulo" previa="Aqui vai ser um exemplo de alguma previa para a noticia"
                views="23443" like="2443"/>
            </CardContainer>
        </Container>
    )
}

export default Home