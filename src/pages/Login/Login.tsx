import { Slogan } from "../../components/Slogan/Slogan";
import { StyledContainerDashboard } from "../../styles/Container";
import { StyledSectionForm } from "../../styles/Section";
import { StyledTitle } from "../../styles/Typography";
import { FormLogin } from "./FormLogin";

export function Login () {
    return (
        <StyledContainerDashboard className="layout">
            <StyledSectionForm>
                <StyledTitle tag="h3">Login</StyledTitle>
                
                <FormLogin/>
                
                <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
                <button type="button">Cadastrar</button>
            </StyledSectionForm>

            <Slogan/>
        </StyledContainerDashboard>
    )
}