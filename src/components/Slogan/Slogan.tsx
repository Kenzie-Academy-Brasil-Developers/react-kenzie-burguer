import dotsImg from "../../assets/dots.svg";
import shopIcon from "../../assets/shopIcon.svg"
import { StyledSectionSlogan } from "../../styles/Section";
import { StyledTitle } from "../../styles/Typography";

export function Slogan () {
    return (
        <StyledSectionSlogan>
            <StyledTitle tag="h1">Burguer <small>Kenzie</small></StyledTitle>
            <div>
                <figure>
                    <img src={shopIcon} alt="Sacola de Compras" />
                </figure>

                <p>A vida é como um sanduíche, é preciso recheá-la com os <strong>melhores</strong> ingredientes.</p>
            </div>
            <img src={dotsImg}/>
        </StyledSectionSlogan>
    )
}