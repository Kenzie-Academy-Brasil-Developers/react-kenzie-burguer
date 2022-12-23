import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { CartCard } from "./CartCard";
import { StyledCartList } from "./StyledCartList";

export function CartList() {
  const { productsCartList } = useContext(UserContext)
  
  return (
    <StyledCartList>
      {productsCartList.map((product) => 
        <CartCard 
          key={product.id}
          name={product.name}
          img={product.img}
          product={product}
        />
      )}
    </StyledCartList>
  );
}
