import styles from "./CardContainer.module.css"

import Card from "./Card.js"

function CardContainer() {
    return (
        <div className={styles.card_container}>
            <Card titulo="Lorem" 
            conteudo="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dignissimos tempore omnis deserunt porro error totam? Fugit optio quaerat saepe repudiandae at tenetur consequuntur non dolores! Quae libero pariatur quisquam." 
            data_postagem="17/03/2022"
            image="https://via.placeholder.com/50"
            />

            <Card titulo="Lorem2" 
            conteudo="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dignissimos tempore omnis deserunt porro error totam? Fugit optio quaerat saepe repudiandae at tenetur consequuntur non dolores! Quae libero pariatur quisquam." 
            data_postagem="17/03/2022"
            image="https://via.placeholder.com/50"
            />

            <Card titulo="Lorem3" 
            conteudo="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dignissimos tempore omnis deserunt porro error totam? Fugit optio quaerat saepe repudiandae at tenetur consequuntur non dolores! Quae libero pariatur quisquam." 
            data_postagem="17/03/2022"
            image="https://via.placeholder.com/50"
            />
            <Card titulo="Lorem4" 
            conteudo="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dignissimos tempore omnis deserunt porro error totam? Fugit optio quaerat saepe repudiandae at tenetur consequuntur non dolores! Quae libero pariatur quisquam." 
            data_postagem="17/03/2022"
            image="https://via.placeholder.com/50"
            />
            <Card titulo="Lorem5" 
            conteudo="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dignissimos tempore omnis deserunt porro error totam? Fugit optio quaerat saepe repudiandae at tenetur consequuntur non dolores! Quae libero pariatur quisquam." 
            data_postagem="17/03/2022"
            image="https://via.placeholder.com/50"
            />
        </div>
    )
}

export default CardContainer