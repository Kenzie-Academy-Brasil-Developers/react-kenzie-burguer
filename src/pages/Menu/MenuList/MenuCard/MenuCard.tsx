import { StyledMenuCard } from "./StyledMenuCard";

export function MenuCard() {

    return (
        <StyledMenuCard>
            <figure>
                <img src="" alt={`Imagem do ${''}`} />
            </figure>
            <div>
                <h2></h2>
                <span></span>
                <small>R$ </small>
                <button>Adicionar</button>
            </div>
        </StyledMenuCard>
    )
}