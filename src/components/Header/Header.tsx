import { StyledContainerHeader } from "../../styles/Container";
import { StyledTitle } from "../../styles/Typography";
import { SearchInput } from "./SearchInput";
import { StyledHeader } from "./StyledHeader";
import cartIcon from "../../assets/cartIcon.svg"
import exitIcon from "../../assets/exitIcon.svg"

export function Header () {
    
    return (
        <StyledHeader>
            <StyledContainerHeader className="flex">
                <StyledTitle tag="h1">Burguer <span>Kenzie</span></StyledTitle>

                <div>
                    <SearchInput/>
                    <img src={cartIcon} alt="Carrinho de Compras" />
                    <span className="counter">0</span>
                    <img src={exitIcon} alt="Encerrar sessão" />
                </div>
            </StyledContainerHeader>
        </StyledHeader>
    )
}