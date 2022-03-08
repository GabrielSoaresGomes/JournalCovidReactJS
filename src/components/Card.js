import styles from "./Card.module.css"

function Card({titulo, conteudo, data_postagem, image}) {
    return (
        <div className={styles.card_all}>
            <div className={styles.card_header}>
                <img src={image}/>
                <h1>{titulo}</h1>
            </div>
            <div className={styles.card_body}>
                <p>{conteudo}</p>
            </div>
            <div className={styles.card_footer} >
                <p>{data_postagem}</p>
            </div>
        </div>
    )
}

export default Card