import { StyledContainerDashboard } from "../../styles/Container";

export function Login () {
    return (
        <StyledContainerDashboard>
            <section>
                <h3>Login</h3>
                <form>
                    <label htmlFor="userNameLogin">Nome</label>
                    <input type="text" id="userNameLogin" placeholder="Digite seu nome..."/>

                    <label htmlFor="passwordLogin">Senha</label>
                    <input type="password" id="passwordLogin" />

                    <button type="submit">Logar</button>
                </form>
                <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
                <button type="button">Cadastrar</button>
            </section>

            <section>
                <h1>Burguer <small>Kenzie</small></h1>
                <div>
                    <figure>
                        <img src="" alt="" />
                    </figure>

                    <p>A vida é como um sanduíche, é preciso recheá-la com os <strong>melhores</strong> ingredientes.</p>
                </div>
                <img src="/src/assets/dots.svg" alt="" />
            </section>
        </StyledContainerDashboard>
    )
}