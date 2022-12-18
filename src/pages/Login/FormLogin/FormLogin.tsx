import { StyledForm } from "../../../styles/Form";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from "react";

type FormData = {
    email: string;
    password: string;
  };

export function FormLogin () {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()
    const { login } = useContext(UserContext)

    const submitLogin : SubmitHandler<FormData> = async (data) => {
        await login(data)
    }

    
    return (
        <StyledForm onSubmit={handleSubmit(submitLogin)} noValidate>
            <label htmlFor="emailLogin">Nome</label>
            <input type="email" id="emailLogin" placeholder="Digite seu email..." {...register('email')}/>

            <label htmlFor="passwordLogin">Senha</label>
            <input type="password" id="passwordLogin" placeholder="Digite sua senha..." {...register('password')}/>

            <button type="submit">Logar</button>
        </StyledForm>
    )
}