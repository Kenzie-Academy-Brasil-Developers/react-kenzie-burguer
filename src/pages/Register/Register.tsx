import { Link } from "react-router-dom";
import { Slogan } from "../../components/Slogan/Slogan";
import { StyledContainerForm } from "../../styles/Container";
import { StyledSectionForm } from "../../styles/Section";
import { StyledTitle } from "../../styles/Typography";
import { FormRegister } from "./FormRegister/FormRegister";

export function Register () {
    return (
        <StyledContainerForm className="layout">
            <Slogan/>

            <StyledSectionForm>
                <div>
                    <StyledTitle tag="h3">Cadastro</StyledTitle>
                    <Link to={'/'}>Retornar para o login</Link>
                </div>

                <FormRegister/>
            </StyledSectionForm>            
        </StyledContainerForm>
    )
}