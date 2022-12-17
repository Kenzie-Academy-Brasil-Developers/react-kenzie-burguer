import { StyledForm } from "../../../styles/Form";

export function FormRegister () {
    return (
        <StyledForm>
            <label htmlFor="userNameRegister">Nome</label>
            <input type="text" id="userNameRegister" placeholder="Digite seu nome..."/>
            
            <label htmlFor="emailRegister">E-mail</label>
            <input type="email" id="emailRegister" placeholder="Digite seu email..."/>

            <label htmlFor="passwordRegister">Senha</label>
            <input type="password" id="passwordRegister" placeholder="Digite sua senha..."/>

            <label htmlFor="passwordConfirmationRegister">Confirmar Senha</label>
            <input type="password" id="passwordConfirmationRegister" placeholder="Confirme sua senha..."/>

            <button type="submit">Cadastrar</button>
        </StyledForm>
    )
}