import CardContainer from "../CardContainer"
import CardDestaqueContainer from "../CardDestaqueContainer"

function Home(){
    return (
        <div>
            <h1>Home</h1>
            <h2>Notícias Principais</h2>
            <CardContainer />

            <h2>Destaques de hoje</h2>
            <CardDestaqueContainer />
        </div>
    )
}

export default Home