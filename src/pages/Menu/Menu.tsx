import { useContext, useEffect } from "react";
import { CartModal } from "../../components/AddCartModal";
import { Header } from "../../components/Header";
import { CartContext } from "../../contexts/CartContext";
import { UserContext } from "../../contexts/UserContext";
import { StyledContainerMenu } from "../../styles/Container";
import { MenuList } from "./MenuList";

export function Menu () {
    const { getAllProducts, navigate } = useContext(UserContext)
    const { isCartModalOpen } = useContext(CartContext)
    
    useEffect(() => {
        (() => {
            if (!localStorage.getItem('userToken')) {
                navigate('/')
            }
            getAllProducts()
        })()
    }, [])
    
    return (
        <>
            <Header/>

            <StyledContainerMenu>
                <MenuList/>
            </StyledContainerMenu>

            {isCartModalOpen && <CartModal/>}
        </>

    )
}