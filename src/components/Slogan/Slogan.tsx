import dotsImg from "../../assets/dots.svg";
import shopIcon from "../../assets/shopIcon.svg"

export function Slogan () {
    return (
        <section>
            <h1>Burguer <small>Kenzie</small></h1>
            <div>
                <figure>
                    <img src={shopIcon} alt="Sacola de Compras" />
                </figure>

                <p>A vida é como um sanduíche, é preciso recheá-la com os <strong>melhores</strong> ingredientes.</p>
            </div>
            <img src={dotsImg}/>
        </section>
    )
}