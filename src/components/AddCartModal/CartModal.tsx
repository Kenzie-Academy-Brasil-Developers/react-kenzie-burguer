import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { UserContext } from "../../contexts/UserContext";
import { StyledTitle } from "../../styles/Typography";
import { StyledCartModal } from "./StyledModal";

export function CartModal () {
    const { productsCartList } = useContext(UserContext)
    const { setIsCartModalOpen } = useContext(CartContext)
    
    return (
        <StyledCartModal>
            <section>
                <div>
                    <StyledTitle tag={'h3'}>Carrinho de compras</StyledTitle>
                    <span onClick={() => {setIsCartModalOpen(false)}}>X</span>
                </div>
                {productsCartList.length === 0 ? 
                    <div>
                        <p>Sua sacola está vazia</p>
                        <small>Adicione itens</small>
                    </div>
                    :
                    <ul>
                        <li>Hamburguer</li>
                    </ul>
                }
            </section>
        </StyledCartModal>
    )
}