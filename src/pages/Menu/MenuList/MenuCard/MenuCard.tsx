import { iProductsList } from "../../../../contexts/UserContext";
import { StyledMenuCard } from "./StyledMenuCard";
export function MenuCard({ id, name, category, price, img } : iProductsList) {

    return (
        <StyledMenuCard>
            <figure>
                <img src={img} alt={`Imagem do ${name}`} />
            </figure>
            <div>
                <h2>{name}</h2>
                <span>{category}</span>
                <small>R$ {price.toFixed(2)}</small>
                <button>Adicionar</button>
            </div>
        </StyledMenuCard>
    )
}