import { StyledSearchDiv } from "./StyledSearch";
import searchIcon from "../../../assets/searchIcon.svg"
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";

export function SearchInput () {
    const [inputValue, setInputValue] = useState('')
    const { setIsSearchActivated, productsList, setFilteredProducts } = useContext(UserContext)

    function filterProducts () {
        if (inputValue) {
            setFilteredProducts(productsList.filter((product) => {
                const byCategory = product.category.toLowerCase().includes(inputValue.toLowerCase())
                const byName = product.name.toLowerCase().includes(inputValue.toLowerCase())

                return byCategory || byName
            }))
        }
    }
    
    return (
        
        <StyledSearchDiv className="flex">
            <input 
                onChange={(event) => {event.target.value ? setInputValue(event.target.value) : setFilteredProducts([])}} 
                onKeyUp={(event) => {event.key == 'Enter' && filterProducts()}} 
                type="text" 
                name="searhItem" 
                id="searhItem" 
                placeholder="Digitar Pesquisar"
            />
            <div>
                <button onClick={filterProducts} className="searchButton" type="button">{window.innerWidth < 690 ? <img className="seachIcon" src={searchIcon} alt="" /> : 'Pesquisar'}</button>
                <span onClick={() => {setIsSearchActivated(false)}}>X</span>
            </div>
        </StyledSearchDiv>
    )
}