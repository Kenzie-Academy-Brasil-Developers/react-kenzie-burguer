import { StyledTitle } from "../../../../styles/Typography";
import trashIcon from "../../../../assets/trashIcon.svg"
import { iProductsList } from "../../../../contexts/UserContext";

export function CartCard ({ name, img} : iProductsList) {
    return (
        <li>
            <figure>
                <img src={img} alt="" />
            </figure>
            <div>
                <div>
                    <StyledTitle tag="h3">{name}</StyledTitle>
                    <img src={trashIcon} alt={`Remover ${name}`} />
                </div>
                <span>-</span>
                <small>1</small>
                <span>+</span>
            </div>
        </li>
    )
}