import styles from "./CardDestaque.module.css"

function CardDestaque({image, titulo, conteudo}) {
    return (
        <div>
            <div className={styles.colunaImagem}>
                <img src={image} />
            </div>
            <div className={styles.colunaConteudo}>
                <h1 className={styles.titulo} >{titulo}</h1>
                <p className={styles.conteudo}>
                    {conteudo}
                </p>
            </div>

        </div>
    )
}

export default CardDestaque