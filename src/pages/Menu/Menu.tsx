import { Header } from "../../components/Header";
import { StyledContainerMenu } from "../../styles/Container";
import { MenuList } from "./MenuList";

export function Menu () {
    return (
        <>
            <Header/>

            <StyledContainerMenu>
                <MenuList/>
            </StyledContainerMenu>
        </>

    )
}