import { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { UserContext } from "../../contexts/UserContext";
import { StyledContainerMenu } from "../../styles/Container";
import { MenuList } from "./MenuList";

export function Menu () {
    const { getAllProducts } = useContext(UserContext)
    
    useEffect(() => {
        (() => {
            getAllProducts()
        })()
    }, [])
    
    return (
        <>
            <Header/>

            <StyledContainerMenu>
                <MenuList/>
            </StyledContainerMenu>
        </>

    )
}