import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { api } from "../services/api";
import { AxiosError } from "axios";

export interface iProvidersChildrenProps {
    children: React.ReactNode;
}

export interface iProductsList {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
}

interface iUserContextValue {
    productsList: iProductsList[];
    loadingLogin: boolean;
    getAllProducts: () => void; 
    loginUser: (body: iPostRequestBody) => void;
    registerUser: (body: iPostRequestBody) => void;
}

export interface iPostRequestBody {
    name?: string;
    email: string;
    password: string;
}

interface iCatchError {
    error: string;
}

export const UserContext = createContext({} as iUserContextValue)

export function UserProvider ({ children } : iProvidersChildrenProps) {
    const [ productsList, setProductsList ] = useState([] as iProductsList[])
    const [ loadingLogin, setLoadingLogin ] = useState(false)
    const navigate = useNavigate()
    
    async function loginUser (body: iPostRequestBody) {
        try {
            setLoadingLogin(true)
            const response = await api.post('login', body)
            
            localStorage.setItem('userToken', response.data.accessToken)
            toast.success('Login efetuado');
            
            setTimeout(() => {
                navigate('/menu')
            }, 1500)

            
        } catch (error) {
            setLoadingLogin(true)
            const Error = error as AxiosError<iCatchError>
            console.log(Error.response?.data)

        } finally {
            setLoadingLogin(false)
        }
    }
    
    async function registerUser (body: iPostRequestBody) {
        try {
            const response = await api.post('users', body)
            toast.success('Cadastro Realizado')

            localStorage.setItem('userToken', response.data.accessToken)
            
            setTimeout(() => {
                navigate('/menu')
            }, 1500)
            
        } catch (error) {
            const Error = error as AxiosError<iCatchError>
            console.log(Error.response?.data)
        }
    }
    
    async function getAllProducts () {
        try {
            const userToken = localStorage.getItem('userToken')
            api.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
            const response = await api.get('products')

            setProductsList(response.data)

        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <UserContext.Provider value={{ getAllProducts, productsList, loadingLogin, loginUser, registerUser }}>
            {children}
        </UserContext.Provider>
    )
}