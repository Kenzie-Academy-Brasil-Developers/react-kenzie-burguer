import { Slogan } from "../../components/Slogan/Slogan";
import { StyledContainerDashboard } from "../../styles/Container";
import { FormLogin } from "./FormLogin";

export function Login () {
    return (
        <StyledContainerDashboard>
            <section>
                <h3>Login</h3>
                
                <FormLogin/>
                
                <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
                <button type="button">Cadastrar</button>
            </section>

            <Slogan/>
        </StyledContainerDashboard>
    )
}