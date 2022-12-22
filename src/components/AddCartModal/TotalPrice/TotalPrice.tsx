import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { StyledTitle } from "../../../styles/Typography";
import { StyledTotalPrice } from "./StyledTotalPrice";

export function TotalPrice () {
    const { productsCartList, setProductsCartList } = useContext(UserContext)
    const totalPrice = productsCartList.reduce((previusValue, currentValue) => {
        if (currentValue.units) {
            return previusValue + (currentValue.price * currentValue.units)
        } else {
            return 0
        }
    }, 0)
    
    return (
        <StyledTotalPrice>
            <StyledTitle tag="h4">Total</StyledTitle>
            <small>R$ {totalPrice.toFixed(2)}</small>
            <button type="button" onClick={() => {setProductsCartList([])}}>Remover todos</button>   
        </StyledTotalPrice>
    )
}