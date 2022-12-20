import { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { UserContext } from "../../contexts/UserContext";
import { StyledContainerMenu } from "../../styles/Container";
import { MenuList } from "./MenuList";

export function Menu () {
    const { getAllProducts, navigate } = useContext(UserContext)
    
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
        </>

    )
}