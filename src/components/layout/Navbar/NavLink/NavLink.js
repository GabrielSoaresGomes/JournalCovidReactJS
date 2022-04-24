import React from "react";
import './NavLink.css'

import {Link} from 'react-router-dom'

const NavLink = (props) => {
    return <Link className="link" to={props.destino}>{props.texto}</Link>
}

export default NavLink