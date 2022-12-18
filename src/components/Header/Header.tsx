import { StyledContainerHeader } from "../../styles/Container";
import { StyledTitle } from "../../styles/Typography";
import { SearchInput } from "./SearchInput";
import { StyledHeader } from "./StyledHeader";
import cartIcon from "../../assets/cartIcon.svg"
import exitIcon from "../../assets/exitIcon.svg"
import { useNavigate } from "react-router-dom";

export function Header () {
    const navigate = useNavigate()
    
    function logout () {
        localStorage.removeItem('userToken')
        navigate('/')
    }
    
    return (
        <StyledHeader>
            <StyledContainerHeader className="flex">
                <StyledTitle tag="h1">Burguer <span>Kenzie</span></StyledTitle>

                <div>
                    <SearchInput/>
                    <img src={cartIcon} alt="Carrinho de Compras" />
                    <span className="counter">0</span>
                    <img onClick={logout} src={exitIcon} alt="Encerrar sessão" />
                </div>
            </StyledContainerHeader>
        </StyledHeader>
    )
}