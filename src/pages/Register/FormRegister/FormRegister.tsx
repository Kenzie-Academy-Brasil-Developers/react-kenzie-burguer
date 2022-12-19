import { StyledForm } from "../../../styles/Form";
import { useForm, SubmitHandler } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

type FormData = {
    name: string;
    email: string;
    password: string;
    passwordConfirmation?: string;
};

export function FormRegister () {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()
    const { registerUser } = useContext(UserContext)

    const submitRegister : SubmitHandler<FormData> = (data) => {
        const { name, email, password } = data
        
        registerUser({
            "name": name,
            "email": email,
            "password": password
        })
    }
    
    return (
        <StyledForm noValidate onSubmit={handleSubmit(submitRegister)}>
            <label htmlFor="userNameRegister">Nome</label>
            <input type="text" id="userNameRegister" placeholder="Digite seu nome..." {...register('name')}/>
            
            <label htmlFor="emailRegister">E-mail</label>
            <input type="email" id="emailRegister" placeholder="Digite seu email..." {...register('email')}/>

            <label htmlFor="passwordRegister">Senha</label>
            <input type="password" id="passwordRegister" placeholder="Digite sua senha..." {...register('password')}/>

            <label htmlFor="passwordConfirmationRegister">Confirmar Senha</label>
            <input type="password" id="passwordConfirmationRegister" placeholder="Confirme sua senha..." {...register('passwordConfirmation')}/>

            <button type="submit">Cadastrar</button>
        </StyledForm>
    )
}