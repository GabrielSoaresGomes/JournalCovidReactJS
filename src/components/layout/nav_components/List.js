import Item from './Item.js'

import styles from './List.module.css'

function List() {
    return (
        <ul className={styles.list}>
            <Item texto="Home" destino="/" />
            <Item texto="Novidades" destino="#" />
            <Item texto="Mais Vistas" destino="#" />
        </ul>
    )
}

export default List