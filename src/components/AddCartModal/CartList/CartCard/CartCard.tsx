import { StyledTitle } from "../../../../styles/Typography";
import trashIcon from "../../../../assets/trashIcon.svg"
import { iProductsCart, iProductsList, UserContext } from "../../../../contexts/UserContext";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";

interface iCartCardProps {
    product: iProductsCart;
    name: string;
    img: string;
}

export function CartCard ({ product, name, img} : iCartCardProps) {
    const { productsCartList, setProductsCartList } = useContext(UserContext)
    const { addProductCart, subProductCart } = useContext(CartContext)
    
    function removeProduct () {
        if (product) {
            const updatedProducts = productsCartList.filter((element) => element != product)
            setProductsCartList(updatedProducts)
        }
    }
    
    return (
        <li>
            <figure>
                <img src={img} alt="" />
            </figure>
            <div>
                <div>
                    <StyledTitle tag="h3">{name}</StyledTitle>
                    <img onClick={removeProduct} src={trashIcon} alt={`Remover ${name}`} />
                </div>
                <span onClick={() => subProductCart(product)}>-</span>
                <small>{product?.units}</small>
                <span onClick={() => addProductCart(product)}>+</span>
            </div>
        </li>
    )
}