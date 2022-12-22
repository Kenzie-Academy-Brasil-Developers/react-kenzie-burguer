import { StyledSearchDiv } from "./StyledSearch";

export function SearchInput () {
    
    return (
        <StyledSearchDiv className="flex">
            <input type="text" name="searhItem" id="searhItem" placeholder="Digitar Pesquisar"/>
            <button type="button">Pesquisar</button>
        </StyledSearchDiv>
    )
}