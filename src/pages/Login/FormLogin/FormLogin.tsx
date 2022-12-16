import { StyledForm } from "../../../styles/Form";

export function FormLogin () {
    return (
        <StyledForm>
            <label htmlFor="userNameLogin">Nome</label>
            <input type="text" id="userNameLogin" placeholder="Digite seu nome..."/>

            <label htmlFor="passwordLogin">Senha</label>
            <input type="password" id="passwordLogin" placeholder="Digite sua senha..."/>

            <button type="submit">Logar</button>
        </StyledForm>
    )
}