import { StyledSearchDiv } from "./StyledSearch";
import searchIcon from "../../../assets/searchIcon.svg"
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

export function SearchInput () {
    const { setIsSearchActivated } = useContext(UserContext)

    return (
        
        <StyledSearchDiv className="flex">
            <input type="text" name="searhItem" id="searhItem" placeholder="Digitar Pesquisar"/>
            <div>
                <button className="searchButton" type="button">{window.innerWidth < 690 ? <img className="seachIcon" src={searchIcon} alt="" /> : 'Pesquisar'}</button>
                <span onClick={() => {setIsSearchActivated(false)}}>X</span>
            </div>
        </StyledSearchDiv>
    )
}