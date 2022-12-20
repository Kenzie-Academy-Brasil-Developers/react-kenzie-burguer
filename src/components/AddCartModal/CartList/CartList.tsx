import { StyledTitle } from "../../../styles/Typography";
import { CartCard } from "./CartCard";


export function CartList () {
    return (
        <>
            <ul>
                <CartCard/>
            </ul>

            <StyledTitle tag="h4">Total</StyledTitle>
            <small>R$ 14,00</small>
            <button type="button">Remover todos</button>       
        </>
    )
}