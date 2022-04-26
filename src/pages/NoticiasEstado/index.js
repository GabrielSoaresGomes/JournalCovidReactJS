import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

const NoticiasEstado = () => {

    const [noticias, setNoticias] = useState([])

    const {sigla} = useParams()

    return(
        <div>

        </div>
    )
}

export default NoticiasEstado