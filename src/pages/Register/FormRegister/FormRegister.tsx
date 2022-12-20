import { StyledForm } from "../../../styles/Form";
import { useForm, SubmitHandler } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "./registerSchema";

type FormData = {
    name: string;
    email: string;
    password: string;
    passwordConfirmation?: string;
};

export function FormRegister () {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(registerSchema),
        mode: 'onBlur'
    })
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
            {errors.name?.message && <span className="error">{errors.name.message}</span>}
            
            <label htmlFor="emailRegister">E-mail</label>
            <input type="email" id="emailRegister" placeholder="Digite seu email..." {...register('email')}/>
            {errors.email?.message && <span className="error">{errors.email.message}</span>}

            <label htmlFor="passwordRegister">Senha</label>
            <input type="password" id="passwordRegister" placeholder="Digite sua senha..." {...register('password')}/>
            {errors.password?.message && <span className="error">{errors.password.message}</span>}

            <label htmlFor="passwordConfirmationRegister">Confirmar Senha</label>
            <input type="password" id="passwordConfirmationRegister" placeholder="Confirme sua senha..." {...register('passwordConfirmation')}/>
            {errors.passwordConfirmation?.message && <span className="error">{errors.passwordConfirmation.message}</span>}

            <button type="submit">Cadastrar</button>
        </StyledForm>
    )
}