import React from 'react'
import {Link} from "react-router-dom";

import './CardLink.css'

const CardLink = ({destino}) => {
    return <Link className="card-link" to={destino} />

}

export default CardLink