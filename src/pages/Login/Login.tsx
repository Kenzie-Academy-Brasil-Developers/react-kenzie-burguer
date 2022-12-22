import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Slogan } from "../../components/Slogan/Slogan";
import { StyledContainerForm } from "../../styles/Container";
import { StyledSectionForm } from "../../styles/Section";
import { StyledTitle } from "../../styles/Typography";
import { FormLogin } from "./FormLogin";

export function Login () {
    return (
        <StyledContainerForm className="layout">
            <Toaster />
            
            <StyledSectionForm>
                <StyledTitle tag="h3">Login</StyledTitle>
                
                <FormLogin/>
                
                <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
                <Link to={'/register'}>Cadastre-se</Link>
            </StyledSectionForm>

            <Slogan/>
        </StyledContainerForm>
    )
}