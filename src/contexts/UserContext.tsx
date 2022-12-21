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

interface iUserProviderValue {
    productsList: iProductsList[];
    loadingLogin: boolean;
    loadingRegister: boolean;
    productsCartList: iProductsList[];
    getAllProducts: () => void; 
    loginUser: (body: iPostRequestBody) => void;
    registerUser: (body: iPostRequestBody) => void;
    navigate: (to: string) => void;
}

export interface iPostRequestBody {
    name?: string;
    email: string;
    password: string;
}

interface iCatchError {
    error: string;
}

export const UserContext = createContext({} as iUserProviderValue)

export function UserProvider ({ children } : iProvidersChildrenProps) {
    const [ productsList, setProductsList ] = useState([] as iProductsList[])
        
    const [ loadingLogin, setLoadingLogin ] = useState(false)
    const [ loadingRegister, setLoadingRegister ] = useState(false)
    const [ productsCartList, setProductsCartList ] = useState([{
        id: 1,
        name: 'Burguer Kenzie',
        category: 'Sanduíche',
        price: 20.00,
        img: "https://i.imgur.com/Vng6VzV.png"
    }] as iProductsList[])
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
            toast.error("Email ou senha incorreta")

        } finally {
            setLoadingLogin(false)
        }
    }
    
    async function registerUser (body: iPostRequestBody) {
        try {
            setLoadingRegister(true)
            const response = await api.post('users', body)
            toast.success('Cadastro Realizado')

            localStorage.setItem('userToken', response.data.accessToken)
            
            setTimeout(() => {
                navigate('/menu')
            }, 1500)
            
        } catch (error) {
            setLoadingRegister(true)
            const Error = error as AxiosError
            
            
            if (Error.response?.data === "Email already exists") {
                toast.error("Este email já existe")
            }
        } finally {
            setLoadingRegister(false)
        }
    }
    
    async function getAllProducts () {
        try {
            const userToken = localStorage.getItem('userToken')
            api.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
            const response = await api.get('products')

            setProductsList(response.data)

        } catch (error) {
            const Error = error as AxiosError
            
            if (Error.response?.data === 'jwt expired') {
                navigate('/')
            }
        }
    }
    
    return (
        <UserContext.Provider value={{ getAllProducts, productsList, loadingLogin, loginUser, registerUser, loadingRegister, navigate, productsCartList }}>
            {children}
        </UserContext.Provider>
    )
}