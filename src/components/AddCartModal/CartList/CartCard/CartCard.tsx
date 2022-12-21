import { StyledTitle } from "../../../../styles/Typography";
import trashIcon from "../../../../assets/trashIcon.svg"

export function CartCard () {
    return (
        <li>
            <figure>
                <img src="https://i.imgur.com/Vng6VzV.png" alt="" />
            </figure>
            <div>
                <div>
                    <StyledTitle tag="h3">Hamburguer</StyledTitle>
                    <img src={trashIcon} alt="Remover Hamburguer" />
                </div>
                <span>-</span>
                <small>1</small>
                <span>+</span>
            </div>
        </li>
    )
}