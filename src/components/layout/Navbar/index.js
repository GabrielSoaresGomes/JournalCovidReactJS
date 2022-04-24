import React from "react";
import {Link} from "react-router-dom";

import './Navbar.css'

import NavLink from "./NavLink/NavLink";
import SearchInput from "./SearchInput";

const Navbar = () => {
    return (
        <nav className="nav">
            <ul className="nav-links">
                <Link to="/"><img className="nav-img" alt="Logo" src="https://via.placeholder.com/128x48" /></Link>
                <NavLink texto={"Home"} destino={"/"} />
                <NavLink texto={"Estados"} destino={"/estados"} />
            </ul>
            <SearchInput />

        </nav>
    )
}

export default Navbar