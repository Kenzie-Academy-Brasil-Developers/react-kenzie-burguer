import { useContext, useEffect } from "react";
import {  UserContext } from "../../../contexts/UserContext";
import { MenuCard } from "./MenuCard";
import { StyledMenuList } from "./StyledMenuList";

export function MenuList() {
  const { productsList } = useContext(UserContext)

  return (
    <StyledMenuList>
      {productsList.map((product) => 
        <MenuCard 
          key =      {product.id}
          id =       {product.id}
          name =     {product.name}
          category = {product.category}
          price =    {product.price}
          img =      {product.img}
        />
      )}
    </StyledMenuList>
  )
}