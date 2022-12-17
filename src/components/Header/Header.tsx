import { StyledContainerMenu } from "../../styles/Container";
import { StyledTitle } from "../../styles/Typography";
import { SearchInput } from "./SearchInput";
import { StyledHeader } from "./StyledHeader";

export function Header () {
    
    return (
        <StyledHeader>
            <StyledContainerMenu className="flex">
                <StyledTitle tag="h1">Burguer <span>Kenzie</span></StyledTitle>

                <SearchInput/>
            </StyledContainerMenu>
        </StyledHeader>
    )
}