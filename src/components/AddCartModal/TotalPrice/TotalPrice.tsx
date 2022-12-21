import { StyledTitle } from "../../../styles/Typography";
import { StyledTotalPrice } from "./StyledTotalPrice";

export function TotalPrice () {
    return (
        <StyledTotalPrice>
            <StyledTitle tag="h4">Total</StyledTitle>
            <small>R$ 14,00</small>
            <button type="button">Remover todos</button>   
        </StyledTotalPrice>
    )
}