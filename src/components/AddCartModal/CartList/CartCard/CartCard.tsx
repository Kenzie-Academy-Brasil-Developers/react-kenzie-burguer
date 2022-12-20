import { StyledTitle } from "../../../../styles/Typography";
import trashIcon from "../../../../assets/trashIcon.svg"

export function CartCard () {
    return (
        <li>
            <figure>
                <img src="" alt="" />
            </figure>
            <div>
                <div>
                    <StyledTitle tag="h3">Hamburguer</StyledTitle>
                    <img src={trashIcon} alt="Remover Hamburguer" />
                </div>
                <div>
                    <span>-</span>
                    <small>1</small>
                    <span>+</span>
                </div>
            </div>
        </li>
    )
}