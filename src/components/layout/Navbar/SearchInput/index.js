import React, {useState} from "react";

import './SearchInput.css'

const SearchInput = () => {

    const [busca, setBusca] = useState("")

    const alterarBusca = (e) => {
        setBusca(e.target.value)
    }

    return (
        <input className="input-search" type="search" placeholder="Insira algo..." value={busca} onChange={alterarBusca}/>
    )
}

export default SearchInput