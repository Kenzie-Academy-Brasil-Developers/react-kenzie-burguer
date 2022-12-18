import { useContext } from "react";
import { Header } from "../../components/Header";
import { UserContext } from "../../contexts/UserContext";
import { StyledContainerMenu } from "../../styles/Container";
import { MenuList } from "./MenuList";

export function Menu () {
    const { productsList, getAllProducts } = useContext(UserContext)
    
    return (
        <>
            <Header/>

            <StyledContainerMenu>
                <MenuList/>
            </StyledContainerMenu>
        </>

    )
}