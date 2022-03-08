import { Link } from 'react-router-dom'

import styles from "./Item.module.css"

function Item({texto, destino}) {
    return (
        <li className={styles.list_item}><Link to={destino}>{texto}</Link></li>
    )
}

export default Item