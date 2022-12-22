import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { iProductsCart } from "../../../../contexts/UserContext";
import { StyledMenuCard } from "./StyledMenuCard";

interface iMenuCardProps {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
    product: iProductsCart;
}

export function MenuCard({ product, name, category, price, img } : iMenuCardProps) {
    const { addProductCart } = useContext(CartContext)
    
    return (
        <StyledMenuCard>
            <figure>
                <img src={img} alt={`Imagem do ${name}`} />
            </figure>
            <div>
                <h2>{name}</h2>
                <span>{category}</span>
                <small>R$ {price.toFixed(2)}</small>
                <button onClick={() => addProductCart(product)}>Adicionar</button>
            </div>
        </StyledMenuCard>
    )
}