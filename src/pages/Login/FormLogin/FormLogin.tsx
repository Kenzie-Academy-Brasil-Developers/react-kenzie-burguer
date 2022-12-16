export function FormLogin () {
    return (
        <form>
            <label htmlFor="userNameLogin">Nome</label>
            <input type="text" id="userNameLogin" placeholder="Digite seu nome..."/>

            <label htmlFor="passwordLogin">Senha</label>
            <input type="password" id="passwordLogin" />

            <button type="submit">Logar</button>
        </form>
    )
}