import React, {useState, useEffect} from 'react'


import Container from "../../components/layout/Container";
import H1 from '../../components/layout/Headings/H1'
import CardContainer from "../../components/card-all/CardContainer";

const Home = () => {

    const noticias = require('../../assets/noticias/noticias.json')
    const [maisVistas, setMaisVistas] = useState([])
    const [maisCurtidas, setMaisCurtidas] = useState([])
    const [maisRecentes, setMaisRecentes] = useState([])

    function separarNoticias (ordenarPor, numeroNoticias=4) {
        const noticiasArray = noticias.sort((a,b) => {
            if (ordenarPor === "data") {
                return new Date(b['data']) - new Date(a['data'])
            }
            return b[ordenarPor] - a[ordenarPor]
        })
        let novoArray = []
        for (let c = 0; c < numeroNoticias; c++) {
            novoArray.push(noticiasArray[c])
        }
        switch (ordenarPor) {
            case 'views': setMaisVistas(novoArray); break
            case 'likes': setMaisCurtidas(novoArray); break
            case 'data': setMaisRecentes(novoArray); break
            default:
                return
        }

    }

    useEffect(() => {
        separarNoticias("views", 4)
        separarNoticias("likes", 4)
        separarNoticias("data", 4)


    })

    return (
        <Container>
            <H1 texto="HOME" />
            <CardContainer noticias={maisVistas} containerName="Mais Vistas: " />
            <CardContainer noticias={maisCurtidas} containerName="Mais Curtidas: " />
            <CardContainer noticias={maisRecentes} containerName="Mais Recentes: " />
        </Container>
    )
}

export default Home