import { StyledForm } from "../../../styles/Form";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";

type FormData = {
    email: string;
    password: string;
};

export function FormLogin () {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(loginSchema),
        mode: "onBlur"
    })
    const { loginUser, loadingLogin } = useContext(UserContext)

    const submitLogin : SubmitHandler<FormData> = (data) => {
        loginUser(data)
    }

    
    return (
        <StyledForm onSubmit={handleSubmit(submitLogin)} noValidate disabledButton={loadingLogin}>
            <label htmlFor="emailLogin">Nome</label>
            <input type="email" id="emailLogin" placeholder="Digite seu email..." {...register('email')}/>
            {errors.email?.message && <span className="error">{errors.email.message}</span>}

            <label htmlFor="passwordLogin">Senha</label>
            <input type="password" id="passwordLogin" placeholder="Digite sua senha..." {...register('password')}/>
            {errors.password?.message && <span className="error">{errors.password.message}</span>}

            <button type="submit" disabled={loadingLogin}>Logar</button>
        </StyledForm>
    )
}