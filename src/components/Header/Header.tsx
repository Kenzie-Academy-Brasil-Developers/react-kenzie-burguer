import { StyledContainerHeader } from "../../styles/Container";
import { StyledTitle } from "../../styles/Typography";
import { SearchInput } from "./SearchInput";
import { StyledHeader } from "./StyledHeader";
import searchIcon from "../../assets/searchIcon.svg"
import searchIconInactive from "../../assets/searchIconInactive.svg"
import cartIcon from "../../assets/cartIcon.svg"
import exitIcon from "../../assets/exitIcon.svg"
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";

export function Header () {
    const { isSearchActivated, setIsSearchActivated, navigate, productsCartList } = useContext(UserContext)
    const { setIsCartModalOpen } = useContext(CartContext)
    
    function logout () {
        localStorage.removeItem('userToken')
        navigate('/')
    }
    
    return (
        <StyledHeader>
            <StyledContainerHeader className="flex">
                <StyledTitle tag="h1">Burguer <span>Kenzie</span></StyledTitle>

                <div>
                    {isSearchActivated && <SearchInput/>}
                    <img onClick={() => {setIsSearchActivated(true)}} src={searchIconInactive} alt="" />
                    <img onClick={() => {setIsCartModalOpen(true)}} src={cartIcon} alt="Carrinho de Compras" />
                    <span className="counter">{productsCartList.length}</span>
                    <img onClick={logout} src={exitIcon} alt="Encerrar sessão" />
                </div>
            </StyledContainerHeader>
        </StyledHeader>
    )
}